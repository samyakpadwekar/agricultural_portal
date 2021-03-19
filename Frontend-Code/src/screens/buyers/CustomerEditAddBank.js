import ChangePassword from '../../components/EditProfile/ChangePassword'
import EditAddress from '../../components/EditProfile/EditAddress'
import EditBankDetails from '../../components/EditProfile/EditBankDetails'
import EditPersonalInfo from '../../components/EditProfile/EditPersonalInfo'

import '../../styles/App.css'

const CustomerEditAddBank = (props) => {
  return (
    <div className="col-md-8 mx-auto">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <form onSubmit={''} className="form-horizontal" role="form">
                <EditAddress />

                <EditBankDetails />
                <div className="form-group">
                  <label className="col-md-3 control-label"></label>
                  <div className="col-md-12">
                    <button className="btn btn-success" value="Submit">
                      Submit
                    </button>
                    <button
                      className="btn btn-warning float-end"
                      value="Cancel">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CustomerEditAddBank
