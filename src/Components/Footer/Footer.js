import "./Footer.css";
import logo from "../../assets/images/dine.svg";

const Footer = ({ data }) => {
	return (
		<footer className="footer">
			<div className="container-fluid container-xl mx-auto d-flex flex-column flex-sm-row justify-content-between pe-xl-5">
				<img
					className="logo logo-footer"
					src={logo}
					alt=""
				/>
				<div className="footer-content d-flex flex-column w-75 flex-xl-row justify-content-around ps-0 ps-xl-5 text-center text-sm-start">
					<div className="text-white mb-4">
						<p>{data.address}</p>
						<p>{data.country}</p>
						<p>{data.phone}</p>
					</div>
					<div className="text-white pe-xl-5 me-xl-5 mb-4">
						<p>OPEN TIMES</p>
						<p>{data.week_hours}</p>
						<p>{data.weekend_hours}</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
