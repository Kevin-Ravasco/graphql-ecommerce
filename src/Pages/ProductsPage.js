import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import ProductCard from "../Components/Products/ProductCard"
import { useQuery } from "@apollo/client"
import { GET_PRODUCTS } from "../graphql/queries"
import Loading from "../Components/Loaders/Loading"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  useEffect(() => {
    if (data) {
      setProducts(data.allProducts.edges)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>An error occurred</p>

  return (
    <Container className="mt-5">
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {products.map((product) => {
            const { id, productMedia, name, priceCurrency, price } =
              product.node

            return (
              <Col md={3} xs={6}>
                <ProductCard
                  key={id}
                  id={id}
                  image={productMedia[0].image}
                  title={name}
                  price={`${priceCurrency} ${price.amount}`}
                />
              </Col>
            )
          })}
        </Row>
      )}
    </Container>
  )
}
