const EditPersonalInfo = () => {
  return (
    <div className="container">
      <h3>Edit Profile</h3>
      <table className="table table-borderless ">
        <tbody>
          <tr>
            <td colSpan="2">
              <div className="row">
                <div className="form-group">
                  <label className="col-md-3 control-label">Username:</label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      value=""
                      readOnly="true"
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="row">
                <div className="form-group">
                  <label className="col-lg-3 control-label">First name:</label>
                  <div className="col-lg-12">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">Last name:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">Mobile No:</label>
                <div className="col-lg-12">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </td>
            <td>
              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-12">
                  <input
                    className="form-control"
                    type="text"
                    value=""
                    readOnly="true"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default EditPersonalInfo
