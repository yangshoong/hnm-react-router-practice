import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
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

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };


    const goToHome = () => {
        navigate('/');
    };

    const getLoginStatus = (authenticate) => {
        if (authenticate === true) {
            return "로그아웃";
        } else {
            return "로그인";
        }
    };

    const handleLoginClick = () => {
        if (authenticate) {
            setAuthenticate(false);
        } else {
            goToLogin();
        }
    };

    return (
        <div>
            <div className="login-button" onClick={handleLoginClick}>
                <FontAwesomeIcon icon={faUser} />
                <div>{getLoginStatus(authenticate)}</div>
            </div>

            <div className="nav-logo" onClick={goToHome}>
                <img
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
                    alt="H&M"
                />
            </div>

            <div className="menu-area">
                <Container>
                    <Row>
                        <Col md={3} className="nav-space">
                        </Col>

                        <Col md={6}>
                            <ul className="menu-list">
                                {menuList.map((menu, index) => (
                                    <li key={index}>{menu}</li>
                                ))}
                            </ul>
                        </Col>

                        <Col md={3} className="search-area">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input type="text" placeholder="제품 검색" className="search-input" onKeyPress={search} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
