import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardList from './components/CardList';
import { initArcs } from './store/reducers/arcsReducer';
import './App.css'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initArcs())
  }, [dispatch])

  return (
    <CardList />
  );
}

export default App;