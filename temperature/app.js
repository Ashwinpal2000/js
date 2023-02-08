let celcius = document.getElementById("celcius");
let farenheit = document.getElementById("farenheit");

celcius.addEventListener("input", function () {
  let x = this.value;
  let f = 32 + (x * 9) / 5;
  if(!Number.isInteger(f)){
    f=f.toFixed(4);
}
  farenheit.value = f;
});

farenheit.addEventListener("input", function () {
    let x = this.value;
    let c= (x -32)*5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    celcius.value = c;
  });