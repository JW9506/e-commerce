import { ShopAction } from "./action";
import { DeepReadonly } from "utility-types";

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface ShopCategoryShape {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}
export type ShopCategory = { [title: string]: ShopCategoryShape };
export type ShopState = DeepReadonly<{
  collections: ShopCategory;
  isFetching: boolean;
  errorMessage?: string;
}>;
const INITIAL_STATE: ShopState = {
  collections: {},
  isFetching: false,
};

export default (state = INITIAL_STATE, action: ShopAction): ShopState => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_COLLECTIONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case "FETCH_COLLECTIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
