import { airtable_key } from "./bundle.js";

const airtableBase = 'appUqMYYmR2P2tnQK';

const getRecords = async (base) => {
	const request = await fetch(`https://api.airtable.com/v0/${airtableBase}/Details`, {
		headers: {
			Authorization: `Bearer ${airtable_key}`,
		},
	});
	const response = await request.json();
	const data = response.records
	let fileURL = data[0].fields.data
	let aboutMeBlurb = data[1].fields.data;
	
	
	let resume = document.getElementById('resume')
	if (resume) {
		return resume.setAttribute('src', fileURL)
	}
	let blurb = document.getElementById('blurb');
	if (blurb) {
		return blurb.innerHTML = aboutMeBlurb;

	}
};

getRecords();