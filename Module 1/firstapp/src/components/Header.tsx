function Header(props) {

    console.log(props)

    return (
        <h1>Hello {props.name}, is your favorite color {props.color}</h1>
    )
}

export default Header