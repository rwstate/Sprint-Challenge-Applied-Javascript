// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card (data) {
    let card = document.createElement("div");
    let headline = document.createElement("div");
    let author = document.createElement("div");
    let imgCont = document.createElement("div");
    let img = document.createElement("img");
    let attrib = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgCont.classList.add("img-container");
    
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    attrib.textContent = `By ${data.authorName}`;

    imgCont.appendChild(img);
    author.appendChild(imgCont);
    author.appendChild(attrib);
    card.appendChild(headline);
    card.appendChild(author);

    return card
}

let cards = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(resp => {
        Object.values(resp.data.articles).forEach(arr => {
            arr.forEach(obj => {
                cards.appendChild(Card(obj))
            })
        })
    })
    .catch(err => console.log(err))
