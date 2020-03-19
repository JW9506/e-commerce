import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem";
import "./index.scss";
import { RootState } from "$redux";
import { selectDirectorySections, selectDirectorySectionsShape } from "$redux/directory/selector";

interface MapStateProps {
  sections: selectDirectorySectionsShape;
}
type DirectoryProps = MapStateProps;
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
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
