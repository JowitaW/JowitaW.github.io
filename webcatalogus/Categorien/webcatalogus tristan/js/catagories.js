console.log("Main loaded");

const homeCardContainer = document.querySelector(".console-text");

fetch('http://localhost:3000/main')
    .then(data => data.json())
    .then(myJsonData => showCatagories(myJsonData));

function showCatagories(items) {
    console.log(items);


    let htmlCode = '';
    for (let i = 0; i < items.length; i++) {
        const items = items[i];
        htmlCode += createCard(items);
    }
    homeCardContainer.innerHTML = htmlCode;
}

function createCard(items) {
    const card = `
    <div class="console-catalogus">
    <h6>${items.name}</h6>
    <div class="console-card">${items.image}
    </div>
    </div>
    `
    return card;
}