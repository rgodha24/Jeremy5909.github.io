$(document).ready(function() {

    $(".topnav a").click(function(){
        $(".topnav a.active").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".toggle-Dark").click(function(){
        $(document.body).toggleClass('dark-mode');
    });
});