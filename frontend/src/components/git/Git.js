import { Link, Navigate, Route, Routes } from "react-router-dom";
import Level1 from "./level1/Level1.js";

const Git = () => {
    return (
        <div className="App-window">
            <div className="ico-row">
                <Link to="/git/level1">
                    <p className="lvl1">Level 1</p>
                </Link>
                <Link to="/git/level2">
                    <p className="lvl2">Level 2</p>
                </Link>
                <Link to="/git/level3">
                    <p className="lvl3">Level 3</p>
                </Link>
            </div>
            <Routes>
                <Route path="/git/level1" element={<Level1 />} />
                <Route path="/git/level2" element={<h2>Level 2 Content</h2>} />
                <Route path="/git/level3" element={<h2>Level 3 Content</h2>} />
            </Routes>
        </div>
    );
}

export default Git;