
// eslint-disable-next-line react/prop-types
export default function UserHeader({ user, color }) {
  return (
    <div className="checkoutScreen-news-top">
      <img src={user.userImg} alt="使用者大頭照" />
      <h3 style={{ color: color }}>{user.userName}</h3>
    </div>
  );
}
