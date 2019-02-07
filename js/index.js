
//Mermaid config
mermaidAPI.initialize({startOnLoad: true,
	flowchart:{
		useMaxWidth:true,
		htmlLabels:true,
		curve: 'basis'
	},
	sequenceDiagram:{
		useMaxWidth:true
	}
});



// ACE editor
var editor = ace.edit("input");
editor.setTheme("ace/theme/cobalt");
editor.setOptions({
  //fontFamily: "tahoma",
  fontSize: "14pt"
});

//Render after editing
editor.on("change", function(e) {
  renderMMD();
})


//Get mmd
//http://www.example.com/t.html?mmd=graph LR;A --- B;B-->C[fa:fa-ban forbidden];B-->D(fa:fa-spinner);
var site = window.location.href.split('?')[0];
var url = new URL(window.location.href);
var mmd = url.searchParams.get("mmd");
editor.setValue(mmd.replace(/;/g, "\n"));
console.log(mmd);


//Render first time
renderMMD();


//Functions
function renderMMD() {

	//Remove extra divs :-/
	var dtheGraph = document.getElementById("dtheGraph");

	if (dtheGraph !== null) {
		document.getElementById("dtheGraph").outerHTML = "";
	}
		
	//Render mmd
	console.log("Rendering mmd");
	var dia = editor.getValue();

	console.log(dia);

	//Faster than output.innerHTML = "";
	var output = document.getElementById("output");
	while (output.firstChild) {
		output.removeChild(output.firstChild);
	}

	mermaidAPI.render("theGraph", dia, function(svgCode) {
		output.innerHTML = svgCode;
		//console.log(svgCode);

		//Need to edit the SVG for zooming it
		var svg = document.getElementById("theGraph");
		svg.setAttributeNS(null,"style","width:100%;");
		//console.log(svg);

		zoomSVG("theGraph");

	});
}

//svg-pan-zoom
function zoomSVG(id) {
	var panZoom = window.panZoom = svgPanZoom('#'+id, {
	zoomEnabled: true,
	controlIconsEnabled: true,
	fit: 1,
	center: 1
	});
};


