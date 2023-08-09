

$('.subjects').hide()

$('.tablinks').on('click', function(){
var pageName = $(this).text()

$('.subjects').hide()

$('#'+pageName).show()


})


$('.subjects .questions').on('click','.box', function() {
  
    var list=($(this).parent())
var z=(list.parent())
    var e=z.parent().attr('id')


    $('#'+e+' .box').not(this).prop('checked', false);
})


//$(this).attr('disabled', true)

//$('.box').on('click', function () {

//var list=($(this).parent())
//var z=  (list.parent())
 //console.log(z.parent().attr('id'))

// })