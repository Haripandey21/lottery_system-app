import { Button } from "bootstrap";
import {apply} from "../web3/apply_lottery";

$(document).on('turbo:load',function(){
    $('#applyBtn').on("click",()=>{

    console.log("you are here after clicking apply button...");

    let _appliedTime= Date.parse(new Date())/1000;
    console.log(_appliedTime);

   apply(_appliedTime);   
    })

})