import "./field-label.styles.css";

function FieldItem({ label, value }) {
	return (
		<div className="flex-column">
			<span className="field-label">{label}</span>
			<span>{value}</span>
		</div>
	);
}

export default FieldItem;
