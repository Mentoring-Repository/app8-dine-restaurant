import "./ImageText.css";
import img from "../../assets/images/img_1.png";
import headingSvg from '../../assets/images/circle_and_line.svg'

const ImageText = ({ data }) => {
	return (
		<div className="img-text position-relative">
      <div className="back-div div-img-text"></div>
			<div className="container row mx-auto">
				<div className="col-6 px-0">
					<img
          className="image-page"
						src={img}
						alt=""
					/>
          
				</div>
				<div className="col-6 d-flex justify-content-center align-items-start flex-column ps-5 pt-5">
        <img
						className="mb-5"
						src={headingSvg}
						alt=""
					/>
					<p className="heading-l w-80">{data.title}</p>
					<p className="body-1 w-80">{data.desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ImageText;
