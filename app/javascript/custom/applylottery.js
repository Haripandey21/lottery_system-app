import {apply} from "../web3/apply_lottery";

$(document).on('turbo:load',function(){
    $('#applyLotterybtn').on("click",()=>{

    console.log("you are here after clicking apply button");

    _appliedTime= Date.parse(new Date())/1000;

   apply(_appliedTime);
      
    })

})