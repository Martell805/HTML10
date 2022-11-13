"use strict"

function checkUser(){
    let login = prompt("Логин:") ?? "";

    if(login === "") {
        alert("Отменено");
        return;
    }

    if(login !== "Админ") {
        alert("Я вас не знаю");
        return;
    }

    let password = prompt("Пароль:") ?? "";

    if(password === "") {
        alert("Отменено");
        return;
    }

    if(password !== "Я главный") {
        alert("Неверный пароль");
        return;
    }

    alert("Здравствуйте!");
}

checkUser();
