import { contractConnection,lotteryContract} from "../web3/contract_connection";
import {accounts} from '../custom/index'
let opentime

async function open(_openTime, _closeTime,_lotteryPrice){
    await contractConnection()
    console.log("open time: ",_openTime)
    lotteryContract.methods.openLottery(_openTime, _closeTime,_lotteryPrice).send({from:accounts[0]})
    opentime= await lotteryContract.methods.openTime().call();
    console.log("opened time : ",opentime)
}
    
export {open,opentime}
