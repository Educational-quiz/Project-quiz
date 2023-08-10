
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
var users = getLocalStorageItem("users") || []

function updateLocalStorageItem(key, property, value){

    var obj = getLocalStorageItem(key)
    obj[property]=value;
    setLocalStorageItem(key,obj)
}

var i = 1
function submitSwitch() {
    var arr = $('.subjects')
    var ID = getLocalStorageItem('currentUser')

    if (i < arr.length && $(this).parent().attr('id') !== (arr[i].id)) {

        $('.' + arr[i].id).click()

    }


    else {
        $('.popup').fadeIn('slow')

        users[ID].mathScore = mathCount+'/40'
        users[ID].englishScore = englishCount+'/40'
        users[ID].geographyScore = geographyCount+'/40'
        users[ID].scienceScore = scienceCount+'/40'
        users[ID].historyScore = historyCount+'/40'
        var total= (mathCount + englishCount + geographyCount + scienceCount + historyCount*200)/100
        users[ID].totalScore = total

        var json = JSON.stringify(users);
        window.localStorage.setItem("users", json);

         

        $('.popup-content').append('<ul><li> Math: '+users[ID].mathScore+'</li><li> English: '+users[ID].englishScore+'</li><li> Geography: '+users[ID].geographyScore+'</li><li> Science: '+users[ID].scienceScore+'</li><li> History: '+users[ID].historyScore+'</li><li> Your Total: '+users[ID].totalScore+'%')


        console.log(mathCount)



    }

    i++

}


$('.subjects').on('click', '.subButton', submitSwitch)

function disableSelected() {
    $(this).attr('disabled', true)
}


$('.tablinks').on('click', disableSelected)

$('.subButton').attr('disabled', true)


$('.subjects').on('click', '.box', function checkChecks() {
    var subID = ($(this).parent().parent().parent().parent().parent().attr('id'))
    subID2 = subID.toLowerCase()
    if ($('#' + subID + ' .box:checked').length === 4) {
        $('#' + subID2 + 'Sub').attr('disabled', false)
    }


})




$('.subjects').on('click', '.box', function () {


    if ($(this).attr('class') === 'box math-correct') {
        mathCount = mathCount + 10
    }
    if ($(this).attr('class') === 'box english-correct') {
        englishCount = englishCount + 10
    }
    if ($(this).attr('class') === 'box geography-correct') {
        geographyCount = geographyCount + 10
    }
    if ($(this).attr('class') === 'box science-correct') {
        scienceCount = scienceCount + 10
    }
    if ($(this).attr('class') === 'box history-correct') {
        historyCount = historyCount + 10
    }

    console.log(mathCount, englishCount, geographyCount, scienceCount, historyCount)


})





function setLocalStorageItem(key, value) {
    //store the value in the local storage from a specific key
    localStorage.setItem(key, JSON.stringify(value)); //use JSON method to convert the value as on object to a string
}


