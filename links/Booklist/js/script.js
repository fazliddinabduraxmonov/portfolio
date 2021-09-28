window.addEventListener('DOMContentLoaded', () => {

    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        bookList = document.querySelector('#book-list'),
        warningMessage = document.querySelector('.warning-message'),
        close = document.querySelector('.close');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Basic validation
        if((title.value == '') && (author.value == '') && (year.value == '')){
            // alert('Please input your information');
            warningMessage.style.display = 'block'
            close.addEventListener('click', ()=> {
                warningMessage.style.display = 'none'
            })
        }
        else{
            const newRow = document.createElement('tr')

            // creating new title
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)
            title.value = null

            // creating new Author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)
            author.value = null

            // creating new Year
            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)
            year.value = null

            // displaying in UI
            bookList.appendChild(newRow)
        }
    })



})