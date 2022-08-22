import { heroes } from "../data/heroes";

export const GetHeroeByID = (id) => {
	return heroes.find((heroe) => heroe.id === id);
};
