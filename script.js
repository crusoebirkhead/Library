let myLibrary = [];

function createBook(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.outputBook = function (){
        return this.title + ' by ' + this.author + ' which has ' + this.pages + ' pages '
    }
}

function addBook(){
    var book = new createBook(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementsByClassName('read').value
    )
    myLibrary.push(book);
    outputBook();
    // changeClass();
    createCard();
}

function outputBook() {
    output = "";
    for(var i = 0; i < myLibrary.length; i++) {
       output += myLibrary[i].outputBook();
    }
    modal.style.display = "none";
    document.querySelector('.output').innerHTML = output;
 }

function createCard(){
    var display = document.querySelector('body');

    var card = document.querySelector('.card');
    var cardClone = card.cloneNode(true);
    cardClone.classList.add('new-card');
    display.after(cardClone);

    var icon = document.querySelector('#icon');
    var iconClone = icon.cloneNode(true);
    iconClone.classList.add('fas fa-book');
    card.after(iconClone);

    var cardBody = document.querySelector('.card-body');
    var cardBodyClone = cardBody.cloneNode(true)
    cardBodyClone.classList.add('card-body');
    card.after(cardBodyClone);

    var cardTitle = document.querySelector('.card-title');
    var cardTitleClone = cardTitle.cloneNode(true)
    cardTitleClone.classList.add('card-title');
    cardBody.after(cardTitleClone);

    var cardText = document.querySelector('.card-text');
    var cardTextClone = cardText.cloneNode(true)
    cardBodyClone.classList.add('card-body');
    cardBody.after(cardTextClone);

    var toggle = document.querySelector('.switch');
    var toggleClone = toggle.cloneNode(true)
    toggleClone.classList.add('switch');
    cardBody.after(toggleClone);

    var input = document.querySelector('#check');
    var inputClone = input.cloneNode(true)
    toggle.after(inputClone);

    var slider = document.querySelector('.slider round');
    var sliderClone = slider.cloneNode(true)
    sliderClone.classList.add('slider round');
    toggle.after(sliderClone);



    
}

//  function changeClass(){
//     const displayDiv = document.querySelector('.display');
//     displayDiv.classList.remove('display');
//     displayDiv.classList.add('display-null');

//     const cardDiv = document.querySelector('.card');
//     cardDiv.classList.remove('card');
//     cardDiv.classList.add('card-null');

//     const toggle = document.querySelector('.switch');
//     toggle.classList.remove('switch');
//     toggle.classList.add('switch-null');
//  }


 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}