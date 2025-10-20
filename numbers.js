$(function (){
	$("#clear").click(function() { 
		$("#nro_number").val("");
		clear();
	});

	$("#backspace").click(function() { 
		let val = $("#nro_number").val();
		$("#nro_number").val( val.substring(0, val.length - 1) );

		let base = getBase();
		if ( $("#nro_number").val() != "" ) {
			let number = parseInt( $("#nro_number").val(), base );
			convertNumber(number);
		} else {
			clear();
		}
	});
	
	$(".number").click(function() { 
		$("#nro_number").val( $("#nro_number").val() + this.id );

		let base = getBase();
		let number = parseInt( $("#nro_number").val(), base );
		convertNumber(number);
	});

	$(".base").click(function() { 
		$(".base").removeClass("activebase");
		$(this).addClass("activebase");

		$(".number").prop("disabled", true);
		$("." + this.id).prop("disabled", false);

		if ( $("#nro_number").val() != "" ) {
			let number = $("#" + this.id + "_number").val();
			$("#nro_number").val(number);
		}
	});
});

function clear() {
	$("#hex_number, #dec_number, #oct_number, #bin_number").val("");
}

function getBase() {
	let base;
	switch($(".activebase").attr("id")) {
		case "hex": base = 16; break;
		case "dec": base = 10; break;
		case "oct": base = 8; break;
		case "bin": base = 2; break;
	}
	return base;
}

function convertNumber(number) {
	$("#hex_number").val( number.toString(16).toUpperCase() );
	$("#dec_number").val( number.toString(10) );
	$("#oct_number").val( number.toString(8) );
	$("#bin_number").val( number.toString(2) );
}
