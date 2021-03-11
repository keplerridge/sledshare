import {withRouter, Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/allrentals' >Rentals</Link>
                <Link to='/profile' >Profile</Link>
            </nav>
        </div>
    )
}

export default withRouter(Header);