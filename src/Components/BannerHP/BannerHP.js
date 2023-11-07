import "./BannerHP.css";
import logo from "../../assets/images/dine.svg";

const BannerHP = ({ data }) => {
	return (
		<div className="banner-hp">
			<div className="container row mx-auto">
				<div className="col-12 col-lg-8 col-xl-6">
					<img
						className="logo"
						src={logo}
						alt=""
					/>
					<h1 className="heading-xl text-white">
						{data.title}
					</h1>
					<p className="body-1 text-white w-80 mb-5">
						{data.desc}
					</p>
					<button className="btn-dine-dark">
						{data.button}
					</button>
				</div>
			</div>
		</div>
	);
};

export default BannerHP;
