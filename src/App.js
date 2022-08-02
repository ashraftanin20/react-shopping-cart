// feature 1
import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Routes>
              <Route path="/admin" element={<AdminScreen />} />
              <Route path="/" element={<HomeScreen />} exact />
            </Routes>
            
          </main>
          <footer>
            All right is reserved, @2022.
          </footer>
          </div>
      </BrowserRouter>
      </Provider>
     );
  }
  
}

export default App;