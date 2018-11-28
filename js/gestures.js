// --GLOBALS--
// swipe variables
var prev_y_left = [];
var prev_y_right = [];
var swipe_progress = [];
var delta_y_left = [];
var delta_y_right = [];
var direction = [];

//pinch variables
var prev_left_closed = [];
var prev_right_closed = [];

// --GESTURE FUNCTIONS--
// GESTURE: Clap
//De variabelen bevatten data van de joints die door de kinect gemeten wordt
function clap(leftHandPositionX, leftHandPositionY, rightHandPositionX, rightHandPositionY) {
      // meet de afstand tussen de twee handen
      var clapRelativePositionX = rightHandPositionX - leftHandPositionX; // X-as
      var clapRelativePositionY = rightHandPositionY - leftHandPositionY; // Y-as

      //als afstand tussen twee handen kleiner is dan x getal registreert hij een klap
      if (clapRelativePositionX < 8 && clapRelativePositionX > -8 && clapRelativePositionY < 8 && clapRelativePositionY > -8) {
          //check of er is geklapt
          if (!clapped) {
              // console.log("Clap");
              clapped = true;
              // Als er is geklapt, laat een vogel verschijnen op coördinaten van de handen.
              bird.push(new Bird(bird_id, rightHandPositionX, rightHandPositionY));
              //zorgt ervoor dat elke vogel een eigen id krijgt zodat er meerdere kunnen verschijnen.
  		        bird_id = bird_id + 1;
              // zet na een klap x aantal tijd op zodat er niet elke verversing een nieuwe vogel verschijnt.
              setTimeout(function(){
                  clapped = false;
                  // console.log("clapklaar");
            },500);
          }
      }
}

//GESTURE: Swipe
function swipe(body_index, left_hand_position_x, left_hand_position_y, right_hand_position_x, right_hand_position_y) {
    delta_y_left[body_index] = left_hand_position_y - prev_y_left[body_index];
    delta_y_right[body_index] = right_hand_position_y - prev_y_right[body_index];

    if (delta_y_left[body_index] < -2 && delta_y_right[body_index] < -2) {
        // console.log('^');
        swipe_progress[body_index] += Math.abs(delta_y_right[body_index]);
        if(swipe_progress[body_index] > 180){
          var hands_center_position = left_hand_position_x + Math.abs(left_hand_position_x - right_hand_position_x);
          swipe_progress[body_index] = 0;
          tree.push(new Tree(tree_id, hands_center_position));
          tree_id = tree_id + 1;
        }
    }
    else {
        // console.log('v');
        swipe_progress[body_index] = 0;
    }

    prev_y_left[body_index] = left_hand_position_y;
    prev_y_right[body_index] = right_hand_position_y;
}

//GESTURE: Pinch
//De variabelen bevatten data van de joints die door de kinect gemeten wordt
function pinch(body_index, left_hand_x, left_hand_y, right_hand_x, right_hand_y, left_hand_state, right_hand_state){
    // left hand
    // Check of de hand wordt gesloten als deze niet gesloten is
    if(prev_left_closed[body_index] && left_hand_state != 3){
      // laat ster verschijnen op coördinaten van de hand
      star.push(new Star(star_id, left_hand_x, left_hand_y));
      //Zorgt ervoor dat elke ster een eigen id krijgt zodat er meerdere kunnen verschijnen.
      star_id = star_id + 1;
    }
    //Wanneer de hand wordt gesloten, sla in de var dan op als gesloten (true) anders false
    if(left_hand_state == 3){
      prev_left_closed[body_index] = true;
    }
    else{
      prev_left_closed[body_index] = false;
    }

    // right hand
    // Check of de hand wordt gesloten als deze niet gesloten is
    if(prev_right_closed[body_index] && right_hand_state != 3){
      // laat ster verschijnen op coördinaten van de hand
      star.push(new Star(star_id, right_hand_x, right_hand_y));
      //Zorgt ervoor dat elke ster een eigen id krijgt zodat er meerdere kunnen verschijnen.
      star_id = star_id + 1;
    }
    //Wanneer de hand wordt gesloten, sla in de var dan op als gesloten (true) anders false
    if(right_hand_state == 3){
      prev_right_closed[body_index] = true;
    }
    else{
      prev_right_closed[body_index] = false;
    }
  }
