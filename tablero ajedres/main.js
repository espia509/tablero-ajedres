function chess(tamaño){
  let Par = "";
  let Impar = "";
  while(Par.length < tamaño){
    if(Par.length % 2 == 0){
      Par += "#";
      Impar += " ";
    } 
     if(Par.length % 2 == 1){
      Par += " ";
      Impar += "#";
    } 
  }
  for(let i = 0; i<tamaño; i++){
    if(i % 2 === 0){ 
        console.log(Par + "\n");
    }
    if(i % 2 === 1){ 
        console.log(Impar + "\n");
    }
  }
}
chess(8);