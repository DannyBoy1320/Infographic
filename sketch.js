let img;

function preload() {
  img=loadImage ("no text Reduce Food Waste Project.png")
}
function setup() {
  createCanvas(480, 1200);
  image(img,0,0)
}
function draw() {
  textFont('Quagmire');
  textStyle(BOLD);
  textSize(45);
  text('Reduce Food Waste', 95, 55, );
  textSize(42);
  textFont('Abolition');
  text('70+million,', 130, 235);
  textSize(22);
  text('Tons of food are being wasted in the United States at approximate value of nearly $218 billion.', 120, 260, 300);
  textSize(30);
  text('The average american wastes 400 pounds of food each year,', 120, 420, 300);
  textSize(25);
  text('21% of landfill space is filled with wasted food annually,',120, 600, 365);
  textSize(16);
  text('WHAT IS REALLY IMPORTANT IS SAVE MONEY AND HERE ARE THE MOST IMPORTANT THINGS: ', 150, 780, 340);
  textSize(17);
  text('1. Plan your shopping to buy what you can use.' , 130, 855)
  textSize(18);
  text('2. Store and Eat Leftover before they expire.', 129, 875)
  textSize(15);
  text('3. Reduce serving sizes so everyone can eat.', 175, 900)
  textSize(16);
  text ('4. Compost your food waste.' ,195, 920 )
  textSize(16);
  text ('5. You Can Donate Food to Charity.' ,220, 945)
  textSize(16);
  text('HOW TO KEEP YOUR FOOD LAST LONG,', 150, 1000);
  textSize(16);
  text ('1. wrap your food around wax paper not plastic.', 115, 1022);
  textSize(15);
  text ('2. Put your food like meat and vegatibles in the freezer at all times.', 125, 1032, 271)
  textSize(18);
  text ('3. Always Prepare for meals and look for experation dates so the food is stil good.', 135, 1070, 327)
  // background(220);
}
