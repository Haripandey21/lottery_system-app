import { contractConnection,lotteryContract} from "../web3/contract_connection";
import {accounts} from '../custom/index'


async function apply(_appliedTime){
    await contractConnection()
    console.log("applying Time: ",_appliedTime)
    // opentime= await lotteryContract.methods.openTime().call();
    // console.log("opened time : ",opentime)
    let _lotteryPrice= await lotteryContract.methods.lotteryPrice().call();
    console.log("lottery price :",_lotteryPrice);
    await lotteryContract.methods.applyLottery(_appliedTime).send({from:accounts[0],value:_lotteryPrice})
    console.log("lottery applied successfully !!!")

    
    
    lotteryContract.getPastEvents('lotteryApplied', {}, 
    (error, events)=> { console.log("applied time :  ", events[0].returnValues.appliedTime); 
console.log("participant address :  ", events[0].returnValues.participants)}) 
    .then(function(events){
        // console.log("events are here ",events) // same results as the optional callback above
    });
    function alert() {
        alert("applied Time:",events[0].returnValues.appliedTime);
      }

}
    
export {apply}
