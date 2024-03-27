import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div>
      {/* <img src="https://lp2.hm.com/hmgoepprod?set=source[/9c/10/9c1074af1cd5a66c3545249655813166f9eebbc1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]" alt="" width={310} />
      <div>Conscious choice</div>
      <div>유틸리티 팬츠</div>
      <div>₩39,900</div>
      <div>신제품</div> */}
      <img src={item?.img} alt="" width={310} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
