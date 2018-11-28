//working socket.io and get bodyframe data
console.log("Connection established.");
var socket = io.connect('localhost:8000');
socket.on('bodyFrame', interpretData);
// Creating global variables
var clapped = false;
var left_kloost = false;
var right_kloost = false;
var bird = [];
var tree = [];
var star = [];
var bird_id = 1;
var tree_id = 1;
var star_id = 1;

function interpretData(bodyFrame) {

	// Move the birds (and potentially delete birds from array and DOM).
    for(var i = 0; i < bird.length; i++){
            bird[i].move();

        if(bird[i].outside_window == true){
            bird[i].delete();
            bird.splice(i,1);
        }
    }

	// Age the trees (and potentially delete trees from array and DOM).
	for(var i = 0; i < tree.length; i++){
	    tree[i].counter();

	    if(tree[i].dead == true){
	        tree[i].delete();
	        tree.splice(i,1);
	    }
	}
  // Age the stars (and potentially delete stars from array and DOM).
  for(var i = 0; i < star.length; i++){
      star[i].counter();

      if(star[i].dead == true){
	        star[i].delete();
	        star.splice(i,1);
      }
  }

    // Update the info panel.
    bodyTracked(bodyFrame.bodies);
    birdCount(bird.length);
    treeCount(tree.length);

    for(var i = 0; i < bodyFrame.bodies.length; i++){
		if(bodyFrame.bodies[i].tracked){
            /*Track hand positions*/
            var window_width = $(window).width();
        	var window_height = $(window).height();
            var left_hand_position_x = Math.round(bodyFrame.bodies[i].joints[7].depthX * window_width);
        	var left_hand_position_y = Math.round(bodyFrame.bodies[i].joints[7].depthY * window_height);
        	var right_hand_position_x = Math.round(bodyFrame.bodies[i].joints[11].depthX * window_width);
        	var right_hand_position_y = Math.round(bodyFrame.bodies[i].joints[11].depthY * window_height);

        	var body_index = bodyFrame.bodies[i].bodyIndex;
         //    var rightHandPositionX = bodyFrame.bodies[i].joints[11].depthX;
        	// var rightHandPositionY = bodyFrame.bodies[i].joints[11].depthY;
        	// var leftHandPositionX = bodyFrame.bodies[i].joints[7].depthX;
        	// var leftHandPositionY = bodyFrame.bodies[i].joints[7].depthY;
            // var leftHandState = bodyFrame.bodies[i].leftHandState;
            // var rightHandState = bodyFrame.bodies[i].rightHandState;

        	// Functions voor infoscreen.
            handsTracked(body_index, left_hand_position_x, left_hand_position_y, right_hand_position_x, right_hand_position_y);

            // Gesture functions from gestures.js
            clap(left_hand_position_x, left_hand_position_y, right_hand_position_x, right_hand_position_y);
            swipe(i, left_hand_position_x, left_hand_position_y, right_hand_position_x, right_hand_position_y);
            pinch(body_index, left_hand_position_x, left_hand_position_y, right_hand_position_x, right_hand_position_y, bodyFrame.bodies[i].leftHandState, bodyFrame.bodies[i].rightHandState);

			if(bodyFrame.bodies[i].leftHandState == 4){
        		$('#body-'+i+'-left-hand').css('background-image', 'url(images/hand-left-lasso.png');
        	}else if(bodyFrame.bodies[i].leftHandState == 3){
        		$('#body-'+i+'-left-hand').css('background-image', 'url(images/hand-left-closed.png');
        	}else{
        		$('#body-'+i+'-left-hand').css('background-image', 'url(images/hand-left-open.png');
        	}

        	if(bodyFrame.bodies[i].rightHandState == 4){
        		$('#body-'+i+'-right-hand').css('background-image', 'url(images/hand-right-lasso.png');
        	}else if(bodyFrame.bodies[i].rightHandState == 3){
        		$('#body-'+i+'-right-hand').css('background-image', 'url(images/hand-right-closed.png');
        	}else{
        		$('#body-'+i+'-right-hand').css('background-image', 'url(images/hand-right-open.png');
        	}

        	$('#body-'+i+'-left-hand').css('display', 'block');
	      	$('#body-'+i+'-right-hand').css('display', 'block');
	      	$('#body-'+i+'-left-hand').css('top', left_hand_position_y);
	      	$('#body-'+i+'-left-hand').css('left', left_hand_position_x);
	      	$('#body-'+i+'-right-hand').css('top', right_hand_position_y);
	      	$('#body-'+i+'-right-hand').css('left', right_hand_position_x);
		}
		else{
			$('#body-'+i+'-left-hand').css('display', 'none');
	      	$('#body-'+i+'-right-hand').css('display', 'none');
	      	$('#body-'+i+'-left-hand-info').text('Body 1 - left hand: [x: -] [y: -]');
	      	$('#body-'+i+'-right-hand-info').text('Body 1 - right hand: [x: -] [y: -]');
		}
	}
}