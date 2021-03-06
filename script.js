var INDEX = 0;
var aiName;
jQuery(document).ready(function() {

    //Local Variables
    var name;
    setDate();
    $("._ai_icons_img").on('click', function() {
        removeDissapear();
    })

    $("._sub").on("click", function() {
        var name = $("#firstName").val();

        if (name == '') {
            alert("Name is required");
            return false;
        } else {
            introMessage(name, aiName);
            generate_manual_message("How Old are you?", 'user');
        }
        document.getElementById("firstName").value = '';

        $("._user_name").hide();
    })


    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var incMsg = $("#chat-input").val().toLowerCase();
        if (incMsg.trim() == '') {
            return false;
        }
        generate_message(incMsg, 'self');

        setTimeout(function() {
            generate_message(incMsg, 'user');

            init_convo(doc);
        }, 1000)


        document.getElementById("chat-input").value = '';
    })

    // $(".chat-box-toggle").click(function() {
    //     $("#chat-circle").toggle('scale');
    //     $(".chat-box").toggle('scale');
    // })




    /**
     * This function allows the ai to create messages based on the input from the user.
     * It registers the user input and out puts in back again to the screen.
     * @param {*} msg Incoming message
     * @param {*} type type of message to be created 'self' or 'user'
     */
    function generate_message(msg, type) {
        INDEX++;
        var newStr = "";
        newStr += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        newStr += " <div class=\"cm-msg-text\">";
        newStr += msg;
        newStr += "  </div>";
        newStr += "</div>";

        $(".chat-logs").append(newStr);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('')
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }


    /**
     * This function creates a new message based on the input and type passed toit
     * @param {*} msg incoming message 
     * @param {*} type type of message 'user' or 'self'
     */
    function generate_manual_message(msg, type) {
        INDEX++;
        var newStr = "";
        newStr += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        newStr += " <div class=\"cm-msg-text\">";
        newStr += msg;
        newStr += "  </div>";
        newStr += "</div>";

        $(".chat-logs").append(newStr);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('')
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }


})

/**
 * It handles the functionality for the selected ai and where to display this
 * particular information to the user.
 * @mod2 hope to refresh the chat box each time a new ai is selected.
 * @param {*} newAi SELECTED ai
 */
function selectedAi(newAi) {

    document.querySelector('._icon').src = newAi;
    document.querySelector('._icon_pic').src = newAi;

    if (newAi == './images/ai1.png') {
        aiName = "Timmy";
    }
    if (newAi == './images/ai2.png') {
        aiName = "Shahad";
    }

    if (newAi == './images/ai3.png') {
        aiName = "Tiana";
    }
}

function resetAI() {
    selectedAi(newAi);
}

function removeDissapear() {
    var doc = document.getElementById("selected");
    doc.classList.remove("_dissapear");

    var chatContent = document.getElementById("_chatBox");
    chatContent.classList.remove("_dissapear");
}


function getInput() {
    var doc = document.getElementById("chat-input").value;
    return doc;
}

/**
 * Outputs the current date for the user.
 * mainly for design purpose
 */
function setDate() {
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
    document.getElementById("theTime").innerHTML = day + ", " + month + " " + numDate + ", " + yr;
}

/**
 * This function creates an intro message after the user's name has been inputed.
 * One flaw is it creates the message even without a name. 
 * @mod2 need to create an event to prevent users creating a new intro message before 
 * adding their names.
 * @param {*} userName gets the active users name and adds it to the intro message for the user
 * @param {*} ai registers the selected ai 
 */
function introMessage(userName, ai) {
    INDEX++;
    var type = 'user';
    var newStr = "";
    newStr += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
    newStr += " <div class=\"cm-msg-text\">";
    newStr += "<p> Hello " + userName + " welcome to this mini AI chatroom. ";
    newStr += "My name is " + ai + ", I am a mini ai created by O.A.G Studios .Enjoy your time here. </p>"
    newStr += "  </div>";
    newStr += "</div>";

    $(".chat-logs").append(newStr);
    $("#cm-msg-" + INDEX).hide().fadeIn(300);
    if (type == 'self') {
        $("#chat-input").val('')
    }
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
}