const content = document.getElementById('content') as HTMLElement;
const title = document.getElementById('title') as HTMLElement;
const image = document.getElementById('image') as HTMLImageElement;
const description = document.getElementById('description') as HTMLElement;
const date = document.getElementById('date') as HTMLElement;
const apodData = document.getElementById('apodData') as HTMLElement;

interface cosmicData {
	title: string;
	url: string;
	explanation: string;
	date: string;
}

async function loadCosmicData() {
	try {
   const response = await fetch('https://cosmic-daily.onrender.com/api/space/daily');
		if (response.status === 404) {
			throw new Error('Resource not found');
		}

		if (!response.ok) {
			throw new Error('Failed to fetch cosmic data');
		}

		const data: cosmicData = await response.json();

		content.classList.remove('loading');
		apodData.classList.remove('hidden');
		title.textContent = data.title;
		image.src = data.url;
		description.textContent = data.explanation;
		date.textContent = data.date;
	} catch(err) {
		console.log(err);
	} finally {
	}
}

loadCosmicData();
