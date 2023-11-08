import logo from "../assets/images/dine.svg";

const Confirmation = () => {
	return (
		<section className="banner-p">
			<div className="container-fluid container-xl row mx-auto">
				<div className="col-12">
					<img
						className="logo"
						src={logo}
						alt=""
					/>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<h1 className="heading-xl text-white text-center">
							SUCCESS!
						</h1>
						<p className="body-1 text-white w-80 mx-auto mx-xl-0 mb-5 text-center">
							Your reservation has been confirmed. Thank you for
							choosing us. We look forward to seeing you soon.
						</p>
						<a
							href="/"
							className="btn-dine-dark"
						>
							Back to Homepage
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Confirmation;
