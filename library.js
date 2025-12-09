
// sidebar
const listItems = document.querySelectorAll(".list-item");

listItems.forEach(item => {
  const icon = item.firstElementChild
  const text = item.lastElementChild
  item.addEventListener("mouseenter", (e) => {
    // add new class
    icon.classList.toggle("icon-hover")
    text.classList.toggle("list-item-text-hover")

    
  })
  item.addEventListener("mouseleave", (e) => {
    // remove class
    icon.classList.toggle("icon-hover")
    text.classList.toggle("list-item-text-hover")
  })
})

// header
const myInput = document.getElementById('search-input');

function showcencel() {
  const cencel = document.createElement("img")
  const search = document.querySelector('.search')
  cencel.id = "search-cencel";
  cencel.src = "icon/cencel.svg"
  cencel.style.right = "22px";
  search.appendChild(cencel);
  cencel.addEventListener("click", (e) => { 
    deleteCencel();
  });
}

function deleteCencel() {
  const cencel = document.querySelector('#search-cencel')
  myInput.value = ""
  cencel.remove()
}


myInput.addEventListener('input', (event) => {
  const inputValue = event.target.value
  const inputLength = inputValue.length
  if (inputLength == 1 && !document.getElementById('search-cencel')) {
    showcencel(myInput)
  } else if (inputLength == 0) {
    deleteCencel()
  }
});

myInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    deleteCencel();
  }}
);  

// main content books
const addBook = document.querySelector('.addBook-button')
const scrim = document.querySelector('.scrim')
const scrimContainer = document.querySelector('.scrim-container')

addBook.addEventListener("click", (e) => { 
  scrim.classList.toggle('hidden');
});
scrim.addEventListener("click", (e) => { 
  scrim.classList.toggle('hidden');
});
scrimContainer.addEventListener("click", (e) => {
  e.stopPropagation(document.getElementsByClassName('icon-trash'));
});

const buttons = Array.from(document.getElementsByClassName('button'));
function changButton() {
  buttons.forEach(item => {
    item.addEventListener("click", (e) => { 
      if (item.textContent == 'Continue') {
        item.textContent = 'Read Now'
      } else if (item.textContent == 'Read Now') {
        item.textContent = 'Continue'
      };
    });
  });
}; changButton()

// in the scrim
const closeButton = document.querySelector('.close')
closeButton.addEventListener("click", (e) => { 
  scrim.classList.toggle('hidden');
});

const books = document.querySelector('.books')
let trashIcons = document.querySelectorAll('.icon-trash')
const scrimTitle = document.querySelector('#scrim-title')
const scrimAuthor = document.querySelector('#scrim-author')
const scrimNumber = document.querySelector('#scrim-number')
const scrimConfirm = document.querySelector('.scrim-confirm')
const scrimReset = document.querySelector('.scrim-reset')

function trashDelete() {
  trashIcons.forEach(item => {
    item.addEventListener("click", (e) => { 
      // console.log('hi');
      
      const bookBottmAsParent = item.parentNode
      const bookContentAsParent = bookBottmAsParent.parentNode
      const bookAsParent =bookContentAsParent.parentNode
      bookAsParent.remove()
    });
  });
}; trashDelete();

function emptyInput() {
  scrimTitle.value = ''
  scrimAuthor.value = ''
  scrimNumber.value = ''
}

scrimConfirm.addEventListener("click", (e) => {

  if (scrimTitle.value != '' && scrimAuthor.value != '' && scrimNumber.value != '') {

  const book = document.createElement('div');
  const cover = document.createElement('div');
  const p = document.createElement('p');
  const bookContent = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const pAuthor = document.createElement('p');
  const bookBottom = document.createElement('div');
  const button = document.createElement('button');
  const img = document.createElement('img');

  book.className = 'book'
  cover.className = 'cover'
  bookContent.className = 'book-content'
  bookTitle.className = 'book-title'
  bookBottom.className = 'book-bottom'
  button.className = 'button'
  img.className = 'icon-trash'
  img.src = 'icon/trash.svg'
  
  
  p.textContent = scrimNumber.value + ' Pages'
  bookTitle.textContent = scrimTitle.value
  pAuthor.textContent = scrimAuthor.value
  button.textContent = 'Continue'
  
  books.appendChild(book)
  book.appendChild(cover)
  book.appendChild(bookContent)
  cover.appendChild(p)
  bookContent.appendChild(bookTitle)
  bookContent.appendChild(pAuthor)
  bookContent.appendChild(bookBottom)
  bookBottom.appendChild(button)
  bookBottom.appendChild(img)
  buttons.push(button)
  trashIcons.push(img)
  changButton()
  trashDelete()
  emptyInput();
  scrim.classList.toggle('hidden');
}});

scrimReset.addEventListener("click", (e) => {
  emptyInput()
});













