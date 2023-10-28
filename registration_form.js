function validateform()
{
var name=document.myform.name.value;
var password=document.myform.password.value;
if (name==null || name=="")
{
alert("Name can't be blank");
return false;
}
else if(password.length<6)
{
alert("Password must be at least 6 characters long.");
return false;
}
}

function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
    }
    }