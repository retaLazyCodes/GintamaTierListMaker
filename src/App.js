import { useDispatch } from 'react-redux';

import { initArcs } from './store/reducers/arcsReducer';
import { useLocalStorage } from './hooks/useLocalStorage';
import TierList from './components/TierList';
import './css/App.css'
import { loadState } from './components/actions';


function App() {

  const dispatch = useDispatch()
  const [tiers, setTiers] = useLocalStorage('tiers', [])

  console.log(tiers)
  if (tiers?.tierlist?.tierlist?.length > 0) {
    dispatch(loadState(tiers))
  }
  else {
    dispatch(initArcs())
  }

  return (
    <TierList />
  );
}

export default App;