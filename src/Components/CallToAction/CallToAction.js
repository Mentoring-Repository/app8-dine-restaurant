import "./CallToAction.css";

const CallToAction = ({ data }) => {
	return (
		<section className="cta">
			<div className="cta-mask">
				<div className="container mx-auto d-flex flex-column flex-xl-row justify-content-between align-items-center">
					<h2 className="heading-l text-white m-0">{data.text}</h2>
					<button className="btn-dine-dark">{data.button}</button>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
