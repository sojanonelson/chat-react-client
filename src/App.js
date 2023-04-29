import { BrowserRouter as Router, Route } from "react-router-dom";
import chat from "./components/chat";
import Index from "./components/Index";
import "./components/all.css";

const App = () => {
    return(
        
        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/chat" component={chat} />
        </Router>
        
    )
}

export default App
