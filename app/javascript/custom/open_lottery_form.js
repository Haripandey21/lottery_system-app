import {open} from '../web3/openlottery'

$(document).on('turbo:load',function(){
    $('#openLotterybtn').on("click",()=>{
    console.log("you are here after clicking button");

    var $inputs = $('#formId :input');

    var values = {};
    $inputs.each(function() {

        //  values[key]=value;
        values[this.id] = $(this).val();
    });
    
    values.form_open_time = Date.parse(values.form_open_time)/1000
    values.form_close_time = Date.parse(values.form_close_time)/1000
    open(values.form_open_time,values.form_close_time,values.form_lottery_price)
    })

})

