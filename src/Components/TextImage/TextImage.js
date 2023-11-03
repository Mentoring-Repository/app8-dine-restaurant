import "./TextImage.css";
import img from '../../assets/images/img_2.png'
import lines from '../../assets/images/lines.svg'
import headingSvg from '../../assets/images/circle_and_line.svg'

const TextImage = ({data}) => {
	return (
		<div className="row img-text ">
			<div className="col-6 d-flex justify-content-center align-items-start flex-column gap-4">
                <img className="mb-5" src={headingSvg} alt=""/>
				<p className="heading-l">{data.title}</p>
				<p className="body-1">{data.desc}</p>
			</div>
			<div className="col-6 d-flex justify-content-end position-relative">
                <img className="text-img-svg" src={lines} alt=""/>
				<img
					src={img}
					alt=""
				/>
			</div>
		</div>
	);
};

export default TextImage;
