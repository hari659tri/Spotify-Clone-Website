console.log("Welcome to My Spotify");
// initialize the variable 
 
  let songIndex=0;
  let audioElement=new Audio('songs/1.mp3');
  let masterPlay=document.getElementById('masterPlay');
  let myProgressBar=document.getElementById('myProgressBar');
   let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[

    {songName:"Chhod Diya Arijit Singh Song ",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Sunn Raha Hai Na Tu Aashiqui 2 Full Song With Lyrics  ",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Suna Hai Teri Dil Pe Mera - Sanak ! Hindi Song.mp3 ",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},

    {songName:"Galliyan Lyrics - Ek Villain - Only on spotify  ",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},

    {songName:"Habibi Song|Ricky Rich ",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},

    {songName:"Kaho Na Kaho ",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},

    {songName:"Mere Haath Mein - Song Download from Fanaa ",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},

    {songName:"Tum Chupa na sako gi mai vo raj hu  ",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},

    {songName:"Marjawa - jubin nautiyal.mp3 ",filePath:"songs/4.mp3",coverPath:"covers/9.jpg"},

    {songName:"teri-nazron-ne-kuch-hindi-52919.mp3  ",filePath:"songs/3.mp3",coverPath:"covers/10.jpg"},



     




]

 songItems.forEach((element,i)=>{

  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("name")[0].innerText = songs[i].songName;
  


 })


//audioElement.play();
// handle play pause 
// masterPlay.addEventListener('click',()=>{


//     if(audioElement.paused||audioElement.currentTime<=0){

//         audioElement.play();
//         // masterPlay.classList.remove('fa-play-circle');
//         // masterPlay.classList.add('fa-pause-circle');

//     }
//     else{

//         audioElement.pause();
//         // masterPlay.classList.remove('fa-pause-circle');
//         // masterPlay.classList.add('fa-play-circle');

//     }
// })    z  1   x

// listen Events 

audioElement.addEventListener('timeupdate',()=>{
  
    // console.log('timeupdate');
    // update Seekbar
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);


//    console.log(progress);
   myProgressBar.value=progress;
  
  

})

 
 myProgressBar.addEventListener('change',()=>{


   audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

 })
 
 const makeAllPlays=()=>{

    
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        element.classList.remove('fa-pause-circle');

        element.classList.add('fa-play-circle');


     })

 }




 
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{

      makeAllPlays();
      songIndex= parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
    
     audioElement.src=`songs/${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     

    })





  })


 

   document.getElementById('next').addEventListener('click',()=> {
    
    if(songIndex>=10){
        songIndex=0;

    }
    else{
        songIndex+=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

   })


   

   document.getElementById('previous').addEventListener('click',()=> {
    
    if(songIndex<=0){
        songIndex=0;

    }
    else{
        songIndex-=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

   })



































