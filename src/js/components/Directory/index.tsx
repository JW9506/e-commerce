import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { DirectorySection } from "$redux/directory/reducer";
import MenuItem from "../MenuItem";
import "./index.scss";
import { RootState } from "$redux";
import { selectDirectorySections } from "$redux/directory/selector";

interface MapState {
  sections: DirectorySection[];
}
type DirectoryProps = MapState;
const Directory: React.FC<DirectoryProps> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  MapState,
  {},
  RootState
> = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
