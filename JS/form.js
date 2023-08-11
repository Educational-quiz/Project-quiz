
var mathCount = 0
var englishCount = 0
var geographyCount = 0
var scienceCount = 0
var historyCount = 0

$('.subjects').hide()

function defaultClick() {
    $('#M').click()

}


$(document).ready(defaultClick)


function clickTab() {
    var pageName = $(this).text()

    $('.subjects').hide()

    $('#' + pageName).show()


}


$('.tablinks').on('click', clickTab)


function checkLimit() {

    var list = ($(this).parent())
    var z = (list.parent())
    var e = z.parent().attr('id')


    $('#' + e + ' .box').not(this).prop('checked', false);


}


$('.subjects .questions').on('click', '.box', checkLimit)

$('.popup').hide()

var users = getLocalStorageItem("users") || []
function getLocalStorageItem(key) {
    return JSON.parse(localStorage.getItem(key));
}




var bigTotal = 0
var i = 1
function submitSwitch() {
    var arr = $('.subjects')
    var ID = getLocalStorageItem('currentUser')


    if (i < arr.length && $(this).parent().attr('id') !== (arr[i].id)) {

        $('.' + arr[i].id).click()

    }


    else {
        $('.popup').fadeIn('slow')


        users[ID].historyScore = historyCount + '/40'
        users[ID].mathScore = mathCount + '/40'
        users[ID].englishScore = englishCount + '/40'
        users[ID].geographyScore = geographyCount + '/40'
        users[ID].scienceScore = scienceCount + '/40'
        
        var total = ((((mathCount + englishCount + geographyCount + scienceCount + historyCount) / 200) * 100).toFixed(2))*1;



        if (bigTotal < total) {
            bigTotal = total
        }

        if (bigTotal > users[ID].totalScore) {
            users[ID].totalScore = bigTotal

        }

        var json = JSON.stringify(users);
        window.localStorage.setItem("users", json);

        console.log(users[ID].historyScore)





        $('.popup-content').append('<ul><li> Math: ' + users[ID].mathScore + '</li><li> English: ' + users[ID].englishScore + '</li><li> Geography: ' + users[ID].geographyScore + '</li><li> Science: ' + users[ID].scienceScore + '</li><li> History: ' + users[ID].historyScore + '</li><li> Your Total: ' + total + '%')



        console.log(mathCount)



    }

    i++

}


$('.tabcontent').on('click', '.subButton', submitSwitch)

function disableSelected() {
    $(this).attr('disabled', true)

    $(this).css('background-color', '#f9e7e7')


}


$('.tablinks').on('click', disableSelected)

$('.subButton').attr('disabled', true)
$('.subButton').css('cursor', 'not-allowed')


$('.subjects').on('click', '.box', function checkChecks() {
    var subID = ($(this).closest('div').attr('id'))
    var subID2 = subID.toLowerCase()
    if ($('#' + subID + ' .box:checked').length === 4) {
        $('#' + subID2 + 'Sub').attr('disabled', false)
        $('#' + subID2 + 'Sub').css('cursor', 'pointer')
        $('#' + subID2 + 'Sub').hover(function(){
            $(this).css("background-color", "#f74065");
            }, function(){
            $(this).css("background-color", "pink");
          });
        



    }


})


function forLoop(checks, count) {

    for (var i = checks; i > 0; i--) {
        count = count + 10
    }

    return count
}


$('.subjects').on('click', '.subButton', function () {
    var mathChecks = $('.math-correct').filter(':checked').length
    var englishChecks = $('.english-correct').filter(':checked').length
    var geographyChecks = $('.geography-correct').filter(':checked').length
    var scienceChecks = $('.science-correct').filter(':checked').length
    var historyChecks = $('.history-correct').filter(':checked').length


    if ($(this).attr('id') === 'mathSub') {
        mathCount = forLoop(mathChecks, mathCount)
    }
    if ($(this).attr('id') === 'englishSub') {
        englishCount = forLoop(englishChecks, englishCount)
    }
    if ($(this).attr('id') === 'geographySub') {
        geographyCount = forLoop(geographyChecks, geographyCount)
    }
    if ($(this).attr('id') === 'scienceSub') {
        scienceCount = forLoop(scienceChecks, scienceCount)
    }
    if ($(this).attr('id') === 'historySub') {
        historyCount = forLoop(historyChecks, historyCount)
    }

    console.log(mathCount, englishCount, geographyCount, scienceCount, historyCount)




})





function setLocalStorageItem(key, value) {
    //store the value in the local storage from a specific key
    localStorage.setItem(key, JSON.stringify(value)); //use JSON method to convert the value as on object to a string
}


