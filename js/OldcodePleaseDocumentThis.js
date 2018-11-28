// function spawn_bird(bird_id){
// 	var bird_X = event.pageX;
// 	var bird_Y = event.pageY;
// 	var new_bird = '<div class="bird" id="bird-'+bird_id+'" style="top:'+ bird_Y +'px; left:'+bird_X+'px;"></div>';

// 	$('body').append(new_bird);
// 	console.log('bird!');
// }

// Bird Constructor
// function Bird(unique_id, pos_x, pos_y){
// 	this.id = unique_id;
// 	this.x = pos_x;
// 	this.y = pos_y;
// }

// $( document ).ready( function(){
// 	var bird_id_count = 0;

// 	$('body').click( function(){
// 		bird_id_count = bird_id_count + 1;
// 		// spawn_bird(bird_id_count);

// 		var bird_X = event.pageX
// 		var bird = new Bird(bird_id_count, event.pageX, event.pageY);

// 		var bird_div = '<div class="bird" id="bird-'+bird.id+'" style="top:'+ bird.y +'px; left:'+bird.x+'px;"></div>';

// 		$('body').append(bird_div);
// 	});
// });

// var id = setInterval(frame, 1);
//    var pos = clapX;
//  function frame() {
//    if (pos == 1300) {
//      clearInterval(id);
//    } else {
//      pos++;

//      bird.style.left = pos + 'px';

//    }
//  // }