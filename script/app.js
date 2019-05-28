(() => {
	// set up the puzzle pieces and boards
	//stub
	console.log('fired');

	//const is short for constant -> variable that shouldn't change
	const piecesBoard = document.querySelector('.puzzle-pieces'),
				puzzleBoard = document.querySelector('.puzzle-board'),
				puzzleSelectors = document.querySelectorAll('#buttonHolder img'),
				dropZones = document.querySelectorAll('.drop-zone');

	let draggablePieces = piecesBoard.querySelectorAll("img");

	//debugger;


	function switchImage() {
		console.log(this);
	}

	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage); });


	//Loop through the draggable images
	//this lets us drag stuff => not that hard(not my opinion)

	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');

			// the dataTransfer object has two methods, a setter and getter
			// set data on the drag, and relative it on the drop
			e.dataTransfer.setData("text/plain", this.id);
		});
	});

	//this is the dragover abd drop functionality => this is for the drop Zones
	dropZones.forEach(zone => {
		//allow user to drag over an element
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged sumpin over me');
		});

		//allow user to drop over an element
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped sumpin on me');

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged: ', draggedElement);
			debugger;

		//add the image to the drop zone
		e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});
 })
})();
