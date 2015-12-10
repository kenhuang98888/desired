$( document ).ready(function() {
    $('li a').on("click", function(){
        $('li').removeClass("active");
        $(this).parent().addClass("active");
        if ($(this).text()=="Third Item"){
            $('.users').show();
            $('#tab-content').hide();
        } else {
            $('.users').hide();
            $('#tab-content').html($(this).html() + "'s content here")
            $('#tab-content').show();
        }
    });
    $("#tab3").trigger("click");
});

