import { airtable_key } from "./bundle.js";

const airtableBase = 'appUqMYYmR2P2tnQK';

const getRecords = async (base) => {
	const response = await fetch(`https://api.airtable.com/v0/${airtableBase}/Details`, {
		headers: {
			Authorization: `Bearer ${airtable_key}`,
		},
	});
	const data = await response.json();
	// let fileURL = data[0].fields.data
	// let aboutMeBlurb = data[1].fields.data;
	console.log(data)
	console.log(data[0])
	console.log(data[0].fields)
	
	// let resume = document.getElementById('resume')
	// if (resume) {
	// 	return resume.setAttribute('src', fileURL)
	// }
	// let blurb = document.getElementById('blurb');
	// if (blurb) {
	// 	return blurb.innerHTML = aboutMeBlurb;

	// }
};

getRecords();