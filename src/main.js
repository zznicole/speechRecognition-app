window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
//recognition.lang = 'sv-SE';
//recognition.lang = 'zh-CN';
let p = document.createElement('p');
let words = document.querySelector('.words');

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

let inRecording = false;
function clickToStart() {
  if (inRecording == false) {
    recognition.addEventListener('end', recognition.start);
    recognition.start();
    inRecording = true;
  }
};

function clickToEnd() {
  inRecording = false;
  recognition.removeEventListener('end', recognition.start);
  recognition.abort();
  console.log('Speech recognition aborted.');
}

// function sendMail() {
//   let link = "mailto:me@example.com"
//            + "?cc=myCCaddress@example.com"
//            + "&subject=" + escape("This is my subject")
//            + "&body=" + escape(document.querySelector('.words').value)
//   ;
//   window.location.href = link;
// }

 