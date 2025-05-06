var guestlist = ["Angela","Jack","Pam,James,Lara,Jason"];
var name = prompt("type your name");
if (guestlist.includes(name)) {
    alert("Welcome " + name + " you are on the list");
}
else{
    alert("Sorry " + name + " you are not on the list");
}