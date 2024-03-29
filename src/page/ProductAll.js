import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();


    const getProducts = async () => {
        let searchQuery = query.get('q')||"";
        let url = `https://my-json-server.typicode.com/yangshoong/hnm-react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts()
    }, [query])


    return (
        <div>
            <Container>
                <Row>
                    {productList.map((product) => (
                        <Col className="product-card" lg={3}>
                            <ProductCard item={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll
