// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"



// import "../javascript/custom/index"  





import "./custom/index"



// import ABI from "./abi/lottery_system.json" assert { type: "json" }
//import Web3 from 'web3'
// let lotterycontract
// let web3

// $(async () => {
//     let accounts
//     let message = "testing";

//     if (typeof window.ethereum == "undefined") {

//         alert("Please Install Metamask");
//     } 
//     else {

//       const web3 = new Web3(window.ethereum);
//         accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//         message = `Login in via account ${accounts[0]}`
//         let signature = await web3.eth.personal.sign(message, accounts[0])
//         if (typeof (accounts) != "undefined" && accounts.length) 
//         {
//             $("#accno").html(accounts[0]);
//             console.log(web3.eth);
//         }
//         // turbo load for showing address in every nav bar 

//         $(document).on('turbo:load', async function () {
//           if (typeof (accounts) != "undefined" && accounts.length) 
//           {
//               $("#loginId").html(accounts[0]);
//                // console.log("signature : ", signature)
//           }
         
//       })

//         // abi and contract...
        
//        lotterycontract = new web3.eth.Contract(
//             ABI,
//             "0xb004fa8d2c69E51BFF8BBC0d04b2a393EFEFd90b"
//         );
//     //   lotterycontract.methods.openLottery(123,2343,99999999999999).send({from:accounts[0]});
 
//     }
    

    
// })

// export {web3,lotterycontract}









