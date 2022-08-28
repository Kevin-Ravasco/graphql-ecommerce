import React, { useState } from "react"
import { Col, ListGroup, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import Product1 from "../assets/images/Products/2.jpg"
import Product2 from "../assets/images/Products/5.jpg"
import Product3 from "../assets/images/Products/7.jpg"
import ProductCard from "../Components/Products/ProductCard"

export default function Home() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div className="container">
      <Row>
        <Col md={3} xs={12}>
          <h5 className="title mt-3 mb-3">Explore Categories</h5>
          <ListGroup>
            <ListGroup.Item>Mobile Phones</ListGroup.Item>
            <ListGroup.Item>Laptops</ListGroup.Item>
            <ListGroup.Item>Computer Accessories</ListGroup.Item>
            <ListGroup.Item>Cookware</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
            <ListGroup.Item>Sound systems</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={7} xs={12}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={2} xs={12}>
          <Card className="mt-5 ml-3">
            <Card.Img variant="top" src={image1} />
          </Card>
          <Card className="mt-2 ml-3">
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Subtitle className="mb-2 text-muted text-center">
                Discounts just for you
              </Card.Subtitle>

              <h2 className="section-title">
                {" "}
                Up To 50% OFF <hr></hr>
                On Our Major Products
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xs={12}>
          <h1 className="section-title">Explore Products</h1>
          <Container>
            <Row>
              <Col md={3} xs={6}>
                <ProductCard
                  image={Product2}
                  title={"Sunglasses"}
                  price={"$ 23"}
                />
              </Col>
              <Col md={3} xs={6}>
                <ProductCard
                  image={Product1}
                  title={"Sunglasses"}
                  price={"$ 23"}
                />
              </Col>
              <Col md={3} xs={6}>
                <ProductCard
                  image={Product2}
                  title={"Sunglasses"}
                  price={"$ 23"}
                />
              </Col>
              <Col md={3} xs={6}>
                <ProductCard
                  image={Product3}
                  title={"Sunglasses"}
                  price={"$ 23"}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}
