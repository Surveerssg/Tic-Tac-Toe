let boxes=document.querySelectorAll('.box');
    let resetBtn=document.querySelector('#reset-btn')
    let newGameBtn = document.querySelector("#new-btn");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");
    let play_O=true;
    let count=0;
    let winner=false;
    boxes.forEach((box) =>{
        //Applying event listener on each box
        box.addEventListener('click', function(){
            if(play_O===true){
                box.style.color='black';
                box.innerHTML='0';
                play_O=false;
                count++;
            }
            else{
            box.style.color='maroon';
             box.innerHTML='X';
            play_O=true;   
           count++;}
            box.disabled=true;

            checkWinner();
        });
    })
 const winPatterns=[
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
 ];

 //Game jeetne ke bad aur kisi box pe click na karpaye
 function disableBoxes(){
    for(let box of boxes){
        box.disabled=true;
    }
 }
 function enableBoxes(){
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=''
    }
 }
 function showWinner(winner){
    if(winner==='Draw')
    msg.innerHTML='Game is a Draw!!';
else{
    msg.innerHTML=`Congratulations! Winner is ${winner}`;
}
 msgContainer.classList.remove("hide");
 }
function checkWinner(){
    
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!='' && pos2Val!='' && pos3Val!='')
        {if(pos1Val===pos2Val && pos2Val===pos3Val)
    {
        // console.log('winner', pos1Val);
        disableBoxes();
        winner=true;
        showWinner(pos1Val);
    }
}
    }
    if(count===9 && !winner){
        showWinner("Draw")
    }
}
function newGame(){
    winner=false;
    count=0;
    play_O=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

newGameBtn.addEventListener('click', newGame);
resetBtn.addEventListener('click', newGame);