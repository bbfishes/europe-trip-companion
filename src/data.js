export const itinerary = [
  {
    date: '3/25',
    day: '三',
    title: '抵達與復活節市集',
    activities: [
      {
        time: '傍晚',
        location: 'Vörösmarty Square',
        desc: '復活節市集，在初春微涼的空氣中喝一杯熱紅酒。',
        lat: 47.4967,
        lng: 19.0504
      }
    ],
    dining: [
      { name: 'Gerbeaud Café', desc: '百年傳奇咖啡館，建築優美且具歷史氣息。', lat: 47.4969, lng: 19.0503 },
      { name: 'Comme Chez Soi', desc: '極受歡迎的義式餐廳，服務熱情、鵝肝料理驚艷。', lat: 47.4957, lng: 19.0515 },
      { name: 'Onyx Restaurant', desc: '米其林等級，適合想體驗匈牙利現代精緻料理的人。', lat: 47.4968, lng: 19.0502 }
    ]
  },
  {
    date: '3/26',
    day: '四',
    title: '布達城堡區深度遊',
    activities: [
      {
        time: '上午',
        location: '馬提亞斯教堂 & 漁人堡',
        desc: '參觀經典的哥德式教堂與俯瞰多瑙河的最佳視角。',
        lat: 47.5022,
        lng: 19.0348
      },
      {
        time: '下午',
        location: '布達城堡藝廊',
        desc: '造訪布達城堡內的藝廊。',
        lat: 47.4962,
        lng: 19.0396
      },
      {
        time: '晚上',
        location: '多瑙河遊船',
        desc: '歡迎自己來到匈牙利最經典的方式。',
        lat: 47.4979,
        lng: 19.0494
      }
    ],
    dining: [
      { name: 'Ruszwurm Cukrászda', desc: '布達佩斯最古老的甜點店，必點奶油蛋糕。', lat: 47.5015, lng: 19.0335 },
      { name: '21 Hungarian Kitchen', desc: '以現代手法詮釋傳統匈牙利菜，氛圍輕鬆。', lat: 47.5025, lng: 19.0322 },
      { name: 'Baltazár Grill', desc: '位於城堡區內，炭火烤肉和優質葡萄酒的絕佳選擇。', lat: 47.5034, lng: 19.0305 }
    ]
  },
  {
    date: '3/27',
    day: '五',
    title: '當代藝術與廢墟酒吧',
    activities: [
      {
        time: '上午',
        location: 'Ludwig Museum (路德維希博物館)',
        desc: '參觀 「Before the Storm - Taiwan on the Frontier」 展覽。',
        lat: 47.4705,
        lng: 19.0708,
        note: '展覽至 3/29 止，務必提前排入。'
      },
      {
        time: '晚上',
        location: 'Szimpla Kert',
        desc: '猶太區的廢墟酒吧，感受魔幻魅力。',
        lat: 47.4968,
        lng: 19.0631
      }
    ],
    dining: [
      { name: 'Mazel Tov', desc: '猶太區最美的中東風格餐廳，綠意盎然。', lat: 47.5005, lng: 19.0664 },
      { name: 'Két Szerecsen', desc: '復古咖啡館氛圍，早午餐與 tapas 皆出色。', lat: 47.5036, lng: 19.0592 },
      { name: 'Bors Gastro Bar', desc: '超人氣街頭美食，創意濃湯與熱壓三明治。', lat: 47.497, lng: 19.063 }
    ]
  },
  {
    date: '3/28',
    day: '六',
    title: '移動至音樂之都維也納',
    activities: [
      {
        time: '早上',
        location: 'Budapest-Keleti 車站',
        desc: '搭乘 Railjet 高鐵前往維也納 (車程約 2.5 小時)。',
        lat: 47.5005,
        lng: 19.0839,
        note: '建議加購座位預約。'
      },
      {
        time: '下午',
        location: '聖史蒂芬大教堂 & 克恩滕大街',
        desc: '散步、品嚐薩赫蛋糕 (Sacher Cake)。',
        lat: 48.2084,
        lng: 16.3731
      }
    ],
    dining: [
      { name: 'Figlmüller Bäckerstraße', desc: '以「維也納比臉大豬排」聞名，務必預約。', lat: 48.2091, lng: 16.3742 },
      { name: 'Plachutta Wollzeile', desc: '維也納水煮牛 (Tafelspitz) 的代名詞，傳統美味。', lat: 48.2085, lng: 16.3788 },
      { name: 'Café Central', desc: '世界名氣最高的咖啡館之一，曾是眾多名人的聚會地。', lat: 48.2104, lng: 16.3654 }
    ]
  },
  {
    date: '3/29',
    day: '日',
    title: '哈布斯堡的輝煌',
    activities: [
      {
        time: '全天',
        location: '熊布朗宮 (Schönbrunn Palace)',
        desc: '週日店家休息，但博物館與皇宮照常開放。',
        lat: 48.1848,
        lng: 16.3122,
        note: '週日超市不營業，急需可去維也納總站。'
      }
    ],
    dining: [
      { name: 'Brandauers Schlossbräu', desc: '就在皇宮附近，傳統奧式釀酒餐廳，份量十足。', lat: 48.1878, lng: 16.3015 },
      { name: 'Meierei im Stadtpark', desc: '精緻的奧地利菜餚，起司選擇極多且環境優美。', lat: 48.2037, lng: 16.3803 },
      { name: 'Café Residenz', desc: '皇宮內的咖啡廳，可以在此看傳統蘋果捲的製作秀。', lat: 48.1865, lng: 16.3128 }
    ]
  },
  {
    date: '3/30',
    day: '一',
    title: '名畫、咖啡與市場',
    activities: [
      {
        time: '上午',
        location: '美景宮 (Belvedere)',
        desc: '看克林姆的《吻》。',
        lat: 48.1915,
        lng: 16.3808
      },
      {
        time: '下午',
        location: '納許市場 (Naschmarkt)',
        desc: '體驗維也納人的菜籃文化。',
        lat: 48.1979,
        lng: 16.3614
      },
      {
        time: '晚上',
        location: '國家歌劇院',
        desc: '聽場演出，感受音樂之都氛圍。',
        lat: 48.203,
        lng: 16.3691
      }
    ],
    dining: [
      { name: 'Neni am Naschmarkt', desc: '市場內的人氣店，提供非常現代的地中海料理。', lat: 48.1985, lng: 16.3605 },
      { name: 'Salm Bräu', desc: '美景宮附近，推薦烤豬肋排與其自釀啤酒。', lat: 48.1952, lng: 16.3814 },
      { name: 'Gastwirtschaft Wratschko', desc: '非常有氛圍的當地小酒館，深受本地人喜愛。', lat: 48.2045, lng: 16.3532 }
    ]
  },
  {
    date: '3/31',
    day: '二',
    title: '返回布達佩斯',
    activities: [
      {
        time: '中午',
        location: '維也納火車總站',
        desc: '搭火車回到布達佩斯。入住靠近 Deák Ferenc tér 的飯店。',
        lat: 48.1851,
        lng: 16.3761
      },
      {
        time: '下午',
        location: '蓋勒特山 (Gellért Hill)',
        desc: '俯瞰夕陽下的多瑙河。',
        lat: 47.4867,
        lng: 19.0483
      }
    ],
    dining: [
      { name: 'Borkonyha Winekitchen', desc: '米其林一星，葡萄酒單極為豐富且水準極高。', lat: 47.5002, lng: 19.053 },
      { name: 'Menza', desc: '帶有復古感的現代餐廳，CP值極高的匈牙利菜。', lat: 47.5034, lng: 19.0612 },
      { name: 'Zeller Bistro', desc: '熱情友好的氣氛，主打匈牙利在地小農食材。', lat: 47.502, lng: 19.054 }
    ]
  },
  {
    date: '4/01',
    day: '三',
    title: '伴手禮與極致放鬆',
    activities: [
      {
        time: '上午',
        location: '中央市場 (Great Market Hall)',
        desc: '購買貴腐酒 (Tokaji)、紅椒粉、鵝肝醬等。',
        lat: 47.4871,
        lng: 19.0585
      },
      {
        time: '下午',
        location: '國會大廈',
        desc: '參觀國會大廈 (需先預約導覽)。',
        lat: 47.5071,
        lng: 19.0456
      },
      {
        time: '傍晚',
        location: '塞切尼溫泉 或 紐約咖啡館',
        desc: '作為旅程的華麗終點。',
        lat: 47.5181,
        lng: 19.0814
      }
    ],
    dining: [
      { name: 'Gundel Cafe Patisserie Restaurant', desc: '匈牙利傳奇級名店，塞切尼溫泉旁的優雅選擇。', lat: 47.5173, lng: 19.0788 },
      { name: 'New York Café', desc: '被譽為世界最美，華麗到令人屏息，適合下午茶。', lat: 47.5002, lng: 19.0706 },
      { name: 'Párisi Passage Café', desc: '在絕美拱廊下的午餐，視覺與味覺的雙重饗宴。', lat: 47.4932, lng: 19.0548 }
    ]
  },
  {
    date: '4/02',
    day: '四',
    title: '賦歸',
    activities: [
      {
        time: '早上',
        location: '多瑙河畔早午餐',
        desc: '享受一個慢步調的早晨。',
        lat: 47.495,
        lng: 19.05
      }
    ],
    dining: [
      { name: 'Deryne Bisztro', desc: '布達側的名店，氛圍優雅，早午餐的最佳選擇。', lat: 47.4975, lng: 19.0285 },
      { name: 'Anyam Dobolta', desc: '精緻的本地早餐店，溫馨且食物天然。', lat: 47.494, lng: 19.041 },
      { name: 'Szimply', desc: '隱身小巷中，創意十足的健康現代早午餐。', lat: 47.4945, lng: 19.0535 }
    ]
  }
];
