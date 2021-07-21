import {useSelector} from 'react-redux'

function Message() {
  const message = useSelector(state => state.message)

  return (
    <h3>
      <span className="badge amber darken-2">{message}</span>
    </h3>
  );
}

export default Message;
