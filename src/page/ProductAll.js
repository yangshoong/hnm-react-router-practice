import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const [loading, setLoading] = useState(false);


    const getProducts = async () => {
        setLoading(true);
        try {
            let searchQuery = query.get('q') || "";
            let url = `https://my-json-server.typicode.com/yangshoong/hnm-react-router-practice/products?q=${searchQuery}`;
            let response = await fetch(url);
            let data = await response.json();
            setProductList(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts()
    }, [query])


    return (
        <div>
            <Container>
                <Row>
                    {loading ? (
                        <Col className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Col>
                    ) : (
                        productList.map((product) => (
                            <Col className="product-card" lg={3}>
                                <ProductCard item={product} />
                            </Col>
                        ))
                    )}

                </Row>
            </Container>
        </div>
    )
}

export default ProductAll
