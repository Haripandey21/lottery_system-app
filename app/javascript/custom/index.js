import Web3 from 'web3';

let web3 
let accounts 
let message 
$(async function(){
    if (typeof window.ethereum !== 'undefined') {
       
        web3= new Web3(await Web3.givenProvider)
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        message = `Your want to Login in this website via account ${accounts[0]}`

        if (await checkSignature(message)){
            login()
        }   
        
    }else{
        alert("Please install metamask");   
    }
})


$(document).on('turbo:load',function(){
    login()          
})

 // check signature in local starage ....
const checkSignature = async(message)=>{
    console.log("localstorage from",window.localStorage.getItem('signature'))
    if((localStorage.getItem('signature'))=='true')
    {
        return true
    }
    else{
        await web3.eth.personal.sign(message,accounts[0])
        localStorage.setItem('signature','true');
        return true
    }
}


const login = ()=>{
    if((typeof(accounts) != "undefined") && accounts.length ){
        $("#loginId").html(accounts[0])
        $('#logoutId').removeClass('d-none')
    }  
}

export {web3 , accounts}