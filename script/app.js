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

	// arrays are index and start at 0
	const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	
	// debugger;


	function switchImage() {
		console.log(this);
		// grab the cooresponding background image (0, 1, 2 or 3)
		// and get it from the images folder (backGround1.jpg as an example)
		let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

		// set the background image style on the dropzone container
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;
	

		// work on switching the right-hab images so that they match the buttons at the bottom
		draggablePieces.forEach((image, index) => {
			//log the image and the current index
			//console.log(image, index);

			//try to change each image source
			image.src = `images/${imageNameArray[index]}${this.dataset.puzzleref}.jpg`
			//debugger;
		});
			draggablePieces.addClass("dropped");
			$('.drop-zone').append(draggablePieces);
		// I can add some lines here to fix children bugs
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
	
	
	
	//this is the dragover and drop functionalty => this is for the drop Zones
	dropZones.forEach(zone => {
		//allow user to drag over an element
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged sumpin over me');
	
	
	})

		//allow user to drop over an element
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			var draggablePieces = e.dataTransfer.getData("text/plain");
			e.target.appendChild(draggablePieces);
			//instead, do the following

			console.log('you dropped sumpin on me');

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged: ', draggedElement);
			// debugger;

		//add the image to the drop zone
		e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});

})	

})();
