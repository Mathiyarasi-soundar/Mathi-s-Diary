import { Component } from 'react';
import './Navbar.css';
import Navbaritems from './Navbaritems';
import { Link } from 'react-router-dom';



class Navbar extends Component {

    state = { clicked: false };
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <h1> Mathi's Diary 📖  </h1>
                </div>
                <div className='mobile-menu' onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'Navbar-menu active' : 'Navbar-menu'}>
                    {Navbaritems.map((data, index) => {
                        return (
                            <li key={index}>
                                <Link to={data.url} className={data.cName}>
                                    <i className='Navbar-icon'>{data.icon}</i> {data.name}
                                </Link>
                            </li>
                        )
                    })}

                    <button>
                        <Link to="/login" className='navbar-login'><i class="fa-solid fa-right-to-bracket"></i>Login</Link>
                    </button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;