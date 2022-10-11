import { contractConnection,lotteryContract} from "../web3/contract_connection";
import {accounts} from '../custom/index'


async function apply(_appliedTime){
    await contractConnection()
    console.log("applying Time: ",_appliedTime)
    lotteryContract.methods.applyLottery(_appliedTime).send({from:accounts[0]})
}
    
export {apply}