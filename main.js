setInterval(()=>{
	let d, htime, mtime, stime, hrotate, mrotate, srotate;
	
	d = new Date();
	htime = d.getHours();
	mtime = d.getMinutes();
	stime = d.getSeconds();
	
	hrotate = 30 * htime + mtime / 2;
	mrotate = 6 * mtime;
	srotate = 6 * stime;
	
	let hour = document.getElementById("hour");
	let minute = document.getElementById("minute");
	let second = document.getElementById("second");
	
	hour.style.transform = `rotate(${hrotate}deg)`;
	minute.style.transform = `rotate(${mrotate}deg)` ;
	second.style.transform = `rotate(${srotate}deg)`; 
},1000)