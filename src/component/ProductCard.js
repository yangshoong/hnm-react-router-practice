import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail=() => {
    navigate(`/product/${item.id}`)

  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt="" width="100%" className="product-image" />
      <div>
        <span className="product-choice">{item?.choice === true ? "Conscious Choice" : ""}</span>
        <span className="product-new">{item?.new === true ? "New" : ""}</span>
      </div>
      <div className="product-title">{item?.title}</div>
      <div className="product-price">{item?.price.toLocaleString('ko-KR')} 원</div>

    </div>
  )
}

export default ProductCard
