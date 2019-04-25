const should = require("should");
const probablePitchers = require("../");

describe("MLB-get-probable-pitchers", () => {
    it("should return a consistent contract", async () => {
        const json = await probablePitchers.getForDate("2019-04-26");
        json.totalGames.should.equal(15);
        const games = json.games;
        games.length.should.equal(json.totalGames);
        for (let game of games) {
            game.should.have.property("gamePk");
            game.should.have.property("gameDate");
            game.should.have.property("teams");
            for (let team of ["home", "away"]){
                game.should.have.propertyByPath("teams", team);
                game.should.have.propertyByPath("teams", team, "id");
                game.should.have.propertyByPath("teams", team, "name");
                game.should.have.propertyByPath("teams", team, "venue");
                game.should.have.propertyByPath("teams", team, "probablePitcherStatus");
                if (game.teams[team].probablePitcherStatus === "probable") {
                    game.should.have.propertyByPath("teams", team, "probablePitcher");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "id");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "fullName");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "firstName");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "lastName");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "useName");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "boxscoreName");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "stats");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "primaryNumber");
                    game.should.have.propertyByPath("teams", team, "probablePitcher", "birthDate");
                }
                else {
                    game.teams[team].probablePitcherStatus.should.equal("TBD");
                }
            }
        }
    });
});