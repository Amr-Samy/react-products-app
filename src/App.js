import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './components/Routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { store } from './store/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}> <AppRoutes/> </Provider>
    </div>
  );
}

export default App;
