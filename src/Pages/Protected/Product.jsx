import { useEffect, useState } from 'react'
import Navbar from '../../Routes/Navbar'
import Card from '../Public/Card'
import axios from 'axios'

function Product() {
    const [productList, setProductList] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const itemPerPage = 10

    const skip = (pageNumber - 1) * itemPerPage

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios(
                    `https://dummyjson.com/products?limit=${itemPerPage}&skip=${skip}`
                )
                
                setProductList(response.data.products)
                setTotalPages(Math.ceil(response.data.total / itemPerPage))
            } catch (err) {
                console.log(err)
            }
        }
        fetchProduct();
    }, [pageNumber, itemPerPage])

    return (
        <div>
            <h1>Prodcut List</h1>
            <div className="container">
                <Navbar />
                <div className="ProctsListing">
                    {productList.map((product) => (
                        <Card
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            images={product.images}
                            id={product.id}
                        />
                    ))}
                </div>
                <div className="flex justify-center my-6">

                    <div className="join grid grid-cols-2">
                        <button className="join-item btn btn-outline">Previous page</button>
                        <button className="join-item btn btn-outline">Next</button>
                    </div>
                    {/* <Stack spacing={2}>
            <Pagination
              className="pagination"
              count={totalPages} // jitna data h usko item per page se divide krke jo value ayegi vo h ye
              page={pageNumber} // konse page pr ho , ye pagination k click pr change bhi hoga aage
              onChange={handlePageChange}
              variant="outlined" // css
              color="secondary" //css
            />
          </Stack> */}
                </div>
            </div>
        </div>
    )
}

export default Product
