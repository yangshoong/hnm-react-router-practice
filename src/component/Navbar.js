import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit'

const Navbar = () => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성'
    ];
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>

            <div className="nav-logo">
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" alt="H&M" />
            </div>

            <div className="menu-area">
                <Container>
                    <Row>
                        <Col md={3} className="nav-space">
                        </Col>

                        <Col md={6} className="menu-list">
                            <ul className="menu-list">
                                {menuList.map((menu, index) => (
                                    <li key={index}>{menu}</li>
                                ))}
                            </ul>
                        </Col>

                        <Col md={3} className="search-area">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input type="text" placeholder="제품 검색" className="search-input" />
                          
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
