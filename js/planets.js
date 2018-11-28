function Star(unique_id, hand_x, hand_y){
	this.id = unique_id;
	this.x = hand_x;
	this.y = hand_y;
	this.x_randomStarection = 1;
	this.outside_window = false;
	this.image = "url('../images/stars/star3.gif?id="+this.id+"')";

	//create random degree for stars
	var randomDeg = Math.floor((Math.random() * 360) + 1);
	//create random number for spawning stars
	var randomStar = Math.floor((Math.random() * 3) + 1);
	console.log(randomStar);

	if(randomStar == 1){
		//load star 1
		this.width = "20";
		this.height = "20";
		// this.image = "url('../images/stars/star1.png?id="+this.id+"')";
	}else if(randomStar == 2){
		//load star 2
		this.width = "15";
		this.height = "15";
		// this.image = "url('../images/stars/star2.png?id="+this.id+"')";
	}else if(randomStar == 3){
		//Load star3
		this.width = "10";
		this.height = "5";
	}
//	}else{
		//Load saturn image
	//	this.width = "30";
	//	this.height = "30";
	//	this.image = "url('../images/stars/saturn.png?id="+this.id+"')";
//	}

	var star_div = '<div class="star" id="star-'+this.id+'" style="top:'+ this.y +'px; left:'+this.x+'px; width:'+this.width+'px; height:'+this.height+'px; transform: rotate('+this.rotate+'deg); background-image: '+this.image+';"></div>';
	$('body').append(star_div);

	//remove star after some time
	this.dead = false;
	this.age = 1;

	this.counter = function(){
		this.age = this.age + 1;
		var star_id = $('#star-'+this.id);
		var dying_age = 250;

		if(this.age == (dying_age + 1)){
			star_id.css('opacity', 0.95);
		}
		else if(this.age == (dying_age + 2)){
			star_id.css('opacity', 0.90);
		}
		else if(this.age == (dying_age + 3)){
			star_id.css('opacity', 0.85);
		}
		else if(this.age == (dying_age + 4)){
			star_id.css('opacity', 0.80);
		}
		else if(this.age == (dying_age + 5)){
			star_id.css('opacity', 0.75);
		}
		else if(this.age == (dying_age + 6)){
			star_id.css('opacity', 0.70);
		}
		else if(this.age == (dying_age + 7)){
			star_id.css('opacity', 0.65);
		}
		else if(this.age == (dying_age + 8)){
			star_id.css('opacity', 0.60);
		}
		else if(this.age == (dying_age + 9)){
			star_id.css('opacity', 0.55);
		}
		else if(this.age == (dying_age + 10)){
			star_id.css('opacity', 0.45);
		}
		else if(this.age == (dying_age + 11)){
			star_id.css('opacity', 0.40);
		}
		else if(this.age == (dying_age + 12)){
			star_id.css('opacity', 0.35);
		}
		else if(this.age == (dying_age + 13)){
			star_id.css('opacity', 0.30);
		}
		else if(this.age == (dying_age + 14)){
			star_id.css('opacity', 0.25);
		}
		else if(this.age == (dying_age + 15)){
			star_id.css('opacity', 0.20);
		}
		else if(this.age == (dying_age + 16)){
			star_id.css('opacity', 0.15);
		}
		else if(this.age == (dying_age + 17)){
			star_id.css('opacity', 0.10);
		}
		else if(this.age == (dying_age + 18)){
			star_id.css('opacity', 0.05);
		}
		else if(this.age == (dying_age + 19)){
			star_id.css('opacity', 0.0);
		}
		else if(this.age == (dying_age + 20)){
			this.dead = true;
		}
	}


	this.delete = function() {
		$('#star-'+this.id).remove();
	}
	// this.move = function() {
	// 	this.x = this.x + (this.x_randomStarection * 3);
	// 	this.y = this.y - this.y_speed;
	// }

	// this.console = function() {
	// 	console.log(randomStar);
	// }
}
