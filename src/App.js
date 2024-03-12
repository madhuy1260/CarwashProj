import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Router>
          <Header />
          <div
          // style={{ marginBottom: "8rem" }}
          >
            <Routes>
              {/* <Route element={<ProtectedRoute />}>
                <Route
                  exact
                  path="InnerScreenAccess"
                  element={<InnerScreenAccess />}
                />
              </Route> */}
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
