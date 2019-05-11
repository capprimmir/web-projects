var nums = [10, 17, 54, 7, 11, 17];
console.log(nums);

function getSecondLargest (numbers){
    //sort in descending order
    numbers.sort(function(a,b) {return b-a});
    let first = numbers[0];
    let second = numbers[1];
   

    for(let num in numbers) {
        console.log("number: " + num);
        if (second === first){
            first = second;
        }
        else {
            second = num
        }
    }
    console.log("largest: " + first);
    console.log("second largest:" + second);
}

getSecondLargest(nums);
