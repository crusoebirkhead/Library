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
    myLibrary.push(book)
    outputBook();
}

function outputBook() {
    output = "";
    for(var i = 0; i < myLibrary.length; i++) {
       output += (i + 1) + ") " + myLibrary[i].outputBook() + "; ";
    }
    document.getElementById("output").innerHTML = output;
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