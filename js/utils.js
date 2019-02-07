
function svgToDataUri(svgElement){

	console.log("Converting svg to data URI");

	// get svg data and make it base64
	var svgData = new XMLSerializer().serializeToString(svgElement);
	var svgData64 = "data:image/svg+xml;base64," + btoa(svgData)
	return svgData64;

	//console.log("Converting DataURI to ObjectURL");

	// Use blob instead of dataURL
	//var blob = dataURLtoBlob(svgData64);
	//let urlObject;
	//urlObject = URL.createObjectURL(blob);
    	//image.src = urlObject;

};


//dataURL to blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

//blob to dataURL
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}
