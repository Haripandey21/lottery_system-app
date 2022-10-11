import {close} from "../web3/close_lottery";


$(document).on('turbo:load',async function(){
    
    $('#closeLotteryBtn').on("click",()=>{
    console.log("you are here after clicking closing button...");

    let _currentTime= Date.parse(new Date())/1000;
    console.log("applied time :",_currentTime);

   close(_currentTime);
    })
    
})




