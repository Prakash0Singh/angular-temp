console.log('Patterns in JavaScript')

//Box Pattern 
let n=10;
let patternBox="";
for (let i=0;i<n;i++) {
    for (let j=0;j<n;j++) {    
    patternBox +="*";
    }
patternBox+="\n";
}
console.log(patternBox)

//Hollow Square Pattern
let patternHollow="";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(i===0 || i=== n-1 || j===0 || j===n-1) {
            patternHollow +="*"
        }
        else
        patternHollow +=" "
    } 
    patternHollow+="\n";   
}
console.log(patternHollow);


//Print Right Triangle Pattern
let rightTri ="";

for(let i = 1; i < n; i++ ){
    for(let j = 1; j < n; j++){
        if(i + j >= n){
            rightTri +="*";
        }else{
            rightTri +=" ";
        }
    }
    rightTri +="\n"
}
console.log(rightTri)

//Hallow Right Triangle Pattern
let hallowRightTri="";

for (let i = 1; i <n; i++) {
    for (let k = 1; k <n; k++) {

       if(i+k===n|| k===n-1 || i===n-1){
            hallowRightTri+="*"
       }
        else
        hallowRightTri+=" "        
    }
   hallowRightTri+="\n"; 
}
console.log(hallowRightTri)
//Left Traingle Pattern
let lpa="";
for (let i = 1; i <n; i++) {
    for (let j = 0; j <i; j++) {
        lpa+="*"
    }
    lpa+="\n"
}
console.log(lpa)

//Hollow Left Triangle Pattern
let hallowleftTri="";
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
            if(j===0 || j===i-1 ||i==n-1) {
                hallowleftTri+="*";
            }
            else {
                hallowleftTri+=" "; 
            }
    }
    hallowleftTri+='\n'
}
console.log(hallowleftTri);

//Left Downword Triangle Pattern
let leftTri="";
for (let i = 1; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        leftTri+="*"
    }
    leftTri+='\n'
}
console.log(leftTri);

//Downward Triangle Pattern
let downTri="";
for (let i = 1; i <=n; i++) {
    for (let j = i; j <= n; j++) {
        if (i===1 || j===i ||j===n ) {
            downTri+="*";
        }
        else {
            downTri+=" "
        }
    }
    downTri+='\n'
}
console.log(downTri);

//Pyramid pattern
let pyramidPattern="";

for (let i = 1; i <n; i++) {
    for (let j = 1; j<(n-i); j++) {
        pyramidPattern+=" ";        
    }
    for (let k = 1; k <(2*i); k++) {
        pyramidPattern+="*";
    }
    pyramidPattern+='\n';
}
console.log(pyramidPattern)

//Hollow Pyramid Pattern
let hallowpyramidPattern="";

for (let i = 1; i <n; i++) {
    for (let j = i; j <n;j++) {
        hallowpyramidPattern+=" ";        
    }
    for (let k = 1; k <(2*i); k++) {
        if (k===1 || k===2*i-1||i===n-1) {
            hallowpyramidPattern+="*";
        }
        else{
        hallowpyramidPattern+=" ";
        }

    }
    hallowpyramidPattern+='\n';
}
console.log(hallowpyramidPattern)
//Downface Pyramid Pattern
let downpyramidPattern="";

for (let i = 1; i <n; i++) {
    for (let j = 1; j <i; j++) {
        downpyramidPattern+=" ";        
    }
    for (let k = 1; k <(2*(n-i)); k++) {
        downpyramidPattern+="*";
    }
    downpyramidPattern+='\n';
}
console.log(downpyramidPattern)

//Hallow Downward Pyramid Pattern
let hallowdownpyramidPattern="";

for (let i = 1; i <n; i++) {
    for (let j = 1; j <i; j++) {
        hallowdownpyramidPattern+=" ";        
    }
    for (let k = 1; k <(2*(n-i)); k++) {
        if (k==1||i===1||k==(2*(n-i))-1) {
            hallowdownpyramidPattern+="*";
        }
        else{
            hallowdownpyramidPattern+=" ";
        }
    }
    hallowdownpyramidPattern+='\n';
}
console.log(hallowdownpyramidPattern)
//Diamond Pattern
let diamondP="";

for (let i = 1; i <n; i++) {
    for (let j = 1; j <(n-i); j++) {
        diamondP+=" ";        
    }
    for (let k = 0; k <((2*i)-1); k++) {
        diamondP+="*";
    }
    diamondP+='\n';
}
for (let i = 1; i <n; i++) {
    for (let j = 1; j <i; j++) {
        diamondP+=" ";        
    }
    for (let k = 0; k <((2*(n-i))-1); k++) {
        diamondP+="*";
    }
    diamondP+='\n';
}
console.log(diamondP)


// Hollow Diamond Pattern
let hallowdiamondP="";

for (let i = 1; i <n; i++) {
    for (let j = i; j <n; j++) {
        hallowdiamondP+=" ";        
    }
    for (let k=1; k<(2*i); k++) {
        if (i===1 || k===1 || k===2*i-1) {
            hallowdiamondP+="*"
        }
        else{
            hallowdiamondP+=" "
        }
    }
    hallowdiamondP+='\n';
}
for (let i = 1; i <n; i++) {
    for (let j = 0; j <i; j++) {
        hallowdiamondP+=" ";        
    }
    for (let k = 1; k <2*(n-i); k++) {
        if (k==1||k===2*(n-i)-1) {
            hallowdiamondP+="*"
        }
        else{
            hallowdiamondP+=" "
        }
    }
    hallowdiamondP+='\n';
}
console.log(hallowdiamondP)

//Hourglass Star Pattern
let hourGlass="";

for (let i = 1; i <n; i++) {
    for (let j = 1; j <i; j++) {
        hourGlass+=" ";
    }
    for (let k = 1; k <(2*(n-i)); k++) {
        hourGlass+="*";
    }
    hourGlass+="\n";
}
for (let i = 2; i <n; i++) {
    for (let j = 1; j<(n-i); j++) {
        hourGlass+=" ";        
    }
    for (let k = 1; k <(2*i); k++) {
        hourGlass+="*";
    }
    hourGlass+='\n';
}
console.log(hourGlass)

//Hallow Hourglass Star Pattern

let HalloewhourGlass="";
for (let i = 1; i <n; i++) {
    for (let j = 1; j <i; j++) {
        HalloewhourGlass+=" ";        
    }
    for (let k = 1; k <(2*(n-i)); k++) {
        if (k==1||i===1||k==(2*(n-i))-1) {
            HalloewhourGlass+="*";
        }
        else{
            HalloewhourGlass+=" ";
        }
    }
    HalloewhourGlass+='\n';
}
for (let i = 2; i <n; i++) {
    for (let j = i+1; j <n;j++) {
        HalloewhourGlass+=" ";        
    }
    for (let k=1; k<(2*i); k++) {
        if (i===1 || k===1 || k===2*i-1||i==n-1) {
            HalloewhourGlass+="*";
        }
        else{
        HalloewhourGlass+=" ";
        }
    }
    HalloewhourGlass+='\n';
}
console.log(HalloewhourGlass)

//Right Pascal Star Pattern
let pascal="";
for (let i = 0; i <n; i++) {
    for (let j = 0; j <=i; j++) {
        pascal+="*"
    }
    pascal+="\n"
}
for (let i = 1; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        pascal+="*"
    }
    pascal+='\n'
}
console.log(pascal);

//Hallow Right Pascal
let Hallowpascal="";
for (let i = 0; i <n; i++) {
    for (let j = 0; j <=i; j++) {
        if (j==0||j>=i) {
            Hallowpascal+="*"
        }
        else{
            Hallowpascal+=" "
        }
    }
    Hallowpascal+="\n"
}
for (let i = 1; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        if (j==0||j>=(n-i)-1) {
            Hallowpascal+="*"
        }
        else
        {
            Hallowpascal+=" "
        }
    }
    Hallowpascal+='\n'
}
console.log(Hallowpascal)

//Left Pascal
let leftPascacl ="";

for(let i = 1; i < n; i++ ){
    for(let j = 1; j < n; j++){
        if(i + j > n){
            leftPascacl +="*";
        }else{
            leftPascacl +=" ";
        }
    }
    leftPascacl +="\n"
}
for(let i = 1; i < n; i++ ){
    for (let k = 1; k <i; k++) {
        leftPascacl +=" ";
    }
    for(let j = 0; j < n-i; j++){
        leftPascacl +="*";
    }
    leftPascacl +="\n"
}
console.log(leftPascacl)

//Halllow Left Pascal 
let HleftPasscal="";


for(let i = 1; i < n-1; i++ ){
    for (let m = 1; m <n-i; m++) {
        HleftPasscal +=" ";
    }
    for(let j = 1; j <= n; j++){

        if (j==i||j==1) {
            HleftPasscal +="*";
        }
        else{
            HleftPasscal +=" ";
        }
    }
    HleftPasscal +="\n"
}
for(let i = 1; i < n; i++ ){
    for (let k = 1; k <i; k++) {
        HleftPasscal +=" ";
    }
    for(let j = 1; j <=n-i; j++){
        if (j===1 ||j===(n-i)) {
            HleftPasscal +="*";
        }
        else 
        {
            HleftPasscal+=" "
        }
    }
    HleftPasscal +="\n"
}
console.log(HleftPasscal)

//Heart Shape Pattern
m=6,n=12
pattern="";
//small Pyramid
for (let i = 1; i <m; i++) {
//first Pyramid
    for (let j = 1; j<m-i ; j++) {
        pattern+=" "
    }
    for (let k = 1; k <2*i; k++) {
        pattern+="*";
    }
//second pyramid
    for (let j = 1; j<m-i ; j++) {
        pattern+="  "
    }
    for (let k = 1; k <2*i; k++) {
        pattern+="*";
    }
        
    pattern+="\n"    
    }
//For Reverse Pyramid
for (let i = 1; i <n; i++) {
    for (let j =1; j <i;j++) {
        pattern+=" ";
    }
    for (let k = 1; k<2*(n-i-2); k++) {
        pattern+="*";
    }
    pattern+="\n"
}
console.log(pattern)

//Hallow Heart Pattern
let hallowHeart=""
//First hallow pyramid
for (let i = 1; i <m; i++) {
    for (let j = 1; j <m-i; j++) {
        hallowHeart+=" "
    }
    for (let k = 1; k <2*i; k++) {
        if (k===1||k===2*i-1) {
            hallowHeart+="*";
        }
        else{
            hallowHeart+=" ";
        }
    }
//Second hallow pyramid
    for (let j = 1; j <m-i; j++) {
        hallowHeart+="  "
    }
    for (let k = 1; k <2*i; k++) {
        if (k===1||k===2*i-1) {
            hallowHeart+="*";
        }
        else{
            hallowHeart+=" ";
        }
    }    
    hallowHeart+="\n"
}
//Reverse Pyramid Pattern
for (let i = 1; i <n; i++) {
    for (let j = 1; j <i; j++) {
        hallowHeart+=" "
    }
    for (let k = 1; k <2*(n-i-2); k++) {
        if (k==1||k==2*(n-i-2)-1) {
            hallowHeart+="*"
        }
        else{
        hallowHeart+=" "
        }
    }
    hallowHeart+="\n"
}
console.log(hallowHeart)
