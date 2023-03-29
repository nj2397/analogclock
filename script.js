setInterval(function(){
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	
	let hr = 30*h + m/2;
	let mn = 6*m;
	let sc = 6*s;
	
	hour.style.transform = `rotate(${hr}deg)`;
	minute.style.transform = `rotate(${mn}deg)`;
	second.style.transform = `rotate(${sc}deg)`;
	
}, 1000);