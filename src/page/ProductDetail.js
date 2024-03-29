import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
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
                <Col>
                    <img src={product?.img} alt="" />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail