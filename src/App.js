import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import Home from "./routers/Home";
import Songs from "./routers/Songs";
import Videos from "./routers/Videos";
import Blog from "./routers/Blog";
import Bio from "./Components/Bio";
import Gallery from "./Components/Gallery";
import Stream from "./Components/Stream";

import { ImMusic, ImHome, ImBook, ImVideoCamera, ImMenu } from "react-icons/im";
import AnimatedRoute from "./Components/AnimatedRoutes";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="menu">
            <details>
              <summary>
                <ImMenu />
              </summary>

              <li>About</li>
              <li>
                <a href="/">Bio</a>
              </li>
              <li>
                <a href="/Gallery">Gallery</a>
              </li>
              <li>
              <a href="/Stream">Stream</a>
              </li>
              <li>About</li>
            </details>
          </div>
          {/* logo */}
          <div className="bouncing-text">
            <div className="b">🎙W</div>
            <div className="o">a</div>
            <div className="u">x</div>
            <div className="n">z</div>
            <div className="c">e</div>
            <div className="e">e🎙</div>
            <div className="shadow"></div>
            <div className="shadow-two"></div>
          </div>

          {/* end of logo */}
          <Router>
            <AnimatedRoute />
            <nav>
              <Link className="btn-link" to="/">
                <ImHome />
              </Link>
              <Link className="btn-link" to="/Songs">
                <ImMusic />
              </Link>
              <Link className="btn-link" to="/Videos">
                <ImVideoCamera />
              </Link>
              <Link className="btn-link" to="/Blog">
                <ImBook />
              </Link>
              <Link className="bio" to="/Bio">
                Bio
              </Link>
              <Link className="bio" to="/Gallery">
                Gallery
              </Link>
              <Link className="bio" to="/Stream">
                Gallery
              </Link>
            </nav>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
