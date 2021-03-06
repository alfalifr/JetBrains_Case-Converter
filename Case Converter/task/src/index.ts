function capFirst(txt: string | null): string {
    switch (txt?.length) {
        case null:
        case 0: return "";
        case 1: return txt.toUpperCase();
        default: return txt![0].toUpperCase() + txt!.slice(1).toLowerCase();
    }
}

function toUpperCase(txt: string | null): string {
    if(txt == null) {
        return "";
    }
    return txt.toUpperCase();
}

function toLowerCase(txt: string | null): string {
    if(txt == null) {
        return "";
    }
    return txt.toLowerCase();
}

function toProperCase(txt: string | null): string {
    if(txt == null) {
        return "";
    }
    return txt.split(" ").map(capFirst).join(" ");
}

function toSentenceCase(txt: string | null): string {
    if(txt == null) {
        return "";
    }
    return txt.split(".")
        .map((txt) => txt.trim())
        .map(capFirst)
        .map((txt) => {
            if(txt.length <= 0) {
                return ""; // this is because "..." will be split into 3 empty strings.
            }
            return " " +txt;
        })
        //.filter((txt) => txt.length > 0)
        .join(".")
        .slice(1);
}

function setBtnClickListener(
    txtArea: HTMLTextAreaElement,
    btn: HTMLButtonElement,
    fun: (txt: string | null) => string,
) {
    btn.addEventListener("click", () => {
        let txt = txtArea.value;
        txt = fun(txt);
        txtArea.value = txt;
    });
}


function downloadTxt(fileName: string, text: string) {
    const link: HTMLAnchorElement = document.createElement("a");
    link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    link.setAttribute("download", fileName);
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const txtArea: HTMLTextAreaElement = document.querySelector("#input")!;
const upperCaseBtn: HTMLButtonElement = document.querySelector("#upper-case")!
const lowerCaseBtn: HTMLButtonElement = document.querySelector("#lower-case")!
const properCaseBtn: HTMLButtonElement = document.querySelector("#proper-case")!
const sentenceCaseBtn: HTMLButtonElement = document.querySelector("#sentence-case")!
const saveTextBtn: HTMLButtonElement = document.querySelector("#save-text-file")!

setBtnClickListener(txtArea, upperCaseBtn, toUpperCase);
setBtnClickListener(txtArea, lowerCaseBtn, toLowerCase);
setBtnClickListener(txtArea, properCaseBtn, toProperCase);
setBtnClickListener(txtArea, sentenceCaseBtn, toSentenceCase);

saveTextBtn.addEventListener("click", () => {
   downloadTxt("text.txt", txtArea.value);
});