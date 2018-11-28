function Tree(unique_id, mouse_x){
	this.id = unique_id;
	this.x = mouse_x-300;
	this.dead = false;
	this.age = 1;

	this.counter = function(){
		this.age = this.age + 1;
		var tree_id = $('#tree-'+this.id);
		var dying_age = 90;

		if(this.age == (dying_age + 1)){
			tree_id.css('opacity', 0.95);
		}
		else if(this.age == (dying_age + 2)){
			tree_id.css('opacity', 0.90);
		}
		else if(this.age == (dying_age + 3)){
			tree_id.css('opacity', 0.85);
		}
		else if(this.age == (dying_age + 4)){
			tree_id.css('opacity', 0.80);
		}
		else if(this.age == (dying_age + 5)){
			tree_id.css('opacity', 0.75);
		}
		else if(this.age == (dying_age + 6)){
			tree_id.css('opacity', 0.70);
		}
		else if(this.age == (dying_age + 7)){
			tree_id.css('opacity', 0.65);
		}
		else if(this.age == (dying_age + 8)){
			tree_id.css('opacity', 0.60);
		}
		else if(this.age == (dying_age + 9)){
			tree_id.css('opacity', 0.55);
		}
		else if(this.age == (dying_age + 10)){
			tree_id.css('opacity', 0.45);
		}
		else if(this.age == (dying_age + 11)){
			tree_id.css('opacity', 0.40);
		}
		else if(this.age == (dying_age + 12)){
			tree_id.css('opacity', 0.35);
		}
		else if(this.age == (dying_age + 13)){
			tree_id.css('opacity', 0.30);
		}
		else if(this.age == (dying_age + 14)){
			tree_id.css('opacity', 0.25);
		}
		else if(this.age == (dying_age + 15)){
			tree_id.css('opacity', 0.20);
		}
		else if(this.age == (dying_age + 16)){
			tree_id.css('opacity', 0.15);
		}
		else if(this.age == (dying_age + 17)){
			tree_id.css('opacity', 0.10);
		}
		else if(this.age == (dying_age + 18)){
			tree_id.css('opacity', 0.05);
		}
		else if(this.age == (dying_age + 19)){
			tree_id.css('opacity', 0.0);
		}
		else if(this.age == (dying_age + 20)){
			this.dead = true;
		}
	}

	var random = Math.floor((Math.random() * 2) + 1);
	if(random <= 1){
		this.image = "url('../images/trees/tree.gif?id="+this.id+"')";
	}else{
		this.image = "url('../images/trees/tree2.gif?id="+this.id+"')";
	}

	var tree_div = '<div class="tree" id="tree-'+this.id+'" style="left:'+this.x+'px; background-image: '+this.image+';"></div>';
	$('body').append(tree_div);
	// $('#tree').delay(5000).fadeOut();


	this.delete = function() {
		$('#tree-'+this.id).remove();
	}
}
	// this.move = function() {
	// 	this.x = this.x + (this.x_direction * 3);
	// 	this.y = this.y - this.y_speed;
	// }

	// this.console = function() {
	// 	console.log(random);
	// }
