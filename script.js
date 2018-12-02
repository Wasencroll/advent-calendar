/*
 * @author       Rob W (http://stackoverflow.com/a/7513356/938089
 * @description  Executes function on a framed YouTube video (see previous link)
 *               For a full list of possible functions, see:
 *               http://code.google.com/apis/youtube/js_api_reference.html
 * @param String frame_id The id of (the div containing) the frame
 * @param String func     Desired function to call, eg. "playVideo"
 * @param Array  args     (optional) List of arguments to pass to function func*/
function callPlayer(frame_id, func, id, args) {
    if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    var iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
        iframe = iframe.getElementsByTagName('iframe')[0];
    }
    if (iframe) {
        // Frame exists,
        iframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }

    var modal = document.getElementById(id);
    document.getElementById(id).style.display = 'none';
    modal.onclick = function() {
        //modal.style.display = 'none';
    };

}

function openDoor (id) {
    var door = id.replace( /^\D+/g, '');
    var today = new Date();
    dd = today.getDate();
    mm = today.getMonth()+1;
    yyyy = today.getFullYear();

    if (yyyy == 2018) {
        //if (mm == 12) {
            //if (dd == door) {
        document.getElementById(id).style.display = 'block';
    }
    else {
        alert("You can't open this door just yet...");
    }
        //}
    //}
    //else if (yyyy > 2018) {
      //  document.getElementById(id).style.display = 'block';
    //}
}

function closeModal (id) {
    document.getElementById(id).style.display = 'none';
    document.documentElement.classList.remove('.flex-item figure:hover');
}

$(document).ready(function() {
    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        console.log(width);
    });

});