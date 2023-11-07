import "./MenuHighlights.css";
import headingSvg from "../../assets/images/circle_and_line.svg";
import line from "../../assets/images/line.png";

const MenuHighlights = ({ data }) => {
	return (
		<section className="menu d-flex justify-content-center">
			<div className="container-fluid container-xl row mx-auto">
				<div className="col-12 col-xl-6 d-flex justify-content-start align-items-start flex-column gap-4 pb-5">
					<img
						className="mx-auto mx-xl-0 mb-5"
						src={headingSvg}
						alt=""
					/>
					<p className="heading-l text-white w-80 text-center text-xl-start">{data.title}</p>
					<p className="body-1 text-white w-80 text-center text-xl-start">{data.desc}</p>
				</div>
				<div className="col-12 col-xl-6 d-flex justify-content-start align-items-start flex-column gap-4 pb-5 pt-5 mt-4">
					{data.menu_list.map((item) => (
						<div key={item.title} className="menu-item d-flex">
							<div className="menu-img-container">
								<img
									className="menu-img"
									src={item.img}
									alt=""
								/>
								<img
									className="line"
									src={line}
									alt=""
								/>
							</div>
							<div className="ms-4">
								<h4 className="heading-m text-white">
									{item.title}
								</h4>
								<h4 className="body-2 text-white">
									{item.desc}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MenuHighlights;
