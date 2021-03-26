function rand(min, max) {
	return Math.random() * (max - min) + min;
}


let r = document.getElementById('reload');
	function reload() {
		reload = location.reload();
	}
r.addEventListener("click", reload, false);