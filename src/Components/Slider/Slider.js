import "./Slider.css";
import lines from '../../assets/images/lines.svg'
import { useState, useEffect } from "react";

const Slider = ({ data }) => {
	const [selected, setSelected] = useState(0);
	const [content, setContent] = useState({});

	const handleSelected = (index) => {
		setSelected(index);
	};

	useEffect(() => {
		data.forEach((item, index) => {
			if (selected === index) {
				setContent(item);
			}
		});
	}, [selected, data]);

	return (
		<section className="slider position-relative">
            <div className="back-div div-slider"></div>
			<div className="container-fluid container-xl row mx-auto">
				<div className="col-12 col-xl-6 px-0 position-relative">
                <img
						className="slider-svg"
						src={lines}
						alt=""
					/>
					<img
						className="slider-img image-page image-main"
						src={content.img}
						alt=""
					/>
				</div>
				<div className="col-12 col-xl-6 d-flex justify-content-center align-items-center align-items-xl-start flex-column p-3 ps-xl-5 pt-xl-5">
					<p className="heading-l order-2 order-xl-1">{content.title}</p>
					<p className="body-1 text-center text-xl-start mb-5 order-3 order-xl-2">{content.desc}</p>
					<button className="btn-dine mb-5 order-4 order-xl-3">{content.button}</button>
					<div className="order-1 order-xl-4 w-100">
						<ul className="slider-list p-0">
							{data.map((item, index) => (

								<li
									key={index}
									className={
										selected === index
											? "slider-links slider-links-active mb-2 position-relative"
											: "slider-links mb-2 position-relative"
									}
									onClick={() => handleSelected(index)}
								>
                                    <div className={selected === index ? "slider-line slider-line-active" : "slider-line"}></div>
									{item.link}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slider;
