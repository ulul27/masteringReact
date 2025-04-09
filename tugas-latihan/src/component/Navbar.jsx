import NavbarBrand from '../asseets/img/Group2.png'



export default function Navibar () {
return (
  <>
  
    <div className="container">
      <nav className="navbar">
        <a href="/"><img src={NavbarBrand} alt="logo"/></a>
        <div className="d-flex justify-content-center">
          <a className="nav-link p-2 fw-bold" href="/">Home</a>
          <a className="nav-link p-2" href="/">Categories</a>
          <a className="nav-link p-2" href="/">Pricing</a>
          <a className="nav-link p-2" href="/">Study Case</a>
        </div>

        <div className="position-relative rounded-pil">
          <button type="button" className="btn btn-outline-secondary m-2 px-4 rounded-pill">Sign In</button>
          <button type="button" className="btn btn-dark m-2 px-4 rounded-pill">Sign Up</button>
        </div>
      </nav>
      </div>

  </>
)
}