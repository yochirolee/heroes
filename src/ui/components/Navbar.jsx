import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext, useState } from "react";

export const Navbar = () => {
	const navigate = useNavigate();
	const { logout, user } = useContext(AuthContext);
	const [toggle, setToggle] = useState(true);

	const onToggle = () => {
		setToggle(!toggle)
	};
	const onLogout = () => {
		navigate("/login", { replace: true });
		logout();
	};
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>
			<button
				onClick={onToggle}
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div className="navbar-collapse " style={{ display: `${toggle ? "none" : ""}` }}>
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
						to="/dc"
					>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">{user?.name}</span>
					<button onClick={onLogout} className="nav-item nav-link btn">
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
