import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/yangshoong/hnm-react-router-practice/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);


    }

    useEffect(() => {
        getProductDetail();

    }, []);



    return (
        <Container>
            <Row>
                <Col calssName="product-img">
                    <img src={product?.img} alt="" />
                </Col>
                <Col>
                    <div>
                        <div>{product?.title}</div>
                        <div>{product?.price}</div>
                    </div>
                    <div>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>

                    <div>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                Block level button
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail