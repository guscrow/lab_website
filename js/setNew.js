
var newImage = [];
for (int i=0; i<25; i++)
{
  newImage.push("Greenboxnew.jpg");
}

var minePos = Math.floor(Math.random() * 24);

newImage[minePos] = "minenew.png";

var change = function(newImage,id)
{
  var num = id.toString();
  var box = document.getElementById(num);
  var newBox = box.src=newImage[id];
  return newBox;
}
