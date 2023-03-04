import LandingPage from "./components/LandingPage/LandingPage";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { reducers } from "./redux/reducers";

function App() {
  const store = configureStore(
    {reducer: reducers}
  );

  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  )
}

export default App;
