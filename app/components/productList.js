import ProductShow from "./productShow";

function ProductList({ dataList }) {
  const renderProduct = dataList.map((dataProduct) => {
    return (
      <div className="flex    ">
        <ProductShow key={dataProduct.id} data={dataProduct} />
      </div>
    );
  });
  return <div className="flex justify-center  m-8">{renderProduct}</div>;
}
export default ProductList;
