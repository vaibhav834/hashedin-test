import { useEffect, useState } from "react"
import {Typography,Card,CardMedia} from '@mui/material';
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }
const ProductCard = (props) => {
    const {product} = props
    
    return(
       <Card sx={{
        margin:"5px",
        padding:"10px"
       }}>
       
            <CardMedia
                component={"img"}
                src={product?.image}
                sx={{
                    width:"100%",
                    height:"200px",
                    objectFit:"contain",
                }}
            />
            <Typography>
                 {product?.title}
            </Typography>
            <Typography>
                 {product?.price} $
            </Typography>
            <Typography>
                 {product?.rating?.rate}  from {product?.rating?.count} reviews
            </Typography>
       </Card>
    )
}
export default ProductCard