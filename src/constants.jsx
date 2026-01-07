import {
	FcOk,
	FcInTransit,
	FcPackage,
	FcImport,
	FcClock,
} from "react-icons/fc";

export const STATUS_MAP = {
	delivered: {
		label: "Delivered",
		icon: <FcOk />,
		className: "status-delivered",
	},
	"on-the-way": {
		label: "In transit",
		icon: <FcInTransit />,
		className: "status-progress",
	},
	"ready-for-pickup": {
		label: "Ready for pickup",
		icon: <FcPackage />,
		className: "status-ready",
	},
	"order-info-received": {
		label: "Order received",
		icon: <FcImport />,
		className: "status-info-received",
	},
	default: {
		label: "Pending",
		icon: <FcClock />,
		className: "status-unknown",
	},
};
