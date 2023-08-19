
import logo from '/Users/rkumari/Desktop/01-starting-project/src/assets/investment-calculator-logo.png';
import classes from '/Users/rkumari/Desktop/01-starting-project/src/assets/component/Header/Header.module.css'

const Header = ()=> {

    return (
        <>
        <header className={classes.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
        </>
    )
}
export default Header;
