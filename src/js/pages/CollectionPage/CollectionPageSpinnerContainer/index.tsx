import WithSpinner from "../../../components/WithSpinner";
import { connect, MapStateToProps } from "react-redux";
import CollectionPage from "..";
import { RootState } from "$redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "$redux/shop/selector";

interface MapStateProps {
  isLoading: boolean;
}
const mapStateToProps: MapStateToProps<
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(WithSpinner(CollectionPage));
