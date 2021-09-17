import logo from './logo.svg';
import './App.css';

import Quiz from './components/quiz';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" width={180} />
            </header>
            <Quiz/>
        </div>
    );
}

export default App;
