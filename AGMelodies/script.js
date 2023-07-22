console.log("Welcome to AGMelodies");

//Initialize The Varibles
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgessBar');
let songs = 
[
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Tere Vaste", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
];

//Handle play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play fa-beat');
        masterPlay.classList.add('fa-solid fa-circle-pause fa-beat');
    }
})

myProgessBar.document.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
});

