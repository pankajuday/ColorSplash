function getcolor(){
  const rn = Math.floor(Math.random() * 16777215);
  const randcol = '#' + rn.toString(16);
  document.body.style.backgroundColor = randcol;
  document.getElementById('tbox').innerHTML = randcol;
  document.getElementById('tbox').style.color = randcol;
}

document.getElementById('cbox').addEventListener('random' , getcolor)
getcolor()


setInterval(getcolor,1000);


function clock()
{

  let d = new Date();
  document.getElementById("h").innerHTML = d.getHours();
  document.getElementById("m").innerHTML = d.getMinutes();
  document.getElementById("s").innerHTML = d.getSeconds();
  
  
  
  
}
setInterval(clock,1000);