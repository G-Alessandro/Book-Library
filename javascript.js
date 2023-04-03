const bookContainer = document.getElementById('bookContainer');
const subBtn = document.getElementById('subBtn');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const t = document.getElementById('title').value;
  const a = document.getElementById('author').value;
  const p = document.getElementById('pages').value;
  const r = document.getElementById('read').value;
  const newBook = new Book(t, a, p, r);
  myLibrary.push(newBook);
  // document.getElementById('bookContainer').innerText = x;
  console.log(myLibrary);
}

subBtn.addEventListener('click', () => {
  addBookToLibrary();
  console.log('1', myLibrary[0]);
  console.log('2', myLibrary[0].title);
});
