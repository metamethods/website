export function formatDate(date: Date): string {
	return date
		.toLocaleString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			timeZone: 'UTC'
		})
		.toLowerCase();
}

export function formatDateString(str: string): string {
	return formatDate(new Date(str));
}
