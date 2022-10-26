import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <>
      <div>
        <Counter defaultValue={0}></Counter>
      </div>
      <div>
        <Counter defaultValue={10}></Counter>
      </div>
      <div>
        <Counter defaultValue={-10}></Counter>
      </div>
    </>
  );
}

export default App;
