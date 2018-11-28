var useKinect = true;
 


/* Settings-start: */

var breakBetweenGestures = 500; //ms

//minimum speed of hand to accept swipe gesture;
var swipeSpeed = 0.014;

//tolerance for hand still in position
var handStillTolerance = 0.25;
//cursor scale factor, default: 1.5 (bigger range -> smaller factor)
var cursorScale = 1.5;

var defaultHand = 'right';

var bigDist = 4; //metres

var mediumDist = 2.7; //metres

/* Settings-end */




//make hand object (left/right)
function hand(name){
	return {
		name: name,
		swipeSpeed: swipeSpeed, 
		//last X, Y positions
		oldDepthX: 0,
		oldDepthY: 0,
		//last relative speed
		oldSpeedX: 0,
		oldSpeedY: 0,
		//last state (open)
		oldOpen: 2,
		closedTimer: 0
	};
}


//detect gestures
function updateHand(hand, handState, handObject, elbowObject, torsoObject) {
	//update torso position
	torso.positionX = torsoObject.depthX;
	torso.positionY = torsoObject.depthY;
	//set current X position of hand
	hand.positionX =  handObject.depthX;
	hand.positionY =  handObject.depthY;
	//get position relative to torso position;
	hand.relativePositionX = hand.positionX - torso.positionX;
	hand.relativePositionY = hand.positionY - torso.positionY;
	//get hand speed based on last position
	hand.relativeSpeedX = hand.relativePositionX - hand.oldSpeedX;
	hand.relativeSpeedY = hand.relativePositionY - hand.oldSpeedY;



	//check if hand is open
	if(handState !== 1 && hand.name === defaultHand) {
	//gestures only when hand over elbow - swipes
	//and handState = 2 (open)
	if(handObject.depthY < elbowObject.depthY && hand.oldOpen != 1) {
		
		//swipe up
		else if(hand.relativeSpeedY < -1 * hand.swipeSpeed*1.4 && hand.oldSpeedY !== 0) {
			makeGesture('onSwipeUp');
            console.log('Lekker bezig jongens')
		}
	}