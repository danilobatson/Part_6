import { useSelector, } from 'react-redux';
import { connect } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return <>{notification && <div style={style}>{notification}</div>}</>;
};

const ConnectedNotes = connect()(Notification);
export default ConnectedNotes;
