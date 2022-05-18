import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './Header.module.css';
import logo from '../../images/logo.png';
import cartImg from '../../images/cart.svg';
import { useState } from 'react';
import CartPage from '../cart/CartPage';
import { authSelector } from '../../store/state/auth/selectors';
import { connect } from 'react-redux';
import { logoutThunk } from '../../store/thunks/authThunk';
import { ModalWindow } from 'components/modal/ModalWindow';
import { productsAmountSelector } from 'store/state/cart/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from 'utils/auth';

const Header = ({ authUser, productsAmount, logout }) => {
  const [isModal, setModal] = useState(false);

  const navigate = useNavigate();

  const onClose = () => setModal(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" onClick={() => navigate(ROUTES.PRODUCTS)} />
      </div>
      <div className={styles.headerRightSide}>
        {authUser.username ? (
          <>
            <span className={styles.loginOk}>
              Hello,{' '}
              <NavLink to={ROUTES.PROFILE_PAGE} className={styles.profile}>
                {authUser.username}
              </NavLink>
            </span>
            <button className={styles.login} onClick={logout}>
              Exit
            </button>
          </>
        ) : (
          <NavLink to={ROUTES.LOGIN_PAGE} className={styles.NavLinkLoginButton}>
            <button className={styles.login}>Login</button>
          </NavLink>
        )}
        <div className={styles.cartWrapper}>
          <button
            className={styles.cart}
            onClick={() => {
              if (auth.get()) {
                setModal(true);
              } else {
                navigate(ROUTES.LOGIN_PAGE);
              }
            }}
          >
            <img src={cartImg} className={styles.cartImg} alt="cart img" />
          </button>
          <div className={styles.quantity}>{productsAmount}</div>
        </div>

        <ModalWindow visible={isModal} content={<CartPage onClose={onClose} />} onClose={onClose} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authUser: authSelector(state),
  productsAmount: productsAmountSelector(state),
});

const mapDispatchToProps = { logout: logoutThunk };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
