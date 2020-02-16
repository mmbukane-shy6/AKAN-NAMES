var submit = document.getElementById("submit");

submit.addEventListener("click", function() {

    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];   
    
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var dd = document.getElementById("day").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var date = new Date(yy + "-" + mm + "-" + dd);
    var dayOfBirth = date.getDay();
    var female = document.getElementById("female").value;  
    var male = document.getElementById("male").value;
    var output = document.getElementById("output");

    if (dd < 1 || dd > 31) {
        alert("oopsy");
    } else if (mm < 1 || mm > 12) {
        alert("oopsy");

    } else if (yy.toString().length !== 4) {
        alert("oopsy");
    } else if (male.checked) {
        output.innerHTML = "hello! you were born on " +  daysOfWeek[dayOfBirth] +", and your Akan name is " + maleAkanNames[dayOfBirth];
    } else {
        output.innerHTML = "hello! you were born on " +   daysOfWeek[dayOfBirth] +",  and Your Akan Name is " + femaleAkanNames[dayOfBirth];
    }
})
