        let wins = 0;
        let losses = 0;
        let numberOfFaces = 5;
        const theLeftSide = document.getElementById("leftSide");
        const theRightSide = document.getElementById("rightSide");

        function generateFaces(){

            document.getElementById("btn").disabled = true;
            for ( i = 1; i <= numberOfFaces; i++ ) {
                let randomTop = Math.floor(Math.random() * 400);
                let randomLeft = Math.floor(Math.random() * 400);
                const face = document.createElement("img");
                face.src = "images/smile.png";
                face.style.top = randomTop + "px";
                face.style.left = randomLeft + "px";
                theLeftSide.appendChild(face);
            }

            const leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild);
            theRightSide.appendChild(leftSideImages);

            theLeftSide.lastChild.addEventListener("click", nextLevel)
            document.getElementById("main").addEventListener("click", gameOver);

        }

         function nextLevel(event){
             event.stopPropagation();
             while(theLeftSide.firstChild){
                 theLeftSide.removeChild(theLeftSide.firstChild);
                }
                theRightSide.innerHTML = "";
                numberOfFaces += 5;
                generateFaces();
                wins = wins + 1
                document.getElementById("wins").innerHTML = wins;
                

         }
         function gameOver(){
             document.getElementById("btn").disabled = false;
             alert("Sorry You Lost! Try again");
             document.getElementById("main").removeEventListener("click", gameOver);
             theLeftSide.lastChild.removeEventListener("click", nextLevel)
             while(theLeftSide.firstChild){
                 theLeftSide.removeChild(theLeftSide.firstChild);
                }
                theRightSide.innerHTML = "";
                numberOfFaces = 5;
                losses = losses + 1;
                document.getElementById("loss").innerHTML = losses;

         }