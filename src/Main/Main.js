import Section from "./Section/Section";
import Movie from "./Section/Movie";

const Main = (data) => {
  return (
    <>
      <Section title={data.category} />;
      <Movie image={data.image} />
    </>
  );
};
export default Main;
