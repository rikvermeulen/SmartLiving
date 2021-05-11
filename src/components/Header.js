import Clock from 'react-live-clock';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="navLeft">
                    <li>
                        <h1 className="hello">Goodmorning</h1>
                    </li>
                    <li>
                        <a href="">Challanges</a>
                    </li>
                    <li>
                        <a href="">Rewards</a>
                    </li>
                </ul>
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
