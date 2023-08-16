import { getProducts } from "@/common/query/product";
import Layout from "@/components/Layout";
import { ActionIcon } from "react-query/types/core/query";
import { Button, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ProductPage(){

    const [isOpenAdd, setIsOpenAdd] = useState(false)
    const [skip, setSkip] = useState (0)

    const { data, refetch, isFetching } = useQuery(['list-products', skip],
      () => getProducts(skip), {
      initialData: {}
      });

    console.log('data product:', data.data?.products,'isFetching', isFetching)

  return (
    <>
      <Layout title='Product Page'>
        <main>
          <section
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}>
            <Title order={1} style={{marginBottom:"10px"}}>List Product</Title>
            <Button
              onClick={()=>setIsOpenAdd(true)}
            >
              Add Product
            </Button>
           </section>
          </main>
      </Layout>
    </>
  )
}