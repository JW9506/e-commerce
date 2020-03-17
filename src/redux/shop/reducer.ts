import AAA001 from "../../imgs/AAA001.jpg";
import AAA002 from "../../imgs/AAA002.jpg";
import AAA003 from "../../imgs/AAA003.jpg";
import AAA004 from "../../imgs/AAA004.jpg";
import AAA005 from "../../imgs/AAA005.jpg";
import AAA006 from "../../imgs/AAA006.jpg";
import AAA007 from "../../imgs/AAA007.jpg";
import AAA008 from "../../imgs/AAA008.jpg";
import AAA009 from "../../imgs/AAA009.jpg";
import BBB001 from "../../imgs/BBB001.jpg";
import BBB002 from "../../imgs/BBB002.jpg";
import BBB003 from "../../imgs/BBB003.jpg";
import BBB004 from "../../imgs/BBB004.jpg";
import BBB005 from "../../imgs/BBB005.jpg";
import BBB006 from "../../imgs/BBB006.jpg";
import BBB007 from "../../imgs/BBB007.jpg";
import BBB008 from "../../imgs/BBB008.jpg";
import CCC001 from "../../imgs/CCC001.jpg";
import CCC002 from "../../imgs/CCC002.jpg";
import CCC003 from "../../imgs/CCC003.jpg";
import CCC004 from "../../imgs/CCC004.jpg";
import CCC005 from "../../imgs/CCC005.jpg";
import DDD001 from "../../imgs/DDD001.jpg";
import DDD002 from "../../imgs/DDD002.jpg";
import DDD003 from "../../imgs/DDD003.jpg";
import DDD004 from "../../imgs/DDD004.jpg";
import DDD005 from "../../imgs/DDD005.jpg";
import DDD006 from "../../imgs/DDD006.jpg";
import DDD007 from "../../imgs/DDD007.jpg";
import EEE001 from "../../imgs/EEE001.jpg";
import EEE002 from "../../imgs/EEE002.jpg";
import EEE003 from "../../imgs/EEE003.jpg";
import EEE004 from "../../imgs/EEE004.jpg";
import EEE005 from "../../imgs/EEE005.jpg";
import EEE006 from "../../imgs/EEE006.jpg";

import { Item } from "../cart/reducer";
interface ShopCategory {
  id: number;
  title: string;
  routeName: string;
  items: Item[]
}
export interface ShopState {
  collections: ShopCategory[];
}
const INITIAL_STATE: ShopState = {
  collections: [
    {
      id: 1,
      title: "AAA",
      routeName: "AAA",
      items: [
        {
          id: 1,
          name: "AAA001",
          imageUrl: AAA001,
          price: 25
        },
        {
          id: 2,
          name: "AAA002",
          imageUrl: AAA002,
          price: 18
        },
        {
          id: 3,
          name: "AAA003",
          imageUrl: AAA003,
          price: 35
        },
        {
          id: 4,
          name: "AAA004",
          imageUrl: AAA004,
          price: 25
        },
        {
          id: 5,
          name: "AAA005",
          imageUrl: AAA005,
          price: 18
        },
        {
          id: 6,
          name: "AAA006",
          imageUrl: AAA006,
          price: 14
        },
        {
          id: 7,
          name: "AAA007",
          imageUrl: AAA007,
          price: 18
        },
        {
          id: 8,
          name: "AAA008",
          imageUrl: AAA008,
          price: 14
        },
        {
          id: 9,
          name: "AAA009",
          imageUrl: AAA009,
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: "BBB",
      routeName: "BBB",
      items: [
        {
          id: 10,
          name: "BBB001",
          imageUrl: BBB001,
          price: 220
        },
        {
          id: 11,
          name: "BBB002",
          imageUrl: BBB002,
          price: 280
        },
        {
          id: 12,
          name: "BBB003",
          imageUrl: BBB003,
          price: 110
        },
        {
          id: 13,
          name: "BBB004",
          imageUrl: BBB004,
          price: 160
        },
        {
          id: 14,
          name: "BBB005",
          imageUrl: BBB005,
          price: 160
        },
        {
          id: 15,
          name: "BBB006",
          imageUrl: BBB006,
          price: 160
        },
        {
          id: 16,
          name: "BBB007",
          imageUrl: BBB007,
          price: 190
        },
        {
          id: 17,
          name: "BBB008",
          imageUrl: BBB008,
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: "CCC",
      routeName: "CCC",
      items: [
        {
          id: 18,
          name: "CCC001",
          imageUrl: CCC001,
          price: 125
        },
        {
          id: 19,
          name: "CCC002",
          imageUrl: CCC002,
          price: 90
        },
        {
          id: 20,
          name: "CCC003",
          imageUrl: CCC003,
          price: 90
        },
        {
          id: 21,
          name: "CCC004",
          imageUrl: CCC004,
          price: 165
        },
        {
          id: 22,
          name: "CCC005",
          imageUrl: CCC005,
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: "DDD",
      routeName: "DDD",
      items: [
        {
          id: 23,
          name: "DDD001",
          imageUrl: DDD001,
          price: 25
        },
        {
          id: 24,
          name: "DDD002",
          imageUrl: DDD002,
          price: 20
        },
        {
          id: 25,
          name: "DDD003",
          imageUrl: DDD003,
          price: 80
        },
        {
          id: 26,
          name: "DDD004",
          imageUrl: DDD004,
          price: 80
        },
        {
          id: 27,
          name: "DDD005",
          imageUrl: DDD005,
          price: 45
        },
        {
          id: 28,
          name: "DDD006",
          imageUrl: DDD006,
          price: 135
        },
        {
          id: 29,
          name: "DDD007",
          imageUrl: DDD007,
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: "EEE",
      routeName: "EEE",
      items: [
        {
          id: 30,
          name: "EEE001",
          imageUrl: EEE001,
          price: 325
        },
        {
          id: 31,
          name: "EEE002",
          imageUrl: EEE002,
          price: 20
        },
        {
          id: 32,
          name: "EEE003",
          imageUrl: EEE003,
          price: 25
        },
        {
          id: 33,
          name: "EEE004",
          imageUrl: EEE004,
          price: 25
        },
        {
          id: 34,
          name: "EEE005",
          imageUrl: EEE005,
          price: 40
        },
        {
          id: 35,
          name: "EEE006",
          imageUrl: EEE006,
          price: 25
        }
      ]
    }
  ]
};

export default (state = INITIAL_STATE, action: { type: string } ) => {
  switch (action.type) {
    default:
      return state;
  }
};
