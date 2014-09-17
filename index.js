Zepto(function($){
	var $canvas = $('#canvas');
	var ctx = $canvas[0].getContext('2d');

	var headLine = 200;
	var armLine = 400;

	var all = [];
	var none = [];

	var attached = [false,false,false,false,false];

	function mouseMove(e) {
		var x = (e.pageX - $canvas.offset().left) / $canvas.width();
		var bucket = Math.floor(x * 5) - 2;
		ctx.drawImage(all[bucket] , 0, 0);
		ctx.drawImage(none[bucket] , 0, 0, 200, 400, 0, 0, 200, 400);
	}
	
	function loadImages(update, then) {
		var count = 0;
		var totalImages = 10;

		function imageLoaded() {
			count++;
			update(count / totalImages);
			if (count == totalImages) {
				then();
			}
		}

		// Load parts images
		for (var i = 0; i < 2; i++) {
			var an = ["all", "none"][i];
			var set = [all,none][i];
			for (var p = -2; p <= 2; p++) {
				var filename = 'images/img' + p + an + '.jpeg';
				var img = new Image();
			  set[p] = img;
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

