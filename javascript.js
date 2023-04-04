const bookContainer = document.getElementById('bookContainer');
const bookAdd = document.createElement('div');
const subBtn = document.getElementById('subBtn');

let myLibrary = [{title: 'The Lord of The Rings', author: 'John R.R. Tolkien', pages: '1178', read: 'No' },
                  {title: 'The Physics of Star Trek', author: 'Lawrence M. Krauss, Stephen Hawking (Foreword)', pages: '208', read: 'No' },
                  {title: 'La scienza delle verdure', author: 'Dario Bressanini', pages: '277', read: 'No'},
                  {title: 'La scienza della carne', author: 'Dario Bressanini', pages: '239', read: 'No'},
                  {title: 'A piedi nudi su Marte', author: 'Adrian Fartade', pages: '285', read: 'No'}
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function addBook {
//   for ()
// }

function addBookToLibrary() {
  let t = document.getElementById('title').value;
  let a = document.getElementById('author').value;
  let p = document.getElementById('pages').value;
  let r = document.getElementById('read').value;
  let x = new Book(t, a, p, r);
  myLibrary.push(x);

  console.log(myLibrary);
}


subBtn.addEventListener('click', () => {
  addBookToLibrary();

  bookContainer.appendChild(bookAdd);
  console.log('111', myLibrary[0]);
  console.log('222', myLibrary.length);
});
