let myLibrary = [];

function createBook(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.outputBook = function (){
        return this.title + ' by ' + this.author + ' which has ' + this.pages + ' pages ' + this.read
    }
}

// Adds book to library and uses post function to post it
function addBook(){
    var book = new createBook(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
    )

    myLibrary.push(book);

    const library = document.getElementById('library');
    const cards = document.querySelectorAll('.card')
    cards.forEach(book => library.removeChild(book))

    for (let i = 0; i < myLibrary.length; i++){
      postBook(myLibrary[i])
    }
    modal.style.display = "none";
    }

// Creates HTML elements to post book details
function postBook(book){

  const library = document.getElementById('library');
  const card = document.createElement('div')
  const removeButton = document.createElement('button')
  const readButton = document.createElement('button')

  library.appendChild(card)
  card.classList.add('card')

  card.insertAdjacentHTML("beforeend", 
  `<div class="card-body">
    <h5 class="card-title"><i class="fas fa-book"></i>${book.title}</h5>
    <p class="card-author">${book.author}</p>
    <p class="card-pages">${book.pages}</p>
  </div>`
  )

// Add data attribute and class
card.setAttribute('id', myLibrary.indexOf(book))


// Create remove and read buttons
removeButton.classList.add('remove-button')
readButton.classList.add('read-button')

removeButton.innerHTML = 'Delete'

card.appendChild(removeButton)
card.appendChild(readButton)

//Functions for buttons
if(document.getElementById('read').checked === false){
  readButton.textContent = 'Not Read'
} else{
  readButton.textContent = 'Read'
}

removeButton.addEventListener('click', () => {
  myLibrary.splice(myLibrary.indexOf(book))
  card.remove()
})

readButton.addEventListener('click', () => {
  book.read = !book.read
  if (readButton.innerHTML === 'Read'){
    readButton.innerHTML = 'Not Read'
  } else if (readButton.innerHTML === 'Not Read') {
    readButton.innerHTML = 'Read'
  }
})
}





//Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const checkbox = document.getElementById('read')

btn.onclick = function() {
  modal.style.display = "block";
  title.value = ''
  author.value = ''
  pages.value = ''
  checkbox.value = ''
}

span.onclick = function() {
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}