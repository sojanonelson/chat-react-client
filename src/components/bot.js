import {useState} from 'react';
import axios from 'axios';
import CGLogo from '../image/load.png';
import './bot.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.BACKEND_URL}/chat`, { prompt })
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
      <p className="response-area">
        {loading ? 'Loading...' : response }
      </p>
      <h1 className='code'>coded by sojan</h1>
      
      <div className="coded_by_sojan"></div>
</div>
</div>

  );
}

export default App;
