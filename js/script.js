const procesEntries = evt =>{
    const email1 = $("#email_1").value
    const password = $("#password").value
    let isValid = true;

   /* if($("#email_1").value=="" || $("#password").value=="")
    {
        alert("Missing fields");
        evt.preventDefault();
    }*/

    if(email1 == "")
    {
        $("#error1").textContent = "Email is required";
        isValid = false;
    }
    else
    {
        $("#error1").textContent = "";
    }

    if(password == "")
        {
            $("#error2").textContent = "Password is required";
            isValid = false;
        }
        else
        {
            $("#error2").textContent = "";
        }


    if(!isValid)
    {
        evt.preventDefault();
    }
}

const $ =selector => document.querySelector(selector);

const joinList = () =>{
    $("#join_list").addEventListener("click", procesEntries)
};

document.addEventListener("DOMContentLoaded", joinList);