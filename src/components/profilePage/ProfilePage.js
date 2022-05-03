import styles from './ProfilePage.module.css';
import { connect } from 'react-redux';
import { getUserIdSelector } from 'store/state/auth/selectors';
import { getOrdersHistoryThunk } from 'store/thunks/ordersThunk';
import { useEffect } from 'react';
import { sortedOrdersHistorySelector } from 'store/state/orders/selectors';
import Order from './Order';

const ProfilePage = ({ userId, getOrdersHistory, orders }) => {
  useEffect(() => {
    getOrdersHistory(userId);
  }, []);

  return (
    <div className={styles.ProfilePage}>
      <span className={styles.title}>Orders history:</span>
      {orders ? orders.map(order => <Order key={order.id} order={order} />) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  userId: getUserIdSelector(state),
  orders: sortedOrdersHistorySelector(state),
});

const mapDispatchToProps = {
  getOrdersHistory: getOrdersHistoryThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
