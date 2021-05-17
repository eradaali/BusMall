
'use strict';
let numAttempt = 0;
let maxNumAttempts = 25;
let attemptsElement = document.getElementById('attempt');
let arrayImg = [];
let leftimg =document.getElementById('leftImg');
let centerimg=document.getElementById('centerImg');
let rightimg =document.getElementById('rightImg');
let lindex =0;
let cindex;
let rindex;

function getImage (imgName){
    this.imgName = imgName.split('.')[0];
    this.sourse='img/' + imgName;
    this.view=0;
    this.click=0;
    arrayImg.push(this);

}
let imgarray=['/bag.jpg','/banana.jpg','/bathroom.jpg','/boots.jpg','/breakfast.jpg','/bubblegum.jpg','/chair.jpg','/cthulhu.jpg','/dog-duck.jpg','/dragon.jpg','/pen.jpg','/pet-sweep.jpg','/scissors.jpg','/shark.jpg','/sweep.png','/tauntaun.jpg','/unicorn.jpg','/water-can.jpg','/wine-glass.jpg'];

for (let i = 0; i < imgarray.length; i++) {
    new getImage(imgarray[i]);
}




function myimg (){
    return Math.floor(Math.random() * arrayImg.length);
}




function renderImg() {
    lindex = myimg();
    rindex=myimg();
    cindex=myimg();
    while (lindex === rindex === cindex){
    lindex=myimg();
    }
    console.log(lindex);
    leftimg.setAttribute('src', arrayImg[lindex].sourse);
    leftimg.setAttribute('title', arrayImg[lindex].sourse);
    arrayImg[lindex].view++;

    centerimg.setAttribute('src', arrayImg[cindex].sourse);
    centerimg.setAttribute('title', arrayImg[cindex].sourse);
    arrayImg[cindex].view++;


    rightimg.setAttribute('src', arrayImg[rindex].sourse);
    rightimg.setAttribute('title', arrayImg[rindex].sourse);
    arrayImg[rindex].view++;

    attemptsElement.textContent = attempt;
    console.log('left', lindex);

}

renderImg();
console.log(renderImg);
leftimg.addEventListener('click', clicks);
centerimg.addEventListener('click', clicks);
rightimg.addEventListener('click', clicks);


function clicks(event) {
    numAttempt++;
    if(numAttempt <=maxNumAttempts){
        console.log(event.target.id)
    
    if(event.target.id === 'leftImg'){
        arrayImg[lindex].click++;
    }
    else if(event.target.id === 'centerImg'){
        arrayImg[cindex].click++;
    }
    else if(event.target.id === 'rightImg'){
        arrayImg[rindex].click++;
    }}
else {
    

   let ulelement =document.getElementById('results');
   let lielement;
for (let i=0;i<arrayImg.length;i++){
    lielement=document.createElement('li');
    ulelement.appendChild(lielement);
    lielement.textContent= `${arrayImg[i].imgName} has ${arrayImg[i].view} view and has ${arrayImg[i].click} clicks.`

}
leftimg.removeEventListener('click', clicks);
rightimg.removeEventListener('click', clicks);
centerimg.removeEventListener('click', clicks);

}
renderImg();

}
