$(function (){
    $("#show_guide").click(function() {
		$("#div_guide").fadeToggle(500);
	});

    $(document).mouseup(function(e) {
        const guide = $("#div_guide");
        if (!guide.is(e.target) && guide.has(e.target).length === 0) {
            guide.fadeOut(500);
        }
    });
});
