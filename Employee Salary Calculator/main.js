function salaryCalculate(){
    let basicSalary = document.forms["salaryForm"]["basicSalary"].value
    let bonus = document.forms["salaryForm"]["bonus"].value
    let deduction = document.forms["salaryForm"]["deduction"].value
    totalSalary = basicSalary+bonus-deduction
    document.getElementById("totalSalary").innerHTML = totalSalary
}