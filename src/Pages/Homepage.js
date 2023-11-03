import data from '../utils/data.json'
import BannerHP from "../Components/BannerHP/BannerHP";
import ImageText from "../Components/ImageText/ImageText";
import TextImage from '../Components/TextImage/TextImage';

const Homepage = () => {
  return (
    <>
      <BannerHP data={data}/>
      <ImageText />
      <TextImage data={data.text_image}/>
    </>
  );
};

export default Homepage;
