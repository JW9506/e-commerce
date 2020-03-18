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
}>;
const INITIAL_STATE: ShopState = {
  collections: {}
};

export default (state = INITIAL_STATE, action: ShopAction): ShopState => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS":
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
