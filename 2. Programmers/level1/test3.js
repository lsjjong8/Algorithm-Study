let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);

function solution(board, moves) {
    let answer = 0;
    let newBoard = board.reverse(); // 배열 역순으로
    let newStack = [];
    let cart = [];
    let pre = 0;
    let temp = 0;

    //배열을 스택형식으로
    for (let i = 0; i < newBoard.length; i++) {
        newStack.push([]);
    }

    for (let i = 0; i < newBoard.length; i++) {
        for (let j = 0; j < newBoard[i].length; j++) {
            if (board[i][j] != 0) {
                newStack[j].push(board[i][j]);
            }
        }
    }

    // Moves 반영
    moves.map (function (move) {
        temp = newStack[move-1].pop();
        console.log('pop : ' + temp);
        
        if (temp !== undefined) {
            pre = cart[cart.length-1];
            cart.push(temp);

            if (temp === pre) {
                cart.pop();
                cart.pop();
                answer = answer + 2;
                console.log('pop!! answer : ', answer);
            }
        } 
    });

    return answer;
}