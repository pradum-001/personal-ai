let box= document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.rate = 1.3;
    speakInput.pitch = 100;
    speakInput.volume = 10;
    speakInput.lang = 'en-US'
    window.speechSynthesis.speak(speakInput);
}



const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour>= 0 && hour < 12){
        speakFunc("Good morning, how can i help you !")
    }
    else if (hour>=12 && hour < 16 ){
        speakFunc("Good Afternoon, How can i help you !")
    }
    else if (hour >= 16 && hour < 20){
        speakFunc("Good Evening, How can i help you !")
    }
    else {
        speakFunc("Good night guys! It's time to take rest, please go to bed with your loved ones.")
    }
}

window.onload = () =>{
    speakFunc("Hello!")
    greetingFunc();
}


const startVoiceInput = () => {
    if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
      let recognition = null;
      if ('speechRecognition' in window) {
        recognition = new SpeechRecognition();
      } else {
        recognition = new webkitSpeechRecognition();
      }
      
      recognition.lang = 'en-US';

      recognition.onresult = (e) => {
        let spokenText = e.results[0][0].transcript;
        handleCommands(spokenText.toLowerCase());
        box.classList.remove("btn-box");
        btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
      };

      recognition.start();

    } 
    else {
      alert("Your Browser does not support voice input ! Please change or update your browser");
    }
  }

btn.onclick = () => {
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}

const handleCommands = (command) => {
    if (command.includes("hello") || command.includes("hey") || command.includes ("hay virtual assistant"))
    {
        speakFunc("Hello Dear! How can i help you ?");
    }

    // else if (command.includes("who is shreya tripathi")){
    //     speakFunc("shreya tripathi is my founder and owner of my services and help ! what do you wanna know about my boss")
    // }
    // else if (command.includes("her instagram")|| command.includes('her images') || command.includes("about her ") || command.includes('about shreya')){
    //     speakFunc("shreya tripathi is a I T engineer and this is the profile of her")
    //     window.open("https://www.instagram.com/__sh__re__ya_/?__pwa=1#")
    // }

    else if(command.includes("what is going on")){
        speakFunc("tell me how can i help you");
    }
    else if (command.includes("hu r u") || command.includes("mother") || command.includes ("developed") || command.includes("who made you")|| command.includes("who is your owner") || command.includes("who is your founder") || command.includes("tell me your name")|| command.includes("owner")||command.includes("what is your name"))
    {
        speakFunc("I am a virtual assistant, made with love by Engineer Pradyumn");
    }

    else if (command.includes("open whatsapp web")|| command.includes("whatsapp web"))
    {
        speakFunc("opening whatsapp");
        window.open("https://web.whatsapp.com/");
    }
    else if (command.includes("open youtube")||command.includes("youtube")){
        speakFunc("Opening youtube");
        window.open("https://www.youtube.com/")
    }
    else if (command.includes("open google") || command.includes("google")){
        speakFunc("opening google.com");
        window.open("https://google.com/");
    }
    else if (command.includes("open facebook") || command.includes("facebook")){
        speakFunc("opening facebook.com");
        window.open("https://facebook.com/");
    }
    else if (command.includes("open instagram") || command.includes("insta")){
        speakFunc("opening instagram");
        window.open("https://instagram.com/");
    }
    else if (command.includes("open twitter") || command.includes("twitter") || command.includes("elon musk")){
        speakFunc("opening x.com");
        window.open("https://twitter.com/");
    }
    else if (command.includes("open linkedin") || command.includes("linkedin")){
        speakFunc("opening linkedin");
        window.open("https://in.linkedin.com/");
    }
    else if (command.includes("open whatsapp ") || command.includes("whatsapp")){
        speakFunc("opening whatsapp");
        window.open("whatsapp://");
    }
    else if (command.includes("tell me time") || command.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'});
        speakFunc(time);
    }
    else if (command.includes("tell me date") || command.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:'numeric',month:'long'});
        speakFunc(date);
    }
    else {
        speakFunc(`This is , what i found on internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }
}