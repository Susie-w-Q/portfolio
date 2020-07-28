
//Contact Us Form Validation//


function checkForBlank() {

    var errormessage="";

    if (document.getElementById('firstname').value === "") {
        errormessage += "Please fill out your first name \n";
        document.getElementById('firstname').style.borderColor = "red";
    }

    if (document.getElementById('lastname').value === "") {
        errormessage += "Please fill out your last name \n";
        document.getElementById('lastname').style.borderColor = "red";
    }

    if (errormessage != "") {
        alert(errormessage);
        return false;
    }

  

}


  