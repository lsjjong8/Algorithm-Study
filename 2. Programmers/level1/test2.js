let n1 = 3;
let n2 = 5;
let n3 = 2;
let words1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
let words2 = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"];
let words3 = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n1, words1));
console.log(solution(n2, words2));
console.log(solution(n3, words3));

function solution(n, words) {
    let answer = [];
    let newObj = {};
    let personNo = 0;
    let round = 1;
    let count = 0;

    for (let i = 1; i < words.length; i++) {
        round = 1 + Math.floor(i / n);
        personNo = 1 + (i % n);

        // 끝말이 이어지는지
        if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) {
            return [personNo, round];
        }

        // 중복 단어인지
        newObj[words[0]] = true;
        if (newObj[words[i]] === undefined) {
            newObj[words[i]] = true;
        } else {
            newObj[words[i]] = false;
            return [personNo, round];
        }
        answer = [0, 0];
    }

    return answer;
}   

ryan
apeach
muzi
frodo
neo
tube
jayg