const EditAddress = () => {
  return (
    <div className="container">
      <h3>Edit Address Details</h3>
      <table className="table table-borderless ">
        <tbody>
          <tr>
            <td colSpan="2">
              <div className="row">
                <div className="form-group">
                  <label className="col-md-3 control-label">
                    Address Line1:
                  </label>
                  <div className="col-md-12">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    Address Line2:
                  </label>
                  <div className="col-lg-12">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Landmark:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">PinCode:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="number" />
                </div>
              </div>
            </td>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">City:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">State:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </td>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">Country:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EditAddress
