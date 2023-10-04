import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import ProductForm from "@/components/ProductForm";
export default function New(){
    return (
        <Layout>
        <ProductForm />
        </Layout>
    )
}