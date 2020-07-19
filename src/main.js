window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.lang = 'sv-SE';
// recognition.lang = 'zh-CN';


function clickToStart() {

  let p = document.createElement('p');
  const words = document.querySelector('.words');

  words.appendChild(p);
  recognition.addEventListener('result', e => {
    console.log(e.results);
 
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      p.textContent = transcript;
      if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }

    });

  recognition.addEventListener('end', recognition.start);
  recognition.start();  
};

function clickToEnd() {
  recognition.addEventListener('end', recognition.stop);
  recognition.abort();
  console.log('Speech recognition aborted.');
  recognition.onspeechend = function() {
  recognition.stop();
  console.log('Speech recognition has stopped.');
}
}


// var mixBut = document.getElementById("mixBut");

// mixBut.addEventListener("click", Start);

// function Start(){
//     console.log("Started");
//     mixBut.removeEventListener("click", Start);
//     mixBut.addEventListener("click", Stop);
//     mixBut.value = "Stop";
// }

// function Stop(){
//     console.log("Stopped");
//     mixBut.removeEventListener("click", Stop);
//     mixBut.addEventListener("click", Start);
//     mixBut.value = "Start";
// }


 