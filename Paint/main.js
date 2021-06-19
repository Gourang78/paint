//Start JS Here

var mouse_event = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
line_width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    //Link Both The Input Tags
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    console.log(color);
    console.log(line_width);
    console.log(radius);

    mouse_event = "mousedown";
}

canvas.addEventListener("mouseUP", my_mouseUP);

function my_mouseUP(e) {

    mouse_event = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouse_event = "mouseleave"

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_of_x = e.clientX = canvas.offsetLeft;
    current_position_of_y = e.clientY = canvas.offsetTop;

    if(mouse_event == "mousedown") {

        console.log("Current Positions Of X And Y = ");
        console.log("X = " + current_position_of_x + " Y = " + current_position_of_y);

       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = line_width;
       ctx.atc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI);
       ctx.stroke();

    }

}