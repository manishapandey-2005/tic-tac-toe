let boxes = document.querySelectorAll("#box");
let resetbtn=document.querySelector("#reset");
let New = document.querySelector("#new");
let msgC = document.querySelector(".msg-container");
let m = document.querySelector("#msg")
let turnO=true;
const winpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,8],
[3,4,5],
[6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;

       }else{
        box.innerText="X";
        turnO=true;

       }
       box.disabled=true;


       checkwinner();
    });
});


const reset=() =>{
    turnO=true;
    enabled();
    msgC.classList.add("hide");
}
const disabled = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

    const enabled = () =>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }


}
const showwinner=(winner)=>{
    m.innerText=`Congratulations, winner is ${winner}`;
    msgC.classList.remove("hide");
    disabled();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
}

resetbtn.addEventListener("click",reset);
New.addEventListener("click",reset)