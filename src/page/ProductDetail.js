import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/productAction';


const ProductDetail = () => {
    let { id } = useParams();
    const product = useSelector((state) => state.product.selectedItem);
    const dispatch = useDispatch();

    const getProductDetail = async () => {
        try {
            dispatch(productAction.getProductDetail(id));
        } catch (error) {
            console.error("Failed to fetch product details:", error);
        } finally {
        }
    };

    useEffect(() => {
        getProductDetail();
    }, [id]);

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