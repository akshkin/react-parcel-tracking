export function formatDate(dateString, locale = "en-US") {
	if (!dateString) return "";

	const date = new Date(dateString);

	return new Intl.DateTimeFormat(locale, {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	}).format(date);
}
