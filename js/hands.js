function Hands(body_index, left_hand_id, right_hand_id){
	this.body_index = body_index;
	this.left_hand_id = left_hand_id;
	this.right_hand_id = right_hand_id;
	// this.left_hand_position[] = [200, 200];
	// this.right_hand_position[] = [300,300];

	$('body').append(left_hand_div);

	this.reposition = function(current_x, current_y){
		var left_hand_div = '<div class="body-'+this.body_index+'-hand" style="top:'+ this.y +'px; left:'+this.x+'px;"></div>';
		var right_hand_div = '<div class="body-'+this.body_index+'-hand" style="top:'+ this.y +'px; left:'+this.x+'px;"></div>';
		$('#hand-'+this.id).css('top', this.y);
		$('#hand-'+this.id).css('left', this.x);
	}

	this.image = function(hand_state){
		if(hand_state == 'open'){
			// Plaatje met hand open toekennen.
		}
		else if(hand_state == 'closed'){
			// Plaatje met hand dicht toekennen.
		}
		else if(hand_state == 'pointing'){
			// Plaatje met wijzende vinger toekennen.
		}
		else{
			// Plaatje leegmaken.
		}

	}

	this.delete = function() {
		$('#hand-'+this.id).remove();
	}
}
