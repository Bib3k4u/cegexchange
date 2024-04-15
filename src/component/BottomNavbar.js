import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDice, faComments, faFootballBall, faBars } from '@fortawesome/free-solid-svg-icons';

function BottomNavbar() {
    const [activeButton, setActiveButton] = useState('home');

    return (
        <div style={{}}>
            <div style={{ position: 'fixed', alignItems: 'center', backgroundColor: 'black', width: '100%', height: '48px', fontSize: '8px', display:'flex', alignItems:'center', justifyContent:'space-between' }} className="fixed bottom-0 left-0 right-0 bg-gray-800 md:hidden">
            
            <nav style={{ display:'flex', alignItems:'center', justifyContent:'space-between' , alignItems: 'center', width: '100%' }} className="flex justify-between items-center px-4 py-2">
                <button
                    style={{ color: activeButton === 'home' ? 'red' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize: '12px' }}
                    href="#"
                    className="btn"
                    onMouseEnter={() => setActiveButton('home')}
                >
                    <div className="mb-1">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </div>
                    Home
                </button>
                <button
                    style={{ color: activeButton === 'casinos' ? 'red' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize: '12px'  }}
                    href="#"
                    className="btn"
                    onMouseEnter={() => setActiveButton('casinos')}
                >
                    <div className="mb-1">
                        <FontAwesomeIcon icon={faDice} size="lg" />
                    </div>
                    Casinos
                </button>
                <button
                    style={{ color: activeButton === 'chat' ? 'red' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize: '12px'  }}
                    href="#"
                    className="btn"
                    onMouseEnter={() => setActiveButton('chat')}
                >
                    <div className="mb-1">
                        <FontAwesomeIcon icon={faComments} size="lg" />
                    </div>
                    Chat
                </button>
                <button
                    style={{ color: activeButton === 'sports' ? 'red' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize: '12px'  }}
                    href="#"
                    className="btn"
                    onMouseEnter={() => setActiveButton('sports')}
                >
                    <div className="mb-1">
                        <FontAwesomeIcon icon={faFootballBall} size="lg" />
                    </div>
                    Sports
                </button>
                <button
                    style={{ color: activeButton === 'menu' ? 'red' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize: '12px'  }}
                    href="#"
                    className="btn"
                    onMouseEnter={() => setActiveButton('menu')}
                >
                    <div className="mb-1">
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </div>
                    Menu
                </button>
            </nav>
        </div>
        </div>
    );
}

export default BottomNavbar;
