import Layout from "@/components/Layout"
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
export default function EditProductPage(){
    const router = useRouter();
    const {id} =  router.query;
    const [productInfo,setProductInfo] = useState(null);
    
    async function saveProduct(ev){
        ev.preventDefault();
        const data = {title,description,price};
        // await axios.post('/api/products',data);
        // setGoToProducts(true);
    }
    
    useEffect(()=>{
        if(id)
        {
            axios.get('/api/products?id='+id).then(response =>{
                // setTitle(response?.data?.title);
                // setDescription(response?.data?.description);
                // setPrice(response?.data?.price);
            })
        }
        else{
            return;
        }
       
    },[id])
    return (
        <Layout>
           <ProductForm  />
        </Layout>
    )
}