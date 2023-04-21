import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <span className=''>Knowledge Cafe</span>
            </div>
            <div>
                <nav className='d-flex gap-3'>
                  <a href='#'>Home</a>
                  <a href='#'>About</a>
                  <a href='#'>Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;