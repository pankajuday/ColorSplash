function getcolor(){
  const rn = Math.floor(Math.random() * 16777215);
  const randcol = '#' + rn.toString(16);
  document.body.style.backgroundColor = randcol;
  document.getElementById('tbox').innerHTML = randcol;
  document.getElementById('tbox').style.color = randcol;
}

document.getElementById('cbox').addEventListener('random' , getcolor)
getcolor()
let sec = Date.getSeconds()
console.log(sec)

/*for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
};*/