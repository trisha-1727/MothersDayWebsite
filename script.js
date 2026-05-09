// LOADER

setTimeout(()=>{
  document.getElementById('loader').style.opacity='0';

  setTimeout(()=>{
    document.getElementById('loader').style.display='none';
  },1000);

},3200);


// CURSOR

const cursor=document.querySelector('.cursor');

document.addEventListener('mousemove',(e)=>{

  cursor.style.left=e.clientX+'px';
  cursor.style.top=e.clientY+'px';

  // sparkle

  const sparkle=document.createElement('div');
  sparkle.classList.add('sparkle');

  sparkle.style.left=e.clientX+'px';
  sparkle.style.top=e.clientY+'px';

  document.body.appendChild(sparkle);

  setTimeout(()=>{
    sparkle.remove();
  },800);

});


// FLOATING HEARTS

function createHeart(){

  const heart=document.createElement('div');

  heart.classList.add('heart');
  heart.innerHTML='♡';

  heart.style.left=Math.random()*100+'vw';
  heart.style.bottom='-20px';

  heart.style.fontSize=(Math.random()*20+15)+'px';

  heart.style.animationDuration=
  (Math.random()*5+5)+'s';

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },10000);
}

setInterval(createHeart,500);


// MUSIC

const music=document.getElementById('bgMusic');
let playing=false;

function toggleMusic(){

  if(!playing){
    music.play();
    playing=true;
  }

  else{
    music.pause();
    playing=false;
  }

}