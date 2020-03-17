import AAA from "../../imgs/AAA.jpg";
import BBB from "../../imgs/BBB.jpg";
import CCC from "../../imgs/CCC.jpg";
import DDD from "../../imgs/DDD.jpg";
import EEE from "../../imgs/EEE.jpg";

import { DirectoryAction } from "./action";

export type DirectorySection = Readonly<{
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
}>;
export interface DirectoryState {
  sections: DirectorySection[]
}

const INITIAL_STATE: DirectoryState = {
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

export default (state = INITIAL_STATE, action: DirectoryAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
