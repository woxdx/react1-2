import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';

function App() {
  return (
    <div className="App">

      <NotificationList />

      <CommentList />

      <Welcome name="박준한"/>
      <Welcome name="신호진"/>
      <Welcome name="지현수"/>
      
      <Clock></Clock>
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
