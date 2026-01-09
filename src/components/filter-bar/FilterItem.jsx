function FilterItem({ filterKey, filter, info, handleFilterChange }) {
	return (
		<button
			className={filter === filterKey ? "filter-btn active" : "filter-btn"}
			onClick={() => handleFilterChange(filterKey)}
		>
			{info.label}
		</button>
	);
}

export default FilterItem;
