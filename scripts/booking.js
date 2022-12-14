/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dayCounter = 0;
var dailyRate = 35;
var totalCost = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function dayClicked(day){
    if (!day.classList.contains('clicked')) {
        dayCounter += 1;
        day.classList.add('clicked');
    }
    else if (day.classList.contains('clicked')) {
        day.classList.remove('clicked');
        dayCounter -=1;
    }
    calculate();
}

document.getElementById("monday").addEventListener("click",function (){dayClicked(document.getElementById("monday"));});
document.getElementById("tuesday").addEventListener("click", function (){dayClicked(document.getElementById("tuesday"));});
document.getElementById("wednesday").addEventListener("click", function (){dayClicked(document.getElementById("wednesday"));});
document.getElementById("thursday").addEventListener("click", function (){dayClicked(document.getElementById("thursday"));});
document.getElementById("friday").addEventListener("click", function (){dayClicked(document.getElementById("friday"));});
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearButton(){
    dayCounter = 0;
    totalCost = 0;
    document.querySelectorAll('li').forEach(li => {
        li.classList.remove('clicked');
        calculate();
    });
}

document.getElementById("clear-button").addEventListener("click",clearButton);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

document.getElementById('half').addEventListener("click", function(){
    document.getElementById("full").classList.remove('clicked');
    document.getElementById("half").classList.add('clicked');
    dailyRate = 20;
    calculate();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById('full').addEventListener("click", function(){
    document.getElementById("half").classList.remove('clicked');
    document.getElementById("full").classList.add('clicked');
    dailyRate = 35;
    calculate();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    totalCost = dayCounter * dailyRate;
    document.getElementById("calculated-cost").innerHTML = totalCost;
}
