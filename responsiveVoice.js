  function speakText() {
    var text = document.body.innerText;
    responsiveVoice.speak(text, "Brazilian Portuguese Female");
  }