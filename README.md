# mlb-get-probable-pitchers
Provides probable pitchers for a given day, via MLB's JavaScript API.

### Install it:
```
  npm install --save mlb-get-probable-pitchers
```

### Use it:
```
  const probablePitchers = require("mlb-get-probable-pitchers");
  probablePitchers.getForDate("2019-04-26").then(pitcherJSON => {
    …
  });

```

### Sample response:
```json
{
    "totalGames": 15,
    "games": [
        {
            "gamePk": 565906,
            "gameDate": "2019-04-26T23:05:00Z",
            "teams": {
                "home": {
                    "probablePitcher": {
                        "id": 453286,
                        "fullName": "Max Scherzer",
                        "firstName": "Maxwell",
                        "lastName": "Scherzer",
                        "useName": "Max",
                        "boxscoreName": "Scherzer",
                        "stats": [
                            {
                                "type": {
                                    "displayName": "gameLog"
                                },
                                "group": {
                                    "displayName": "hitting"
                                },
                                "exemptions": [],
                                "stats": {}
                            },
                            {
                                "type": {
                                    "displayName": "gameLog"
                                },
                                "group": {
                                    "displayName": "pitching"
                                },
                                "exemptions": [],
                                "stats": {}
                            },
                            {
                                "type": {
                                    "displayName": "statsSingleSeason"
                                },
                                "group": {
                                    "displayName": "hitting"
                                },
                                "exemptions": [],
                                "stats": {
                                    "gamesPlayed": 5,
                                    "flyOuts": 0,
                                    "groundOuts": 4,
                                    "runs": 1,
                                    "doubles": 0,
                                    "triples": 0,
                                    "homeRuns": 0,
                                    "strikeOuts": 6,
                                    "baseOnBalls": 0,
                                    "intentionalWalks": 0,
                                    "hits": 2,
                                    "hitByPitch": 0,
                                    "avg": ".143",
                                    "atBats": 14,
                                    "obp": ".143",
                                    "slg": ".143",
                                    "ops": ".286",
                                    "caughtStealing": 0,
                                    "stolenBases": 0,
                                    "stolenBasePercentage": ".---",
                                    "groundIntoDoublePlay": 1,
                                    "groundIntoTriplePlay": 0,
                                    "totalBases": 2,
                                    "rbi": 1,
                                    "leftOnBase": 7,
                                    "sacBunts": 0,
                                    "sacFlies": 0,
                                    "catchersInterference": 0,
                                    "pickoffs": 0
                                }
                            },
                            {
                                "type": {
                                    "displayName": "statsSingleSeason"
                                },
                                "group": {
                                    "displayName": "pitching"
                                },
                                "exemptions": [],
                                "stats": {
                                    "gamesPlayed": 5,
                                    "gamesStarted": 5,
                                    "groundOuts": 27,
                                    "runs": 18,
                                    "doubles": 12,
                                    "triples": 0,
                                    "homeRuns": 3,
                                    "strikeOuts": 44,
                                    "baseOnBalls": 5,
                                    "intentionalWalks": 1,
                                    "hits": 35,
                                    "atBats": 128,
                                    "caughtStealing": 0,
                                    "stolenBases": 2,
                                    "stolenBasePercentage": "1.000",
                                    "era": "4.45",
                                    "inningsPitched": "32.1",
                                    "wins": 1,
                                    "losses": 3,
                                    "saves": 0,
                                    "saveOpportunities": 0,
                                    "holds": 0,
                                    "blownSaves": 0,
                                    "earnedRuns": 16,
                                    "whip": "1.24",
                                    "outs": 97,
                                    "gamesPitched": 5,
                                    "completeGames": 0,
                                    "shutouts": 0,
                                    "hitBatsmen": 2,
                                    "wildPitches": 0,
                                    "pickoffs": 0,
                                    "airOuts": 22,
                                    "rbi": 0,
                                    "winPercentage": ".250",
                                    "gamesFinished": 0,
                                    "strikeoutWalkRatio": "8.80",
                                    "strikeoutsPer9Inn": "12.25",
                                    "walksPer9Inn": "1.39",
                                    "hitsPer9Inn": "9.74",
                                    "inheritedRunners": 0,
                                    "inheritedRunnersScored": 0,
                                    "catchersInterference": 0,
                                    "sacBunts": 0,
                                    "sacFlies": 0
                                }
                            }
                        ],
                        "primaryNumber": "31",
                        "birthDate": "1984-07-27"
                    },
                    "probablePitcherStatus": "probable"
                },
                "away": {
                    "probablePitcher": {
                        "id": 621381,
                        "fullName": "Matt Strahm",
                        "firstName": "Matthew",
                        "lastName": "Strahm",
                        "useName": "Matt",
                        "boxscoreName": "Strahm",
                        "stats": [
                            {
                                "type": {
                                    "displayName": "gameLog"
                                },
                                "group": {
                                    "displayName": "hitting"
                                },
                                "exemptions": [],
                                "stats": {}
                            },
                            {
                                "type": {
                                    "displayName": "gameLog"
                                },
                                "group": {
                                    "displayName": "pitching"
                                },
                                "exemptions": [],
                                "stats": {}
                            },
                            {
                                "type": {
                                    "displayName": "statsSingleSeason"
                                },
                                "group": {
                                    "displayName": "hitting"
                                },
                                "exemptions": [],
                                "stats": {
                                    "gamesPlayed": 4,
                                    "flyOuts": 0,
                                    "groundOuts": 0,
                                    "runs": 0,
                                    "doubles": 1,
                                    "triples": 0,
                                    "homeRuns": 0,
                                    "strikeOuts": 4,
                                    "baseOnBalls": 0,
                                    "intentionalWalks": 0,
                                    "hits": 2,
                                    "hitByPitch": 0,
                                    "avg": ".333",
                                    "atBats": 6,
                                    "obp": ".333",
                                    "slg": ".500",
                                    "ops": ".833",
                                    "caughtStealing": 0,
                                    "stolenBases": 0,
                                    "stolenBasePercentage": ".---",
                                    "groundIntoDoublePlay": 0,
                                    "groundIntoTriplePlay": 0,
                                    "totalBases": 3,
                                    "rbi": 0,
                                    "leftOnBase": 2,
                                    "sacBunts": 0,
                                    "sacFlies": 0,
                                    "catchersInterference": 0,
                                    "pickoffs": 0
                                }
                            },
                            {
                                "type": {
                                    "displayName": "statsSingleSeason"
                                },
                                "group": {
                                    "displayName": "pitching"
                                },
                                "exemptions": [],
                                "stats": {
                                    "gamesPlayed": 4,
                                    "gamesStarted": 4,
                                    "groundOuts": 16,
                                    "runs": 8,
                                    "doubles": 8,
                                    "triples": 0,
                                    "homeRuns": 2,
                                    "strikeOuts": 13,
                                    "baseOnBalls": 5,
                                    "intentionalWalks": 0,
                                    "hits": 19,
                                    "atBats": 78,
                                    "caughtStealing": 1,
                                    "stolenBases": 1,
                                    "stolenBasePercentage": ".500",
                                    "era": "3.05",
                                    "inningsPitched": "20.2",
                                    "wins": 0,
                                    "losses": 2,
                                    "saves": 0,
                                    "saveOpportunities": 0,
                                    "holds": 0,
                                    "blownSaves": 0,
                                    "earnedRuns": 7,
                                    "whip": "1.16",
                                    "outs": 62,
                                    "gamesPitched": 4,
                                    "completeGames": 0,
                                    "shutouts": 0,
                                    "hitBatsmen": 1,
                                    "wildPitches": 1,
                                    "pickoffs": 0,
                                    "airOuts": 31,
                                    "rbi": 0,
                                    "winPercentage": ".000",
                                    "gamesFinished": 0,
                                    "strikeoutWalkRatio": "2.60",
                                    "strikeoutsPer9Inn": "5.66",
                                    "walksPer9Inn": "2.18",
                                    "hitsPer9Inn": "8.27",
                                    "inheritedRunners": 0,
                                    "inheritedRunnersScored": 0,
                                    "catchersInterference": 0,
                                    "sacBunts": 0,
                                    "sacFlies": 1
                                }
                            }
                        ],
                        "primaryNumber": "55",
                        "birthDate": "1991-11-12"
                    },
                    "probablePitcherStatus": "probable"
                }
            }
        },
        /* trimmed for brevity
    ]
}
```
