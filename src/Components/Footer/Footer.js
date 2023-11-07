import "./Footer.css";
import logo from "../../assets/images/dine.svg";

const Footer = ({ data }) => {
	return (
		<footer className="footer">
			<div className="container-fluid container-xl mx-auto d-flex flex-column flex-xl-row justify-content-between pe-5">
				<img
					className="logo"
					src={logo}
					alt=""
				/>
				<div className="footer-content text-white">
					<p>{data.address}</p>
					<p>{data.country}</p>
					<p>{data.phone}</p>
				</div>
				<div className="footer-content text-white pe-5 me-5">
					<p>OPEN TIMES</p>
					<p>{data.week_hours}</p>
					<p>{data.weekend_hours}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
