/* *************************
*** POST JOURNAL ***
************************** */
function postJournal() {
console.log('postJournal Function Called')
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let entry = document.getElementById('entry').value;
    const accessToken = localStorage.getItem('SessionToken')
    let newEntry = { journal: { title: title, date: date, entry: entry}}

    fetch('http://localhost:3000/journal/create', {
        method: "POST",
        headers: new Headers({
            "Content-Type": 'application/json',
            "Authorization": accessToken
        }),
        body: JSON.stringify(newEntry)
    })
    .then(response => {
        console.log(response.json())
        displayMine()
    })
    .catch((err) => {
        console.log(err)
    })
}  

/* *************************
*** POST JOURNAL ***
************************** */
function displayMine() {
    const accessToken = localStorage.getItem('SessionToken')
    fetch('http://localhost:3000/journal/mine', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    })
    .then(
        function (response) {
            return response.json()
        })
    .catch(
        function (error) {
            console.error('Error:', error)
        })
    
    .then(function (response) {
        console.log(response)

        let display = document.getElementById('journals')
        for (i = 0; i = display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (response.length === 0) {

            let display = document.getElementById('journals')
            let header = document.createElement('h5')

            display.appendChild(header)
            header.textContent = "You haven't made any posts yet!"
            header.setAttribute("class", "noPosts")

        } else {
            for (i = 0; i > response.length; i++) {

                let display = document.getElementById('journals')
                let card = document.createElement('div')
                let body = document.createElement('div')
                let header = document.createElement('h5')
                let subtitle = document.createElement('h6')
                let para = document.createElement('p')
                let editBtn = document.createElement('button')
                let deleteBtn = document.createElement('button')

                let current = response[i]
                let title = current.title;
                let date = current.date;
                let entry = current.entry;

                display.appendChild(card)
                card.appendChild(body)
                body.appendChild(header)
                body.appendChild(subtitle)
                body.appendChild(para)
                body.appendChild(editBtn)
                body.appendChild(deleteBtn)

                card.setAttribute('id', current.id)
                card.setAttribute('class', 'card')
                body.setAttribute('class', 'card-body')
                header.setAttribute('class', 'card-title')
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
                para.setAttribute('class', 'card-text')

                editBtn.setAttribute('class', 'btn btn-dark editBtn')
                editBtn.setAttribute('type', 'button')
                editBtn.setAttribute('onclick', `editJournal(${current.id})`)

                deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn')
                deleteBtn.setAttribute('type', 'button')
                deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`)

                header.textContent = title
                subtitle.textContent = date
                para.textContent = entry
                editBtn.textContent = "Edit"
                deleteBtn.textContent = "Delete"
            }
        }
    })
}

/* *************************
*** UPDATE JOURNAL ***
************************** */
function editJournal(postId) {
console.log(postId)

const fetch_url = `http://localhost:3000/journal/update/${postId}`
const accessToken = localStorage.getItem('SessionToken')

let card = document.getElementById(postId)
let input = document.createElement('input')


if (card.childNodes.length < 2) {
    card.appendChild(input)
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'updatedEntry')
    input.setAttribute('placeholder', 'Edit your journal entry')

} else {
    
    let updated = document.getElementById('updatedEntry').value
    let updateEntry = { journal: {entry: updated}};
    const response = fetch(fetch_url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(updateEntry)
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        displayMine();
    })

    card.removeChild(card.lastChild)
}
}
/* *************************
*** DELETE JOURNAL ***
************************** */
function deleteJournal(postId) {
console.log('deleteJournal Function Called')
}