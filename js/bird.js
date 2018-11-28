function Bird(unique_id, hand_x, hand_y){
	this.id = unique_id;
	this.x = hand_x;
	this.y = hand_y;
	this.y_speed = Math.floor((Math.random() * 70) + 1)*0.1;
	this.x_direction = 1;
	this.outside_window = false;

	var dir = Math.floor((Math.random() * 2) + 1);
	if(dir <= 1){
		this.x_direction = 1;
		this.image = "url('../images/bird/bird-right.gif?id="+this.id+"')";
	}else{
		this.x_direction = -1;
		this.image = "url('../images/bird/bird-left.gif?id="+this.id+"')";
	}

	var bird_div = '<div class="bird" id="bird-'+this.id+'" style="top:'+ this.y +'px; left:'+this.x+'px; background-image: '+this.image+';"></div>';
	$('body').append(bird_div);

	this.move = function() {
		var window_width = $(window).width();
		var window_height = $(window).height();

		if(this.x > (window_width + 50) || this.x < -50 || this.y < -50){
			this.outside_window = true;
		}

		// if(this.outside_window){
		// 	console.log('bird-'+this.id+': Buiten');
		// }else{
		// 	console.log('bird-'+this.id+': Binnen');
		// }

		this.y = this.y - this.y_speed;
		this.x = this.x + (this.x_direction * 5);
		$('#bird-'+this.id).css('top', this.y);
		$('#bird-'+this.id).css('left', this.x);
	}

	this.delete = function() {
		$('#bird-'+this.id).remove();
	}
	// this.move = function() {
	// 	this.x = this.x + (this.x_direction * 3);
	// 	this.y = this.y - this.y_speed;
	// }

	// this.console = function() {
	// 	console.log(dir);
	// }
}
