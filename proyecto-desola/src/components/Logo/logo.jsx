import logo from '../../img/logo.svg'
const Logo = () => {
    return (
        <>
            <a className="navbar-brand d-flex align-content-center" href="#">
                    <img className="align-self-center d-inline-block align-text-center" src={logo} alt={"logo"} style={{ height: 30 }} />
                    <span className="logoText align-self-center d-inline-block align-text-center">Nina's shop</span>
            </a>
        </>
    );
}

export default Logo;
