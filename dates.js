$(function (){
    $("#bday").change(function() {
        var bday = new Date($("#bday").val());
        var now = new Date();
        var diff = now - bday;
        $("#life_seconds").val( Math.floor(diff / 1000) );
        $("#life_minutes").val( Math.floor(diff / (1000 * 60)) );
        $("#life_hours").val( Math.floor(diff / (1000 * 60 * 60)) );
        $("#life_days").val( Math.floor(diff / (1000 * 60 * 60 * 24)) );
        $("#life_weeks").val( Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) );
        $("#life_months").val( Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)) );
        $("#life_yesrs").val( Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) );
    });
});
