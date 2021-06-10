
import  {useState} from 'react';
import './App.css';
import './style.scss'
function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className='app'>
      <h1 className={counter > 0 ? "positive" : counter < 0 ? "negative": null}>{counter}</h1>
      <div className='button-wrapper'>
        <button onClick={()=> setcounter(counter-1)}>Decrement</button>
        <button onClick={()=> setcounter(counter+1)}>Increment</button>
      </div>
      </div>
  )
}
export default App;
