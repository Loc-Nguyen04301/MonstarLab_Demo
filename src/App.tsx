import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Loader from '@/components/Loader/Loader';

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
