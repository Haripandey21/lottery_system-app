import {apply} from "../web3/apply_lottery";
// import {opentime} from "../web3/open_lottery"

$(document).on('turbo:load',async function(){
    // console.log("opnennn : ",opentime)
    // $('#lotteryPrice').html(opentime);

    $('#applyBtn').on("click",()=>{
    console.log("you are here after clicking apply button...");

    let _appliedTime= Date.parse(new Date())/1000;
    console.log("applied time :",_appliedTime);

   apply(_appliedTime);   
    })
    
})

