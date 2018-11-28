-----100%free-----
How to install:
.
- Install Kinect SDK: https://www.microsoft.com/en-us/download/details.aspx?id=44561
- install Visual C++ package 2013: https://www.microsoft.com/en-us/download/details.aspx?id=40784
- Create a folder called public in the root folder.
- Clone the repository in the public folder.
- Move "broadcast.js MOVE AND RENAME" to root and rename it "broadcast.js".
- Open CMD
- cd to root folder.
- Execute "npm init".
- Install the following libraries by using "npm install LIBRARY".
	- node-gyp
	- kinect2
	- express
	- socket.io


console.log(body);  For a full array of data you can read
// Here’s a list of all the joints:
//
//     Spine base: 0
//     Spine mid point: 1
//     Neck: 2
//     Head: 3
//     Left shoulder: 4
//     Left elbow: 5
//     Left wrist: 6
//     Left hand: 7
//     Right shoulder: 8
//     Right elbow: 9
//     Right wrist: 10
//     Right hand: 11
//     Left hip: 12
//     Left knee: 13
//     Left ankle: 14
//     Left foot: 15
//     Right hip: 16
//     Right knee: 17
//     Right ankle: 18
//     Right foot: 19
//     Shoulder spine center: 20
//     Left hand tip: 21
//     Left thumb: 22
//     Right hand tip: 23
//     Right thumb: 24

Hand states

      No Hands: 0
      Neutral:  1
      Open: 2
      Closed: 3
      Lasso:  4
