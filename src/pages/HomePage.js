import logo from "../logo.svg";
import "../css/App.css";
import { ReusableButton } from '../components';
import { callEndpoint } from '../functions';

export default function HomePage() {
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
        <p> Test first commit</p>
        <ReusableButton text="Test button" customFunction={ async () => console.log( await callEndpoint('GET', 'http://localhost:5000/users/test'))}/>
      </header>
    </div>
  );
}
