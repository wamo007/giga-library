const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read.toLowerCase() == 'yes') {
        this.read = 'Read';
    } else {
        this.read = 'Not read yet';
    }
}

function addBookToLibrary(title,author,pages,read) {
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    const newDiv = document.createElement('div');
    const newList = document.createElement('ol');
    const newTitle = document.createElement('li');
    const newAuthor = document.createElement('li');
    const newPages = document.createElement('li');
    //const newRead = document.createElement('li');
    const readField = document.createElement('fieldset');
    const readLegend = document.createElement('legend');
    const readDivYes = document.createElement('div');
    const readLabelYes = document.createElement('label');
    const readInputYes = document.createElement('input');
    const readDivNo = document.createElement('div');
    const readLabelNo = document.createElement('label');
    const readInputNo = document.createElement('input');
    const removeMe = document.createElement('button');

    newDiv.setAttribute(
        "style",
        'background-color: burlywood; padding: 10px; height: 250px; width: 350px; border-radius: 14px; border: none; margin: 20px; font-size: 24px;'
    );

    removeMe.setAttribute('id',myLibrary.length - 1);
    removeMe.setAttribute('class', 'remove');
    
    readInputYes.setAttribute('type','radio');
    readInputYes.setAttribute('id','yes');
    readInputYes.setAttribute('value','yes');
    readInputYes.setAttribute('name',myLibrary.length - 1);
    readLabelYes.setAttribute('for','yes');
    readInputNo.setAttribute('type','radio');
    readInputNo.setAttribute('id','no');
    readInputNo.setAttribute('value','no');
    readInputNo.setAttribute('name',myLibrary.length - 1);
    readLabelNo.setAttribute('for','no');

    removeMe.textContent = 'Delete';

    readLegend.textContent = 'Status:';
    readLabelYes.textContent = 'Read';
    readLabelNo.textContent = 'Not read yet';

    newTitle.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
    newAuthor.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
    newPages.textContent = `Page count: ${myLibrary[myLibrary.length - 1].pages}`;
    if (read == "yes") {
        readInputYes.setAttribute('checked','true');
    } else {
        readInputNo.setAttribute('checked','true');
    }
    //newRead.textContent = `Status: ${myLibrary[myLibrary.length - 1].read}`;
        
    newList.appendChild(newTitle);
    newList.appendChild(newAuthor);
    newList.appendChild(newPages);
    //newList.appendChild(newRead);
    newList.appendChild(readField);
    readField.appendChild(readLegend);
    readField.appendChild(readDivYes);
    readDivYes.appendChild(readInputYes);
    readDivYes.appendChild(readLabelYes);
    readField.appendChild(readDivNo);
    readDivNo.appendChild(readInputNo);
    readDivNo.appendChild(readLabelNo);
    newDiv.appendChild(newList);
    newDiv.appendChild(removeMe);
    document.body.appendChild(newDiv);

    document.getElementById(myLibrary.length - 1).addEventListener('click', function() {
        let parentElement = this.parentElement;
        parentElement.remove();
    });
}

const addBook = document.querySelector('.add')
addBook.addEventListener('click', function() {

    const newForm = document.createElement('form');
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newPages = document.createElement('div');
    const titleInput = document.createElement('input');
    const authorInput = document.createElement('input');
    const pagesInput = document.createElement('input');
    const readField = document.createElement('fieldset');
    const readLegend = document.createElement('legend');
    const readDivYes = document.createElement('div');
    const readLabelYes = document.createElement('label');
    const readInputYes = document.createElement('input');
    const readDivNo = document.createElement('div');
    const readLabelNo = document.createElement('label');
    const readInputNo = document.createElement('input');
    const submitBtn = document.createElement('button');

    newForm.setAttribute(
        'style',
        'position: fixed; bottom: 90px; right: 20px; background-color: gray; color: white; display: grid; justify-items: end; padding: 10px; height: 360px; width: 360px; border-radius: 14px; border: none; margin: 20px; font-size: 24px;'
    )
    titleInput.setAttribute('required','true');
    authorInput.setAttribute('required','true');
    pagesInput.setAttribute('required','true');
    pagesInput.setAttribute('type','number');
    readInputYes.setAttribute('type','radio');
    readInputYes.setAttribute('id','yes');
    readInputYes.setAttribute('value','yes');
    readInputYes.setAttribute('name','reading');
    readLabelYes.setAttribute('for','yes');
    readInputNo.setAttribute('type','radio');
    readInputNo.setAttribute('id','no');
    readInputNo.setAttribute('value','no');
    readInputNo.setAttribute('name','reading');
    readInputNo.setAttribute('checked','true');
    readLabelNo.setAttribute('for','no');
    submitBtn.setAttribute('class','submit');

    newDiv.textContent = 'Please type the following information about the new book:';
    newTitle.textContent = 'Title:';
    newAuthor.textContent = 'Author:';
    newPages.textContent = 'Page count:';
    readLegend.textContent = 'Have you read it?';
    readLabelYes.textContent = 'Yes';
    readLabelNo.textContent = 'No';

    submitBtn.textContent = 'Submit';
    newForm.appendChild(newDiv);
    newForm.appendChild(newTitle);
    newTitle.appendChild(titleInput);
    newForm.appendChild(newAuthor);
    newAuthor.appendChild(authorInput);
    newForm.appendChild(newPages);
    newPages.appendChild(pagesInput);
    newForm.appendChild(readField);
    readField.appendChild(readLegend);
    readField.appendChild(readDivYes);
    readDivYes.appendChild(readInputYes);
    readDivYes.appendChild(readLabelYes);
    readField.appendChild(readDivNo);
    readDivNo.appendChild(readInputNo);
    readDivNo.appendChild(readLabelNo);
    newForm.appendChild(submitBtn);
    document.body.appendChild(newForm);

    submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (newForm.checkValidity()) {
    let title = '';
    let author = '';
    let pages = '';
    let read = '';
    title += titleInput.value;
    author += authorInput.value;
    pages += pagesInput.value;
    if (readInputYes.checked) {
        read += 'yes';
    } else if (readInputNo.checked) {
        read += 'no';
    }
    addBookToLibrary(title,author,pages,read);
    document.body.removeChild(newForm);
    } else {
        alert('Lol?! Fill all the spaces');
    }
    });
})

