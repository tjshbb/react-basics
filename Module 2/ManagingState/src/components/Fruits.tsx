/**
 * @function Fruits
 * @description A component that renders a list of fruits.
 * @param {object} props - Component props.
 * @param {array} props.fruits - Array of fruits.
 * @returns {JSX.Element} A JSX element.
 */
function Fruits(props) {
    return (
        <div>
            {/* Map over the array of fruits and create a p element for each one */}
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;