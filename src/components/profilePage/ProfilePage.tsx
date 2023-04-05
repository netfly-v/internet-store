import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import Order from './Order';
import {getUserIdSelector} from '../../store/state/auth/selectors';
import {sortedOrdersHistorySelector} from '../../store/state/orders/selectors';
import {getOrdersHistoryThunk} from '../../store/thunks/ordersThunk';
import {OrderType} from '../../store/state/orders/types';
import {AppStateType} from '../../store';
import {ProfilePageWrapper, ProfilePageTitle} from './styles';

type ProfilePageProps = {
  userId: number;
  getOrdersHistory: (id: number) => void;
  orders: OrderType[];
};

const ProfilePage: React.FC<ProfilePageProps> = ({userId, getOrdersHistory, orders}) => {
  useEffect(() => {
    getOrdersHistory(userId);
  }, []);

  return (
    <ProfilePageWrapper>
      <ProfilePageTitle>Orders history:</ProfilePageTitle>
      {orders ? orders.map((order) => <Order key={order.id} order={order} />) : null}
    </ProfilePageWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  userId: getUserIdSelector(state),
  orders: sortedOrdersHistorySelector(state),
});

const mapDispatchToProps = {
  getOrdersHistory: getOrdersHistoryThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
