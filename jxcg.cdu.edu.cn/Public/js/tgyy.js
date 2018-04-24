function showNav(id){
    if($('#text_tgyy_'+id+'_div').css('display') == 'none'){
        $('#text_tgyy_'+id+'_div').show(600);
        $(this).css("background","#F1807B");
		$('#text_tgyy_right_'+id).addClass("before_t");    
    }else{
        $('#text_tgyy_'+id+'_div').hide(400);
        $(this).css("background","#B5B5B6");  
        $('#text_tgyy_right_'+id).removeClass("before_t");        
    }
}