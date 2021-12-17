import './App.scss';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <Board 
        className= 'board'
        size={400}
      />
    </div>
  );
}

export default App;
