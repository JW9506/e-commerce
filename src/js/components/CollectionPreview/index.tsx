import React from "react";
import CollectionItem from "../CollectionItem";
import { Item } from "$redux/cart/reducer";
import "./index.scss";

interface CollectionPreviewProps {
  title: string;
  items: Item[];
}
const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items
}) => {
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
