import { Route, Routes, useLocation } from "react-router-dom";
//pages
import HomePage from "./pages/HomePage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
