function swap(){
    var arr=["gift.jpg","bomb.jpg","miss.jpg"]
   var randomno= Math.floor(Math.random() * 3);
   document.getElementById("img1").src=arr[randomno];
}