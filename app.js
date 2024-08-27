const insertText = document.getElementById("insertText");
const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDesencrypt = document.getElementById("buttonDesencrypt");
const finalMessage = document.getElementById("finalMessage");
const rightImage = document.getElementById("rightImage");
const rightMessage = document.getElementById("rightMessage");
const copyButton = document.getElementById("copyButton");

function cleanText(text) {
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    text = text.replace(/[-+*/%$#!\"'¿?´¨~^`_.,;:|°¬@]/g, "");

    return text;
}

function replace(newText) {
    finalMessage.innerHTML = newText;
    insertText.value = "";
    rightImage.classList.add('hide');
    rightMessage.style.display = "none";
    copyButton.style.display = "block";
    finalMessage.classList.add('settings');
}

function encryptButton(){
    if(insertText.value != ""){
        replace(encrypt(cleanText(insertText.value)));
    } else {
        alert('Estamos esperando la frase a encriptar, agregala por favor');
    }
}

function desencryptButton(){
    if(insertText.value != "") {
        replace(desencrypt(cleanText(insertText.value)));
    } else {
        alert('Estamos esperando la frase a desencriptar, agregala por favor');
    }
}

function encrypt(text){
    let mat = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    text = text.toLowerCase();

    for(let i = 0; i < mat.length; i++) {
        if (text.includes(mat[i][0])) {
            text = text.replaceAll(mat[i][0], mat[i][1]);
        }
    }
    return text;
}

function desencrypt(text){
    let mat = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    text = text.toLowerCase();

    for(let i = 0; i < mat.length; i++) {
        if (text.includes(mat[i][1])) {
            text = text.replaceAll(mat[i][1], mat[i][0]);
        }
    }
    return text;
}

function copyText() {
    let text = finalMessage.innerHTML;
    navigator.clipboard.writeText(text);
    alert('Texto copiado');

    finalMessage.innerHTML = "";
    rightImage.classList.remove('hide');
    rightMessage.style.display = "block";
    copyButton.style.display = "none";
    finalMessage.classList.remove('settings');
    insertText.focus();
}