import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import Header from "../../components/Header"
import { getProductRep } from "../../actions/AdminActions";


const ProdRepGraph = () => {
  const dispatch = useDispatch()

  const prodRepGraph = useSelector((store) => store.prodRepGraph)
  const { loading, response, error } = prodRepGraph

  useEffect(() => {
    dispatch(getProductRep())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div className="col-md-8 mx-auto my-4 ">
       <Header title="Product Report" />
      <Bar
        data={{
          labels: 
          response &&
          response.list.length > 0 &&
          response.list.map((name) => {
            return name.productName
          }),
          datasets: [
            {
              label: 'Units Sold',
              data:
              response &&
              response.list.length > 0 &&
              response.list.map((units) => {
                return units.inStock
              }),
              backgroundColor: [
                'rgba(46, 184, 92,  0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgba(46, 184, 92,  1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}

export default ProdRepGraph
