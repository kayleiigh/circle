document.getElementById('calc').addEventListener('click', Calculate)

let rnum = 0
let rnum2 = 0
let areao = 0
let ciro = 0
let dnum = 0
let pnum = 0

function Calculate () {
  dnum = document.getElementById('inputd').value

  rnum = (dnum / 2)

  pnum = (3.14)

  //Circumference

  ciro = (pnum * rnum * 2)

  document.getElementById('cirresult').innerHTML = ciro

  //Area

  rnum2 = (rnum * rnum)

  areao = (pnum * rnum2)

  document.getElementById('arearesult').innerHTML = areao
}