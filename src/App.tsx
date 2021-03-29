import React from "react";
import { Provider } from "react-redux";
import Repository from "./components/RepositoryList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Repository />
      </div>
    </Provider>
  );
}

export default App;
