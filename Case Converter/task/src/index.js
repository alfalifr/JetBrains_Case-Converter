function capFirst(txt) {
    switch (txt === null || txt === void 0 ? void 0 : txt.length) {
        case null:
        case 0: return "";
        case 1: return txt.toUpperCase();
        default: return txt[0].toUpperCase() + txt.slice(1).toLowerCase();
    }
}
function toUpperCase(txt) {
    if (txt == null) {
        return "";
    }
    return txt.toUpperCase();
}
function toLowerCase(txt) {
    if (txt == null) {
        return "";
    }
    return txt.toLowerCase();
}
function toProperCase(txt) {
    if (txt == null) {
        return "";
    }
    return txt.split(" ").map(capFirst).join(" ");
}
function toSentenceCase(txt) {
    if (txt == null) {
        return "";
    }
    return txt.split(".")
        .map(function (txt) { return txt.trim(); })
        .map(capFirst)
        .map(function (txt) {
        if (txt.length <= 0) {
            return ""; // this is because "..." will be split into 3 empty strings.
        }
        return " " + txt;
    })
        //.filter((txt) => txt.length > 0)
        .join(".")
        .slice(1);
}
function setBtnClickListener(txtArea, btn, fun) {
    btn.addEventListener("click", function () {
        var txt = txtArea.value;
        txt = fun(txt);
        txtArea.value = txt;
    });
}
function downloadTxt(fileName, text) {
    var link = document.createElement("a");
    link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    link.setAttribute("download", fileName);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
var txtArea = document.querySelector("#input");
var upperCaseBtn = document.querySelector("#upper-case");
var lowerCaseBtn = document.querySelector("#lower-case");
var properCaseBtn = document.querySelector("#proper-case");
var sentenceCaseBtn = document.querySelector("#sentence-case");
var saveTextBtn = document.querySelector("#save-text-file");
setBtnClickListener(txtArea, upperCaseBtn, toUpperCase);
setBtnClickListener(txtArea, lowerCaseBtn, toLowerCase);
setBtnClickListener(txtArea, properCaseBtn, toProperCase);
setBtnClickListener(txtArea, sentenceCaseBtn, toSentenceCase);
saveTextBtn.addEventListener("click", function () {
    downloadTxt("text.txt", txtArea.value);
});
