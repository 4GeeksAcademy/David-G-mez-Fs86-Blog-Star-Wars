import React from "react";
import { Link } from "react-router-dom";
import CharacterDropdown from "./character-dropdown";
import PlanetDropdown from "./planet-dropdown";
import VehicleDropdown from "./vehicles-dropdown";
import FavoriteDropdown from "./favorite-dropdown"
import "../../styles/navbar.css"

export const Navbar = () => {

	return (

		<nav className="navbar">
			<ul className="navbar ml-4">
				<Link className="text-warning" to="/">
					<li className="nav-item">
						<span className="nav-link active text-warning" aria-current="page" href="#">Home</span>
					</li>
				</Link>
				<li className="nav-item dropdown">
					<CharacterDropdown />
				</li>
				<li className="nav-item dropdown">
					<PlanetDropdown />
				</li>
				<li className="nav-item dropdown">
					<VehicleDropdown />
				</li>
			</ul>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0 col-1">
				<li className="nav-item dropdown">
					<FavoriteDropdown />
				</li>
			</ul>
		</nav>
	);
};

