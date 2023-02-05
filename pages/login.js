export default function Login() {
    return (
        <div className="vh-100 container d-flex justify-content-center align-items-center">
            <div class="card col-md-5">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
}