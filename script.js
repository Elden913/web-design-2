let shuffleString = function(str) {
    var a = str.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

let removeConsonants = (str) => {
    var t = str;
    var res = "";
    let uc = str.toUpperCase();
    for (i = 0; i < uc.length; i++) {
        if (uc.charAt(i) == 'A' || uc.charAt(i) == 'I' || uc.charAt(i) == 'U' || uc.charAt(i) == 'E' || uc.charAt(i) == 'O') {
            res += t.charAt(i);
        }
    }
    return res
}

function validasi(e) {
    let inputs = document
        .getElementById("reg-info")
        .querySelectorAll("input, textarea");
    for (let i = 0; i < inputs.length; i++) {
        let inputvalue = inputs[i].value;
        if (inputvalue) {
            continue;
        } else {
            alert("you haven't filed this form");
            e.preventDefault();
            return;
        }
    }
    alert("thanks for filling in this form");
}

function dateTime() {
    let datetime = new Date();
    let dt = document.getElementById("dt");
    dt.innerText = datetime;
    if (dt.style.display === "block") {
        Math.round(Math.random())
        dt.style.display = "none";
    } else {
        dt.style.display = "block";
    }
}

function setOutput(output) {
    document.getElementById("output").innerText = "Output: " + output
}
function gidv(id) {
    return document.getElementById(id).value
}
let upperCase = () => setOutput(gidv("uppercase").toUpperCase())
let lowerCase = () => setOutput(gidv("lowercase").toLowerCase())
let upAndDown = () => {
    let originalString = gidv("upanddown")
    let computedString = ""
    for (let i = 0; i < originalString.length; i++) {
        if (Math.round(Math.random())) {
            computedString += originalString[i].toLowerCase()
        }
        else {
            computedString += originalString[i].toUpperCase()
        }
    }
    setOutput(computedString)
}
let reverse = () => setOutput(gidv("reverse").split("").reverse().join(""))
let rconsonants = () => setOutput(removeConsonants(gidv("rconsonants")))
let shuffleLetters = () => setOutput(shuffleString(gidv("shuffleletters")))
