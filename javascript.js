const bookContainer = document.getElementById('bookContainer');
const subBtn = document.getElementById('subBtn');

let myLibrary = [{title: 'The Lord of The Rings', language: 'english', author: 'John R.R. Tolkien', pages: '1178', read: 'yes' },
                  {title: 'The Physics of Star Trek', language: 'english', author: 'Lawrence M. Krauss, Stephen Hawking (Foreword)', pages: '208', read: 'No' },
                  {title: 'La Scienza delle Verdure', language: 'italian', author: 'Dario Bressanini', pages: '277', read: 'No'},
                  {title: 'La Scienza della Carne', language: 'italian', author: 'Dario Bressanini', pages: '239', read: 'No'},
                  {title: 'A Piedi Nudi Su Marte', language: 'italian', author: 'Adrian Fartade', pages: '285', read: 'No'}
];

function Book(title, language, author, pages, read) {
  this.title = title;
  this.language = language;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookDiv() {
  for (let i = 0; i < myLibrary.length; i++) {
    const bookAdd = document.createElement('div');
    bookAdd.classList.add('bookInLibrary');
    bookContainer.appendChild(bookAdd);

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle', 'bookDetails');
    bookAdd.appendChild(bookTitle);
    bookTitle.textContent = myLibrary[i].title;

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor', 'bookDetails');
    bookAdd.appendChild(bookAuthor);
    bookAuthor.textContent = `By: ${myLibrary[i].author}`;

    const bookLanguage = document.createElement('div');
    bookLanguage.classList.add('bookLanguage', 'bookDetails');
    bookAdd.appendChild(bookLanguage);
    bookLanguage.textContent = `Language: ${myLibrary[i].language}`;

    const bookPages = document.createElement('div');
    bookPages.classList.add('bookPages', 'bookDetails');
    bookAdd.appendChild(bookPages);
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;

    const bookRead = document.createElement('div');
    bookRead.classList.add('bookRead', 'bookDetails');
    bookAdd.appendChild(bookRead);

    const btnRead = document.createElement('button');
    btnRead.classList.add('btnRead', 'btnBook');
    bookRead.appendChild(btnRead);

    if (myLibrary[i].read === 'yes') {
      btnRead.textContent = 'Read';
      btnRead.classList.toggle('greenBtn');
    } else {
      btnRead.textContent = 'Not Read';
      btnRead.classList.toggle('redBtn');
    }

    const removeBook = document.createElement('button');
    removeBook.classList.add('removeBook', 'btnBook');
    removeBook.textContent = 'Remove';
    bookRead.appendChild(removeBook);
  }
}

function addBookToLibrary() {
  let t = document.getElementById('title').value;
  let a = document.getElementById('author').value;
  let p = document.getElementById('pages').value;
  let r = document.getElementById('read').value;
  let l = document.getElementById('language').value;
  let x = new Book(t, l, a, p, r);
  myLibrary.push(x);
  addBookDiv();
  console.log(myLibrary);
}

subBtn.addEventListener('click', () => {
  addBookToLibrary();

  console.log('111', myLibrary[0]);
  console.log('222', myLibrary.length);
  console.log('333', myLibrary[0].title);
});
