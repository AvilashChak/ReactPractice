import './App.css'
import Accordion from './components/Accordion';

const data = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
  },
  {
    title: 'Why use React?',
    content: 'It’s fast, scalable, and simple. It works only on user interfaces in the application.',
  },
  {
    title: 'How does React work?',
    content: 'React creates a virtual DOM. When state changes, it compares the new virtual DOM with the old one and updates only what has changed.',
  },
];

function App() {

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>React Accordion Component</h2>
      <Accordion items={data} />
    </>
  )
}

export default App
