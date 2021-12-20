let fname=document.getElementById("names");
let mail=document.getElementById("emails");
let ag=document.getElementById("ages");
let pwd=document.getElementById("pass");
let button=document.getElementById("mybtn");
let jsform=document.getElementById("form_id");
function validate_name(name)
{
    var containsDigit = /\d/;
    if(containsDigit.test(name))
{
    return false;
}
else{
    return true;
}
}

function validate_age(age){
    if (age>0 && age<99) 
{
    return true;
}
else{
    return false;
}

}
function validate_password(pwd)
{
    if(pwd.length <= 5 || pwd.length > 20){
        return false;
    
    
    }
    else{
        return true;
    }
}
button.addEventListener('click',(e) =>{
         e.preventDefault();
         a=fname.value;
         b=mail.value;
         c=ag.value;
         d=pwd.value;
    var p=validate_name(a);
    /*var q=validate_email(b);*/
    var r=validate_age(c);
    var s=validate_password(d);
    if(p===false || r===false || s===false)
    {
        if(p===false){
            alert("Name must not have numbers");
        }
        /*if(q===false){
            alert("Invalid email");
        }*/
        if(r===false){
            alert("Age must be between 1 to 99");
        }
        if(s===false){
            alert("password must be alphanumeric");
        }
    }
    else{
        var firstdiv=document.createElement("div");
        firstdiv.className="text-center p-5 divcls1";
        firstdiv.id="divid1";
        jsform.appendChild(firstdiv);
        var p1=document.createElement('p');
        p1.className ='pclass1';
        p1.id='pid1';
        firstdiv.appendChild(p1);
        document.getElementById("pid1").innerHTML="<center><b>REGISTRATION COMPLETED</b></center>";
    
         
            var seconddiv=document.createElement('div');
            seconddiv.className="form-group mb-2 col-lg-5";
            jsform.appendChild(seconddiv);
            var p2 = document.createElement("label");
            p2.className="font-weight-regular";
            p2.innerHTML = "<b>Name:</b>";
            seconddiv.appendChild(p2);
            var name_label=document.createElement("label");
           
            name_label.className="font-weight-regular";
            name_label.id="name";
            name_label.innerHTML=fname.value;
            name_label.setAttribute("for","name");
            seconddiv.appendChild(name_label);
           
            
              
        
        
            var div3=document.createElement('div');
            div3.className ="form-group mb-2 col-lg-5"
            jsform.appendChild(div3);
            var email = document.createElement("label")
            email.className ="font-weight-regular form-label";
            email.innerHTML = "<b>Email:</b>";
            div3.appendChild(email);
            var email_textbox=document.createElement("label");
            email_textbox.className ="font-weight-regular";
            email_textbox.id="emails";
            email_textbox.innerHTML=mail.value;
            div3.appendChild(email_textbox);
        
            var fourthdiv=document.createElement('div');
            fourthdiv.className =" form-group mb-2 col-lg-5";
            jsform.appendChild(fourthdiv);
            var p4 = document.createElement("label")
            p4.className ="font-weight-regular form-label";
            p4.innerHTML = "<b>Age:</b>";
            fourthdiv.appendChild(p4);
            var age_textbox=document.createElement("label");
            
            age_textbox.className ="font-weight-regular";
            age_textbox.id="age";
            age_textbox.innerHTML=ag.value;
            fourthdiv.appendChild(age_textbox);

            var div5=document.createElement('div');
            div5.className =" form-group mb-2 col-lg-5";
            jsform.appendChild(div5);
            var p5 = document.createElement("label")
            p5.className ="font-weight-regular form-label";
            p5.innerHTML = "<b>Password:</b>";
            div5.appendChild(p5);
            var pw_textbox=document.createElement("label");
            
            pw_textbox.className ="font-weight-regular";
            pw_textbox.id="pass";
            pw_textbox.innerHTML=pwd.value;
            div5.appendChild(pw_textbox);
        
        }
         


});
