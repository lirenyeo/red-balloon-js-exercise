let popAudio = document.querySelector("#balloon-pop");
let balloonsAudio = document.querySelector("#balloons-99");
let playBtn = document.querySelector("#play-btn");
let balloonContainer = document.querySelector("#balloon-container");
let balloons = [
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
  "-","-","-","-","-","-","-","-","-",
];

// To play audio you can use popAudio.play() or balloonsAudio.play()
// To stop the audio, you use .pause()

function createBalloon(balloon){
  let newBalloonBox = document.createElement('div')
  newBalloonBox.classList.add('balloon-box')
  if(balloon === '-'){
    let newBalloon = document.createElement('img')
    newBalloon.src = 'assets/red-balloon.png'
    newBalloon.style.width = '100%'
    newBalloon.style.height = '100%'
    newBalloonBox.appendChild(newBalloon)
  }
  return newBalloonBox
}

// The comments alignments also simulate how they are inside of the functions and loops
// All the logic will live inside the event listener function for clicking on playBtn

// Listen to the event click on the button
  // When button is clicked, start playing audio and remove the button from the balloon container
  // Loop all the balloons
    // Create new balloon with createBalloon function
    // append to balloon-container
  // query all the .balloon-box in the HTML
  // Add event listener for click on each box and also take the index
    // When the box is clicked, play the pop sound
    // change the balloons array at the index clicked from '-' to ' '
    // remove the clicked box's balloon but not the box
    // Check if the balloons array still includes any '-'
      // if no more exists then pause the audio and alert('congrats')
