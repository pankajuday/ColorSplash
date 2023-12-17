function getcolor(){
  const rn = Math.floor(Math.random() * 16777215);
  const randcol = '#' + rn.toString(16);
  document.body.style.backgroundColor = randcol;
  document.getElementById('tbox').innerHTML = randcol;
  document.getElementById('tbox').style.color = randcol;
}

document.getElementById('cbox').addEventListener('random' , getcolor)
getcolor()
//let sec = Date.getSeconds()
//console.log(sec)

setInterval(getcolor,1000);

/*for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
};*/

function clock()
{
  /*
  let hours = document.getElementsByClassName("hours");
  let minutes = document.getElementsByClassName("minutes");
  let seconds = document.getElementsByClassName("seconds");
  
  */
  
  let d = new Date();
  document.getElementById("h").innerHTML = d.getHours();
  document.getElementById("m").innerHTML = d.getMinutes();
  document.getElementById("s").innerHTML = d.getSeconds();
  
  
  
  
}
setInterval(clock,1000);