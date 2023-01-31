import datasTab from "../App";

const Section = ({ datasTab }) => {
  console.log("dataTab:", datasTab);
  return(<div>
  {datasTab.map(elem=>return(<h2>{elem.category}</h2>) 
  elem.images.map element=>return(<img src="element"alt="image contenu netflix"/>)
)}

  </div>
  )

};
export default Section;
