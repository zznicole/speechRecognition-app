window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition


let myRecognition = new SpeechRecognition();
myRecognition.interimResults = true;
myRecognition.lang = 'en-US';
myRecognition.maxAlternatives = 1;
myRecognition.onaudiostart = function() {
  console.log('Audio Capturing Started')
}

console.log(myRecognition);