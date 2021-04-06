import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

function ProductDetail({ categories, product, onSave, onChange,errors }) {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}

      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      ></TextInput>

      <TextInput
        name="unitInStock"
        label="Unit In Stock"
        value={product.unitInStock}
        onChange={onChange}
        error={errors.unitInStock}
      ></TextInput>

      <button type="submit" className="btn btn-success">
        KAYDET
      </button>
    </form>
  );
}

export default ProductDetail;
