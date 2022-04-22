const startListening = document.querySelector('.startButton')
const stopListening = document.querySelector('.stopButton')
const text = document.querySelector('.text')
const recordImg = document.querySelector('img')

const recognition = new webkitSpeechRecognition()

const startDictation = () => {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    recognition.continuous = true
    recognition.interimResults = true

    recognition.lang = "nl-nl"
    recognition.start()

    recordImg.classList.remove('none')

    recognition.onresult = (e) => {
      console.log(e.results[0][0].transcript)
      text.innerHTML = e.results[0][0].transcript
      console.log(e.results[0][0].confidence)

      // understand(e.results[0][0].transcript)
    }

    recognition.onerror = function(e) {
      recognition.stop()
      console.log('error man: ' + e)
    }

    stopListening.addEventListener("click", () => {
      recognition.stop()
      recordImg.classList.add('none')
    })

  } else {
    alert('Try this page in Google Chrome!')
  }
}

const understand = (msg) => {
  console.log(msg)
}

startListening.addEventListener("click", startDictation)
