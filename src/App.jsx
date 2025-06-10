import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './Routes/AppRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

// function Home() {
//   const [search, setSearch] = useState('')

//   const data = [
//     {
//       nameImg: 'HeadPhone',
//       images:
//         'src/assest/bh41-bluetooth-wireless-over-ear-headphone-blue-500x500.webp',
//       title: 'HeadPhone',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       images: 'src/assest/aykll_1200.jpg',
//       nameImg: 'T-Shirt',
//       title: 'T-Shirt',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       images: 'src/assest/whatsapp-image-2023-11-07-at-6-50-38-pm-1.jpeg',
//       title: 'Shoes',
//       nameImg: 'Shoes',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//   ]

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value)
//   }

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   )

//   return (
//     <>
//       <Navbar />

//       {/* Search Input */}
//       <div style={{ textAlign: 'center', margin: '20px' }}>
//         <input
//           type="text"
//           placeholder="Search product..."
//           value={search}
//           onChange={handleSearchChange}
//           style={{ padding: '10px', width: '300px', fontSize: '16px' }}
//         />
//       </div>

//       <div className="card">
//         {filteredData.length > 0 ? (
//           filteredData.map((item, index) => (
//             <Card
//               key={index}
//               name={item?.nameImg}
//               images={item?.images}
//               title={item?.title}
//               description={item?.description}
//             />
//           ))
//         ) : (
//           <p style={{ textAlign: 'center' }}>No products found</p>
//         )}
//         <br />
//       </div>

//       <Footer />
//     </>
//   )
// }

// export default Home
