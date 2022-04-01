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

let scroll = () => {
    let percentage = Math.ceil(window.scrollY) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    document.getElementById("myBar").style.width = `${percentage * 100}%`
}

function dateTime() {
    let datetime = new Date();
    let dt = document.getElementById("dt");
    let dtbtn = document.getElementById("datetime-btn")
    dt.innerText = datetime;
    if (dt.style.display === "block") {
        dtbtn.innerText = "show"
        dt.style.display = "none";
    } else {
        dtbtn.innerText = "hide"
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


String.prototype.toRGB = function() {

    var rgb = this.split(',');
    this.r = parseInt(rgb[0].substring(4)); // skip rgb(
    this.g = parseInt(rgb[1]); // this is just g
    this.b = parseInt(rgb[2]); // parseInt scraps trailing )

}
let changePageColor = () => {
    let container = document.createElement("div")
    container.id = "colorprompt"
    let window_bar = document.createElement("div")
    let close_button = document.createElement("button")
    window_bar.style.width = "100%"
    window_bar.style.display = "flex"
    window_bar.style.justifyContent = "right"
    window_bar.style.background = "black"
    close_button.innerHTML = "&#215;"
    close_button.style.background = "transparent"
    close_button.style.color = "red"
    close_button.style.transform = "translateY(-5px)"
    close_button.style.outline = "none"
    close_button.style.border = "none"
    close_button.style.height = "10px"
    close_button.style.width = "10px"
    close_button.style.margin = "3px"
    close_button.style.fontSize = "15px"
    close_button.style.fontWeight = "bold"
    close_button.onclick = () => {
        document.querySelector("#colorprompt").remove()
    }


    window_bar.appendChild(close_button)
    let change_color_prompt = document.createElement("div")
    change_color_prompt.style.background = "white"
    change_color_prompt.style.padding = "10px"
    container.style.boxShadow = "rgb(0 0 0) 0px 25px 50px -5px"
    container.style.position = 'fixed'
    container.style.left = "50%"
    container.style.top = "50%"
    container.style.transform = "translate(-50%, -50%)"

    let color_picker = document.createElement("input")
    color_picker.type = "color"
    color_picker.value = "#ff0000"
    if (document.body.dataset.realcolor) {
        color_picker.value = document.body.dataset.realcolor
        console.log(1)
    }
    else {
        color_picker.value = "#ffffff"
        console.log(2)
    }
    color_picker.onchange = () => {
        console.log(color_picker.value)
        document.body.dataset.realcolor = color_picker.value
        document.body.style.background = color_picker.value
    }
    change_color_prompt.appendChild(color_picker)
    container.appendChild(window_bar)
    container.appendChild(change_color_prompt)
    document.body.appendChild(container)
}
