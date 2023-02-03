export default function Blog() {
  return (
    <div className="container">
      <div className="blog-header col-lg-4 text-center m-auto">
        <h2 className="mb-3">Serch what you want</h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <button className="input-group-text" id="basic-addon2">SEARCH</button>
        </div>
       </div>
    </div>
  );
}