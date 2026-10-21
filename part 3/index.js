/* //import http from 'http'
import express from 'express'
//const express = require('express')
const app = express()
app.use(express.json())
let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if (note) { 
        response.json(note)

    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}
app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
/* const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`) */
import express from 'express'
const app = express()
app.use(express.json())
let persons =
[
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
    ]
app.get('/', (request, response) => {
    response.send('<h1>Hello Mel!</h1>')
})

app.get('/api/persons', (request, response) => { 
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = response.params.id
    const person = persons.find(persons => persons.id === id)
    if (person) {
        response.json(person)
    } else { 
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = response.params.id
    persons = persons.filter(persons => persons.id !== id)    
})
 
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}
app.post('/api/persons/:id', (request, response) => {
    const body = request.body
    const personName = body.name
    const personNumber = body.number
    if (!personName || !personNumber) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    const person = {
        name: personName,
        number: personNumber,
        id: generateId()
    }

    persons = persons.concat(person)
    response.json(person)
})
app.get('/info', (request, response) => {
    // date the request is received
    const date = new Date().toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date} (${timeZone})</p>`);
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)