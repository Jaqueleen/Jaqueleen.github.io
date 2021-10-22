$(document).ready(function(){

    $nav = $(".nav");
    $toggle_collapse = $(".toggle-collapse");

    /** Click event on toggle menu */
    $toggle_collapse.click(function(){
        $nav.toggleClass("collapse");
    })

});