import React from "react";
import homePageData from "../../../data/homePageData";
import MenuItem from "../MenuItem";
import "./index.scss";

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
    sections: homePageData as Section[]
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
