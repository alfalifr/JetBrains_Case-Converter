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
var txtArea = document.querySelector("#input");
var upperCaseBtn = document.querySelector("#upper-case");
var lowerCaseBtn = document.querySelector("#lower-case");
var properCaseBtn = document.querySelector("#proper-case");
var sentenceCaseBtn = document.querySelector("#sentence-case");
//txtArea.innerHTML = "oy";
setBtnClickListener(txtArea, upperCaseBtn, toUpperCase);
setBtnClickListener(txtArea, lowerCaseBtn, toLowerCase);
setBtnClickListener(txtArea, properCaseBtn, toProperCase);
setBtnClickListener(txtArea, sentenceCaseBtn, toSentenceCase);
