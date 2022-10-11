import {open} from '../web3/openlottery'

$(document).on('turbo:frame-load',function(){
    
    $('#createLotterybtn').on("click",()=>{

    var $inputs = $('#formData :input');

    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        values[this.id] = $(this).val();
    });
    
    values.form_open_Time = Date.parse(values.form_open_Time)/1000
    values.form_close_Time = Date.parse(values.form_close_Time)/1000
    console.log(values.form_open_Time)
    open(values.form_open_Time,values.form_close_Time,values.form_lottery_price)
    })

})

