function verifAdd() {
    let mail=document.getElementById("mail").value;

    if(mail=="" || mail.indexOf("@")==-1 || mail.indexOf(".")==-1){
        alert("Invalid email");
        return false;
    }
    let tel= document.getElementById("tel").value; 

    if(!(tel.length==11 && chiffre(tel))){
        alert("Invalid phone number..");
        return false;
    }
    if (document.getElementById("cat").selectedIndex==0) {
        alert("choose a category");
        return false
    }
    let desc= document.getElementById("desc").value;
    if(document.getElementById("cat").selectedIndex==4 && desc=="") {
        alert("description must not be empty");
        return false;
    }
    alert("Complaint adding submitted please proceed to the processing page ");
    return true;
}
function verifprocess(){
    let dt=document.getElementById("dtr").value;
    if(dt==""){
        alert("Enter a date");
        return false;
    }

    let aa = dt.substring(0,4);
    let mm = dt.substring(5,7);
    let jj = dt.substring(8,10);
    
    if(!(dt.length==10 && chiffre(aa) && mm>= 1 && mm<=12 && jj>=1 && jj<=31)){
        alert("Invalid date.."); 
        return false;
    }
    if(document.getElementById("freq").selectedIndex==0){
        alert("Choose frequency");
        return false;
    }
    if(document.getElementById("worse").selectedIndex==0){
        alert("Choose an option");
        return false;
    }
    if(document.getElementById("note").value==""){
        alert("Write additional notes");
        return false;
    }
    alert("Complaint processing submitted please proceed to the contact page ");
    return true;
}
function chiffre(ch){
    for(let i=0; i<ch.length; i++){
        if(ch[i]<"0"|| ch[i]>"9"){
            return false;
        }
    }
    return true;
}
function verifContact(){
    let tel = document.getElementById("tel").value;
    let msg = document.getElementById("msg").value;

    if(!(tel.length==11 && chiffre(tel))){
        alert("Invalid phone number..");
        return false;
    }

    if(msg==""){
        alert("message must not be empty");
        return false;
    }

        alert("Message sent successfully");
    alert("your complaint has been successfully sent, thank you for your patience. ");
        return true;
}