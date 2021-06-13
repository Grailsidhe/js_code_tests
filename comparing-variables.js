const en = 1;
const to = 2;
const tre = 3;

if(en === to && to === tre){
  console.log("The three variables are the same")
}

else if(en === to || en === tre || to === tre){
  console.log("Two of the variables are the same")
}

else{
  console.log("All variables are different")
}