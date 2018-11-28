/*Create info display*/

//Count the amount of bodies tracked.
function birdCount(countBirds) {
    $('#birdCount').text("Birds: " + countBirds);
}
//gesture
//handSide
//xyBody

function treeCount(countTrees){
	$('#treeCount').text("Trees: " + countTrees);
}

//Count the amount of bodies tracked
function bodyTracked(x) {
    var countBodies = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i].tracked) {
            countBodies = countBodies + 1;
        }
    }
    $('#bodyCount').text("Lichamen: " + countBodies);

}

function handsTracked(body_nr, left_hand_x, left_hand_y, right_hand_x, right_hand_y) {
	$('#body-'+body_nr+'-left-hand-info').text('Body '+body_nr+' - left hand: [x: '+left_hand_x+'] [y: '+left_hand_y+']');
	$('#body-'+body_nr+'-right-hand-info').text('Body '+body_nr+' - right hand: [x: '+right_hand_x+'] [y: '+right_hand_y+']');
}