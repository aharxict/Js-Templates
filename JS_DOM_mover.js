<div class="inner" style="height: 150px; border: 2px solid grey;"></div>
<br>
<button id="btn">Button text</button>
	<br>
<div class="block1">
	<p class="text1" style="background-color: red; green; color: #fff;"> FIRST Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at consectetur consequatur cum distinctio error fugiat fugit illum in ipsum iste laboriosam molestias mollitia nesciunt non, nostrum odit pariatur porro, possimus quas quibusdam quisquam ratione repellat reprehenderit repudiandae similique sunt tempora ullam velit vero vitae voluptas voluptatibus voluptatum! Enim, modi.</p>
</div>
	<br>
	<div class="block2">
		<p class="text2" style="background-color: green; color: #fff;"> SECOND Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eum odit quos voluptas voluptatum! Dicta dignissimos distinctio ducimus laboriosam, nesciunt nulla odit ratione voluptatibus! Cumque laboriosam modi quidem sint velit.</p>
	</div>
	<script>

	(function ($) {
		var inner = $('.inner');
		var block1 = $('.block1');
		var block2 = $('.block2');
		var text1 = $('.text1').detach();
		text1.appendTo(inner);
		var btn = $('#btn');
		btn.click(function () {
			var text2 = $('.text2').detach();
			text2.appendTo(inner);
		});
	})(jQuery);

	</script>