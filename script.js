jQuery(document).ready(function(){

    //Variables
    var name;


   setDate();
   

    $("._ai_icons_img").on('click',function(){
        removeDissapear();
    })
    
    $("._sub").on("click", function(){
        name = document.getElementById("firstName").value;

        if(document.getElementById("firstName").value.length == 0){
            alert("Name is required");
        }
        else{
            timmyAi("Hi i'm Timmy");
            timmyAi("How are you Today " + name);
        }
        document.getElementById("firstName").value = '';
    })


    $("#send").on("click",function(){
        getInput();

        var doc = document.getElementById("inputMsg").value.toLowerCase();
       
        if(doc == "hello"){ timmyAi("Hello to you too");}
        else if(doc == "how are you today"){
            timmyAi("I'm doing just fine");
        }
        else{
            timmyAi("I didn;t quite get that");
        }
        
        document.getElementById("inputMsg").value = '';
    })

})

function selectedAi(newAi){
    document.querySelector('._icon').src = newAi;
    document.querySelector('._icon_pic').src = newAi;

}
function removeDissapear(){
    var doc = document.getElementById("selected");
    doc.classList.remove("_dissapear");

    var chatContent = document.getElementById("mainChatBox");
    chatContent.classList.remove("_dissapear");
}
function getInput(){
    var doc = document.getElementById("inputMsg").value;
    var newMsg = document.createElement("LI");
    var node = document.createTextNode(doc);
    newMsg.setAttribute("class", "_msg_p");
    newMsg.appendChild(node);
    var element = document.getElementById("msg_ul");

    element.appendChild(newMsg);

    // return doc;
}


function setDate(){
    var d = new Date();
    var numDate = d.getDate();
    var yr = d.getFullYear();

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var month = month[d.getMonth()];

    var days = new Array();
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    days[7] = "Sunday";

    var day = days[d.getDay()];

    // document.getElementById("theTime").innerHTML = d;
    document.getElementById("theTime").innerHTML = day+", "+month+" "+numDate+", "+yr;
}


function timmyAi(speak){
    speak;

    var newAiMsg = document.createElement("LI");
    var node = document.createTextNode(speak);
    newAiMsg.setAttribute("class", "_ai_msg_p");
    newAiMsg.appendChild(node);
    var element = document.getElementById("msg_ul");
    element.appendChild(newAiMsg);
    
}