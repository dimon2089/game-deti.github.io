//кнопка начала игры
const gameOne=document.getElementById('gameOne');
//массив элементов для примеров
const numberElements=document.querySelectorAll('.number');
//массив кнпок правильных ответов
const btnAnswerElements=document.querySelectorAll('.btnAnswer');
//кнопки выбора до скольки считаем
const btnSelectElements=document.querySelectorAll('.selection');
//кнопка ответа
const answerBtn=document.getElementById('answerBtn');
//sound
const controls=document.getElementById('controls');
let game=0;
let number1,number2,numberZnak,result;
let doSkolkiSchitaem=1;
let answer;
let numbrAnswer;
let src=["music/m1.mp3","music/m2.mp3","music/m3.mp3"];
let music=0;
controls.src="music/m1.mp3";
controls.addEventListener('ended',()=>{
    music++;
    if(music>src.length-1)music=0;
    controls.src=src[music];
    
    controls.play();
})
const addClass= (numbrAnswer,d) => {
    if (d==0){
          numberElements[5+numbrAnswer].classList.remove('disabled');
          numberElements[5+numbrAnswer].classList.add('active');
     }else
     {
        numberElements[5+numbrAnswer].classList.remove('active');
          numberElements[5+numbrAnswer].classList.add('disabled');
          
     } 
}
//убирание неправильного ответа 6 єле-та
numberElements[6].addEventListener('click',()=>{
    numbrAnswer=1;
    let d=1;
    addClass(numbrAnswer,d);
    numbrAnswer=0;
     answer=answer.substr(1,1);
     console.log("an="+answer);
});
//убирание неправильного ответа 7 єле-та
numberElements[7].addEventListener('click',()=>{
    numbrAnswer=2;
    let d=1;
    addClass(numbrAnswer);
    numbrAnswer=1;
    answer=answer.substr(0,1);
    
});
//нажатие на кнопку ответ
answerBtn.addEventListener('click',() =>{
   
    if(result==parseInt(answer)){
        
            numberElements[1].classList.add('disabled');
            numberElements[1].classList.remove('active');
            numberElements[4].classList.add('disabled');
            numberElements[4].classList.remove('active');
               
        beginGame();
    }
});
gameOne.addEventListener('click',() =>{
    (game==0)?game=1:game=0;
    switch(game){
    case 1:{
        gameOne.innerText="Закончить игру";
        beginGame();
    }
        break;
    case 0:{
        gameOne.innerText="";
        gameOne.innerText="Начать игру";
        window.location.reload();
       
        }
        break;
    }
       

});

//фун-ия проверки на какой ответ кликнули
const checkAnswer = el =>{
    console.log(el.target.dataset.id);
    if(game==1){
        (numbrAnswer==0)?numbrAnswer=1:numbrAnswer=2;
        let answer2=el.target.dataset.id;
        if(answer.length!=2)(numbrAnswer==1)?answer=answer2+answer:answer+=answer2;
        
        
            numberElements[5+numbrAnswer].attributes[1].textContent=`img/gif/z${el.target.dataset.id}.gif`;
            console.log('numbrAnswer='+numbrAnswer);
        console.log(" "+numberElements[5+numbrAnswer].classList.contains('active'));
            if(numberElements[5+numbrAnswer].classList.contains('active')){
            numberElements[5+numbrAnswer].classList.remove('active');
             }
             let d=0;
             addClass(numbrAnswer,d);      
                 
            
        }
    
    
}
//устанавливаем слушателя на кнопки ответов
for(btnAnswer of btnAnswerElements){
    btnAnswer.addEventListener('click',e => checkAnswer(e));
    }

for(btnSelect of btnSelectElements){
    btnSelect.addEventListener('click',e => {
        if(e.target.dataset.id==1){
       doSkolkiSchitaem=1;
       
       btnSelectElements[1].classList.remove('activebtn');
       btnSelectElements[0].classList.add('activebtn');
       
        }
        else {
            doSkolkiSchitaem=2;
            btnSelectElements[0].classList.remove('activebtn');
            btnSelectElements[1].classList.add('activebtn');
       
       
        }
     });
}


    


function beginGame() {
    numbrAnswer=0;
    answer="";
    
    controls.volume=0.5;
    
    
    controls.play();
   


    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * (10 * doSkolkiSchitaem - number1));
    let numberZnak = Math.floor(Math.random() * 2) + 1;
    let primer = "";
    let perem;
    if (numberZnak == 2 && number1 < number2) {
        perem = number2;
        number2 = number1;
        number1 = perem;
        
    }
    primer = `${number1} ${(numberZnak == 1) ? "+" : "-"} ${number2} =`;
    result = (numberZnak == 1)?number1+number2:number1-number2;



    
    numberElements.forEach(item => {

        switch (item.dataset.id) {
            case "0": {
                console.log("0");
                if (number1 < 10) {
                    item.attributes[1].textContent = `img/z${number1}.png`;
                } else
                    item.attributes[1].textContent = `img/z1.png`;
            }
                break;
            case "1": {
                
                if (number1 < 10)
                    break;
                item.classList.remove('disabled');
                item.classList.add('active');
                item.attributes[1].textContent = `img/z${number1 % 10}.png`;

            }
                break;
            case "2": {
                
                item.classList.remove('disabled');
                item.classList.add('active');
                item.attributes[1].textContent = `img/${(numberZnak == 1) ? "plus.png" : "minus.png"}`;
                
            }
                break;
            case "3": {
                
                if (number2 < 10) {
                    item.classList.remove('disabled');
                    item.classList.add('active');
                    item.attributes[1].textContent = `img/z${number2 % 10}.png`;
                } else
                    item.attributes[1].textContent = `img/z1.png`;
            }
                break;
            case "4": {
                
                if (number2 < 10)
                    break;
                item.classList.remove('disabled');
                item.classList.add('active');
                item.attributes[1].textContent = `img/z${number2 - 10}.png`;
            }
                break;
            case "5": {
                
                item.classList.remove('disabled');
                item.classList.add('active');
                item.attributes[1].textContent = `img/ravno.png`;
                
            }
                break;
            case "6": {
                
                item.classList.remove('disabled');
                item.classList.add('active');
                item.attributes[1].textContent = `img/vopros.png`;
                
            }
                break;
                case "7": {
                
                    item.classList.remove('active');
                    item.classList.add('disabled');
                    
                    
                }
                    break;
        }
        
    });
    
    
}

