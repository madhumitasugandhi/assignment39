import "./app.css";

const greetblessStyle ={
    backgroundColor: "salmon",
    color: "black",
    margin: "5px",
    padding: "8px",
    
}

function GreetingGM() {

    const date = new Date();

    const currentHour =date.getHours();
    const cuurrentMinute = date.getMinutes();

    return (
        <h1 className="greet">Good Morning ({currentHour}: {cuurrentMinute})</h1>
    )
}

function Greetingbless() {
    return (
        <div style={greetblessStyle}>
            Have wonderful day ahead
        </div>
    )
}

function Greetingbye() {
    return (
        <div style={{
            backgroundColor: "pink",
            color: "black",
            margin: "5px",
            padding: "8px",
            borderRadius: "10px"
        }}
        >
            Bye Bye..!
        </div>
    )
}
export default GreetingGM;
export{ Greetingbless, Greetingbye};