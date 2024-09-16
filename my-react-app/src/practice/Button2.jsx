function Button2(){
    let count = 0

    
    const handleClick2 = (name) => {
        if(count  < 3){
            count++
            console.log(`${name} clicked ${count} times`)
        }
        else{
            console.log(`${name} stop clicking me`)
        }
    }
    return(<button onClick={handleClick2("Bro")}>Click Me</button>)
}
export default Button2