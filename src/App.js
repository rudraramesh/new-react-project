import MyRoute from "./MyRoute";
import {createStore} from 'redux'
// createStore is used to know for compilar that any reducer is a store
import {Provider} from 'react-redux'
// to provide data from reducer to component

import cartRoducer from "./redux/reducer/cartReducer";

function App() {
  const store=createStore(cartRoducer)
  return (
    <>
    <Provider store={store}>
      <MyRoute/>
   </Provider>
    </>
  );
}

export default App;
