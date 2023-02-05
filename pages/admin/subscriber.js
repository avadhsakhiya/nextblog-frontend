export default function () {
  return (
    <div>
      <div className="py-4">
        <h4>All Subscriber list</h4>
      </div>
      <div className="table-responsive-xl">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Topic</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}