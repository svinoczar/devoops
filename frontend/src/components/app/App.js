import git from '../../git-color.svg';
import bash from '../../bash.svg';
import docker from '../../docker.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import Bash from '../bash/Bash';
import Git from "../git/Git";
import Docker from "../docker/Docker";
import Level1 from '../git/level1/Level1';

const App = () => {
    let icons = <div className="App-window">
        <div className="ico-row">
            <Link to="/git" className="Link">
                <img src={git} className="Git-logo" alt="git" />
            </Link>
            <Link to="/bash" className="Link">
                <img src={bash} className="Bash-logo" alt="bash" />
            </Link>
            <Link to="/docker" className="Link">
                <img src={docker} className="Docker-logo" alt="docker" />
            </Link>
        </div>
    </div>

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        icons
                    }
                />
                <Route path="/git/*" element={<Git />} />
                <Route path="/bash" element={<Bash />} />
                <Route path="/docker" element={<Docker />} />
                <Route path="/git/level1" element={<Level1 />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;