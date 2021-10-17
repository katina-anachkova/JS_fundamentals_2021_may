function pyramid(num1,num2){
    let base = num1;
    let height = num2;
    let square = 0;
    let marbleSquare = 0;
    let stoneSquare = 0;
    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let counter = 0;
    let lepizSquare = 0;
    let lepizNeeded = 0;
    let goldNeeded = 0;
    let steps = 0;
    
    for (let a = base; a >= 0; a--){
        if (a == 2 || a == 1){
            if(a == 1){
                square = a * a;
                goldNeeded = square * height;
                steps++;
                break;
            }
            else{
                square = a * a;
                goldNeeded = square * height;
                steps++;
                break;
            }
        }
        else if (counter == 4){
            counter = 0;
            square = a * a;
            lepizSquare = (a * 4) - 4;
            stoneSquare = square - lepizSquare;
            stoneNeeded += stoneSquare * height;
            lepizNeeded += lepizSquare * height;
            steps++;
            a--;
        }
        else{
        square = a * a;
        marbleSquare = (a * 4) - 4;
        stoneSquare = square - marbleSquare;
        stoneNeeded += stoneSquare * height;
        marbleNeeded += marbleSquare * height;
        counter++;
        steps++;
        a--;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lepizNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * height)}`);
}
pyramid(11,1)
pyramid(11,0.75)

