import ABI from "../abi/lottery_system.json" assert { type: "json" }
import {web3} from "../custom/index"
let lotteryContract 
async function contractConnection (){

    lotteryContract =await new web3.eth.Contract(
        ABI,
        "0x39A1383162A0e62DF8df24e5135f1F3AdCb626A0"
    );
//   lotterycontract.methods.openLottery(123,2343,99999999999999).send({from:accounts[0]});
    } 

    export {contractConnection,lotteryContract}