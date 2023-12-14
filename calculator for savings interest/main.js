function savingCalculator(){
    // let initialSavings, annualInterest, savingPeriod, totalSavings
    initialSavings = parseFloat(document.forms["savingForm"]["initialSavings"].value)
    annualInterest = parseFloat(document.forms["savingForm"]["annualInterest"].value)
    savingPeriod = parseFloat(document.forms["savingForm"]["savingPeriod"].value)
    totalSavings = initialSavings + initialSavings*((annualInterest/100)*(savingPeriod/12))
    if (totalSavings){
        document.getElementById("calcResult").innerHTML = totalSavings 
    }
    else{
        document.getElementById("calcResult").innerHTML = "Masukkan value yang valid!" 
    }
}