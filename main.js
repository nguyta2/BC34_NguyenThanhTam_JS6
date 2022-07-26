// 1. Tìm số nguyên dương nhỏ nhất
document
  .querySelector(".container button#showResult")
  .addEventListener("click", function () {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
      n++;
      sum += n;
    }
    var output = "";
    output = "Số nguyên dương nhỏ nhất: " + n;
    document.querySelector(".container div#minNum").innerHTML = output;
  });

// 2. Tính tổng
function calcSum(a, b) {
  var s = 0;
  var i = 0;

  do {
    i++;
    s += Math.pow(a, i);
  } while (i < b);
  return s;
}
document
  .querySelector(".container button#btnCalcTotal")
  .addEventListener("click", function () {
    // input
    var x = document.getElementById("x").value * 1;
    var n = document.getElementById("n").value * 1;

    // process
    var sum = calcSum(x, n);

    // output
    document.getElementById("showTotal").innerHTML = sum;
  });

// 3. Tính giai thừa
function calcFactorial(num_in) {
  var result = 1;
  var i = 0;

  while (i < num_in) {
    i++;
    result *= i;
  }
  return result;
}
document
  .querySelector(".container button#btnCalcFactorial")
  .addEventListener("click", function () {
    // input
    var num = document.getElementById("num").value * 1;

    // process
    var factorial = calcFactorial(num);

    // output
    document.querySelector(".container div#showFactorial").innerHTML =
      factorial;
  });

// 4. viết chương trình khi click vào button sẽ in ra 10 thẻ div.
document
  .querySelector(".container button#btnCreateDiv")
  .addEventListener("click", function () {
    var content = "";
    for (var i = 1; i < 11; i++) {
      if (i % 2 != 0) {
        content += '<p style="background: #007bff">Div lẻ ' + i + "</p>";
      } else {
        content += '<p style="background: #dc3545">Div chẵn ' + i + "</p>";
      }
    }
    document.querySelector(".container div#divContent").innerHTML = content;
  });
