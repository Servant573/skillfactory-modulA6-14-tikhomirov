function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let d = Math.floor(Math.random() * 4) + 1;
  if (d < 4) {
  	let n = Math.floor(Math.random() * 9) + 1;
  	return `#slot-${d}${n}`;
  }
  else {
  	let n = Math.floor(Math.random() * 6) + 1;
  	return `#slot-${d}${n}`;
  }};

