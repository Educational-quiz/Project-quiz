

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


var i=1
$('.subjects').on('click', '.subButton', function (){
    var arr= $('.subjects')

    	if ( i<arr.length&&$(this).parent().attr('id')!==(arr[i].id)){  

            $('.'+arr[i].id).click()
            
}      
   
        
 else  	window.location.replace("Home.html")
   
   i++
        
    })




    $('.tablinks').on('click', function(){
        $(this).attr('disabled', true)
    })
    

function checkChecks () {

    if ($('.box:checked').length<4){
        $('subButton').attr('disabled',true)
    }
}


$('.subjects').on('click','tablinks',checkChecks)