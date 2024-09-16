function Food(){

    const food1 = "Orange";
    const food2 = "Apple";
    const food3 = "Watermelon";


    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food3.toUpperCase()}</li>

        </ul>
    );
}

export default Food 