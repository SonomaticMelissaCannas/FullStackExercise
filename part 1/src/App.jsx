// es 1.1-1.3
//import { useState } from 'react';
/*const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}*/
/* const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}*/

/* const App = () => {
  const [counter, setCounter] = useState(0)


  const handleAddOne = () => { setCounter(counter + 1)}
  const handleClickReset = () => { setCounter(0) }
  const handleSubtractOne = () => { setCounter(counter - 1) }
  return (
    <div>
      <Button onClick={handleAddOne} text="+1" />
      <Button onClick={handleClickReset} text="reset" />
      <Button onClick={handleSubtractOne} text="-1" />
      <Display counter={counter}/>
    </div>
  )
} */
/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before update', left)
    const updatedLeft = left + 1;
    setLeft(updatedLeft)
    console.log('left after update', updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1;
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}

      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
} */
// This is the right place to define a component
// Do not define components inside another component

/* const Display = props => <div>{props.value}</div>
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
} */
// exercises 1.6-1.11
/* const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
// const Display = (props) => {
  return (
    <div>
      {props.name} {props.value}
    </div>
  )
} //
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(1);
  const positive = ((good / all) * 100).toFixed(1);

  if (all == 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodFeedback = () => { 
    setGood(good + 1)
    return 
  }
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }
  const handleBadFeedback = () => {
    setBad(bad + 1)
  }
  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGoodFeedback} text="good" />
      <Button onClick={handleNeutralFeedback} text="neutral" />
      <Button onClick={handleBadFeedback} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}
 */
/* const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>

}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleAnecdotes = () => {
    while (true) {
      const randomNumber = getRandomArbitrary(0, anecdotes.length)
      if (randomNumber !== selected) {
        setSelected(randomNumber);
        break;
      }
    }
  }
  const handleVotes = () => {
    const copyVotes = [ ...votes ]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }
  const getMostVotes = () => {
    const maxVotes = Math.max(...votes);
    return votes.indexOf(maxVotes) 
  };
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button onClick={handleVotes} text= "Vote this anecdote"/>
      <Button onClick={handleAnecdotes} text="Random anecdote"/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[getMostVotes()]}</div>
      <div>has {votes[getMostVotes()]} votes</div>
    </>
  );
};
export default App; */
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
import { useState, useEffect } from 'react'
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

export default App
 
// EXERCISES 2.6
/*  import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(() => { 
    // Fetch initial data from the server
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  const handleNewNameAdded = (event) => {
    setNewName(event.target.value)
  }
  const handleNewPersonAdded = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName).length > 0 // ex2.7
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  // ex 2.9
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  //
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          name: <input value={filter} onChange={handleFilter} />
        </div>
      <h2>New Contact</h2>
      <form onSubmit={handleNewPersonAdded}>
        <div>
          name: <input value={newName} onChange={handleNewNameAdded} /></div>
          <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>{person.name} { person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App  */