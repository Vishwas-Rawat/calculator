function show(ele) {
  let val = document.getElementById("inp");
  if(val.value == 0 && (ele == '+' || ele == '-' || ele == '*' || ele == '/')){
    val.value += ele;
  }
  else if(val.value == 0 && ele !== "."){
    val.value = ele;
  }
  else{
    val.value += ele;
  }
}

function pressZero(ele){
  let val = document.getElementById("inp");
  if(val.value != 0){
    val.value += ele;
  }
}

function calculate() {
  let inpElement = document.getElementById("inp");
  let inpValue = inpElement.value;
  try {
    let solve = eval(inpValue);
    inpElement.value = solve;
  } catch (error) {
    inpElement.value = "Error"; 
  }
}

function clearInp() {
  document.getElementById("inp").value = 0;
}
