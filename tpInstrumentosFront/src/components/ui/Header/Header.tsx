
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dondeEstamos">¿Donde estamos?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">Productos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
