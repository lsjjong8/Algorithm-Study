let answer1 = [1, 2, 3, 4, 5];
let answer2 = [1, 3, 2, 4, 2, 1, 2, 3, 4, 5, 1, 2];
let answer3 = [1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 4];

console.log(solution(answer3));


function solution(answers) {
    let answer = [];
    let obj = {};
    let pattern = [[1, 2, 3, 4, 5],
                    [2, 1, 2, 3, 2, 4, 2, 5],
                    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let max = 0;

    for (let i=0; i < 3; i++) {
        patternLength(answers, pattern[i]); // pattern length 최적화
    }

    for (let i=1; i <=3; i++) {
        obj[String(i)] = compareArray(answers, pattern[i-1]); // 찍은 내용과 답안 비교하여 점수 도출
        if (max < compareArray(answers, pattern[i-1])) { // 최고 점수 찾기
            max = compareArray(answers, pattern[i-1]);
        }
    }

    // answer에 최고점수자 내보내기
    for (let key in obj) {
        if(obj[key] === max) {
            answer.push(Number(key));
        }
    }

    return answer;
}

function compareArray(answers, array) {
    let count = 0;

    for (let i=0; i < answers.length; i++) {
        if (answers[i] === array[i]) {
            count++;
        }
    }

    return count;
}

function patternLength(answers, pattern) {
    let prefix = pattern.length;
    if (pattern.length < answers.length) { // length 짧을 때 늘려주기
        for (let i = pattern.length; i < answers.length; i++) {
            pattern.push(pattern[i % prefix]);
        }
    } else if (pattern.length > answers.length) { // length 길 때 자르기
        for (let i = pattern.length; i > answers.length; i--) {
            pattern.pop();
        }
    }
}