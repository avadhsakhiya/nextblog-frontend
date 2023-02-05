export default function Contact() {
    return (
        <div className="container">
            <div className="col-lg-5 m-auto">
                <h1>Contact</h1>
                <form>
                <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea  rows="3"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>


        </div>
    );
}