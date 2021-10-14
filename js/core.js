$(function(){


    document.cookie = 'time : now'

    // cookie
    console.log( document.cookie );
})







/* ==============================
    Cookie
============================== */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}





//  텍스트 그림자
var textShadow = function(target){
    var $this = $(target),
        shaColor = "tomato",
        shaLen = 30,
        textSha = "";
    for( var i =0; i < shaLen; i++){
        textSha += (textSha? ",":"") + i + 'px ' + i + 'px ' +'0 ' + shaColor;
    }
    $this.css({'text-shadow': textSha});
}

