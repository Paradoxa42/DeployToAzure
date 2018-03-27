const apiUrl = {
    server : 'http://localhost:3000'
}

apiUrl.server = 'https://legaldekerangal-timothee.azurewebsites.net/'

var tablen = 0;
var activities = [];
var characters = [];

function printCharacter (character) {
    tablen++;
    var charTab = "<tr><th scope='row'>" + tablen + "</th><td>" + character.name + "</td><td>0</td><td><i class='fas fa-times' onclick='deleteCharacter(\"" + character._id + "\")'></i></td></tr>"
    $("#characterTable").append(charTab)
}

function printCharacterActivities (character) {

}

function deleteCharacter (id) {
    const options = {
        url : apiUrl.server + '/api/character/'+id,
        type : 'DELETE',
        success : function(data) {
            characters.splice(characters.indexOf(characters.find(function(element){
                return data.idChar == element._id;
                        }
                    )
                )
            );
            printCharacters(characters);
        },
    }
    jQuery.ajax(options);
}

function printCharacters (characters) {
    $("#characterTable").empty();
    tablen = 0;
    for(var item in characters) {
        console.log(characters[item]);
        var charTab = "<tr><th scope='row'>" + item + "</th><td>" + characters[item].name + "</td><td>0</td><td><i class='fas fa-times' onclick='deleteCharacter(\"" + characters[item]._id + "\")'></i></td></tr>"
        $("#characterTable").append(charTab)
        tablen = item;
    }
}

function getActivitiesModel () {
    const options = {
        url : apiUrl.server + '/api/activityModel'
    };
    jQuery.get(options, function(data) {
        for (char in characters) {
            for (item in data) {
            if (data[item].idChar == characters[char]._id) {
                var act = activities.find(function(element) {
                    return data[item].idActivity == element._id
                    
                });
                characters[char].activities.append(act);
            }
        }
    }
    });
}

function getCharactersActivities (id) {
    const options = {
        url : apiUrl.server + '/api/activity/' + id,
        method : 'GET',
    };
    jQuery.get(options,
        function(data) {
          printCharacter(data);
    });
}

function  getActivities () {
    const options = {
        url : apiUrl.server + '/api/activity',
        method : 'GET',
    };
    jQuery.get(options, function(data) {
        activities = data;
    });
}

function getAllCharacters () {
    const options = {
        url : apiUrl.server + '/api/charactersScore',
    };
    jQuery.get(options,
        function(data) {
            for (item in data) {
                data[item].activities = [];
                data[item].score = {total : 0, month : 0};
            }
            characters = data;
          printCharacters(data);
    });
}

function AddCharacter() {
    console.log("Lol");
    var name = $("#inputCharacterName").val();
    if (!name) 
        return;
    const options = {
        url : apiUrl.server + '/api/character',
        data : { 'name' : name },
    };
    jQuery.post(options, function(data) {
        console.log(data.data);
        printCharacter(data.data);
    })
}

function initTableFront() {
    console.log("Lol");
    $('#inputCharacterSubmit').click(AddCharacter);
}

initTableFront();
getAllCharacters();
