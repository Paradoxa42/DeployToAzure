
db.dropDatabase();

db.character.save(
    [
        {name:"Evhy"},
        {name:"Nodus"},
        {name:"Nemara"},
        {name:"Frishka"},
        {name:"Pusu"},
        {name:"Frayh"},
        {name:"Kanuf"}
    ]
);

db.activityModel.save(
    [
        {name:"Give a component", dkpEarning:5},
        {name:"Participating to a raid", dkpEarning:10},
        {name:"Killing a boss", dkpEarning:10},
        {name:"Being rude", dkpEarning:-5},
        {name:"Being nice", dkpEarning:1},
    ]
);

db.activity.save(
    [
        {idChar:0, idActivity:0,date:Date()},
        {idChar:0, idActivity:0,date:Date()},
        {idChar:1, idActivity:0,date:Date()},
        {idChar:1, idActivity:0,date:Date()},
        {idChar:2, idActivity:0,date:Date()},
        {idChar:2, idActivity:0,date:Date()},
        {idChar:3, idActivity:0,date:Date()},
        {idChar:3, idActivity:0,date:Date()},
        {idChar:4, idActivity:0,date:Date()},
        {idChar:4, idActivity:0,date:Date()},
    ]
);