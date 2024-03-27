import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react'
import Header from "../../components/Header";
import { getSellers } from "../../actions/AdminActions";
import { useSnackbar } from 'notistack';
import axios from 'axios';

const NearBySeller = (props) => {
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


  return (
    <>
      <Header title="Near-by-Seller" />
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
                placeholder="Search by Pin,City,Businessname"
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
                  Mobile No.
                </th>
                <th className="col-2" scope="col">
                  PinCode
                </th>
                <th className="col-2" scope="col">
                  Address
                </th>
                <th className="col-2" scope="col">
                  City
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
            seller.address.pinCode.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            seller.address.city.toLowerCase().indexOf(q.toLowerCase()) > -1)
            .map((seller) => {
                return (
                  <>
                    <tr>
                      <th className="col-1" scope="row">
                        {seller.sellerId}
                      </th>
                      <td className="col-2">{seller.businessName}</td>
                      <td className="col-2">{seller.mobileNo}</td>
                      <td className="col-2">{seller.address.pinCode}</td>
                      <td className="col-2">{seller.address.line1} {seller.address.line2}</td>
                      <td className="col-2">{seller.address.city}</td>
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


export default NearBySeller;
