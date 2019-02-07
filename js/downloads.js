//Downloads
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', text);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


//Download editable URL
//window.location.href = site+"?mmd="+dia.replace(/\n/g, ";");

//Download as MMD file
document.getElementById("dwn-btn-dia").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
	var dia = editor.getValue();
	var text = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dia)
	var filename = "mermaid.mmd";
    
    download(filename, text);
}, false);

//Download as SVG
document.getElementById("dwn-btn-svg").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = svgToDataUri(document.getElementById("theGraph"));
    var filename = "mermaid.svg";
    
    download(filename, text);
}, false);


//Download as PNG

//Download as PDF

//Download as ZIP


