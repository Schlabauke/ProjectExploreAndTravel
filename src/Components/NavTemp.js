import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='circleoutside'>
                    <img src='/images/logologo.png' alt='logo' />
                </div >
                <ul className='list'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/destination'>Destination</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/partner'>Partner</Link></li>
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li><Link to='/register'>REGISTER</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;