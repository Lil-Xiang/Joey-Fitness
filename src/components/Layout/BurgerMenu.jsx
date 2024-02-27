
// eslint-disable-next-line react/prop-types
function BurgerMenu({ setBurgerSlider, burgerIcon }) {
  return (
    <div className="burgerMenuIcon" onClick={() => setBurgerSlider(true)}>
      <img src={burgerIcon} alt="漢堡選單" />
    </div>
  );
}

export default BurgerMenu;
