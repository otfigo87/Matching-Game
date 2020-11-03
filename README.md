# Matching-Game

The left and right sides are identical, except for one thing: the left side has one extra face. The user needs to click on that extra face. If anything except the correct face is clicked, a message is displayed saying that the game is over. If the correct face is clicked, all the currently displayed faces are removed and a new set of faces is shown at random positions.

Each time a new set of faces is shown there will be 5 more faces than before, on both the left and the right sides. There will always be one more face shown on the left than on the right. The other faces on the right and left will be identical in position to each other. 

For example, let’s imagine you are playing the game shown in the previous figure. After clicking on the extra face (top middle) all the faces disappear and the following new set of faces are shown, at new random positions. As you can see, on both sides 5 more faces than before are shown.

if you can help with this :
1) Add a counter that shows how many attempts the player has made, and show them the count at the end of the game.
2) Use CSS to improve the appearance of the game.
3) When the game ends, show a button that will allow the player to restart the game.
4) Allow the user to choose how many additional faces are generated for each level, i.e. allow them to set the numberOfFaces variable (through a prompt or similar) at the beginning of the game. Alternatively, allow the user to choose a mode at the beginning of the game (e.g. Easy, Normal, Difficult) then set the numberOfFaces accordingly (e.g. 2 for easy, 5 for normal, 8 for difficult...)
