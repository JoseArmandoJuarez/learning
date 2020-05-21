let myPicturesArray = [
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "http://placehold.it/600/8e973b",
    "thumbnailUrl": "http://placehold.it/150/8e973b"
    },
    {
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "http://placehold.it/600/121fa4",
    "thumbnailUrl": "http://placehold.it/150/121fa4"
    },
    {
    "albumId": 3,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "http://placehold.it/600/74456b",
    "thumbnailUrl": "http://placehold.it/150/74456b"
    },
    {
    "albumId": 3,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "http://placehold.it/600/b0931d",
    "thumbnailUrl": "http://placehold.it/150/b0931d"
    }
];

let albumId = 1;
let imageId = 1;
let imagePosition = 0; // Default main image to load

window.onload = init;

function init() {
	
	let thumbs = document.querySelector('#thumbs');
	let fullImage = document.querySelector('#full-image');
	
	// Display thumbnail picures
	function drawThumbs() {
		myPicturesArray.forEach(function(currentImage) {
			 let image = document.createElement("img");
			 image.src = currentImage.thumbnailUrl;
			 image.alt = currentImage.title;
			 thumbs.append(image);
		});
	}
	
	// Load full size image based on thumb position in array
	function loadMainImage(position) {
        
		fullImage.innerHTML = '';
        let mainImage = document.createElement("img");

        mainImage.src = myPicturesArray[position].url;
		mainImage.alt = myPicturesArray[position].title;

        fullImage.append(mainImage);
	}
	
	function clickThumbnail (event) {
		let thumbUrl = event.srcElement.src;
		myPicturesArray.forEach(function(elment, index) {
			if (elment.thumbnailUrl === thumbUrl) {
				loadMainImage(index);
			}
		})
	}
	
	drawThumbs();
	loadMainImage(imagePosition); // Load default image
	thumbs.onclick = clickThumbnail; // Load full image on click
}