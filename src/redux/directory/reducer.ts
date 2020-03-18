import { DirectoryAction } from "./action";
import { DeepReadonly } from "utility-types";

export type DirectorySection = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
};
export type DirectoryState = DeepReadonly<{
  sections: DirectorySection[];
}>;

const INITIAL_STATE: DirectoryState = {
  sections: [
    {
      title: "AAA",
      imageUrl: "https://i.ibb.co/NsQF0b4/AAA.jpg",
      id: 1,
      linkUrl: "shop/AAA"
    },
    {
      title: "BBB",
      imageUrl: "https://i.ibb.co/T8kWYbx/BBB.jpg",
      id: 2,
      linkUrl: "shop/BBB"
    },
    {
      title: "CCC",
      imageUrl: "https://i.ibb.co/0Dq6xn9/CCC.jpg",
      id: 3,
      linkUrl: "shop/CCC"
    },
    {
      title: "DDD",
      imageUrl: "https://i.ibb.co/wcnmQdr/DDD.jpg",
      id: 4,
      size: "large",
      linkUrl: "shop/DDD"
    },
    {
      title: "EEE",
      imageUrl: "https://i.ibb.co/87J3Z3h/EEE.jpg",
      id: 5,
      size: "large",
      linkUrl: "shop/EEE"
    }
  ]
};

export default (state = INITIAL_STATE, action: DirectoryAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
