// const download = function (data) { 

// 	// Creating a Blob for having a csv file format 
// 	// and passing the data with type 
// 	// const blob = new Blob([data], { type: 'text/csv' }); 

// 	// // Creating an object for downloading url 
// 	// const url = window.URL.createObjectURL(blob) 

// 	// // Creating an anchor(a) tag of HTML 
// 	const a = document.createElement('a') 

// 	// // Passing the blob downloading url 
// 	a.setAttribute('href', 'download.csv')

// 	// Setting the anchor tag attribute for downloading 
// 	// and passing the download file name 
// 	a.setAttribute('download', 'download.csv'); 

// 	// Performing a download with click 
// 	a.click() 
// } 


// var fileReader = new FileReader();
// function getFile(inputFile) {
// let file = inputFile.files[0];
// fileReader.readAsText(file);
// }
// function readFile(evt) {
// let parsed = csvJSON(evt.target.result);
// return parsed;
// }



// const csvmaker = function (data) { 

// 	// Empty array for storing the values 
// 	csvRows = []; 

// 	// Headers is basically a keys of an 
// 	// object which is id, name, and 
// 	// profession 
// 	const headers = Object.keys(data); 

// 	// As for making csv format, headers 
// 	// must be separated by comma and 
// 	// pushing it into array 
// 	csvRows.push(headers.join(',')); 

// 	// Pushing Object values into array 
// 	// with comma separation 
// 	const values = Object.values(data).join(','); 
// 	csvRows.push(values) 

// 	// Returning the array joining with new line 
// 	return csvRows.join('\n') 
// } 

// const get = async function () { 

// 	// JavaScript object 
// 	const data = { 
// 		id: 1, 
// 		name: "Geeks", 
// 		profession: "developer"
// 	} 
//     console.log("dfhfgjkhj");

//     var r = new FileReader();
//     r.onload = function (e) {
//     var csv = e.target.result;
//     console.log(csv);
//     var lines = csv.split("\r\n");
//     console.log(lines);
//     // const csvArr = await csv().formFile("resources/users.csv");
//     // const csvArr = await csvdata    //.formFile("resources/users.csv");
//     // var csvFN = "resources/users.csv";
//     // var csvArr = csvFN.split("\n");
    


//     console.log(csvArr);

// 	const csvdata = csvmaker(data); 
// 	//download(csvdata); 
// } 


// // Getting element by id and adding 
// // eventlistener to listen everytime 
// // button get pressed 
// const btn = document.getElementById('action'); 
// btn.addEventListener('click', get);


// }

//------------------------------
function updateCSVFile(){
	var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fileLoc = "D:\\test.csv";
    var file = fso.OpenTextFile(fileLoc, 2, true, 0);

    file.writeline("id,name,profession"); 
    file.Close();
	// const file = new File(['hoge'], 'resources/users.csv', { type: 'text/csv' });
	/*const file = new File([], '../resources/users.csv', { type: ActiveXObject });
	alert(file);
	// const f2file = new File();
	// const csv = file.files[0];
	const blob = new Blob([file], { type: file.type });
	alert(blob);

	let fileReader = new FileReader();
	
	// var cobtebt = fileReader.readAsArrayBuffer('./csvs/sample1.csv');

	// alert(cobtebt);
	
	// var cobtebt = fileReader.readAsText('resources/users.csv'.fileReader); 

	// $.get("users.csv", function(data){
	// 	var yourParsedCSV = data.split("\n").map(function(i){return i.split(",")});
	// });

	// alert(yourParsedCSV);

	// console.log(yourParsedCSV);
	var cobtebt = fileReader.readAsText(blob);
	alert(cobtebt);

	fileReader.onload = function (e) {
		document.querySelector('.output').innerText = e.target.result;
	}*/
    alert('File created successfully at location: ');
}

// let file = input.files[0]; 
//         let fileReader = new FileReader(); 
//         fileReader.readAsText(file); 



const reader = new FileReader()

function read(input) {
	const csv = input.files[0]
	reader.readAsText(csv)
}

reader.onload = function (e) {
	document.querySelector('.output').innerText = e.target.result;
}




//---------------Download Existing CSV-------------------------
function downloadCSVFile() { 
	updateCSVFile();
	const a = document.createElement('a');
	a.setAttribute('href', 'resources/users.csv');
	a.setAttribute('download', 'Adhirit enquiry details.csv');
	a.click();
};