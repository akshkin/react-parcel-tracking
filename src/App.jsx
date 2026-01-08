import { useEffect, useState } from "react";
import "./App.css";
import PackageItem from "./components/packageItem/PackageItem";
import { ImSpinner3 } from "react-icons/im";
import { RiCloseLargeLine } from "react-icons/ri";
import PackageDetails from "./components/packageDetails/PackageDetails";
import { STATUS_MAP } from "./constants";
import FilterBar from "./components/filter-bar/FilterBar";

function App() {
	const [isLoading, setisLoading] = useState(false);
	const [packageData, setPackageData] = useState([]);
	const [errorText, setErrorText] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [selectedPackage, setSelectedPackage] = useState({});
	const [filter, setFilter] = useState("all");
	const [filteredPackages, setFilteredPackages] = useState([...packageData]);

	useEffect(() => {
		async function loadData() {
			setisLoading(true);
			try {
				const response = await fetch(
					// "https://my.api.mockaroo.com/orders.json?key=e49e6840"
					"../data.json"
				);
				const data = await response.json();
				if (data.error) {
					setErrorText("An error occured. Please try again later.");
				} else {
					console.log(data);
					setPackageData(data);
					setFilteredPackages(data);
				}
			} catch (error) {
				console.log(error);
				setErrorText("An error occured. Please try again later.");
			} finally {
				setisLoading(false);
			}
		}
		loadData();
	}, []);

	function handleModalClose() {
		setOpenModal(false);
		setSelectedPackage(null);
	}

	function handleFilterChange(f) {
		setFilter(f);
		const newPackages = packageData.filter(
			(packageItem) => packageItem.status === f
		);
		f === "all"
			? setFilteredPackages([...packageData])
			: setFilteredPackages(newPackages);
	}

	return (
		<>
			<h1>Your Parcels</h1>
			{isLoading ? (
				<ImSpinner3 className="spinner" fontSize="2rem" />
			) : errorText ? (
				<p className="error-text">{errorText}</p>
			) : (
				<>
					<FilterBar filter={filter} handleFilterChange={handleFilterChange} />

					{filteredPackages.length > 0 ? (
						<div className="package-list-grid">
							{filteredPackages.map((packageItem) => (
								<PackageItem
									key={packageItem.id}
									packageItem={packageItem}
									setSelectedPackage={setSelectedPackage}
									setOpenModal={setOpenModal}
								/>
							))}
						</div>
					) : (
						<p
							style={{
								textAlign: "center",
							}}
						>
							No packages found for selected filter
						</p>
					)}
				</>
			)}
			{openModal && (
				<div className="modal-overlay">
					<div className="modal">
						<button className="close-btn" onClick={handleModalClose}>
							<RiCloseLargeLine />
						</button>

						<PackageDetails packageItem={selectedPackage} />
					</div>
				</div>
			)}
		</>
	);
}

export default App;
