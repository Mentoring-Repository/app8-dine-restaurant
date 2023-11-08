import data from '../utils/data.json'
import BannerHP from "../Components/BannerHP/BannerHP";
import ImageText from "../Components/ImageText/ImageText";
import TextImage from '../Components/TextImage/TextImage';
import MenuHighlights from '../Components/MenuHighligths/MenuHighlights';
import Slider from '../Components/Slider/Slider';
import CallToAction from '../Components/CallToAction/CallToAction';
import Footer from '../Components/Footer/Footer';

const Homepage = () => {
  return (
    <>
      <BannerHP data={data.banner_home}/>
      <ImageText data={data.image_text}/>
      <TextImage data={data.text_image}/>
      <MenuHighlights data={data.menu_highlights}/>
      <Slider data={data.slider}/>
      <CallToAction data={data.cta}/>
      <Footer data={data.footer}/>
    </>
  );
};

export default Homepage;
