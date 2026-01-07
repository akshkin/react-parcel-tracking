import { STATUS_MAP } from "../../constants";
import "./statusBadge.styles.css";

function StatusBadge({ status }) {
	const info = STATUS_MAP[status] ?? {
		label: "Pending",
		icon: <FcClock />,
		className: "status-unknown",
	};

	return (
		<div className={`icon-with-text ${info.className}`}>
			{info.label} {info.icon}
		</div>
	);
}

export default StatusBadge;
