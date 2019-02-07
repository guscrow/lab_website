
var newImage = [];
for (int i=0; i<25; i++)
{
  newImage.push("Greenboxnew.jpg");
}

var minePos = Math.floor(Math.random() * 24);

newImage[minePos] = "minenew.png";

function change(newImage,id)
{
  var box = document.getElementById(id);
  var newBox = box.src=newImage[  change string to int. . . ];

}
