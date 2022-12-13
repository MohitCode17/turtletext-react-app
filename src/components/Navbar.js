const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <h1 className="logo">TurtleText</h1>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.togglerMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  )
}

export default Navbar;