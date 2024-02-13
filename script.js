function firstNonRepeatedChar(str) {
 // Write your code here
	let count=0;
	let s="";
	for (let i=0;i<str.length();i++) {
		for (let j = 1; j < str.length()-1; j++) {
			if(str.charAt(i)==charAt(j)){
				count++;
			}
			s=str.charAt(i);
			
		}
		
	}
	return s;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
