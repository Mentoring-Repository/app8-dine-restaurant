import "./BannerHP.css";
import logo from "../../assets/images/dine.svg";

const BannerHP = () => {
	return (
		<div className="banner-hp row">
			<div className="col-12 col-lg-8 col-xl-5">
				<img
					className="logo"
					src={logo}
					alt=""
				/>
				<h1 className="heading-xl text-white">
					Exquisite dining since 1989
				</h1>
				<p className="body-1 text-white w-100 w-lg-75 mb-5">
					Experience our seasonal menu in beautiful country
					surroundings. Eat the freshest produce from the comfort of
					our farmhouse.
				</p>
				<button className="btn-dine-dark">Book a table</button>
			</div>
		</div>
	);
};

export default BannerHP;
