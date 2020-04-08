let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));

function solution(skill, skill_trees) {
    let answer = 0;
    let count = true;
    let treeArr = [];
    let skillArr = skill.split('');
    let objArray = [];

    // skill_trees의 오브젝트화 (인덱스 기록)
    for (let i = 0; i < skill_trees.length; i++) {
        treeArr = skill_trees[i].split('');
        objArray.push({});
        for (let j = 0; j < treeArr.length; j++) {
            objArray[i][treeArr[j]] = j;
        }
    }

    console.log(objArray);

    // 유효한 스킬트리인지 검증
    objArray.map(function (round) {
        count = true;

        for (let j = 0; j < skillArr.length - 1; j++) {

            console.log(round[skillArr[j]] + '<' + round[skillArr[j + 1]]);
            if (round[skillArr[j]] > round[skillArr[j + 1]]) { // 선행스킬보다 먼저 배웠으면 false 리턴
                count = false;
            } else if (round[skillArr[j]] === undefined) { // 선행 스킬 안 배웠으면 false 리턴 
                count = false;
            } 
            
        }
        console.log(count);
        if (count === true) {
            answer++;
        }
    });

    return answer;

}