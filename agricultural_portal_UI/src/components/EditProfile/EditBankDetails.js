const EditBankDetails = () => {
  return (
    <div className="container">
      <h3>Edit Bank Details</h3>
      <table className="table table-borderless ">
        <tbody>
          <tr>
            <td colSpan="2">
              <div className="row">
                <div className="form-group">
                  <label className="col-md-3 control-label">
                    Account Number:
                  </label>
                  <div className="col-md-12">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label className="col-lg-3 control-label">IFSC Code:</label>
                  <div className="col-lg-12">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EditBankDetails
