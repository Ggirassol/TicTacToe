import "./Square.css";

const Square = ({ value, onSquareClick }) => {

    return <button className={value === "X" ? "square x" : "square o"} onClick={onSquareClick}>{value}</button>
}

export default Square;