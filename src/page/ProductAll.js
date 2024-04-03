import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
// import{productAction} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {

    const productList = useSelector(state=>state.product.productList)
    const [query] = useSearchParams();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        const getProducts = () => {
            setLoading(true);
            try {
                let searchQuery = query.get('q') || "";
                dispatch(fetchProducts(searchQuery))
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [query]);

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
                            <Col lg={3} md={6} sm={12} className="product-card" key={product.id}>
                                <ProductCard item={product} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
