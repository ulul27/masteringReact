import '../../src/App.css';

export default function Items ({gambar, nama, item}) {
  return (
    <>
  
      <div className="col-md-4">
        <div className="card custom-border p-2">
          <div className="p-4">
            <img src={gambar} className="card-img-top" alt="..."/>
          </div>
          <div className="card-body">
            <p className="card-text fw-bolder pop-18">{nama}</p>
            <p className="card-text pop-16">{item}</p>
          </div>
        </div>
      </div>

     </>
  )
}