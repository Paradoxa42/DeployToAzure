const apiUrl = {
    server : 'http://localhost:3000'
}

//apiUrl.server = 'https://legaldekerangal-timothee.azurewebsites.net/'

var tablen = 0;

function printCharacter (character) {
    tablen++;
    var charTab = "<tr><th scope='row'>" + tablen + "</th><td>" + character.name + "</td><td>0</td><td>0</td></tr>"
    $("#characterTable").append(charTab)
}

function printCharacterActivities (character) {

}

function printCharacters (characters) {
    $("#characterTable").empty();
    tablen = 0;
    for(var item in characters) {
        console.log(characters[item]);
        var charTab = "<tr><th scope='row'>" + item + "</th><td>" + characters[item].name + "</td><td>0</td><td>0</td></tr>"
        $("#characterTable").append(charTab)
        tablen = item;
    }
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

function getAllCharacters () {
    const options = {
        url : apiUrl.server + '/api/charactersScore',
    };
    jQuery.get(options,
        function(data) {
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