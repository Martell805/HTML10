"use strict"

function onClickLike(button) {
    if(button.style.backgroundColor === "rgb(64, 64, 64)") {
        button.style.backgroundColor = "rgb(255, 0, 0)"
        return;
    }

    button.style.backgroundColor = "rgb(64, 64, 64)"
}

let drawing = 0;

function onClickGenerator() {
    if(drawing === 1) {
        drawing = 0;
        return
    }

    drawing = 1;
}

function onMoveGenerator(element, event) {
    if(drawing === 0) {
        return;
    }

    let div = document.createElement('div');
    element.appendChild(div);

    div.style.position = "absolute";
    div.style.top = event.clientY + "px";
    div.style.left = event.clientX + "px";
    div.style.backgroundColor = "rgb(255, 0, 0)";
    div.style.height = "10px";
    div.style.width = "10px";
    div.style.borderRadius = "5px";
}
