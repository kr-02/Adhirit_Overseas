// updateCSVFile();




//---------------Download Existing CSV-------------------------
function downloadCSVFile() { 
	const a = document.createElement('a');
	a.setAttribute('href', 'resources/users.csv');
	a.setAttribute('download', 'Adhirit enquiry details.csv');
	a.click();
};