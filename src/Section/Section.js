import datasTab from "../App";

const Section = (datasTab) => {
  return (
    
      datasTab.map(elem=>return(
        <div> {elem.category}</div>));
    
  );
};
export default Section;
