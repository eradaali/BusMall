
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
let goatsClicks = [];
let goatsViews = [];

let goatsImagesNames = [];
function getImage (imgName){
    this.imgName = imgName.split('.')[0];
    this.sourse='img/' + imgName;
    this.view=0;
    this.click=0;
    arrayImg.push(this);
    goatsImagesNames.push(this.goatName);

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
    
let btn=document.getElementById('btn');
   let ulelement =document.getElementById('results');
   btn.addEventListener('click',result);
   let lielement;
   function result() {
    for (let i=0;i<arrayImg.length;i++){
        lielement=document.createElement('li');
        ulelement.appendChild(lielement);
        lielement.textContent= `${arrayImg[i].imgName} has ${arrayImg[i].view} view and has ${arrayImg[i].click} clicks.`
        
       
    }
    chartRender();
   }


leftimg.removeEventListener('click', clicks);
rightimg.removeEventListener('click', clicks);
centerimg.removeEventListener('click', clicks);

}
renderImg();

}


//  for(let i=0;i<imgarray.length;i++){
//      goatsClicks.push(arrayImg[i].click);
//      goatsViews.push(arrayImg[i].view);
//  }
console.log(goatsViews);
console.log(goatsClicks);
function chartRender() {
    for(let i=0;i<arrayImg.length;i++){
    goatsClicks.push(arrayImg[i].click);
     goatsViews.push(arrayImg[i].view);}
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imgarray,
            datasets: [{
                label: '# of Clicks',
                data: goatsClicks,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 3
            }, {
                label: '# of Views',
                data: goatsViews,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

