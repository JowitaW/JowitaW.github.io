console.log("Main loaded");

const homeCardContainer = document.querySelector(".item-one");

fetch('http://localhost:3000/hamster-supplies')
    .then(data => data.json())
    .then(myHammyJsonData => showHomeCard(myHammyJsonData));

function showHomeCard(items) {
    console.log(items);


    let htmlHammyCode = '';
    for (let i = 0; i < items.length; i++) {
        const wheel = array[index];
        htmlHammyCode += createCard(wheel);
    }
    homeCardContainer.innerHTML = htmlHammyCode;
}

function createCard(wheel) {
    const homeCard = `
    <div class"home-card">
    <h2>${wheel.wheelCategory}</h2>
    <img src="link_to_image" />
    <p>${wheel.homeImg}</p>
    </div>
    `
    return homeCard;
}