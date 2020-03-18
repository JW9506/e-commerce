import { Item } from "../cart/reducer";
interface ShopCategory {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}
export interface ShopState {
  collections: { [title: string]: ShopCategory };
}
const INITIAL_STATE: ShopState = {
  collections: {
    AAA: {
      id: 1,
      title: "AAA",
      routeName: "AAA",
      items: [
        {
          id: 1,
          name: "AAA001",
          imageUrl: "https://i.ibb.co/1nKWgSr/AAA001.jpg",
          price: 25
        },
        {
          id: 2,
          name: "AAA002",
          imageUrl: "https://i.ibb.co/vPZJgc2/AAA002.jpg",
          price: 18
        },
        {
          id: 3,
          name: "AAA003",
          imageUrl: "https://i.ibb.co/y6DdV4h/AAA003.jpg",
          price: 35
        },
        {
          id: 4,
          name: "AAA004",
          imageUrl: "https://i.ibb.co/zsb6pCf/AAA004.jpg",
          price: 25
        },
        {
          id: 5,
          name: "AAA005",
          imageUrl: "https://i.ibb.co/zPXvWrC/AAA005.jpg",
          price: 18
        },
        {
          id: 6,
          name: "AAA006",
          imageUrl: "https://i.ibb.co/PW7v8cK/AAA006.jpg",
          price: 14
        },
        {
          id: 7,
          name: "AAA007",
          imageUrl: "https://i.ibb.co/0Z6psK3/AAA007.jpg",
          price: 18
        },
        {
          id: 8,
          name: "AAA008",
          imageUrl: "https://i.ibb.co/cvnxb6q/AAA008.jpg",
          price: 14
        },
        {
          id: 9,
          name: "AAA009",
          imageUrl: "https://i.ibb.co/g6hQN25/AAA009.jpg",
          price: 16
        }
      ]
    },
    BBB: {
      id: 2,
      title: "BBB",
      routeName: "BBB",
      items: [
        {
          id: 10,
          name: "BBB001",
          imageUrl: "https://i.ibb.co/Sswvn1j/BBB001.jpg",
          price: 220
        },
        {
          id: 11,
          name: "BBB002",
          imageUrl: "https://i.ibb.co/YQMkpCC/BBB002.jpg",
          price: 280
        },
        {
          id: 12,
          name: "BBB003",
          imageUrl: "https://i.ibb.co/Jn4zZFm/BBB003.jpg",
          price: 110
        },
        {
          id: 13,
          name: "BBB004",
          imageUrl: "https://i.ibb.co/23SNndj/BBB004.jpg",
          price: 160
        },
        {
          id: 14,
          name: "BBB005",
          imageUrl: "https://i.ibb.co/3vhz6s7/BBB005.jpg",
          price: 160
        },
        {
          id: 15,
          name: "BBB006",
          imageUrl: "https://i.ibb.co/56nsyYj/BBB006.jpg",
          price: 160
        },
        {
          id: 16,
          name: "BBB007",
          imageUrl: "https://i.ibb.co/L1cGwtr/BBB007.jpg",
          price: 190
        },
        {
          id: 17,
          name: "BBB008",
          imageUrl: "https://i.ibb.co/XLKfM6B/BBB008.jpg",
          price: 200
        }
      ]
    },
    CCC: {
      id: 3,
      title: "CCC",
      routeName: "CCC",
      items: [
        {
          id: 18,
          name: "CCC001",
          imageUrl: "https://i.ibb.co/zsLNrTR/CCC001.jpg" ,
          price: 125
        },
        {
          id: 19,
          name: "CCC002",
          imageUrl: "https://i.ibb.co/Jx9P1mX/CCC002.jpg",
          price: 90
        },
        {
          id: 20,
          name: "CCC003",
          imageUrl: "https://i.ibb.co/KLB1zxd/CCC003.jpg",
          price: 90
        },
        {
          id: 21,
          name: "CCC004",
          imageUrl: "https://i.ibb.co/bdxsRZ6/CCC004.jpg",
          price: 165
        },
        {
          id: 22,
          name: "CCC005",
          imageUrl: "https://i.ibb.co/J38FKk9/CCC005.jpg",
          price: 185
        }
      ]
    },
    DDD: {
      id: 4,
      title: "DDD",
      routeName: "DDD",
      items: [
        {
          id: 23,
          name: "DDD001",
          imageUrl: "https://i.ibb.co/bRSfVxr/DDD001.jpg" ,
          price: 25
        },
        {
          id: 24,
          name: "DDD002",
          imageUrl: "https://i.ibb.co/TBr1djB/DDD002.jpg",
          price: 20
        },
        {
          id: 25,
          name: "DDD003",
          imageUrl: "https://i.ibb.co/gvgDD4Y/DDD003.jpg",
          price: 80
        },
        {
          id: 26,
          name: "DDD004",
          imageUrl: "https://i.ibb.co/jhNWcLg/DDD004.jpg",
          price: 80
        },
        {
          id: 27,
          name: "DDD005",
          imageUrl: "https://i.ibb.co/xzc8SXX/DDD005.jpg",
          price: 45
        },
        {
          id: 28,
          name: "DDD006",
          imageUrl: "https://i.ibb.co/Lp3j8pL/DDD006.jpg",
          price: 135
        },
        {
          id: 29,
          name: "DDD007",
          imageUrl: "https://i.ibb.co/cDjPy0h/DDD007.jpg",
          price: 20
        }
      ]
    },
    EEE: {
      id: 5,
      title: "EEE",
      routeName: "EEE",
      items: [
        {
          id: 30,
          name: "EEE001",
          imageUrl: "https://i.ibb.co/SP2tP5v/EEE001.jpg",
          price: 325
        },
        {
          id: 31,
          name: "EEE002",
          imageUrl: "https://i.ibb.co/0CZ7fYQ/EEE002.jpg",
          price: 20
        },
        {
          id: 32,
          name: "EEE003",
          imageUrl: "https://i.ibb.co/x39p482/EEE003.jpg",
          price: 25
        },
        {
          id: 33,
          name: "EEE004",
          imageUrl: "https://i.ibb.co/9qJvVGf/EEE004.jpg",
          price: 25
        },
        {
          id: 34,
          name: "EEE005",
          imageUrl: "https://i.ibb.co/LkC7TWP/EEE005.jpg",
          price: 40
        },
        {
          id: 35,
          name: "EEE006",
          imageUrl: "https://i.ibb.co/QYMW9hb/EEE006.jpg",
          price: 25
        }
      ]
    }
  }
};

export default (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};
