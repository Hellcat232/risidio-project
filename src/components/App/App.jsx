import css from "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import CollectionPage from "../../pages/CollectionPage/CollectionPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </>
  );
};

export default App;
