import { contractConnection,lotteryContract} from "../web3/contract_connection";
import {accounts} from "../custom/index"
async function close(_currentTime){
    await contractConnection()
    await lotteryContract.methods.closeLottery(_currentTime).send({from:accounts[0]})                                                        ;
}

export {close}

// send({from:accounts[0]}) 
