let s = document.querySelectorAll(".span");
let i = 0;
let x;
var a = "";
while (i < s.length) {
  s[i].onclick = function (e) {
    if (e.target.innerHTML == "=") {
      a = eval(document.getElementById("Calcular").value);
      document.getElementById("Calcular").value = a;
    } else if (e.target.innerHTML == "C") {
      document.getElementById("Calcular").value = "";
    } else {
      document.getElementById("Calcular").value += e.target.innerHTML;
      console.log(a);
    }
    if(a==x){
      document.getElementById("Calcular").value = "";
    }
    console.log(x);
    console.log(a);
  };
  console.log(i);
  i++;
}
