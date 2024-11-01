let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true;
let winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgames=()=>{
    turnO=true;
     enablegames();
     msgcontainer.classList.add("hide");
    }

 
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    
    

    if(turnO){
        box.innerText="O";
        box.classList.add("blue");
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
  });
});
const disabled=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enablegames=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
  }
function showWinner(winner){
  msg.innerText =` Congratulation Winner is :${winner}`;
  msgcontainer.classList.remove("hide");
  disabled();
}

function checkwinner(){
    for(pattern of winningpattern){
     
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" &&pos2Val!= "" &&pos3Val!=""){
        
          if(pos1Val==pos2Val&&pos2Val==pos3Val){
                showWinner(pos1Val);
            }
        
         
                }
            
                
     }
    }
    newbtn.addEventListener("click",resetgames);
    resetbtn.addEventListener("click",resetgames);
    
            
        
    
