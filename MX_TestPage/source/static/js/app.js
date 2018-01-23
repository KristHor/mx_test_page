
//functions and animations using javascript & jQuery


var flag = false;


$(function() {
    'use strict';

    $('main').css('background', 'none');
//Animation between log in and register
    $('.message a').click(function () {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });


//when closing image, elements on page are displayed or blocked

    $('#close').click(function () {
        $('#paint').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('#profile').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('.changeImgText').css('display', 'block');
        $(".img-profile").css('cursor', 'pointer');
    });

    $('#profileImg').click(function () {
        $("#profile").animate({height: "toggle", opacity: "toggle"}, "slow");
        $("#paint").css('display', 'block');
        $('.changeImgText').css('display', 'block');
        $('#close').css('display', 'block');
    });

});

//registration
function register(form) {

    if(form.nameId.value !== "" &&
        form.password.value !== ""){

        saveReg()

        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");

    }
    else
    {
        alert("Username or password exist");
        $('input:text').val("");
    }

}

//databinding, user info to profile
var formBindingList = ['{', '}'];

var hasBinding = function (element) {

    return element.textContent.indexOf(formBindingList[0]) > -1 &&
        element.textContent.indexOf(formBindingList[1]) > -1

}

var listValue = function (properties) {

    var bindings = Array.from(document.querySelectorAll('[bindValue]'));

    bindings.forEach(function (binding) {
        if (hasBinding(binding) === true) {
            var value = binding.textContent.slice(1, binding.textContent.lastIndexOf(formBindingList[1]));
            if (properties.hasOwnProperty(value) && value !== null) {
                binding.textContent = properties[value];

                var x = binding.textContent;
                hasRegistered(x);

            }
            else
            {
                console.log("Has no binding!")

            }
        }

    });

}


function saveReg() {


    var nameId = document.getElementById("nameRegId").value;
    var passId = document.getElementById("passRegId").value;
    var emailId = document.getElementById("emailRegId").value;

    listValue({

        name: nameId,
        password: passId,
        email: emailId

    })

}

function hasRegistered(x) {

    if(x){
        flag = true;
        console.log("Register, OK!")
    }
    else {
        console.log("Not registered")
    }

}

var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();

today = year + "/" + month + "/" + day;


// new note
function wrtNote() {
    var myNote;
    var note = prompt("Note:", "");
    if (note == null || note == "") {
        myNote = "";
    } else {
        myNote = today + " : " + note;
    }
    document.getElementById("myNote").innerHTML = myNote;
}


var hexColor = "#ffffff";
var rgba = 'rgba(' + parseInt(hexColor.slice(-6,-4),16)
    + ',' + parseInt(hexColor.slice(-4,-2),16)
    + ',' + parseInt(hexColor.slice(-2),16)
    +',0.9)';

//when user logs in, elements on page are displayed or blocked
function login() {

    var logName = $('#nameId').val();
    var logPass = $('#passId').val();

    var regName = $('#nameRegId').val();
    var regPass = $('#passRegId').val();

    if(flag && logName === regName && logPass && regPass){

        $('main').css('background', rgba);
        $('#mXForm').css('display', 'none');
        $('#profile').css('display', 'block');
        $('#notes').css('display', 'block');
        $('#about').css('display', 'block');
        $('#logOut').css('display', 'inline-block');
        $('#noteTxt').css('display', 'block');

            $('input:text').val("");


        }
        else
        {
            alert("Username or password is wrong");
            $('#nameId').val("");
            $('#passId').val("");
        }

}

//when user logs out, elements on page are displayed or blocked
function logOut() {

    var ok = confirm("Are you sure you want to leave MX test Page?");

    if(ok){

        $('main').css('background', 'none');
        $('#mXForm').css('display', 'block');
        $('#profile').css('display', 'none');
        $('#paint').css('display', 'none');
        $('#about').css('display', 'none');
        $('#logOut').css('display', 'none');
        $('#notes').css('display', 'none');
        $('main').css('background:', 'none');

        $('#nameRegIdId').val("");
        $('#passRegIdId').val("");

    }

}


