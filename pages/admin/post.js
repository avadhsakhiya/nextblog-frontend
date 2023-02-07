import axios from "axios"

export default function Post() {

  const getdata = (name,value) => {
    console.log(name,value);
  }

  return (
    <div>
      <div className="py-4 col-lg-6 m-auto">
        <h4>Add blog post +</h4>
      </div>
      <div className="col-lg-6 m-auto">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Post title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" name="postTitle" onInput={getdata(value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Page title</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="pageTitle" onInput={()=>getdata(name,value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">meta description</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="metaDescription" onInput={()=>getdata(name,value)} />
          </div>
          <div class="mb-3">
            <label for="basic-url" class="form-label">URL structure</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
              <input type="date" class="form-control" id="basic-url" aria-describedby="basic-addon3" name="urlStructure" onInput={()=>getdata(name,value)} />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Author name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="authorName" onInput={()=>getdata(name,value)} />
          </div>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" name="imageUrl" onInput={()=>getdata(name,value)} />
            <label class="input-group-text" for="inputGroupFile02">Upload Thumnail image</label>
          </div>
          <div class="mb-3">
            <label for="inputState" class="form-label" name="Category" onInput={()=>getdata(name,value)}>Select Category</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="basic-url" class="form-label">Publish Date</label>
            <div class="input-group">
              <input type="date" class="form-control" id="basic-url" aria-describedby="basic-addon3" name="publishDate" onInput={()=>getdata(name,value)} />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Add Post</button>
        </form>
      </div>
    </div>
  );
}