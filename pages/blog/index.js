export default function Blog() {
    return (
      <div className="container">
        <div className="blog-header col-lg-4 text-center m-auto">
          <h2 className="mb-3">Serch what you want</h2>
          <div className=" mb-3 d-flex gap-2">
            <input type="text"  placeholder="Recipient's username" />
            <button>SEARCH</button>
          </div>
         </div>
      </div>
    );
  }