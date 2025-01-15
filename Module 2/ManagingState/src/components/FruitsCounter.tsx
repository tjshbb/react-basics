/**
 * @function FruitsCounter
 * @description A component that renders the total fruits count as an h2
 * @param {object} props - Component props
 * @param {array} props.fruits - Array of fruits
 * @returns {JSX.Element} A JSX element
 */
function FruitsCounter(props) {
    return (
        <div>
            <h2>Total fruits: {props.fruits.length}</h2>
        </div>
    )
}

export default FruitsCounter;