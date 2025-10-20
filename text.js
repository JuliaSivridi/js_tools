$(function (){
	$("#txt_process").val("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl tortor? Morbi vel nisi efficitur; tristique mi in, finibus augue. Nullam sit amet felis magna! 123 Cras et leo eros.	Orci (varius) natoque penatibus et magnis dis parturient montes, nascetur rid`iculus &mus. Praesent vulputate9 \"nunc nec\" ultrices porttitor. Quisque nisi tortor: tristique at tortor a, finibus {dapibus} sapien|.\n\nCurabitur viverra: augue8 ^vitae pretium sagittis, arcu diam ullamcorper justo, a @faucibus sapien felis id dolor. Nulla trist`ique <dolor> ut diam suscipit7 maximus? Etiam 'suscipit' ex et ¤sem* dapibus, quis dictum +odio venenatis… Mauris euismod vel nibh/ quis ~mollis. 345 Aenean_ convallis \"eros volutpat\"; pulvinar ipsum $id, varius-mauris. Sed [cursus] lacus nec libero dictum, =eget tincidunt metus lobortis. Sed# vel tortor — nibh.	Vivamus non № feugiat nisl! Quisque et est vel mi aliquet gravida vel\\ sed eros.");
	
	$("#txt_process_paste").click(function() {
		navigator.clipboard.readText().then(text => {
			$("#txt_process").val(text);
		});
	});

	$("#txt_process_copy").click(function() {
		const text = $("#txt_process").val();
		navigator.clipboard.writeText(text);
	});

	$(".process").click(function() { make(this.id); });
});

function make(obj_id) {
	let txt_todo = $("#txt_process").val();
	let txt_done;

	if (!txt_todo) return;

	switch(obj_id) {
		case "space": 
			txt_done = txt_todo.replace(/\u00A0/g, " ").replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/\s+/g, " ");
			break;

		case "punctuation": 
			txt_done = txt_todo.split(/[ ….,:;?!'"—\-]+/).join(" ");
			break;
		case "brackets": 
			txt_done = txt_todo.split(/[ <>{}\[\]()]+/).join(" ");
			break;
		case "specials": 
			txt_done = txt_todo.split(/[ ~`'"@#№¤\$%\^\&\*\+\=\_\|\/\\—\-]+/).join(" ");
			break;

		case "tolower": 
			txt_done = txt_todo.toLowerCase();
			break;
		case "doubles": 
			txt_done = [...new Set(txt_todo.split(/[\s]+/))].join(" ");
			break;
		case "numbers": 
			txt_done = txt_todo.replace(/[0-9]/g, "");
			break;

		case "sortaz": 
			txt_done = txt_todo.split(/\s+/).sort().join("\n");
			break;
		case "sortza": 
			txt_done = txt_todo.split(/\s+/).sort().reverse().join("\n");
			break;
	}

	$("#txt_process").val(txt_done);
}
