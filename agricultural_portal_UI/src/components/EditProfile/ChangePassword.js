const ChangePassword = () => {
  return (
    <div className="container">
      <h3>Change Password</h3>
      <table className="table table-borderless ">
        <tbody>
          <tr>
            <td>
              <div className="form-group">
                <label className="col-md-3 control-label">New Password:</label>
                <div className="col-md-6">
                  <input className="form-control" type="password" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">
                  Confirm password:
                </label>
                <div className="col-md-6">
                  <input className="form-control" type="password" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ChangePassword
