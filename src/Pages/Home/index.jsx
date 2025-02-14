import { useState, useEffect } from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Layout>
            Home
            <div className="grid grid-cols-4 gap-4 p-4 w-full max-w-screen-lg">
                {
                    products?.map(product => (
                        <Card key={product.id} data={product} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home