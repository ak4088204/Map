
import './App.css';


function App() {
  const name = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];

  const list = name.map(name => <center><table className='hello'><tr><td>{name}</td></tr></table></center>);
  return (
    <div className="App">
      {
        list
      }
    </div>
  );
}

export default App;
