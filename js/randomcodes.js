
var generatedCode = '';

function generateCode() {
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    }
    generatedCode = code;
    return code;
}

function disableButton(btnvalue) {
    var submitBtn = document.getElementById("submit");
    submitBtn.disabled = btnvalue;
    if (btnvalue) {
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitBtn.style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitBtn.style.color = "rgba(255, 255, 255, 1)";
    }
}

function evaluateCode() {
    var getCode = document.getElementById("codeentered").value.trim();
    var code = generatedCode.trim();
    if (getCode.length === code.length && getCode === code) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

window.onload = function() {
    document.getElementById("codes").innerHTML = generateCode();
    disableButton(true);
    var codebox = document.getElementById("codeentered");
    codebox.addEventListener("input", evaluateCode);
};