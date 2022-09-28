// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"


import Web3 from 'web3'

$ (async () => {
    let accounts
    let account 
    let signature=null
    let message = "testing";

    if (typeof window.ethereum == "undefined") {
        
        alert("Please Install Metamask");
    } else {
       
        const web3 = new Web3(await Web3.givenProvider)
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        message = `Your want to Login in this website via account ${accounts[0]}`
        let signature = await web3.eth.personal.sign(message,accounts[0])
        console.log("signature : ",signature)
    }
    
})


        