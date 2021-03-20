import Header from "../../components/Header";

const PerformanceScreen = (props) => {

  const productCatalogue = [
    {
      produtId: 1,
      productName: "product2",
      avgRating:3.9
    },
    {
      produtId: 2,
      productName: "product2",
      avgRating:4.1
    },
  ];
  return (
    <div>
      <div>
        <Header title="Product Performance" />
      </div>
      <div className="col-md-8 mx-auto">
        <table
          className="table table-stripped table-hover"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Average Rating</th>
              <th>Feedbacks</th>
            </tr>
          </thead>
          <tbody>
            {productCatalogue.map((product) => {
              return (
                <tr>
                  <td>{product.produtId}</td>
                  <td>{product.productName}</td>
                  <td>{product.avgRating}</td>
                  <td>
                  <button
                      className="btn btn-outline-secondary"
                      
                    >
                      View Feedbacks
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceScreen;
