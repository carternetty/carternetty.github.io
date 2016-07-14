window.onload = function()
{
	var item1 = document.getElementById("item1");
	var item2 = document.getElementById("item2");
	var item3 = document.getElementById("item3");
	var item4 = document.getElementById("item4");
	var item5 = document.getElementById("item5");
	var item6 = document.getElementById("item6");

	var header = document.getElementById("header");

	item1.onmouseenter = afterHover;
	item2.onmouseenter = afterHover;
	item3.onmouseenter = afterHover;
	item4.onmouseenter = afterHover;
	item5.onmouseenter = afterHover;
	item6.onmouseenter = afterHover;

	header.onclick = clearItems;
}

function afterHover()
{
	var thisTemp = this;
	thisTemp.time = 1000;

	this.addEventListener("mouseover", function() {
		this.mouseOver = true;
	});
	this.addEventListener("mouseleave", function() {
		this.mouseOver = false;
		this.time = 1000;
	});


	setTimeout(function() {
		thisTemp.addEventListener("mouseleave", function() {
			this.mouseOver = false;
			this.time = 1000;
		});

		if (thisTemp.mouseOver == true)
		{
			thisTemp.className = "noHoverItem";
			mouseOver = false;
		}
	}, thisTemp.time);
}

function clearItems()
{
	item1.className = "item";
	item2.className = "item";
	item3.className = "item";
	item4.className = "item";
	item5.className = "item";
	item6.className = "item";
}