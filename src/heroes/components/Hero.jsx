import { Link } from "react-router-dom";

const Characters = ({ alter_ego, characters }) => {
	if (alter_ego === characters) return <></>;
	return <p>{characters}</p>;
};

export const Hero = ({ hero }) => {
	const { id, superhero, alter_ego, publisher, first_appearance, characters } = hero;
	return (
		<div className=" container col-lg-3  col-md-3 col-sm-4 mt-2">
			<div className="card">
				<div className="row ">
					<div className="col-4 col-sm-12">
						<img className="rounded card-img " src={`../heroes/${id}.jpg`} alt={superhero} />
					</div>
					<div className="col-8 col-sm-12">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<span>{superhero}</span>
							<p className="card-text ">{alter_ego}</p>
							{<Characters alter_ego={alter_ego} characters={characters} />}
							<p className="card-text"></p>
							<small>{first_appearance}</small>
							<p>{publisher}</p>
							<Link to={`/hero/${id}`}>More</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
