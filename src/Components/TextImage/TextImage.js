import "./TextImage.css";
import img from "../../assets/images/img_2.png";
import lines from "../../assets/images/lines.svg";
import headingSvg from "../../assets/images/circle_and_line.svg";

const TextImage = ({ data }) => {
	return (
		<section className="text-img position-relative">
			<div className="back-div div-text-img"></div>
			<div className="container row mx-auto">
				<div className="col-6 d-flex justify-content-center align-items-start flex-column gap-4 pb-5">
					<img
						className="mb-5"
						src={headingSvg}
						alt=""
					/>
					<p className="heading-l w-80">{data.title}</p>
					<p className="body-1 w-80">{data.desc}</p>
				</div>
				<div className="col-6 d-flex justify-content-end position-relative">
					<img
						className="text-img-svg"
						src={lines}
						alt=""
					/>
					<img
					className="image-page"
						src={img}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
