import { contractConnection,lotteryContract } from "../web3/contract_connection";

async function lotterybalance(_lotteryNumber){
    await contractConnection()
    return await lotteryContract.methods.lotteryPrice().call()
}

export {lotterybalance}

