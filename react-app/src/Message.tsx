// PascalCasing: capitalizes the first letter of each word
function Message() {
    //JSX (JavaScript XML)
    const name = 'Micah';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}


export default Message; //exporting the function to be used in other files