function main(){
    var n = Math.random();
     n = Math.round(n*100);
     return n+1;
}
var name1 = prompt("Enter your name:");
var name2 = prompt("Enter your crush's name:");
var compatibility = main();
console.log("Compatibility between " + name1 + " and " + name2 + " is: " + compatibility + "%");

