import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ShowData from "./ShowData";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);

  // setCount is async
  // useEffect(() => {
  //   setCount(99999999999999999999);
  //   console.log(count);
  // }, []);

  const [loading, setLoading] = useState(true);
  const [logedIn, setLogedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          {loading ? (
              <div>Loading...</div>
          ) : !logedIn ? (
              <>
                <Route path='/login' element={<Login />} />
              </>
          ) : (
              <>
                <Route path='/' element={<Homepage />} />
                <Route path='*' element={<div>Page not Found</div>} />
              </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
