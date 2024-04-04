import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
// import{productAction} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../redux/Slices/productSlice';

const ProductAll = () => {

    const productList = useSelector(state=>state.product.productList)
    const [query] = useSearchParams();
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.product.isLoading);

    

    useEffect(() => {
        let searchQuery = query.get('q') || "";
        dispatch(fetchProducts(searchQuery));
    }, [query, dispatch]);

    return (
        <div>
            <Container>
                <Row>
                    {isLoading ? (
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
