let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      let last2 = string.slice(-2);
      if (last2 == "/0") {
        throw "Cannot divide by zero";
      } 
      else if (string.indexOf('%*')>-1) {
        throw "% finds remainder not percentage";        
      }
      else {
        if (e.target.innerHTML == "=") {
          string = eval(string);
          document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "C") {
          string = "";
          document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "x²") {
          num = parseFloat(string, 10);
          document.querySelector("input").value = num ** 2;
        } else if (e.target.innerHTML == "√x") {
          num = parseFloat(string, 10);
          sqrt = Math.pow(num, 0.5);
          document.querySelector("input").value = sqrt;
        } else {
          console.log(e.target);
          string = string + e.target.innerHTML;
          document.querySelector("input").value = string;
        }
      }
    } catch (err) {
      document.querySelector("input").value = err;
    } finally {
      if (e.target.innerHTML == "C") {
        string = "";
        document.querySelector("input").value = string;
      } 
    }
  });
});
