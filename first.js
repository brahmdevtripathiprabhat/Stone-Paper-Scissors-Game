let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const user_scorepara=document.querySelector("#user-score");
const comp_scorepara=document.querySelector("#comp-score");
const draw=()=>{
console.log("game was draw")
msg.innerText=" game was draw play again";
msg.style.backgroundColor="#081b31";

}
const showwinner=(user_win,choice_id,computerchoice)=>{
if(user_win==true){
    // console.log("you win!");
    user_score++;
    user_scorepara.innerText=user_score;
    msg.innerText="you win!";
    msg.style.backgroundColor="green";
}
else{
    // console.log("you loss");
    comp_score++;
    comp_scorepara.innerText=comp_score;
    msg.innerText="you loss";
    msg.style.backgroundColor="red";
}

};

// function for generate random choice by computer
const generate_comp_choice=()=>{
str_option=["rock","paper","scissors"];
const rand_choice= Math.floor(Math.random()*3);
return str_option[rand_choice];
};



const play_game=(choice_id)=>{
     let user_choice=console.log("user choice=",choice_id);
//generate computer choice
const computerchoice=generate_comp_choice();// choice id means user choice id
console.log(" computer choice =",computerchoice);
if(choice_id==computerchoice){
    const drawmsg= draw();
}
else{
let user_win=true;
//first case 
if(choice_id==="rock"){
    //computer choice can be paper or scissors
    user_win= computerchoice==="paper"?false:true;
    //case second
} else if(choice_id==="paper"){
    //computer choice can be rock or scissors
    user_win=computerchoice==="scissors"?false:true;
}
//case 3rd
else{
//computer choice can be rock,paper
user_win=computerchoice==="rock"?false:true;

}
showwinner(user_win);

}
};





//user choice
choices.forEach((choice)=>{
console.log(choice);
choice.addEventListener(("click"),()=>{
     let  choice_id=choice.getAttribute("id");
play_game(choice_id);//passing userchoice to play game function to know about user choice
})

})