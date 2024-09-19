const countvalue = document.getElementById("count")
console.log(countvalue.textContent)
let c = 0

    function incr()
    {
       if (c<20){
        c++
        countvalue.textContent = c
       }
       else{
        alert("Maximum limit reached")
       }
    }
    function decr()
    {
        if (c>0){
            c--
            countvalue.textContent = c
        }else{
            alert("minimum limit reached")
        }
    }
    function reset(){
        c=0
        countvalue.textContent = c
    }


    
    