import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

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

    return (
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>

            <div className="nav-logo">
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" alt="H&M" />
            </div>

            <Container>
                <div></div>
                <div className="menu-area">
                    <div className="space"></div>
                    <ul className="menu-list">
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                    <div className="search-area">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" />

                    </div>
                </div>
            </Container>

            
        </div>
    )
}

export default Navbar