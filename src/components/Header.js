import Clock from 'react-live-clock';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="navRight">
                    <li>
                        <p><Clock format={'HH:mm'} ticking={true} timezone={'NL/Amsterdam'} /></p>
                    </li>
                </ul>
            </nav>
        
        </header>
    )
}

export default Header
