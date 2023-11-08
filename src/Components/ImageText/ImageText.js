import "./ImageText.css";
import img from "../../assets/images/img_1.png";
import headingSvg from "../../assets/images/circle_and_line.svg";

const ImageText = ({ data }) => {
	return (
		<section className="img-text position-relative">
			<div className="back-div div-img-text"></div>
			<div className="container-fluid container-xl row mx-auto">
				<div className="col-12 col-xl-6 px-0">
					<img
						className="image-page image-main"
						src={img}
						alt=""
					/>
				</div>
				<div className="col-12 col-xl-6 d-flex justify-content-center align-items-center align-items-xl-start flex-column p-2 ps-xl-5 pt-5">
					<img
						className="mb-5"
						src={headingSvg}
						alt=""
					/>
					<p className="heading-l w-80 text-center text-xl-start">{data.title}</p>
					<p className="body-1 w-80 text-center text-xl-start">{data.desc}</p>
				</div>
			</div>
		</section>
	);
};

export default ImageText;
