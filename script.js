console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Maan Meri Jaan", filePath: "c:\Users\HP\Downloads\ 1 (2).mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover1.jpg?raw=true"},
    {songName: "Daku", filePath: "c:\Users\HP\Downloads\ 2.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover2.jpg?raw=true"},
    {songName: "Jaadugar", filePath:"c:\Users\HP\Downloads\ 3.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover3.jpg?raw=true"},
    {songName: "Alag Aasman", filePath: "c:\Users\HP\Downloads\ 4.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover4.jpg?raw=true"},
    {songName: "Jalebi Baby", filePath: "c:\Users\HP\Downloads\ 5.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover5.jpg?raw=true"},
    {songName: "Love Nwantiti", filePath: "c:\Users\HP\Downloads\ 6.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover6.jpg?raw=true"},
    {songName: "A Thousand Years", filePath: "c:\Users\HP\Downloads\ 7.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover7.jpg?raw=true"},
    {songName: "Excuses", filePath: "c:\Users\HP\Downloads\ 8.mp3", coverPath: "https://github.com/KevinJiju/Spotify-Clone/blob/main/cover8.jpg?raw=true"},
    {songName: "3:59 AM", filePath: "c:\Users\HP\Downloads\ 9.mp3", coverPath: "https://raw.githubusercontent.com/KevinJiju/Spotify-Clone/56c2f454ca320a14a3a45af2e0b3840bea029873/cover9.jpg"},
    {songName: "Machaayenge", filePath: "c:\Users\HP\Downloads\ 10.mp3", coverPath: "https://raw.githubusercontent.com/KevinJiju/Spotify-Clone/56c2f454ca320a14a3a45af2e0b3840bea029873/cover10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})