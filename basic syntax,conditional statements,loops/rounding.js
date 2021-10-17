function round(n,m){
    if(m > 15){
        m = 15
    }
    console.log(parseFloat(n.toFixed(m)))
}
round(3.1415926535897932384626433832795,2)
round(10.5,3)
