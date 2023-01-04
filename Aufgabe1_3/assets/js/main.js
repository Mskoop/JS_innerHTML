
let variable1 = document.getElementById("gallery");
console.log(variable1);
gallery.innerHTML += '<figure><img src="../assets/img/Sky.jpg" alt="Sky" style="width:20vw" "height=25vh"><figcaption>Img.1</figcaption></figure>' 
+ '<figure><img src="../assets/img/Sky.jpg" alt="Sky" style="width:20vw" "height=25vh"><figcaption>Img.2</figcaption></figure>' 
+ '<figure><img src="../assets/img/Sky.jpg" alt="Sky" style="width:20vw" "height=25vh"><figcaption>Img.3</figcaption></figure>';

gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
