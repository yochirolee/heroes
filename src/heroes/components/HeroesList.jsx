import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Hero } from "./Hero";

export const HeroesList = ({ publisher }) => {
	const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className="row  ">
			{heroes.map((hero) => (
				<Hero key={hero.id} hero={hero} />
			))}
		</div>
	);
};
