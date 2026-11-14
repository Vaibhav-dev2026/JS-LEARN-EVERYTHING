function triangle(n){
    let row=5;
    for(let i=0; i<n; i++){
        let row="";
        for(let j=1; j<=i; j++){
            row += j  + "";
        }
        console.log(row);
    }
}
triangle(5);