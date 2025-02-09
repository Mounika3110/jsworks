function hack() {
    let x = +prompt("Enter the pin");
    const pin = 7729;
    const valid = x === pin;
    if (valid) {
        alert("Access Granted");
        window.location.href = "details.html";
    } else {
        alert("Please enter a valid pin");
    }
}
function credit() {
    let x = +prompt("Enter the pin for Credit Access");
    const pin = 7729;
    const valid = x === pin;
    if (valid) {
        alert("Credit Access Granted");
        window.location.href = "credit.html"; 
    } else {
        alert("Invalid pin.");
    }
}

function debit() {
    let x = +prompt("Enter the pin for Debit Access");
    const pin = 7729;
    const valid = x === pin;
    if (valid) {
        alert("Debit Access Granted");
        window.location.href = "debit.html"; 
    } else {
        alert("Invalid pin.");
    }
}



