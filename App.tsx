import { Provider } from 'react-redux';
import { store } from './src/app/store';
import AppStack from './src/navigation/AppStack';


export default function App() {
  return (
    <Provider store={store}>

    <AppStack />

    </Provider>
  );
}
