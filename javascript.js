const bookContainer = document.getElementById('bookContainer');
const subBtn = document.getElementById('subBtn');

const myLibrary = [{
  title: 'The Lord of The Rings', language: 'english', author: 'John R.R. Tolkien', pages: '1178', read: 'yes',
},
{
  title: 'The Physics of Star Trek', language: 'english', author: 'Lawrence M. Krauss, Stephen Hawking (Foreword)', pages: '208', read: 'no',
},
{
  title: 'La Scienza delle Verdure', language: 'italian', author: 'Dario Bressanini', pages: '277', read: 'no',
},
{
  title: 'La Scienza della Carne', language: 'italian', author: 'Dario Bressanini', pages: '239', read: 'yes',
},
{
  title: 'A Piedi Nudi Su Marte', language: 'italian', author: 'Adrian Fartade', pages: '285', read: 'no',
},
];

function Book(title, language, author, pages, read) {
  this.title = title;
  this.language = language;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookDiv() {
  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookAdd = document.createElement('div');
    bookAdd.classList.add('bookInLibrary');
    bookAdd.setAttribute('data', `${myLibrary[i].title}`);
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
    }
    if (myLibrary[i].read === 'no') {
      btnRead.textContent = 'Not Read';
    }

    btnRead.addEventListener('click', () => {
      btnRead.classList.toggle('greenBtn');
      const thisBookTitle = bookAdd.getAttribute('data');
      const indexTitle = myLibrary.find(({ title }) => title === thisBookTitle);
      const indexBookTitle = myLibrary.indexOf(indexTitle);
      if (myLibrary[indexBookTitle].read === 'no') {
        myLibrary[indexBookTitle].read = 'yes';
        btnRead.textContent = 'Read';
      } else {
        myLibrary[indexBookTitle].read = 'no';
        btnRead.textContent = 'Not Read';
      }
    });

    const removeBook = document.createElement('button');
    removeBook.classList.add('removeBook', 'btnBook');
    removeBook.textContent = 'Remove';
    bookRead.appendChild(removeBook);

    removeBook.addEventListener('click', () => {
      for (let e = 0; e < myLibrary.length; e += 1) {
        const thisBookTitle = bookAdd.getAttribute('data');
        const bookTitleDel = myLibrary[e].title;
        const indexTitle = myLibrary.find(({ title }) => title === thisBookTitle);
        const indexBookTitle = myLibrary.indexOf(indexTitle);
        if (bookTitleDel === thisBookTitle) {
          myLibrary.splice(indexBookTitle, 1);
          bookAdd.remove();
        }
      }
    });
  }
}

function addBookToLibrary() {
  const t = document.getElementById('title').value;
  const a = document.getElementById('author').value;
  const l = document.getElementById('language').value;
  const p = document.getElementById('pages').value;
  const r = document.querySelector('input[name="read"]:checked').value;
  const x = new Book(t, a, l, p, r);
  myLibrary.push(x);
  addBookDiv();
}

subBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addBookToLibrary();
});
