import React from "react";
import MenuItem from "../MenuItem";
import "./index.scss";

import AAA from "../../../imgs/AAA.jpg";
import BBB from "../../../imgs/BBB.jpg";
import CCC from "../../../imgs/CCC.jpg";
import DDD from "../../../imgs/DDD.jpg";
import EEE from "../../../imgs/EEE.jpg";

interface Section {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
}
interface DirectoryState {
  sections: Section[];
}
class Directory extends React.Component<{}, DirectoryState> {
  state: DirectoryState = {
    sections: [
      {
        title: "AAA",
        imageUrl: AAA,
        id: 1,
        linkUrl: "shop/AAA"
      },
      {
        title: "BBB",
        imageUrl: BBB,
        id: 2,
        linkUrl: "shop/BBB"
      },
      {
        title: "CCC",
        imageUrl: CCC,
        id: 3,
        linkUrl: "shop/CCC"
      },
      {
        title: "DDD",
        imageUrl: DDD,
        id: 4,
        size: "large",
        linkUrl: "shop/DDD"
      },
      {
        title: "EEE",
        imageUrl: EEE,
        id: 5,
        size: "large",
        linkUrl: "shop/EEE"
      }
    ]
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
