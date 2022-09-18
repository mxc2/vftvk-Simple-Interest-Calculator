function compute()
{   
    var principal = document.getElementById("principal").value;
        
    if(principal > 0){ // No need to calculate/get data if principal not larger than 0
        var rate = document.getElementById("rate").value;   // Get amount of interest rate selected
        var years = document.getElementById("years").value; // Get amount of year entered
        const result = document.getElementById("result");

        var interest = principal * years * rate /100;   // Calculated interest
        var year = new Date().getFullYear()+parseInt(years);    // When the user gets it's money back
    
        result.innerHTML = "If you deposit " + "<span class='highlited-text'>" + principal + "</span>,<br/>at an interest rate of <span class='highlited-text'>" + rate + "%</span>.<br/>You will recieve an amount of <span class='highlited-text'>" + interest + "</span>,<br/>in the year <span class='highlited-text'>" + year + "</span>.<br/><br/>";
    }else{
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

// Update the span that shows the slider's value, when we move the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}