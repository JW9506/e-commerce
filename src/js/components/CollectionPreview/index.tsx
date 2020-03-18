import React from "react";
import CollectionItem from "../CollectionItem";
import "./index.scss";
import { ShopCategoryShape } from "$redux/shop/reducer";
import { DeepReadonly } from "utility-types";

interface CollectionPreviewProps {
  collection: DeepReadonly<ShopCategoryShape>;
}
const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  collection
}) => {
  const { title, items } = collection;
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
