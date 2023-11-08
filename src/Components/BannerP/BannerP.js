import "./BannerP.css";
import logo from "../../assets/images/dine.svg";

const BannerP = ({data}) => {
	return (
		<section className="banner-p">
			<div className="container-fluid container-xl row mx-auto">
            <div className="col-12 col-xl-6">
					<img
						className="logo"
						src={logo}
						alt=""
					/>
					<h1 className="heading-xl text-white">
						{data.title}
					</h1>
					<p className="body-1 text-white w-80 text-center text-lg-start mx-auto mx-xl-0 mb-5">
						{data.desc}
					</p></div>
            </div>
		</section>
	);
};

export default BannerP;
