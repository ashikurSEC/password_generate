const passwordBox = document.getElementById('password');
let length = 18;

const charSets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+={}[]\/;:'<>";

function createPassword () {
    let password = Array.from({ length }, () => charSets[Math.floor(Math.random() * charSets.length)]).join('');
    passwordBox.value = password;
}

function copyPassword () {
    passwordBox.select();
    document.execCommand("copy")
}

