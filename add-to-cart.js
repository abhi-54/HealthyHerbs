var count = 0;
var a = document.getElementById('amount').innerText;
var number = Number(a);
var b = parseInt(a);
console.log(a)

function counter2(){
    count+=1;
    console.log(count);
    amtadd=count*number;
    console.log(amtadd);
    document.getElementById('btn').value=count;
    document.getElementById('amount_button').value=amtadd;
    return count,amtadd,number;
}
            
function counter(){
    count+=1;
    console.log(count);
    amtadd=count*number;
    console.log(amtadd);
    document.getElementById('btn').value=count;
    document.getElementById('amount_button').value=amtadd;
    return count,amtadd,number;
}

function minus(){
    count-=1;
    if (count<=0){
        count=0;
    }
    console.log(count);
    document.getElementById('btn').value=count;
    return count;
}
