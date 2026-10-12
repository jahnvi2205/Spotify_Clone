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
        let selectedSong = songs[index - 1];

        currentSong = order.indexOf(selectedSong) + 1;
        audio.src = selectedSong.songPath;
        audio.currentTime= 0;
        audio.play();
        updateNowBar();
    })
})

let allMusic= Array.from(document.getElementsByClassName('music-card'));

songs = [
    { songName: 'Song 1', songDes: 'This is the description for song 1', songImage: 'Images/1.jpg', songPath: 'Audio/1.mp3' },
    { songName: 'Song 2', songDes: 'This is the description for song 2', songImage: 'Images/2.jpg', songPath: 'Audio/2.mp3' },
    { songName: 'Song 3', songDes: 'This is the description for song 3', songImage: 'Images/3.jpg', songPath: 'Audio/3.mp3' },
    { songName: 'Song 4', songDes: 'This is the description for song 4', songImage: 'Images/4.jpg', songPath: 'Audio/4.mp3' },
    { songName: 'Song 5', songDes: 'This is the description for song 5', songImage: 'Images/5.jpg', songPath: 'Audio/5.mp3' },
    { songName: 'Song 6', songDes: 'This is the description for song 6', songImage: 'Images/6.jpg', songPath: 'Audio/6.mp3' },
    { songName: 'Song 7', songDes: 'This is the description for song 7', songImage: 'Images/7.jpg', songPath: 'Audio/7.mp3' },
    { songName: 'Song 8', songDes: 'This is the description for song 8', songImage: 'Images/8.jpg', songPath: 'Audio/8.mp3' },
    { songName: 'Song 9', songDes: 'This is the description for song 9', songImage: 'Images/9.jpg', songPath: 'Audio/9.mp3' },
    { songName: 'Song 10', songDes: 'This is the description for song 10', songImage: 'Images/10.jpg', songPath: 'Audio/10.mp3' },
    { songName: 'Song 11', songDes: 'This is the description for song 11', songImage: 'Images/11.jpg', songPath: 'Audio/11.mp3' },
    { songName: 'Song 12', songDes: 'This is the description for song 12', songImage: 'Images/12.jpg', songPath: 'Audio/12.mp3' },
    { songName: 'Song 13', songDes: 'This is the description for song 13', songImage: 'Images/13.jpg', songPath: 'Audio/13.mp3' },
    { songName: 'Song 14', songDes: 'This is the description for song 14', songImage: 'Images/14.jpg', songPath: 'Audio/14.mp3' },
    { songName: 'Song 15', songDes: 'This is the description for song 15', songImage: 'Images/15.jpg', songPath: 'Audio/15.mp3' },
    { songName: 'Song 16', songDes: 'This is the description for song 16', songImage: 'Images/16.jpg', songPath: 'Audio/16.mp3' },
    { songName: 'Song 17', songDes: 'This is the description for song 17', songImage: 'Images/17.jpg', songPath: 'Audio/17.mp3' },
    { songName: 'Song 18', songDes: 'This is the description for song 18', songImage: 'Images/18.jpg', songPath: 'Audio/18.mp3' },
    { songName: 'Song 19', songDes: 'This is the description for song 19', songImage: 'Images/1.jpg', songPath: 'Audio/1.mp3' },
    { songName: 'Song 20', songDes: 'This is the description for song 20', songImage: 'Images/2.jpg', songPath: 'Audio/2.mp3' },
    { songName: 'Song 21', songDes: 'This is the description for song 21', songImage: 'Images/3.jpg', songPath: 'Audio/3.mp3' },
    { songName: 'Song 22', songDes: 'This is the description for song 22', songImage: 'Images/4.jpg', songPath: 'Audio/4.mp3' },
    { songName: 'Song 23', songDes: 'This is the description for song 23', songImage: 'Images/5.jpg', songPath: 'Audio/5.mp3' },
    { songName: 'Song 24', songDes: 'This is the description for song 24', songImage: 'Images/6.jpg', songPath: 'Audio/6.mp3' },
    { songName: 'Song 25', songDes: 'This is the description for song 25', songImage: 'Images/7.jpg', songPath: 'Audio/7.mp3' },
    { songName: 'Song 26', songDes: 'This is the description for song 26', songImage: 'Images/8.jpg', songPath: 'Audio/8.mp3' },
    { songName: 'Song 27', songDes: 'This is the description for song 27', songImage: 'Images/9.jpg', songPath: 'Audio/9.mp3' },
    { songName: 'Song 28', songDes: 'This is the description for song 28', songImage: 'Images/10.jpg', songPath: 'Audio/10.mp3' },
    { songName: 'Song 29', songDes: 'This is the description for song 29', songImage: 'Images/11.jpg', songPath: 'Audio/11.mp3' },
    { songName: 'Song 30', songDes: 'This is the description for song 30', songImage: 'Images/12.jpg', songPath: 'Audio/12.mp3' },
    { songName: 'Song 31', songDes: 'This is the description for song 31', songImage: 'Images/13.jpg', songPath: 'Audio/13.mp3' },
    { songName: 'Song 32', songDes: 'This is the description for song 32', songImage: 'Images/14.jpg', songPath: 'Audio/14.mp3' },
    { songName: 'Song 33', songDes: 'This is the description for song 33', songImage: 'Images/15.jpg', songPath: 'Audio/15.mp3' },
    { songName: 'Song 34', songDes: 'This is the description for song 34', songImage: 'Images/16.jpg', songPath: 'Audio/16.mp3' },
    { songName: 'Song 35', songDes: 'This is the description for song 35', songImage: 'Images/17.jpg', songPath: 'Audio/17.mp3' },
    { songName: 'Song 36', songDes: 'This is the description for song 36', songImage: 'Images/18.jpg', songPath: 'Audio/18.mp3' },
    { songName: 'Song 37', songDes: 'This is the description for song 37', songImage: 'Images/2.jpg', songPath: 'Audio/2.mp3' },
    { songName: 'Song 38', songDes: 'This is the description for song 38', songImage: 'Images/3.jpg', songPath: 'Audio/3.mp3' },
    { songName: 'Song 39', songDes: 'This is the description for song 39', songImage: 'Images/4.jpg', songPath: 'Audio/4.mp3' },
    { songName: 'Song 40', songDes: 'This is the description for song 40', songImage: 'Images/5.jpg', songPath: 'Audio/5.mp3' },
    { songName: 'Song 41', songDes: 'This is the description for song 41', songImage: 'Images/6.jpg', songPath: 'Audio/6.mp3' },
    { songName: 'Song 42', songDes: 'This is the description for song 42', songImage: 'Images/7.jpg', songPath: 'Audio/7.mp3' },
    { songName: 'Song 43', songDes: 'This is the description for song 43', songImage: 'Images/8.jpg', songPath: 'Audio/8.mp3' },
    { songName: 'Song 44', songDes: 'This is the description for song 44', songImage: 'Images/9.jpg', songPath: 'Audio/9.mp3' },
    { songName: 'Song 45', songDes: 'This is the description for song 45', songImage: 'Images/10.jpg', songPath: 'Audio/10.mp3' },
    { songName: 'Song 46', songDes: 'This is the description for song 46', songImage: 'Images/11.jpg', songPath: 'Audio/11.mp3' },
    { songName: 'Song 47', songDes: 'This is the description for song 47', songImage: 'Images/12.jpg', songPath: 'Audio/12.mp3' },
    { songName: 'Song 48', songDes: 'This is the description for song 48', songImage: 'Images/13.jpg', songPath: 'Audio/13.mp3' },
    { songName: 'Song 49', songDes: 'This is the description for song 49', songImage: 'Images/14.jpg', songPath: 'Audio/14.mp3' },
    { songName: 'Song 50', songDes: 'This is the description for song 50', songImage: 'Images/15.jpg', songPath: 'Audio/15.mp3' },
]

order= [... songs];

allMusic.forEach((element,i) =>{
    element.getElementsByTagName('img')[0].src= songs[i].songImage;
    element.getElementsByClassName('img-title')[0].innerHTML= songs[i].songName;
    element.getElementsByClassName('img-description')[0].innerText= songs[i].songDes;
})

let shuffle= document.getElementById('shuffle');
let repeat= document.getElementById('repeat');
let nowbar= document.querySelector('.now-bar');

let songOnRepeat= false;
let songOnShuffle= false;

function shuffleSongs (originalOrder){
    order= [...originalOrder];
    for (i=order.length-1; i>0; i--){
        let j= Math.floor((Math.random()) * (i+1));
        [order[i], order[j]]= [order[j], order[i]];
    }
    return order;
}

shuffle.addEventListener('click', () =>{
    if (!songOnShuffle){
        songOnShuffle= true;
        songOnRepeat= false;
        shuffle.classList.add('active');
        repeat.classList.remove('active');
        order= shuffleSongs(songs);
    }else{
        songOnShuffle= false;
        shuffle.classList.remove('active');
        order= songs;
    }
})

repeat.addEventListener('click', () =>{
    if (!songOnRepeat){
        songOnRepeat= true;
        songOnShuffle= false;
        repeat.classList.add('active');
        shuffle.classList.remove('active');        
    }else{
        songOnRepeat= false;
        repeat.classList.remove('active');
    }
})

playNextSong=()=>{
    if (!songOnRepeat){
       let nextSong= (currentSong+1) % playMusic.length;
       currentSong= nextSong==0 ? 50 : nextSong ;
       audio.src= order[currentSong-1].songPath;
       audio.currentTime= 0;
       audio.play();
       updateNowBar();
    }else{
       audio.src= order[currentSong-1].songPath;
       audio.currentTime= 0;
       audio.play();
       updateNowBar();
    }
}

playPrevSong=()=>{
    let prevSong= (currentSong-1) ;
    currentSong = prevSong==0? 50 : prevSong;
    audio.src= order[currentSong-1].songPath;
    audio.currentTime= 0;
    audio.play();
    updateNowBar();
}


function updateNowBar(){
    nowbar.getElementsByClassName('img-title-info')[0].innerText= order[currentSong-1].songName;
    nowbar.getElementsByClassName('img-des-info')[0].innerText= order[currentSong-1].songDes;
    nowbar.getElementsByTagName('img')[0].src= order[currentSong-1].songImage;
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
