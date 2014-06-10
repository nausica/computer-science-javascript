var a = [8,4,6,2,1,9,5,5,4,3,4,3];
 
function qsort(arr)
{
    var stack = [arr];
    var sorted = [];
 
    while (stack.length) {
 
        var temp = stack.pop(), tl = temp.length;
 
        if (tl == 1) {
            sorted.push(temp[0]);
            continue;
        }
        var pivot = temp[0];
        var left = [], right = [];
 
        for (var i = 1; i &lt; tl; i++) {
            if (temp[i] &lt; pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }
 
        left.push(pivot);
 
        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);
 
    }
 
    console.log(sorted);
}
qsort(a);