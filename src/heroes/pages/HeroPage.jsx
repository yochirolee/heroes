import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GetHeroeByID } from "../helpers/getHeroeById";

export const HeroPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	//UseMemo
	const hero = useMemo(()=>GetHeroeByID(id), [id]);

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!hero) return <Navigate to="/marvel" />;

	return (
		<div className="row container mt-5">
			<div className="col-4">
				<img src={`../heroes/${hero.id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
			</div>
			<div className="col-8 container">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter Ego: </b>
						{hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b>
						{hero.publisher}
					</li>
					<li className="list-group-item">
						<b>Appearance: </b>
						{hero.first_appearance}
					</li>
				</ul>
				<h5 className="mt-5">Characters</h5>
				<p>{hero.characters}</p>
			</div>
			<button onClick={onNavigateBack} className=" btn btn-primary">
				Back
			</button>
		</div>
	);
};
