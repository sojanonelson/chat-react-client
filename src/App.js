import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Index from "./components/Index";
import "./components/all.css";

const App = () => {
    return(
        
        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/chat" component={Chat} />
        </Router>
        
    )
}

export default App
