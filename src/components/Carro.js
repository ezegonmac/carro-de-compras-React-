import { Component } from "react"
import BubbleAlert from "./BubbleAlert.js"

const styles = {
    carro: {
        backgroundColor: "#359a2c",
        color: "#fff",
        border: "none",
        padding: "15px",
        borderRadius: "15px",
        cursor: "pointer",
    },
    bubble: {
        position: "relative",
        left: "12px",
        top: "20px",
    }
}
class Carro extends Component {
    render() {
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert/>
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro