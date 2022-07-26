/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/

const user = {
  name: "Dick Butt",
  imageUrl: "https://i.imgur.com/etjgJ2D.jpeg",
  imageSize: 90,
};

function MyButton(){
  return(
    <button>I'm Monsieur button</button>
  )
}

function Profile(){
  return(
  <>
    <h2>{user.name}</h2>
    <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of ' + user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}
    ></img>
  </>
  )
}

export default function App(){
  return (
    <div>
      <h1>Welcome to my first app</h1>
      <MyButton />
      <br></br>
      <Profile />
    </div>
  )
}