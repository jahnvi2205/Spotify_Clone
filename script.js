let play= document.getElementById('play');
let progressBar= document.getElementById('progressBar');

let audio= new Audio('Audio/1.mp3');

let currentSong= 1;

play.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime == 0){
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    }

    else {
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
})

audio.addEventListener('timeupdate', ()=>{
    let progress = (audio.currentTime/audio.duration)* 100;
    progressBar.value= progress;
    progressBar.style.background= `linear-gradient(to right, #43c91b ${progress}%, #333 ${progress}%)`;


})


progressBar.addEventListener('input', function (){
    let value= this.value;    
    this.style.background= `linear-gradient(to right, #43c91b ${value}%, #333 ${value}%)`;
    audio.currentTime= (value * (audio.duration))/100;
})

let playMusic = Array.from(document.getElementsByClassName('playMusic'));

let makeAllPlay= () =>{
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

playMusic.forEach((Element) => {
    Element.addEventListener("click", (e) =>{
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

        let index= parseInt(e.target.id);
        currentSong= index;
        audio.src= `Audio/${currentSong}.mp3`;
        audio.currentTime= 0;
        audio.play();

    })
})

playNextSong=()=>{
   let nextSong= (currentSong+1) % playMusic.length;
   currentSong= nextSong==0 ? 18 : nextSong ;
   audio.src= `Audio/${currentSong}.mp3`;
   audio.currentTime= 0;
   audio.play();

}

playPrevSong=()=>{
    let prevSong= (currentSong-1) ;
    currentSong = prevSong==0? 18 : prevSong;
    audio.src= `Audio/${currentSong}.mp3`;
    audio.currentTime= 0;
    audio.play();

}

let forward= document.getElementById('forward');
let backward= document.getElementById('backward');

forward.addEventListener('click', () =>{
    playNextSong();
})

backward.addEventListener('click', () =>{
    playPrevSong();
})

audio.addEventListener('ended', () =>{
    playNextSong();
})
