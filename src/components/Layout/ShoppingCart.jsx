
export default function ShoppingCart({
  // eslint-disable-next-line react/prop-types
  setShopSlider,
  shopCarImg,
  cartQuantities,
  user,
}) {
  return (
    <div className="shoppingCartIcon" onClick={() => setShopSlider(true)}>
      <img src={shopCarImg} alt="購物車" />
      <div className="shoppingCart-num">
        <span>
          {
            cartQuantities?.filter((item) => item.userId === user.userId)
              .length
          }
        </span>
      </div>
    </div>
  );
}
