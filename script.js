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

    myLibrary.forEach( book => 
      document.body.insertAdjacentHTML("beforeend", 
      `<div class="card" style="width: 18rem;">
      <i id="icon" class="fas fa-book"></i>
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <label class="switch">
        <input id="check" type="checkbox">
        <span class="slider round"></span>
       </label>
    </div>`))
    modal.style.display = "none";
}


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