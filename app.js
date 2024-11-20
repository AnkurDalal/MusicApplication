const myPlay=document.querySelector("#play")
const myAudio=document.querySelector("audio")
const forwardIcon=document.querySelector("#forward")
const backwardIcon=document.querySelector("#backward")
const myImage=document.querySelector("img")
const mySong=document.querySelector("#song")
const mySinger=document.querySelector("#singer")
const heartIcon=document.querySelector("#heart")
const shuffleIcon=document.querySelector("#shuffle")
const myChildBar=document.querySelector(".childBar")
const myTotalTime=document.querySelector(".totalTime")
const myCurretTime=document.querySelector(".curretTime")

let isAudioPlaying=false;

function playAudio(){
   isAudioPlaying=true
   //logic to play the audio
   myAudio.play()
   //replaced play icon with pause icon
   myPlay.classList.replace("fa-play","fa-pause")
}

function pauseAudio(){
    isAudioPlaying=false
    //logic to pause the audio
    myAudio.pause()
    //replaced pause icon with play icon
    myPlay.classList.replace("fa-pause","fa-play")
}

myPlay.addEventListener("click",function(){
   if(isAudioPlaying){
        pauseAudio()
   }else{
    playAudio()
   }
})
//Array of Objects
const songData=[
    {
        image:"Images/image2.jpg",
        singer:"Dhanda Nyoliwala",
        song:"Ha Ha Ha",
        audio:"Audio/audio2.mp3"
    },
    {
        image:"Images/image3.jpg",
        singer:"Sidhu Moose Wala",
        song:"295",
        audio:"Audio/audio3.mp3"
    },
    {
        image:"Images/image4.jpg",
        singer:"Babbu Maan",
        song:"Mehfil Mitrran Di",
        audio:"Audio/audio4.mp3"
    }
]
//logic for forward icon
let songIndex=0;

forwardIcon.addEventListener("click",function(){
    if(songIndex>songData.length-1){
        songIndex=0
    }
    myImage.src=songData[songIndex].image
    mySong.textContent=songData[songIndex].song
    mySinger.textContent=songData[songIndex].singer
    myAudio.src=songData[songIndex].audio

    playAudio()
    songIndex++
})
//logic for backwardIcon
let newSongIndex=songData.length-1
backwardIcon.addEventListener("click",function(){
    if(newSongIndex<0){
        newSongIndex=songData.length-1
    }
    myImage.src=songData[newSongIndex].image
    mySong.textContent=songData[newSongIndex].song
    mySinger.textContent=songData[newSongIndex].singer
    myAudio.src=songData[newSongIndex].audio

    playAudio()
    newSongIndex--
})

//logic for like and dislike icon
let heartStatus=false
heartIcon.addEventListener("click",function(){
    if(heartStatus){
        heartIcon.style.color="black"
        heartStatus=false
    }else{
        heartIcon.style.color="red"
        heartStatus=true

        localStorage.setItem(singerName.textContent,songName.textContent)
    }
})
//logic for shuffle icon
shuffleIcon.addEventListener("click",function(){
    let randomSongIndex=Math.floor(Math.random()*3)

    myImage.src=songData[randomSongIndex].image
    mySinger.textContent=songData[randomSongIndex].singer
    mySong.textContent=songData[randomSongIndex].song
    myAudio.src=songData[randomSongIndex].audio


    playAudio()
})

//logic for start and total time
myAudio.addEventListener("timeupdate",function(output){
    let currentTime=output.srcElement.currentTime
    let totalTime=output.srcElement.duration

    let audioPlayedPercentage=currentTime/totalTime*100

   myChildBar.style.width=`${audioPlayedPercentage}%`


   let totalTimeInMinitues=Math.floor(totalTime/60)

   let totalTimeInSeconds=Math.floor(totalTime%60)

   myTotalTime.textContent=`${totalTimeInMinitues}:${totalTimeInSeconds}`


   let currentTimeInMinutes=Math.floor(currentTime/60)
   let currentTimeInSeconds=Math.floor(currentTime%60)

   if(currentTimeInSeconds<10){
       currentTimeInSeconds=`0${currentTimeInSeconds}`
   }

   myCurretTime.textContent=`${currentTimeInMinutes}:${currentTimeInSeconds}`



})
