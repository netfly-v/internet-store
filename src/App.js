import { Provider } from 'react-redux';
import './App.css';
import './reset.css';
import MainPage from 'components/mainPage/MainPage';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
