// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {  //added to create IIFE (wjb)
	

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context (see step 4)
// See Lecture 52, part 1
// var helloSpeaker = 
var helloSpeaker = {};//Fake namespaces see 52.1 var helloSpeaker = to an empty object
//helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "larry", "Paula", "Laura", "Jim"];
 // don't need this var names in script.js



// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function (name) {  //change name to names
  console.log(speakWord + " " + name);
  }
window.helloSpeaker = helloSpeaker;

})(window); //creating IIFE added }) and () to invoke (wjb)

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
