function addAtleast3No(a,b,c,...numbers){
    var sum=a+b+c;
    for(var i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

var res=addAtleast3No(10,20,30,40,50,60);
console.log(res);