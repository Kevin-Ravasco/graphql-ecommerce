import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export default function ProductCard({ id, image, price, title }) {
  console.log("image >>>", image)
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}
