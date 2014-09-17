Zepto(function($){
	var $canvas = $('#canvas');
	var ctx = $canvas[0].getContext('2d');

	var none = [];
	var parts = [];

	var attached = [true,true,true,true,true];

	function mouseMove(e) {
		var x = (e.pageX - $canvas.offset().left) / $canvas.width();
		var bucket = Math.floor(x * 5) - 2;
		if (bucket < -2) bucket = -2;
		if (bucket > 2) bucket = 2;
		ctx.drawImage(none[bucket], 0, 0);
		for (var i = 0; i < attached.length;i++) {
			if (attached[i]) {
				ctx.drawImage(parts[i][bucket], 0,0);
			}
		}
	}
	
	function loadImages(update, then) {
		var count = 0;
		var totalImages = 30;

		function imageLoaded() {
			count++;
			update(count / totalImages);
			if (count == totalImages) {
				then();
			}
		}

		// Load backgrounds
		for (var p = -2; p <= 2; p++) {
			var filename = 'images/img' + p + 'none.jpeg';
			var img = new Image();
		  none[p] = img;
		  img.onload = imageLoaded;
		  img.src = filename;
		}

		for (var i = 0; i < 5; i++) {
			parts[i] = [];
			for (var p = -2; p <= 2; p++) {
				var filename = 'images/img' + i + p + '.png';
				var img = new Image();
			  parts[i][p] = img;
			  img.onload = imageLoaded;
			  img.src = filename;
			}
		}
	}

	loadImages(
		function(amount) {

	  },
	  function() {
	  	$canvas.on('mousemove', mouseMove);
	  }
	);
});

