// import datasTab from "../App";

const Section = ({ datasTab }) => {
  console.log("dataTab:", datasTab);
  return datasTab.map((elem) => {
    return (
      <div className="cardList">
        <h2 key={datasTab.indexOf[elem]}>{elem.category}</h2>
        <div className="card">
          {elem.images.map((element) => {
            return (
              <img
                src={element}
                alt="contenu carte netflix"
                key={elem.images.indexOf[element]}
              />
            );
          })}
        </div>
      </div>
    );
  });
};
export default Section;
