import ABI from "../abi/lottery_system.json" assert { type: "json" }
import {web3} from "../custom/index"
let lotteryContract 
async function contractConnection (){

    lotteryContract = new web3.eth.Contract(
        ABI,
        "0xb004fa8d2c69E51BFF8BBC0d04b2a393EFEFd90b"
    );
//   lotterycontract.methods.openLottery(123,2343,99999999999999).send({from:accounts[0]});
    } 

    export {contractConnection,lotteryContract}