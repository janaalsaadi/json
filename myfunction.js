function createNode(element) {
    return document.createElement(element);
  }
  var obj={
    "product": 
    [
     { "size":'38' ,
      'color':{"brown":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png",
      "black":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png",
      "nude":"https://icons.iconarchive.com/icons/awicons/vista-artistic/48/delete-icon.png",
      "white":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png"}},
  
  
      { "size":'39' ,
      'color':{"brown":"https://icons.iconarchive.com/icons/awicons/vista-artistic/48/delete-icon.png",
      "black":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png",
      "nude":"https://icons.iconarchive.com/icons/awicons/vista-artistic/48/delete-icon.png",
      "white":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png"}},
  
      { "size":'40' ,
      'color':{"brown":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png",
      "black":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png",
      "nude":"https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-clean-icon.png",
      "white":"https://icons.iconarchive.com/icons/awicons/vista-artistic/48/delete-icon.png"}}
    ]
  };
  
  
  
  const grid = document.getElementById('products');
  let inventory_product = obj.product; 
  let row1 = createNode("tr");
  
  let empty = createNode("th");

  let brownColor = createNode("th");

  let blackColor = createNode("th");

  let nudeColor = createNode("th");

  let whiteColor = createNode("th");
 
  empty.innerHTML=" "; 
  brownColor.innerHTML='brown'; 
  blackColor.innerHTML='black';
  nudeColor.innerHTML='nude';
  whiteColor.innerHTML='white';
    
  row1.append(empty,brownColor,blackColor,nudeColor,whiteColor);
  grid.append(row1);
  
  var leng = inventory_product.length;
    
  inventory_product.map(function(shose) {
  
let rows = createNode("tr");

  let sizeOfshose = createNode("td");

  let img1 = createNode("td");
  
  let img2 = createNode("td");
  let img3 = createNode("td");
  let img4 = createNode("td");
  

  let firstColor = createNode("img");
  
  let secColor = createNode("img");
  
  let thirdColor = createNode("img");
  
  let fourthColor= createNode("img");
  
  for (var i =0 ; i<leng ; i++){
  sizeOfshose.innerHTML=shose.size; 
  sizeOfshose.className="grid-item";
  firstColor.src=shose.color.brown; 
  firstColor.className="grid-item";
  secColor.src=shose.color.black;
  secColor.className="grid-item";
  thirdColor.src=shose.color.nude;
  thirdColor.className="grid-item";
  fourthColor.src=shose.color.white;
  fourthColor.className="grid-item";
  }
  img1.append(firstColor);
  img2.append(secColor);
  img3.append(thirdColor);
  img4.append(fourthColor);
  rows.append(sizeOfshose,img1,img2,img3,img4);
   grid.append(rows);
  
  })
  
  