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
  for (let i = 0; i < myLibrary.length; i++) {
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


    // btnRead.addEventListener('click', function() {
    //   if (myLibrary[i].read === 'no') {
    //     btnRead.textContent = 'Read';
    //     btnRead.classList.toggle('greenBtn');
    //     myLibrary[i].read = 'yes';
    //   }
    //   if (myLibrary[i].read === 'yes') {
    //     btnRead.textContent = 'Not Read';
    //     myLibrary[i].read = 'no';
    //   }
    //   console.log("2",myLibrary[i]);
    // })

    const removeBook = document.createElement('button');
    removeBook.classList.add('removeBook', 'btnBook');
    removeBook.textContent = 'Remove';
    bookRead.appendChild(removeBook);

    removeBook.addEventListener('click', () => {
      for (let e = 0; e < myLibrary.length; e++) {
        const thisBookTitle = bookAdd.getAttribute('data');
        const bookTitleDel = myLibrary[e].title;
        const indexBookTitle = myLibrary.indexOf(myLibrary.find(({ title }) => title === thisBookTitle));
        // console.log('current title', thisBookTitle);
        // console.log('title to delete', bookTitleDel);
        // console.log('title index', indexBookTitle);
        // console.log('myLibrary', myLibrary);
        if (bookTitleDel === thisBookTitle) {
          myLibrary.splice(indexBookTitle, 1);
          bookAdd.remove();
        }
      }
      console.log('myLibrary2', myLibrary);
    });
  }
}

function addBookToLibrary() {
  const t = document.getElementById('title').value;
  const a = document.getElementById('author').value;
  const p = document.getElementById('pages').value;
  const r = document.getElementById('read').value;
  const l = document.getElementById('language').value;
  const x = new Book(t, l, a, p, r);
  myLibrary.push(x);
  addBookDiv();
}

subBtn.addEventListener('click', () => {
  addBookToLibrary();
});
