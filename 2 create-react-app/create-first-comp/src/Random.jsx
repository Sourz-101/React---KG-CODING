function Random() {
    let number = Math.round(Math.random()*100+1);

    return <h4 style={{'background-color': "powderblue"}}>Random number is: {number}</h4>
}

export default Random;