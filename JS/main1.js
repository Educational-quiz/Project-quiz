

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
var i = 1
function submitSwitch() {
    var arr = $('.subjects')

    if (i < arr.length && $(this).parent().attr('id') !== (arr[i].id)) {

        $('.' + arr[i].id).click()

    }


    else $('.popup').fadeIn('slow')

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
    console.log(subID)
    if ($('#' + subID + ' .box:checked').length === 4) {
        $('#' + subID2 + 'Sub').attr('disabled', false)
    }


})



