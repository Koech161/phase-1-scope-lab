// Write your solution in this file!
 window.customerName = 'bob'
 const leastFavoriteCustomer= 'Ben'
 function upperCaseCustomerName(){ 
    if(window.customerName){
        window.customerName=window.customerName.toUpperCase();
    }
 }
 function setBestCustomer(){
    window.bestCustomer='not bob'
 } 
  function overwriteBestCustomer(){
window.bestCustomer='maybe bob'
 } 

 function changeLeastFavoriteCustomer(favorite){
   leastFavoriteCustomer= favorite
  
 }