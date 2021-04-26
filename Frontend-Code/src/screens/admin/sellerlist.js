import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react'
import Header from "../../components/Header";
import { getSellers } from "../../actions/AdminActions";
import { useSnackbar } from 'notistack';
import axios from 'axios';

const SellerList = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch =useDispatch()
  const sellerlist = useSelector((store)=>store.sellerlist)
  const { error, response, loading } = sellerlist

  const[q,setQ]= useState("") 

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSellers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const approvenotification = () => {
    enqueueSnackbar('Seller is approved',{variant:'success'});
};

const suspendnotification = () => {
  enqueueSnackbar('Seller is suspended',{variant:'error'});
};


  const approve = (seller) => {
    console.log(seller.sellerId)
    const id = seller.sellerId
    const url = 'http://localhost:8080/admin/activate-seller/' + id

    const header ={
      headers: {
        'Content-Type': 'application/json', 
      },
    }
  
      axios
        .put(url, header)
        .then((response) => {
          approvenotification();
          dispatch(getSellers()) 
        })
        .catch((error) => console.error(`Error: ${error}`))
    }

    const suspend = (seller) => {
      console.log(seller.sellerId)
      const id = seller.sellerId
      const url = 'http://localhost:8080/admin/suspend-seller/' + id
  
      const header ={
        headers: {
          'Content-Type': 'application/json', 
        },
      }
    
        axios
          .put(url, header)
          .then((response) => {
            suspendnotification();
            dispatch(getSellers())  
          })
          .catch((error) => console.error(`Error: ${error}`))
      }

  return (
    <>
      <Header title="Manage Seller" />
      <div className="container buyerlist-wrapper">
        <div class="col-md-9 mx-auto">
          <form
            className="col-md-8 mx-auto"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Search input with dropdown button"
                value={q} onChange={(e) => setQ(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-success " type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="table-responsive pt-5">
          <table className="table table-striped table-responsive table-bordered ">
            <thead>
              <tr>
                <th className="col-1" scope="col">
                  Id
                </th>
                <th className="col-2" scope="col">
                  Business Name
                </th>
                <th className="col-2" scope="col">
                  GSTIN
                </th>
                <th className="col-2" scope="col">
                  Mobile
                </th>
                <th className="col-2" scope="col">
                  Status
                </th>
                <th className="col-2" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {response &&
            response.list &&
            response.list.length > 0 &&
            response.list
            .filter((seller) => 
            seller.businessName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            seller.gstin.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            seller.status.toLowerCase().indexOf(q.toLowerCase()) > -1)
            .map((seller) => {
                return (
                  <>
                    <tr>
                      <th className="col-1" scope="row">
                        {seller.sellerId}
                      </th>
                      <td className="col-2">{seller.businessName}</td>
                      <td className="col-2">{seller.gstin}</td>
                      <td className="col-2">{seller.mobileNo}</td>
                      <td className="col-2">{seller.status}</td>
                      <td className="col-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-mdb-ripple-color="dark"
                          style={buttonStyle}
                          onClick={(e) => approve(seller)}>
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-mdb-ripple-color="dark"
                          style={buttonStyle}
                          onClick={(e) => suspend(seller)}
                        >
                          Suspend
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const buttonStyle = {
  margin: "10px",
};

export default SellerList;
