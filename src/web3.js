import Web3 from 'web3';

let web3;
if (window.ethereum) {
   web3 = new Web3(window.ethereum);
    try { 
       window.ethereum.enable().then(function() {
           // User has allowed account access to DApp...
           console.log('success NN')
       });
    } catch(e) {
       // User has denied account access to DApp...
    }
 }
 // Legacy DApp Browsers
 else if (window.web3) {
     web3 = new Web3(web3.currentProvider);
 }
 // Non-DApp Browsers
 else {
     alert('You have to install MetaMask !');
 }
export default web3;
