import { airtable_key } from "./bundle.js";

const airtableBase = 'appUqMYYmR2P2tnQK';

const getRecords = async (base) => {
	const response = await fetch(`https://api.airtable.com/v0/${airtableBase}/${base}/Details`, {
		headers: {
			Authorization: `Bearer ${airtable_key}`,
		},
	});
	const data = await response.json();
	console.log(data)
	return data.records;
};

getRecords(airtable_key);