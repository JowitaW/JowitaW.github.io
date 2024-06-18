//fetch for the sub category selection
const itemOneContainer = document.querySelector('.item-one');

fetch('http://localhost:3000/motorcycles')
    .then(response => response.json())
    .then(data => showSub(data));

function showSub(itemOneData) {
    let htmlCode = '';
    for (let i = 0; i < itemOneData.length; i++) {
        const introSub = itemOneData[i];
        htmlCode += introOne(introSub);
    }
    itemOneContainer.innerHTML = htmlCode;
}

function introOne(introSub) {
    const myItemOne = `
        <div class="in-items">
            <img class="acc-img" src="${introSub.subImage}">
            <h2 class="acc-header">${introSub.subTitle}</h2>
            <p class="acc-description">${introSub.subDescription}</p>
            <button><a href="${introSub.link}">Go to the page</a></button>
        </div>
    `;
    return myItemOne;
}


//fetch for acc information
const accessoriesContainer = document.querySelector('.accessories-topic');

fetch('http://localhost:3000/accessories')
    .then(response => response.json())
    .then(data => accShow(data))


function accShow(itemOneData) {
    let htmlCode = '';
    for (let i = 0; i < itemOneData.length; i++) {
        const accDatas = itemOneData[i];
        htmlCode += myAccData(accDatas);
    }
    accessoriesContainer.innerHTML = htmlCode;
}

function myAccData(accDatas) {
    const item = `
    <div class="container"
        <div class="accessories-topic">
            <h4>${accDatas.title}</h4>
            <p>${accDatas.intro}</p>
        </div>

    </div>
`
    return item;
}

//fetch for license information
const licenseContainer = document.querySelector('.license-topic');

fetch('http://localhost:3000/license')
    .then(response => response.json())
    .then(data => liShow(data))


function liShow(licenseData) {
    let htmlCode = '';
    for (let i = 0; i < licenseData.length; i++) {
        const liDatas = licenseData[i];
        htmlCode += myLiData(liDatas);
    }
    licenseContainer.innerHTML = htmlCode;
}

function myLiData(liDatas) {
    const item = `
    <div class="container"
        <div class="accessories-topic">
            <h4>${liDatas.licenseIntro}</h4>
            <p>${liDatas.licenseText}</p>
        </div>
    </div>
`
    return item;
}

//fetch for license information
const gearContainer = document.querySelector('.gear-topic');

fetch('http://localhost:3000/gear')
    .then(response => response.json())
    .then(data => gearShow(data))


function gearShow(gearData) {
    let htmlCode = '';
    for (let i = 0; i < gearData.length; i++) {
        const gearDatas = gearData[i];
        htmlCode += myGearData(gearDatas);
    }
    gearContainer.innerHTML = htmlCode;
}

function myGearData(gearDatas) {
    const item = `
    <div class="container"
        <div class="gear-topic">
            <h4>${gearDatas.gearTitle}</h4>
            <p>${gearDatas.introGear}</p>
        </div>
    </div>
`
    return item;
}
