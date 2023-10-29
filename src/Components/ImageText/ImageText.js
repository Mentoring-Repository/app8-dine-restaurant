import "./ImageText.css";
import img from "../../assets/images/img_1.png";

const ImageText = () => {
  return (
    <div className="row img-text ">
      <div className="col-6">
        {" "}
        <img src={img} alt="" />{" "}
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center flex-column">
        <p className="heading-l">Enjoyable place for all the family</p>
        <p className="body-1">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
    </div>
  );
};

export default ImageText;
