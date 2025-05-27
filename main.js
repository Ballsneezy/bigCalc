 // set all the cosnt parameters 
 const display  = document.querySelector('.display'); //display window
 const numBtn = document.querySelectorAll('.btn-num'); // number buttons
 const opBtn = document.querySelectorAll('.btn-op'); // ops buttons
 const equalsBtn = document.getElementById('equals'); // equal button
 const clear = document.getElementById('clear'); // clear button
 
 // Operations 
 const add = (a,b) => a + b;
 const sub = (a,b) => a - b;
 const multi = (a,b) => a * b;
 const divide = (a,b) => a / b;

 //storage variables 
 let num1 = '';
 let num2 = '';
 let op = ''; // clears the 3 values 
 let isSecondNum = false; //??

 //operation function 
 function operate (a,b,op){

    switch(op){
        case '+': return add(a,b);
        case '-': return sub(a,b);
        case '*': return multi(a,b);
        case '/': return divide(a,b);
        default: return 'BOI';
    }
 }

// handles all the clicks for the num button
 numBtn.forEach(button => {
    button.addEventListener('click', () =>{
        if(!isSecondNum) { // if not on the second number yet,
                           //keep adding the string to the num1 variable
            num1 += button.value;
            display.value = num1; 
        } else {
            num2 += button.value;
            display.value = num2;
        }
    });
 });


 // handles the ops buttons 
 opBtn.forEach(button => {
    button.addEventListener('click', () =>{
        if (num1 === '') return; // if the first number is blank
                                // leave it blank 
        if(num1 && num2 && op ){
            num1 = operate( Number(num1), Number(num2), op).toString();
            num2 = '';
            display.value = num1;
        }
        operator = button.value; 
        isSecondNum = true; 
    });
 });

 // handles equal button 
 equalsBtn.addEventListener('click', () => {
    if(!num1 || !num2 || !op) return;
    const result = op(Number(num1), Number(num2), op);
    display.value = result;
    num1 = result.toString();
    num2 = '';
    op = '';
    isSecondNum = false;
 });

 // clear button
 clear.addEventListener('click', () => {
    let num1 = '';
    let num2 = '';
    let op = ''; 
    let isSecondNum = false;
    display.value = '';

 })