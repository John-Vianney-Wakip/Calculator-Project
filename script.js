let greet= confirm("Hello and Welcome to Calculator calculates. You can perform addition, Subtraction, Multiplication and Dividion here for quick results. Select Ok button to continue and Cancel to Exit");

if(greet===false){
    alert("Thanks for Coming by. For future calculations, make sure to visit us!");
}else if (greet===true){

let operation1 = confirm("Do you want to do addition? If NO, Keep Pressing the CANCEL button for other math operations");

if(operation1 === true){
let num1= prompt("Enter First Number");
let num2= prompt("Enter Second Number");

let result= (Number(num1) + Number(num2));

alert(`Your answer is ${result}`);
}else if (operation1 === false){

    let operation2 = confirm("Do you want to do subtraction?");

    if(operation2 === true){
        let num1= prompt("Enter First Number");
        let num2= prompt("Enter Second Number");
        
        let result= (Number(num1) - Number(num2));
        
        alert(`Your answer is ${result}`);
    }else if(operation2===false){
        let operation3 = confirm("Do you want to do Multiplication?");
        if(operation3===true){

            let num1= prompt("Enter First Number");
            let num2= prompt("Enter Second Number");
        
            let result= (Number(num1) * Number(num2));
        
        alert(`Your answer is ${result}`);

        }else if(operation3===false){
            let operation4 = confirm("Do you want to do Division?");
            if(operation4===true){

            let num1= prompt("Enter First Number");
            let num2= prompt("Enter Second Number");
        
            let result= (Number(num1) / Number(num2));
        
        alert(`Your answer is ${result}`);

            }else{
                alert("Thanks for visiting Calculator calculates.");
            }
        }
    }

 }
}