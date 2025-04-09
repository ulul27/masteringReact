import Navbar from '../asseets/img/Group25.png'

export default function Hero () {
  return (
<>

<div className="container">
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center">         
            <div>
                <h2 className="pop-42">Design Better & <br/>Faster Than Before.</h2>
                <p className="pop-20">Accelerate your work with our millions<br/>
                  of ready-to-use design projects.</p>
                <button className="browse py-2 px-4 rounded-pill">Browse Now</button>
            </div>
        </div>

            <div className="col-md-6">
              <img src={Navbar} alt="Navbar" />
            </div>

        </div>
</div>

</>
  )
}

