import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const toggleDropdown = () => setDropdown(!dropdown);

    // 화면 크기에 따라서 버튼이 보이고 안 보이도록 설정한다.
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // 페이지 로드 시 한 번 실행
    useEffect(() => {
        showButton();
    }, []);

    // 윈도우 크기가 변경될 때마다 실행
    useEffect(() => {
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton);
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* 로고와 메뉴 아이콘, 메뉴 목록 */}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Confluence 
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                홈
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <div className='nav-links' onClick={closeMobileMenu}>
                                공간 <i className='fas fa-caret-down' />
                            </div>
                            {dropdown && (
                                <div className='dropdown'>
                                    <Link to='/space1' className='dropdown-link' onClick={closeMobileMenu}>
                                        (NURI) 제2연구소
                                    </Link>
                                    <Link to='/space2' className='dropdown-link' onClick={closeMobileMenu}>
                                        (NURI) 공통
                                    </Link>
                                    <Link to='/space3' className='dropdown-link' onClick={closeMobileMenu}>
                                        (NURI) 서비스플랫폼팀
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li className='nav-item'>
                            <Link to='/people' className='nav-links' onClick={closeMobileMenu}>
                                주소록
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>로그인</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
