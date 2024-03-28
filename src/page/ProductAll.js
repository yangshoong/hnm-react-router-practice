import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();


    const getProducts = async () => {
        let url = 'http://localhost:5000/products';
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    {productList.map((product) => (
                        <Col className="product-card" lg={3}>
                            <ProductCard item={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll
