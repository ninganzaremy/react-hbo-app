const ForYouList = (props) => {
	const loopComp = (comp, digit) => {
		let thumbnails = [];
		for (let index = 1; index <= digit; index++) {
			thumbnails.push(comp);
		}

		return thumbnails;
	};
	return (
		<div className="foryou-list">
			<h3 className="foryou-list__title">For You</h3>
			<div className="foryou-list__thumbnails">
				{loopComp(
					<div className="foryou-list__thumbnail">
						<img src="https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1a…&fit=max&dpr=2&s=7f0718a8a5451b88475559f0819a35cd" />
						<div className="foryou-list__top-layer">
							<i className="fas fa-play" />
						</div>
					</div>,
					10,
				)}
			</div>
		</div>
	);
};

export default ForYouList;
