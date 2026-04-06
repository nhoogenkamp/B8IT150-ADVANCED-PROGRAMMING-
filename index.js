alert("Hello World!")

let f2= (a,b,n) =>{
    let total=0;
    for(let i=0; i<n; i++){
        if (i%a==0||i%b==0){
            total+=i
        }
    }
    return total;
}

alert(f2(3,5,1000))

let f3handler=()=>{
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let n=document.getElementById('n').value;
    alert(f2(a,b,n));
}