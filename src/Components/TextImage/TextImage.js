import "./TextImage.css";
import img from "../../assets/images/img_2.png";
import lines from "../../assets/images/lines.svg";
import headingSvg from "../../assets/images/circle_and_line.svg";

const TextImage = ({ data }) => {
	return (
		<section className="text-img position-relative">
			<div className="back-div div-text-img"></div>
			<div className="container-fluid container-xl row mx-auto d-flex">
				<div className="col-12 col-xl-6 d-flex justify-content-center align-items-center align-items-xl-start flex-column gap-4 pt-5 pt-xl-0 pb-5 order-2 order-xl-1">
					<img
						className="mb-5"
						src={headingSvg}
						alt=""
					/>
					<p className="heading-l w-80 text-center text-xl-start">{data.title}</p>
					<p className="body-1 w-80 text-center text-xl-start">{data.desc}</p>
				</div>
				<div className="col-12 col-xl-6 d-flex justify-content-end position-relative order-1 order-xl-2">
					<img
						className="text-img-svg"
						src={lines}
						alt=""
					/>
					<img
					className="image-page image-main"
						src={img}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
