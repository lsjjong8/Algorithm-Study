module.exports = {
    selectionSort: function (array) {

        for (let i = 0; i < array.length; i++) {
            var min = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }

            if (min !== i) {
                var temp = array[i];
                array[i] = array[min];
                array[min] = temp;
            }
        }

        return array;
    },

    insertionSort: function (array) {
        for (let i = 1; i < array.length; i++) {
            let me = array[i];
            let j = i - 1;
            while (j >= 0 && me < array[j]) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = me;
        }
        return array;
    },

    bubbleSort: function (array) {
        let temp;
        for (let i = 0; i < array.length; i++) {
            for (let j = 1; j < array.length - i; j++) {
                if (array[j - 1] > array[j]) {
                    temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    },

    h_index: function (citations) { // 테스트케이스 거의다 실패
        let answer = 0;
        let count = 0;

        // 작은 값부터 정렬 (bubble sort말고 내장함수)    
        // 오름차순 정렬 (sort)
        citations.sort(function (a, b) {
            return b - a;
        });

        console.log(citations);

        for (let i = 0; i < citations.length; i++) {
            count = 0;
            for (let j = 0; j < citations.length; j++) {
                if (citations[j] >= citations[i]) {
                    count++;
                }
            }
            if (count >= citations[i]) {
                return citations[i];
                // if(citations[i] >= citations.length - count) {
                // }
            }
        }

        // H-Index 리턴
        return answer;
    }
}