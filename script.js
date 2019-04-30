// var cpu1 = cpu2 = new Array(3);
var cpu1 = cpu2 = [0,1,2];
var rnd1 = Math.floor(Math.random() * 3);
var rnd2 = Math.floor(Math.random() * 3);

//switch di elementi dell'array int in stringhe
for (var i = 0; i < 3; i++) {
  switch (cpu1[i],cpu2[i]) {
    case 0:
      cpu1[i] = cpu2[i] = "Sasso";
      break;
    case 1:
      cpu1[i] = cpu2[i] = "Carta";
      break;
    case 2:
      cpu1[i] = cpu2[i] = "Forbice";
      break;
  }
}

console.log(cpu1[rnd1],cpu2[rnd2]);

//casi in cui cpu1 vince
if (cpu1[rnd1] == "Sasso" && cpu2[rnd2] == "Forbice"){
  alert("cpu1 vince");
}else if(cpu1[rnd1] == "Carta" && cpu2[rnd2] == "Sasso"){
  alert("cpu1 vince");
}else if(cpu1[rnd1] == "Forbice" && cpu2[rnd2] == "Carta"){
  alert("cpu1 vince");
}

//casi in cui cpu2 vince
if (cpu2[rnd2] == "Sasso" && cpu1[rnd1] == "Forbice"){
  alert("cpu2 vince");
}else if(cpu2[rnd2] == "Carta" && cpu1[rnd1] == "Sasso"){
  alert("cpu2 vince");
}else if(cpu2[rnd2] == "Forbice" && cpu1[rnd1] == "Carta"){
  alert("cpu2 vince");
}

//caso di pareggio
if (cpu1[rnd1] == cpu2[rnd2]){
  alert("pareggio");
}
