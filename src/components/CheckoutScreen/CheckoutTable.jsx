
// eslint-disable-next-line react/prop-types
export default function CheckoutTable({ filterCartQuantities, countReturnDay,}) {
  return (
    <div className="checkoutScreen-news-middle">
      <table>
        <thead>
          <tr>
            <td>用途</td>
            <td>品名</td>
            <td>數量or天數</td>
            <td>歸還日</td>
            <td>單品總價</td>
          </tr>
        </thead>

        <tbody>
          {filterCartQuantities?.map((item) => (
            <tr key={item.id}>
              {item.purpose === "buy" ? <td>購買</td> : <td>租借</td>}
              <td>{item.itemName}</td>
              {item.purpose === "buy" ? (
                <td>{item.quantity}件</td>
              ) : (
                <td>{item.day}天</td>
              )}
              {item.purpose === "buy" ? (
                <td>不用</td>
              ) : (
                <td>{countReturnDay(item.day)}</td>
              )}
              <td>
                <strong>TWD$</strong> {item.totalPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
