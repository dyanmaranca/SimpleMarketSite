//Declare global variables
var countShirtsdm = 0;
var countJacksdm = 0;
var countCapsdm = 0;
var reqnamedm = "";
var pnumdm = "";
var provdm = "";

function checkout() {

   errorHandling();

   //check if error message is available for each of the required fields
   let errorDiv = document.getElementById("error").innerText.length;
   if (errorDiv == 0) {
       getReceipt();
   }   //if error is available, will not be able to proceed with receipt until all valid information is re-entered correctly
}

function errorHandling() {
   //Validate item count fields has a valid number and at least 1 item is entered
   let countSumdm = 0;
   countShirtsdm = Number(document.getElementById('sshirt').value);
   countJacksdm = Number(document.getElementById('sjackets').value);
   countCapsdm = Number(document.getElementById('scaps').value);
   countSumdm = countShirtsdm + countJacksdm + countCapsdm;

   if (countSumdm == 0 || isNaN(countSumdm)) {
         document.getElementById('counterror').innerHTML = "Please enter at least 1 item and/or valid number only";
   } else document.getElementById('counterror').innerHTML = "";

   //Validate that name is not empty and in correct format, if not return an error message
   reqnamedm = document.getElementById('name').value;
   let nameRegdm = /^(\w+\s\w+\s?\w*)$/;
   if (nameRegdm.test(reqnamedm) == false) {
      document.getElementById('nameerror').innerHTML = "Please enter First and Last name";
   } else document.getElementById('nameerror').innerHTML = "";

   //Validate that customer phone number format is correct
   pnumdm = document.getElementById('phone').value;
   let pnumRegdm = /^\(?(\d{3})\)?\-(\d{3})\-(\d{4})$/;
   if (pnumRegdm.test(pnumdm) == false) {
      document.getElementById('phoneerror').innerHTML = "Please enter valid phone number and in correct format";
   } else document.getElementById('phoneerror').innerHTML = "";

   //Validate that province is selected
   provdm = document.getElementById('province').value;
   if (provdm == "") {
      document.getElementById('provinceerror').innerHTML = "Please select a province";
   } else document.getElementById('provinceerror').innerHTML = "";
 }

 function getReceipt () {

   //Create header
   let receiptPage = '<h3>Invoice</h3>';

   //Create table 1 with name, email and credit card information
   receiptPage += '<table> <tr> <td class="head">Name</td> <td>'+reqnamedm+ '</td> </tr>';
   receiptPage += '<tr> <td class="head">Phone</td> <td>'+pnumdm+ '</td> </tr>';
   receiptPage += '<tr> <td class="head">Province</td> <td>'+provdm+ '</td> </tr> </table>';

   //Create table 2 
   receiptPage += '<table> <tr> <th>Item</th> <th>Quantity</th> <th>Unit Price</th> <th>Total Price</th> </tr>'
 
   if ((countShirtsdm) > 0){ //this is to check number of shirts and return total amount if not 0
      var shirtAmountdm = countShirtsdm * 15;
      let displaySTdm = parseFloat(shirtAmountdm).toFixed(2);
      receiptPage += '<tr> <td>T-shirts</td> <td class="center">' + countShirtsdm + '</td> <td class="right">$15.00</td><td class="right">$' + displaySTdm + '</td> </tr>';
  } else shirtAmountdm = 0;

   if ((countJacksdm) > 0){ //this is to check number of shirts and return total amount if not 0
      var jacksAmountdm = countJacksdm * 50;
      let displayJackdm = parseFloat(jacksAmountdm).toFixed(2);
      receiptPage += '<tr> <td>Jackets</td> <td class="center">' + countJacksdm + '</td> <td class="right">$50.00</td><td class="right">$' + displayJackdm + '</td> </tr>';
  } else jacksAmountdm = 0;

  if ((countCapsdm) > 0){ //this is to check number of shirts and return total amount if not 0
   var capsAmountdm = countCapsdm * 10;
   let displayCapdm = parseFloat(capsAmountdm).toFixed(2);
   receiptPage += '<tr> <td>Caps</td> <td class="center">' + countCapsdm + '</td> <td class="right">$10.00</td><td class="right">$' + displayCapdm + '</td> </tr>';
} else capsAmountdm = 0;

let subtotaldm = shirtAmountdm + jacksAmountdm + capsAmountdm;
let totaltaxdm = subtotaldm * .13;

receiptPage += '<td></td> <td></td>  <td class="bold">SubTotal</td> <td class="bold">$'+subtotaldm.toFixed(2)+'</td> </tr>';
receiptPage += '<td></td> <td></td>  <td class="bold">Tax @ 13%</td> <td class="bold">$'+totaltaxdm.toFixed(2)+'</td> </tr>';

let discountdm = 0;
if (provdm == "Ontario") {
   discountdm = subtotaldm * .10;
   receiptPage += '<td></td> <td></td>  <td class="bold">Discount</td> <td class="bold">($'+discountdm.toFixed(2)+')</td> </tr>';
} else discountdm = 0;

let totalSalesdm = subtotaldm + totaltaxdm - discountdm;

receiptPage += '<td></td> <td></td>  <td class="bold">Total</td> <td class="bold">$'+totalSalesdm.toFixed(2)+'</td> </tr>';

receiptPage += ' </table>';

   document.getElementById("form").innerHTML = receiptPage;

 }