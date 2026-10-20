//-------------------------PART 2 COURSE-----------------------------------------
/*import Course from './components/Course'
 const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 11,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
} */
/* import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`)
        setNotes(notes.filter((n) => n.id !== id))
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App */
 
// EXERCISES 2.6
 import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'
const App = () => {
  const [newName, setNewName] = useState('')
  const [allPersons, setAllPersons] = useState([])
  const [newNumber, setNewNumber] = useState('')

  const [filter, setFilter] = useState('')
  useEffect(() => { 
    // Fetch initial data from the server
    phonebookService
      .getAll()
      .then(initialPersons => {
        setAllPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = allPersons.filter(person => person.name === newName)
    const personToAdd = person[0]
    const updatedPerson = { ...personToAdd, number: newNumber }

    if (person.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        // logic to update the number can be added here
        phonebookService
          // update person, the difference betweeen personToAdd and updatedPerson is the new number
        .update(personToAdd.id, updatedPerson)
        .then(returnedPerson => {
          setAllPersons(allPersons.map(p =>
            p.id !== personToAdd.id
              ? p // keep the existing person if it's not the one being updated
              : returnedPerson
          ))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.error('Error updating person:', error)
        })
      }
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    phonebookService
      .create(newPerson)
      .then(returnedPerson => {
        setAllPersons(allPersons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.error('Error creating new person:', error)
      })
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  const deletePerson = (id) => {
    phonebookService
      .remove(id)
      .then(() => {
        setAllPersons(allPersons.filter(p => p.id !== id))
      })
      .catch(error => {
        console.error('Error deleting person:', error)
      })
  }
  // ex 2.9
  // here I am currently filtering the list of persons based on the filter input
  const personsToShow = filter === ''
    ? allPersons // if no filter is applied, show all persons
    : allPersons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  //
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          name: <input value={filter} onChange={handleFilter} />
        </div>
      <h2>New Contact</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={(event) => setNewName(event.target.value)}
        newNumber={newNumber}
        handleNumberChange={(event) => setNewNumber(event.target.value)}
      />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />
        ))}
      </ul>
    </div>
  )
}

export default App 