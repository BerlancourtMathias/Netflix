import "./assets/css/App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import data from "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1643648266/react-new-exercices/netflix2022/movies_rnexgr.json";

const App = () => {
  return (
    <>
      <Header />
      <Main data={data[0]} />
    </>
  );
};

export default App;
