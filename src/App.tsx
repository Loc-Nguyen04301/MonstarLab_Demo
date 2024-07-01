import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Loader from '@/components/Loader/Loader';
import { useAppSelector } from '@/redux-toolkit/hook';

function App() {

  const { loading } = useAppSelector((state) => state.stateApp)
  return (
    <>
      <Router>
        <Routes />
        <Loader isFullScreen={loading} />
      </Router>
    </>
  )
}

export default App
