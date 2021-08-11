import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import '../nav/Nav.css'
import Collapse from "../../utils/Collapse"
import Home from '../../routes/Home'
import About from '../../routes/About'
import Blogpost from "../../routes/Blogpost"

function Nav () {

    return(
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" onClick={Collapse} to="/family_blog"><span className="tighten-c">🌜</span>amille & <span className="tighten-a">🌲</span>lan</Link>
                        <button className="navbar-toggler" id="hamburger-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={Collapse} to="/family_blog">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={Collapse} to="/about">About</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a className="nav-link" href="mailto:rwilliams01101@gmail.com?subject=Just%20Saying%20Hi&amp;body=Let us know what's new with you! If you want to come visit us in Norway, just let us know when and you can stay with us. We can't wait to hear from you! - Camille and Alan">
                                Email Us                      
                            </a>
                        </span>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blogpost">
                        <Blogpost />
                    </Route>
                    <Route path="/family_blog">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Nav

