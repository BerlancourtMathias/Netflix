import "./assets/css/App.css";
import Header from "./Header/Header";
import Section from "./Section/Section";
import datas from "./assets/datas/datas.json";

const App = () => {
  return (
    <div>
      <Header />
      <Section datasTab={datas} />
      {console.log("datas :", datas)} ;
    </div>
  );
};

export default App;
