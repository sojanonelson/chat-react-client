import {useState} from 'react';
import axios from 'axios';
import CGLogo from '../image/load.png';
import './chat.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
 //test
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`https://chat-v1-server.onrender.com/chat`, { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    
  };

  return (
    <div className='main1'>
    <div className="wrapper">
      <p className='title'>CHAT BOT</p>
      <form onSubmit={handleSubmit}>
        <img src={CGLogo} alt="" className={loading ? 'cg-logo loading' : 'cg-logo'} />
        <input
          type="text"
          value={prompt}

          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
        />
        <button type="submit">Ask</button>
      </form>
      <p className='replay'>Bot replay:</p>
      <div className='chat-res-div'>

      <p className="response-area">
        {loading ? 'Loading...' : response }
      </p>
      </div>
      <h1 className='code'>coded by sojan</h1>
      
      <div className="coded_by_sojan"></div>
</div>
</div>

  );
}

export default App;
