import { contractConnection,lotteryContract} from "../web3/contract_connection";
import {accounts} from '../custom/index'


async function apply(_appliedTime){
    await contractConnection()
    console.log("applying Time: ",_appliedTime)
    opentime= await lotteryContract.methods.openTime().call();
    console.log("opened time : ",opentime)
    let _lotteryPrice= await lotteryContract.methods.lotteryPrice().call();
    console.log(_lotteryPrice);
    await lotteryContract.methods.applyLottery(_appliedTime).send({from:accounts[0],value:_lotteryPrice})
}
    
export {apply}

