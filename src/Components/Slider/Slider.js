import "./Slider.css";
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
		<section className="slider">
			<div className="container row mx-auto">
				<div className="col-6 px-0">
					<img
						className="slider-img image-page"
						src={content.img}
						alt=""
					/>
				</div>
				<div className="col-6 d-flex justify-content-center align-items-start flex-column ps-5 pt-5">
					<p className="heading-l">{content.title}</p>
					<p className="body-1 mb-5">{content.desc}</p>
					<button className="btn-dine mb-5">{content.button}</button>
					<div>
						<ul className="p-0">
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
