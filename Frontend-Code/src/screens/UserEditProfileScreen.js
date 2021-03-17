import ChangePassword from '../components/EditProfile/ChangePassword'
import EditAddress from '../components/EditProfile/EditAddress'
import EditBankDetails from '../components/EditProfile/EditBankDetails'
import EditPersonalInfo from '../components/EditProfile/EditPersonalInfo'
import '../styles/App.css'

const UserEditProfileScreen = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <form onSubmit={''} className="form-horizontal" role="form">
                    <EditPersonalInfo />
                    <EditAddress />
                    <ChangePassword />
                    <EditBankDetails />
                    <div className="form-group">
                      <label className="col-md-3 control-label"></label>
                      <div className="col-md-10">
                        <button className="btn btn-success" value="Submit">
                          Submit
                        </button>
                        <input
                          type="reset"
                          className="btn btn-default float-end"
                          value="Cancel"></input>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  )
}

export default UserEditProfileScreen
