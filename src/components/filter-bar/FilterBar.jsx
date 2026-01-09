import { STATUS_MAP } from "../../constants";
import FilterItem from "./FilterItem";
import "./filter-bar.styles.css";

function FilterBar({ filter, handleFilterChange }) {
	return (
		<div className="filter-bar">
			<button
				className={filter === "all" ? "filter-btn active" : "filter-btn"}
				onClick={() => handleFilterChange("all")}
			>
				All
			</button>

			{Object.entries(STATUS_MAP).map(([filterKey, info]) => (
				<FilterItem
					key={filterKey}
					filterKey={filterKey}
					filter={filter}
					info={info}
					handleFilterChange={handleFilterChange}
				/>
			))}
		</div>
	);
}

export default FilterBar;
