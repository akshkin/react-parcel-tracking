import { formatDate } from "../../utils";
import FieldLabel from "../fieldValue/FieldLabel";
import "../packageItem/packageItem.styles.css";
import "./packageDetails.styles.css";
import { PiWarningLight } from "react-icons/pi";

function PackageDetails({ packageItem }) {
	const {
		status,
		eta,
		sender,
		location_name,
		verification_required,
		parcel_id,
		location_coordinate_latitude,
		location_coordinate_longitude,
		last_updated,
		notes,
	} = packageItem;

	return (
		<>
			<h2>Parcel #{parcel_id}</h2>
			<div className="flex">
				<div className="flex-column">
					{status !== "delivered" && (
						<FieldLabel
							label="Estimated Delivery Time"
							value={formatDate(eta)}
						/>
					)}

					<FieldLabel label="Sender" value={sender} />

					<FieldLabel label="Location" value={location_name} />

					<FieldLabel label="Last updated" value={formatDate(last_updated)} />
					{notes && <FieldLabel label="Notes" value={notes} />}
					{verification_required && (
						<p className="icon-with-text">
							<PiWarningLight color="orange" />
							Verification required
						</p>
					)}
				</div>
				<iframe
					src={`https://www.google.com/maps?q=${location_coordinate_latitude},${location_coordinate_longitude}&z=15&output=embed`}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="map-frame"
				></iframe>
			</div>
		</>
	);
}

export default PackageDetails;
