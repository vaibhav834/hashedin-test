import { useEffect, useState } from "react"
import {Grid,CircularProgress,Box} from '@mui/material';
import ProductCard from "../../components/ProductCard";
import Filters from "../../components/Filters";
// 
const HomePage = () => {
    const [allProducts,setAllProducts] = useState([])
    const [filteredProducts,setFiteredProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [query,setQuery] = useState("")
    useEffect(()=>{
        getProducts()
    },[])
    useEffect(()=>{
        searchProduct()
    },[query])
    const searchProduct = ( ) => {
        setFiteredProducts(allProducts.filter(product=>product.title.includes(query)))
    }
    const getProducts = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
                setAllProducts(json)
                setFiteredProducts(json)
            })
            .finally(()=>{
                setLoading(false)
            })
    }
    return(
       <Grid container spacing={2}>
            <Grid item lg={3}>
                <Filters query={query} setQuery={setQuery}/>
            </Grid>
            <Grid item lg={9} container>
                {
                    loading?
                        <Box sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            height:'100vh'
                        }}>
                            <CircularProgress />
                        </Box>
                    :
                    filteredProducts.map(item=>{
                       return(
                        <Grid key={item.id} item lg={3} spacing={4}>
                            <ProductCard
                                 product={item}
                            />
                        </Grid>
                       )
                    })
                }
            </Grid>
       </Grid>
    )
}
export default HomePage