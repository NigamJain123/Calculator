const screen=document.getElementById("screen");

function allclear(){
    screen.value="";
}

function del(){
    screen.value = screen.value.slice(0,-1);
}

function show(n){
    screen.value+=n;
}

function calc(){
    screen.value=eval(screen.value);
}

