import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import logo from '../../images/logo.png';
import cartImg from '../../images/cart.svg';
import {useState} from 'react';
import CartPage from '../cart/CartPage';
import {authSelector} from '../../store/state/auth/selectors';
import {connect} from 'react-redux';
import {logoutThunk} from '../../store/thunks/authThunk';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {productsAmountSelector} from '../../store/state/cart/selectors';
import {auth} from '../../utils/auth';
import {ModalWindow} from '../modal/ModalWindow';
import {
  HeaderWrapper,
  LogoWrapper,
  LogoImg,
  CartButton,
  CartImg,
  CartWrapper,
  HeaderRightSideWrapper,
  QuantityBadge,
  LoginOkText,
  AuthButton,
  StyledNavLinkLogin,
} from './styles';
import {AppStateType} from '../../store';
import {AuthType} from '../../store/state/auth/types';

type HeaderProps = {
  authUser: AuthType;
  productsAmount: number;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({authUser, productsAmount, logout}) => {
  const [isModal, setModal] = useState(false);

  const navigate = useNavigate();

  const onClose = () => setModal(false);

  const goToProducts = () => navigate(ROUTES.PRODUCTS);

  const openCart = () => setModal(true);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg src={logo} alt="logo" onClick={goToProducts} />
      </LogoWrapper>
      <HeaderRightSideWrapper>
        {authUser.username ? (
          <>
            <LoginOkText>
              Hello, <NavLink to={ROUTES.PROFILE_PAGE}>{authUser.username}</NavLink>
            </LoginOkText>
            <AuthButton onClick={logout}>Exit</AuthButton>
          </>
        ) : (
          <StyledNavLinkLogin to={ROUTES.LOGIN_PAGE}>
            <AuthButton>Login</AuthButton>
          </StyledNavLinkLogin>
        )}
        <CartWrapper>
          <CartButton
            onClick={() => {
              if (auth.get()) {
                openCart();
              } else {
                navigate(ROUTES.LOGIN_PAGE);
              }
            }}>
            <CartImg src={cartImg} alt="cart img" />
          </CartButton>
          <QuantityBadge>{productsAmount}</QuantityBadge>
        </CartWrapper>

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
      </HeaderRightSideWrapper>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  authUser: authSelector(state),
  productsAmount: productsAmountSelector(state),
});

const mapDispatchToProps = {logout: logoutThunk};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
