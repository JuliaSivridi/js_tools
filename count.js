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

	$(".process").click(function() { make(this.id, $(this).text()); });
});

function make(obj_id, btn_text) {
	let txt_todo = $("#txt_process").val();
	let txt_done;
    btn_text = btn_text.charAt(0).toUpperCase() + btn_text.slice(1) + ":";

	if (!txt_todo) return;

	switch(obj_id) {
		case "text_length": 
			txt_done = txt_todo;
            $("#text_label").text(btn_text);
            $("#text_counters").val(txt_todo.length);
			break;
		case "words_count": 
			txt_done = txt_todo;
            $("#text_label").text(btn_text);
            $("#text_counters").val(txt_todo.split(/[\s\r\n]+/).length);
			break;
		case "unique_words_count":
			txt_done = txt_todo;
            var cleaned = txt_todo.toLowerCase().replace(/[^a-zåäöа-яё0-9]+/gi, " ").trim().split(/\s+/).filter(w => w.length > 0);
            const unique = new Set(cleaned);
            $("#text_label").text(btn_text);
            $("#text_counters").val(unique.size);
            break;
        case "words_frequency":
            var cleaned = txt_todo.toLowerCase().replace(/[^a-zåäöа-яё0-9]+/gi, " ").trim().split(/\s+/).sort();
            var words = {};
            for (let w of cleaned) {
                if (!words[w]) words[w] = 0;
                words[w]++;
            }
            txt_done = Object.entries(words)
                .map(([word, count]) => `${word} = ${count}`)
                .join("\n");
			break;
	}

	$("#txt_process").val(txt_done);
}
