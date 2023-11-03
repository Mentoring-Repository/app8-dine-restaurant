import data from '../utils/data.json'
import BannerHP from "../Components/BannerHP/BannerHP";
import ImageText from "../Components/ImageText/ImageText";

const Homepage = () => {
  return (
    <>
      <BannerHP data={data}/>
      <ImageText />
    </>
  );
};

export default Homepage;
