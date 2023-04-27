import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/bot.js";
import Index from "./components/Index";
import "./components/all.css";

const App = () => {
    return(
        
        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={Home} />
        </Router>
        
    )
}

export default App