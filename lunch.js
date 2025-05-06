function whosPaying(names) {
    

    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  var randomindex = Math.floor(Math.random()*names.length);
  var selected = names[randomindex];
       return selected + " is going to buy lunch today!";
}