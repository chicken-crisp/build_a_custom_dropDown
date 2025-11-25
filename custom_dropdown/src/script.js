const dropdown = document.getElementById("selects");
const random = document.getElementById("random-color");

const randomNum =()=>{ 
    return Math.floor(Math.random() * 255)
}

dropdown.addEventListener("change",(e) =>{
    const colors = {
        blue:"blue",
        red:"red",
        yellow:"yellow",
        green:"green"
    }

    if(e.target.value === "random"){
        const colorFormat = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
        document.body.style.backgroundColor = colorFormat;
    }
    document.body.style.backgroundColor = colors[e.target.value]
})