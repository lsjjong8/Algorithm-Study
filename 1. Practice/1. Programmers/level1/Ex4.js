let number1 = [6, 10, 2];
let number2 = [3, 30, 34, 5, 9];
let number3 = [0, 0, 0, 0];
let number4 = [12, 121];
let number5 = [21, 212];

console.log(solution(number1));
// console.log(solution(number2));
// console.log(solution(number3));
// console.log(solution(number4));
// console.log(solution(number5));

function solution(numbers) {
    let answer = '';
    let allZero = '';
    let max = 0;
    let array = [];
    let factor = [];

    // pair 구성
    for (let i = 0; i < numbers.length; i++) {
        array.push({});
        array[i][numbers[i]] = numbers[i];
        if (max < String(numbers[i]).length) {
            max = String(numbers[i]).length;
        }
    }
    console.log(max);

    // max length에 맞게 늘려주기
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; array[i][numbers[i]].length < max + 1; j++) {
            if (array[i][numbers[i]].charAt(j) === '') {
                j = 0;
            }
            array[i][numbers[i]] = array[i][numbers[i]] + array[i][numbers[i]].charAt(j);
        }
    }

    // 1) 111.1 length 1
    // 1) 01.01 length 2
    // 1) 0.010 length 3
    // 1) .0001 length 4
    // for (let i = 0; i < numbers.length; i++) {
    //     factor[i] = '1';
    //     for (let j = 1; j < max + 1; j++) {
    //         if (j % String(array[i][numbers[i]]).length === 0) {
    //             if (j === max + 1 - String(array[i][numbers[i]]).length) {
    //                 factor[i] = factor[i] + '.';
    //             }
    //             factor[i] = factor[i] + '1';
    //         } else {
    //             if (j === max + 1 - String(array[i][numbers[i]]).length) {
    //                 factor[i] = factor[i] + '.';
    //             }
    //             factor[i] = factor[i] + '0';
    //         }
    //     }

    //     array[i][numbers[i]] = array[i][numbers[i]] * Number(factor[i]);
    // }

    // 내림차순 정렬하기
    array.sort(function (a, b) {
        return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
    });

    console.log(array);

    // Str로 순차적으로 내보내기
    array.map(function (value) {
        answer = answer + Object.keys(value)[0];
        return 0;
    });

    // answer filtering
    for (let i = 0; i < numbers.length; i++) {
        allZero = allZero + '0';
    }
    if (answer === allZero) {
        return '0';
    }

    return answer;
}

// 테스트 1 〉	통과 (8607.39ms, 515MB)
// 테스트 2 〉	통과 (4653.00ms, 312MB)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	통과 (271.68ms, 79.3MB)
// 테스트 5 〉	통과 (7587.80ms, 462MB)
// 테스트 6 〉	통과 (7414.07ms, 414MB)
// 테스트 7 〉	통과 (2.68ms, 37.7MB)
// 테스트 8 〉	통과 (2.31ms, 37.1MB)
// 테스트 9 〉	통과 (2.23ms, 41.9MB)
// 테스트 10 〉	통과 (2.33ms, 37.5MB)
// 테스트 11 〉	통과 (2.19ms, 37.7MB)

function solution(n, words) {
    let answer = [];
    let round = words.length/n;
    let personNo = words.length - n * (round-1);
    
    answer.push(round);
    answer.push(personNo);

    return answer;
}


