var text = "bangladesh";
var len = text.length;
document.write("Number of character " + len);

var text = "pakistan";
document.write("<br>" + 'number of charecter ' +  text.length);

var text = prompt("Enter your name : ")
document.write("<br>" + 'Number of character ' + text.length);

var text = "Bangladesh";
document.write("<br>" + text.charAt(2));

var text = 'bangladesh';
text = text.toUpperCase();
document.write("<br>" + text);

var text = "Bangladesh";
text = text.toLowerCase();
document.write("<br>" + text);

var text1 = "Bangladesh ";
var text2 = 'is a beautiful country';
document.write("<br>" + text1.concat(text2));

var text3 = "Bangladesh ";
var text4 = "is a beautiful country."
var text5 = text3.concat(text4);
document.write("<br>" + text5);

var text1 = "Bangladesh ";
var text = text1.slice(0, 6);
document.write("<br>" + text);