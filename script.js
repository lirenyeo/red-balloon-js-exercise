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
playBtn.addEventListener('click', () => {
  // When button is clicked, start playing audio and remove the button from the balloon container
  balloonsAudio.play()
  playBtn.style.display = 'none'
  // Loop all the balloons
  balloons.forEach(balloon => {
    // Create new balloon with createBalloon function
    const newBalloon = createBalloon(balloon)
    // append to balloon-container
    balloonContainer.appendChild(newBalloon)
  })

  // query all the .balloon-box in the HTML
  document.querySelectorAll('.balloon-box').forEach((box, idx) => {
    // Add event listener for click on each box and also take the index
    box.addEventListener('click', () => {
      console.log(box, idx)
      // When the box is clicked, play the pop sound
      popAudio.play()
      // change the balloons array at the index clicked from '-' to ' '
      balloons[idx] = ''
      // remove the clicked box's balloon but not the box
      box.innerHTML = ''
      // Check if the balloons array still includes any '-'
      if (!balloons.includes('-')) {
        // if no more exists then pause the audio and alert('congrats')
        alert('Congrats!')
      }
    })
  })
})