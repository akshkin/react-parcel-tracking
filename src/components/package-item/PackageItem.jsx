import "./package-item.styles.css";
import { PiPackageThin } from "react-icons/pi";
import StatusBadge from "../status-badge/StatusBadge";

function PackageItem({ packageItem, setSelectedPackage, setOpenModal }) {
	const { status, sender, parcel_id } = packageItem;

	function handleClick() {
		setSelectedPackage(packageItem);
		setOpenModal(true);
	}

	return (
		<div className="package-item">
			<div className="flex-row">
				<div className="icon-with-text">
					<span className="icon-background">
						<PiPackageThin />
					</span>{" "}
					<div className="flex-column">
						<span className="small-text">Parcel</span>
						<span>#{parcel_id}</span>
					</div>
				</div>
				<h2 className="sender-name">{sender}</h2>
			</div>
			<StatusBadge status={status} />
			<button className="btn" onClick={handleClick}>
				View details
			</button>
		</div>
	);
}

export default PackageItem;
