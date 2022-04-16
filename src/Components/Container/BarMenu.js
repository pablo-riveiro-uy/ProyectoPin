function BarMenu(){
    return(
     <div className="container">
        <div className="row menu">
            <div className="col">
              <h1 className="MainTititle">CABAÑAPP</h1>
            </div>
        <div className="col col_menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="collapse navbar-collapse navbar_menu" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="www.google.com">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.google.com">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.google.com">Cabañas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.google.com">Planes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.google.com">Contacto</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  </div>
</div>
    )
}
export default BarMenu;