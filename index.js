const moment = require("moment");
const requestPromise = require("request-promise");
const invalidDateError = new Error("Invalid date format. Use YYYY-MM-DD");

class ProbablePitchers {
    static async getForDate(date) {
        const scheduleDate = moment(date);
        const dateString = scheduleDate.format("YYYY-MM-DD");
        const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1,51&date=${dateString}&language=en&hydrate=team(league),venue(location,timezone),linescore(matchup,runners,positions),decisions,homeRuns,probablePitcher,flags,review,seriesStatus,person,stats,broadcasts(all),game(tickets,atBatPromotions,content(media(epg),highlights(highlights),limit%3D4)),liveLookin`;
        const scheduleJSON = await requestPromise({
            url,
            json: true
        });

        const contractJSON = ProbablePitchers._contract(scheduleJSON);
        return contractJSON;
    }

    static _contract(scheduleJSON) {
        const contractJSON = {};
        contractJSON.totalGames = scheduleJSON.totalGames;
        contractJSON.games = scheduleJSON.dates[0].games.map(game => {
            const contractGame = {};
            ProbablePitchers._copyKeys(game, contractGame, ["gamePk", "gameDate"]);
            contractGame.teams = {};
            for (let team of ["home", "away"]) {
                contractGame.teams[team] = {};
                ProbablePitchers._copyKeys(game.teams[team], contractGame.teams[team], ["abbreviation", "teamName", "id", "name", "venue"]);
                contractGame.teams[team].probablePitcher = {};
                if ( game.teams[team].probablePitcher == undefined){
                    contractGame.teams[team].probablePitcherStatus = "TBD";
                }
                else {
                    contractGame.teams[team].probablePitcherStatus = "probable";
                    ProbablePitchers._copyKeys(game.teams[team].probablePitcher, contractGame.teams[team].probablePitcher, ["id", "fullName", "firstName", "lastName","useName","boxscoreName","stats","primaryNumber","birthDate"]);
                }
            }
            return contractGame;
        });

        return contractJSON;
    }

    static _copyKeys(source, destination, keys) {
        for (let key of keys) {
            destination[key] = source[key];
        }
    }
}

module.exports = ProbablePitchers;