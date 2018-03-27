const apiUrl = {
    server : 'http://localhost:3000'
}

//apiUrl.server = 'https://legaldekerangal-timothee.azurewebsites.net/'

var tablen = 0;
var activities = [];
var arr = document.URL.match(/id=([0-9]+)/)
var idCharacter = arr[1];


function  getActivities () {
    const options = {
        url : apiUrl.server + '/api/activityModel',
        method : 'GET',
    };
    jQuery.get(options, function(data) {
        activities = data;
    });
}

function getCharacterActivities() {
    const options = {
        url : apiUrl.server + '/activity/' + idCharacter
    }
}

function initTableFront() {
    $('#inputCharacterSubmit').click(AddCharacter);
}

initTableFront();
getActivities();
