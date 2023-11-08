import data from "../utils/data.json";
import BannerP from "../Components/BannerP/BannerP";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import lines from '../assets/images/lines.svg';

const Booking = () => {
	return (
		<>
			<BannerP data={data.banner_page} />
			<section className="form position-relative">
				<img
					className="reservation-svg"
					src={lines}
					alt=""
				/>
				<div className="back-div div-reservations"></div>
				<div className="form-container container-fluid container-xl row mx-auto">
					<div className="col-12 col-xl-6 px-0 position-relative">
						<Form />
					</div>
				</div>
			</section>
			<Footer data={data.footer} />
		</>
	);
};

export default Booking;
