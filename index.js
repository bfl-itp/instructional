Zepto(function($){
	var $canvas = $('#canvas');
	var $parts = $('.part');
	var ctx = $canvas[0].getContext('2d');

	var none = [];
	var parts = [];

	var attached = [false,false,false,false,false];

	var bucket = 0;
	function draw() {
		ctx.drawImage(none[bucket], 0, 0);
		for (var i = 0; i < attached.length;i++) {
			if (attached[i]) {
				ctx.drawImage(parts[i][bucket], 0,0);
			}
		}
	}

	function mouseMove(e) {
		var x = (e.pageX - $canvas.offset().left) / $canvas.width();
		bucket = Math.floor(x * 5) - 2;
		if (bucket < -2) bucket = -2;
		if (bucket > 2) bucket = 2;
		draw();
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
	  	draw();
	  	
	  	 $parts.draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });

      $canvas.droppable({
        drop: function (e, dragEl, dropEl) {
        	if(dragEl.hasClass('head')) {
          	attached[0] = true;
        	}

        	if(dragEl.hasClass('arm')) {
        		if (attached[1]) {
          		attached[2] = true;
          	} else attached[1] = true;
        	}

        	if(dragEl.hasClass('leg')) {
        		if (attached[3]) {
          		attached[4] = true;
          	} else attached[3] = true;
        	}

        	dragEl.hide();
          draw();

          return true;
        }
      });
	  }
	);
});

