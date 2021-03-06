function show_image(e) {
    console.log(e.target)
    let big_image = e.target.querySelector("img").cloneNode(true)
    big_image.style.height = "100vh"
    big_image.style.objectFit = "contain"
    big_image.style.position = "fixed"
    big_image.classList.add("big_image")
    big_image.style.top = 0
    big_image.style.left = 0
    document.body.appendChild(big_image)
    let close_button = document.body.appendChild(document.createElement("div"))
    close_button.outerHTML = `
<div style="color: white; position: fixed; top: 0; right: 0; height: 40px; width: 40px; font-size: 50px; cursor: pointer; user-select: none;" onclick="close_image()" class="close_image">
&times;
</div>
`
    let caption_text = document.body.appendChild(document.createElement("div"))
    caption_text.outerHTML = `
<div style="color:white; position:fixed; bottom:20px; left:20px; font-size: 30px;" class="caption_text">
${e.target.querySelector("h4").innerText}
</div>
`
    document.querySelector("#gallery").style.filter = "blur(5px)"
}
function smoothly_close(selector) {
    let element = document.querySelector(selector)
    element.animate([
        {
            opacity: 1,
            transform: "translateY(0)"
        },
        {
            opacity: 0,
            transform: "translateY(5px)"
        }
    ], {
        duration: 150
    })
    element.style.opacity = 0
    setTimeout(() => {
        element.remove()
    }, 150);
}
function close_image() {
    smoothly_close(".big_image")
    smoothly_close(".close_image")
    smoothly_close(".caption_text")
    document.querySelector("#gallery").style.filter = ""
}


let generate_cards = (card) => {
    return `<div class="card" onclick="show_image(event)">
    <img src="${card.img}" alt="${card.name}" style="width: 100%" />
    <div>
        <h4><b>${card.name}</b></h4>
        <p>${card.caption}</p>
    </div>
    </img>
</div>
`
}
let insert_card = (outerhtml) => {
    let current_card = document.createElement("div")
    document.getElementById("gallery").appendChild(current_card)
    current_card.outerHTML = outerhtml
}

let cards = [
    {
        img: "bill.jpg",
        name: "Bill Gates",
        caption: "microsoft guy",
    },
    {
        img: "elon.jpg",
        name: "Elon Musk",
        caption: "richest guy",
    },
    {
        img: "sundar.jpg",
        name: "Sundar Pichai",
        caption: "google guy",
    },
    {
        img: "jack.jpg",
        name: "Jack Ma",
        caption: "chinese guy",
    },
    {
        img: "obama.jpg",
        name: "Barack Obama",
        caption: "best president",
    },
    {
        img: "tim.jpg",
        name: "Tim Berners-Lee",
        caption: "the guy who invented the web",
    },
]

for (let card_index = 0; card_index < cards.length; card_index++) {
    const card = cards[card_index];
    insert_card(generate_cards(card))
}
