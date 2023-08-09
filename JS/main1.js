

$('.subjects').hide()

$('.tablinks').on('click', function(){
var pageName = $(this).text()

$('.subjects').hide()

$('#'+pageName).show()



})