import MonthlyRevenue from './MonthlyRevenue'
import ProdRepGraph from './prodRepGraph'
const AdminPage=()=>{
  return(
    <div className="row col-md-12">
    <div className="col-md-6">
    <MonthlyRevenue/>
    </div>
    <div className="col-md-6">
    <ProdRepGraph/>
    </div>   
    </div>
  )
}

export default AdminPage