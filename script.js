class checkYuGiOh{
    constructor(n){
        this.n = n;
        const myArray = [];
        for (let i = 1; i <= n; i++) {
             i % 2 == 0 && i % 3 == 0 && i % 5 == 0 
            ? myArray.push("yu-gi-oh") 
            : i % 2 == 0 && i % 3 == 0            ? myArray.push("yu-gi")
            : i % 2 == 0 && i % 5 == 0 
            ? myArray.push("yu-oh")
            : i % 3 == 0 && i % 5 == 0 
            ? myArray.push("gi-oh")
            :i % 2 == 0 
             ?  myArray.push("yu") 
           : i % 3 == 0 
           ? myArray.push("gi")
           :  i % 5 == 0 
           ? myArray.push("oh") :
           myArray.push(i)

        }

        return myArray;
    }



}




const check = new checkYuGiOh(10);
console.log(check);









          
            
            