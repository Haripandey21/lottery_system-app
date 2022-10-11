import { contractConnection,lotteryContract} from "../web3/contract_connection";

async function close(_currentTime){
    await contractConnection()
    await lotteryContract.methods.closeLottery(_currentTime).send({})                                                        ;
}

export {close}

// send({from:accounts[0]}) 
