import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS_LIST } from "../constants";
import { currencyFormatter } from "../helpers";
import { addItem, deleteItem } from "../store/items/slice";

const OrderSummary = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const products = useMemo(
    () =>
      Object.keys(items)
        .filter((key) => !!ITEMS_LIST[key])
        .map((key) => ({
          id: key,
          count: items[key],
          ...ITEMS_LIST[key],
        })),
    [items]
  );
  const total = useMemo(
    () => products.reduce((prev, cur) => prev + cur.count * cur.price, 0),
    [products]
  );

  const handleAddItem = (e, id) => {
    dispatch(addItem(id));
  };
  const handleDeleteItem = (e, id) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
      </h4>
      <ul className="list-group mb-3 sticky-top">
        {products.map((product) => (
          <li
            key={product.id}
            className="list-group-item justify-content-between align-items-center"
          >
            <div className="mb-2">
              <h6 className="my-0">{product.title}</h6>
              <small className="text-muted">{product.description}</small>
            </div>
            <div className="d-flex justify-content-between align-items-center position-relative">
              <span className="text-muted flex-grow-1">
                {currencyFormatter(product.price)}
              </span>
              <div className="d-flex m-auto items-controller">
                <button
                  className="btn btn-outline-secondary"
                  onClick={(e) => handleDeleteItem(e, product.id)}
                >
                  -
                </button>
                <span className="mx-1">{product.count}</span>
                <button
                  className="btn btn-outline-primary"
                  onClick={(e) => handleAddItem(e, product.id)}
                >
                  +
                </button>
              </div>
              <span className="text-muted text-end flex-grow-1">
                {currencyFormatter(product.price * items[product.id])}
              </span>
            </div>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>{currencyFormatter(total)}</strong>
        </li>
      </ul>
    </>
  );
};

export default OrderSummary;
