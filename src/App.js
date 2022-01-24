import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initArcs } from './store/reducers/arcsReducer';
import TierList from './components/TierList';
import './css/App.css'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initArcs())
  }, [dispatch])

  return (
    <TierList />
  );
}

export default App;