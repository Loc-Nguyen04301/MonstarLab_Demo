import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { getBaseUrl } from '@/api';

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
