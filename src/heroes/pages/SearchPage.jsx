import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { Hero } from "../components/Hero";

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = "" } = queryString.parse(location.search);
	const heroesResult = useMemo(() => getHeroesByName(q), [q]);

	const { searchText, onInputChange } = useForm({ searchText: q });

	const onSubmit = (e) => {
		e.preventDefault();
		if (searchText.trim().lenght < 2) return;
		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<br />
			<div className="row ">
				<div className="col-lg-5 ">
					<h4>Search a Hero</h4>
					<hr />

					<form onSubmit={onSubmit}>
						<input
							type="text"
							placeholder="Search a Hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button className="btn btn-primary   mt-3">Search</button>
					</form>
				</div>

				<div className=" container-fluid col-md-7">
					<h4>Results</h4>
					<hr />
					{q.trim() === "" ? <div className="alert alert-primary">Search a Hero</div> : null}

					{heroesResult.length === 0 && q.length >= 3 ? (
						<div className="alert alert-danger">{`${q} not found`}</div>
					) : (
						<div className="row container">
							{heroesResult.map((hero) => (
								<Hero hero={hero} key={hero.id} />
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};
