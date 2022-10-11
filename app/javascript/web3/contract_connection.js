import ABI from "../abi/lottery_system.json" assert { type: "json" }
import {web3} from "../custom/index"
let lotteryContract 
async function contractConnection (){

    lotteryContract =await new web3.eth.Contract(
        ABI,
        "0x3ff67410A0003aE8BD506c2AC92c8D78111DAD02"
    );
//   lotterycontract.methods.openLottery(123,2343,99999999999999).send({from:accounts[0]});
    } 

    export {contractConnection,lotteryContract}