import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProductDetail = async () => {
        setLoading(true);
        try {
            let url = `https://my-json-server.typicode.com/yangshoong/hnm-react-router-practice/products/${id}`;
            let response = await fetch(url);
            let data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error("Failed to fetch product details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductDetail();
    }, [id]);

    if (loading) {
        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <img src={product?.img} alt="" className="product-img" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="product-info">
                        <div className="product-choice">{product?.choice === true ? "Conscious Choice" : ""}</div>
                        <div className="product-new">{product?.new === true ? "New" : ""}</div>
                    </div>
                    <div className="product-detail">
                        <div className="product-title">{product?.title}</div>
                        <div>{product?.price.toLocaleString('ko-KR')} 원</div>
                    </div>
                    <div>
                        <Form.Select className="product-size">
                            <option>Size</option>
                            <option value="1">S</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                        </Form.Select>
                    </div>
                    <div className="product-buy-button">
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                구매
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;