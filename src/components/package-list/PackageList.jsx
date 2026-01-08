import PackageItem from "../packageItem/PackageItem";
import "./package-list.styles.css";

function PackageList({ packages, setSelectedPackage, setOpenModal }) {
	return (
		<div className="package-list-grid">
			{packages.map((packageItem) => (
				<PackageItem
					key={packageItem.id}
					packageItem={packageItem}
					setSelectedPackage={setSelectedPackage}
					setOpenModal={setOpenModal}
				/>
			))}
		</div>
	);
}

export default PackageList;
