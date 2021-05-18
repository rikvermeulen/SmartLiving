import Clock from 'react-live-clock';

const Header = () => {
    return (
        <header>
            <nav>
            <ul className="navLeft">
                    <li>
                        <h1>Dashboard</h1>
                    </li>
                </ul>
                <ul className="navRight">
                    <li>
                        <p><Clock format={'HH:mm'} ticking={true} /></p>
                    </li>
                </ul>
            </nav>
        
        </header>
    )
}

export default Header
