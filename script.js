function toCase(text) {
  // write your code here
	let str1 = text.toLowerCase();
	let str2 = text.toUpperCase();
	return (str1+"-"+str2);
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
