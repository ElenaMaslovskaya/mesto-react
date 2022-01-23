import logo from '../logo.svg'

function Header() {
   return (
      <header className="header">
         <img className="header__logo" alt="Логотип" src={logo} />
      </header>
   )
};

export default Header;