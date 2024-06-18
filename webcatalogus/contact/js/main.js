console.log("Main Loaded");

fetch('http://localhost:3000/json-example')
    .then(myData => myData.json())
    .then(myJsonData => showInConsole(myJsonData));

function showInConsole(myJsonData) {
    console.log(myJsonData);
}

// const form =document.querySelector(".box-mail");

// async function toAnswer() {
//     const response = await fetch("box-mail");
//     const answer = await response.json();
//     console.log(answer);
// }
