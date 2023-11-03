import "./BannerHP.css";
import logo from "../../assets/images/dine.svg";

const BannerHP = ({data}) => {
	return (
		<div className="banner-hp row">
			<div className="col-12 col-lg-8 col-xl-5">
				<img
					className="logo"
					src={logo}
					alt=""
				/>
				<h1 className="heading-xl text-white">
					{data.banner_home.title}
				</h1>
				<p className="body-1 text-white w-100 w-lg-75 mb-5">
					{data.banner_home.desc}
				</p>
				<button className="btn-dine-dark">{data.banner_home.button}</button>
			</div>
		</div>
	);
};

export default BannerHP;
