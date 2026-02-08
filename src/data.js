export const itinerary = [
  {
    date: '3/21',
    day: '六',
    title: '啟程：台灣飛往杜拜',
    transport: '搭乘國際航班由桃園機場 (TPE) 前往杜拜 (DXB)。抵達後搭乘機場地鐵或計程車前往市中心。',
    activities: [
      {
        time: '晚上',
        location: '哈里發塔 & 杜拜噴泉',
        desc: '在世界第一高樓下欣賞壯觀的音樂噴泉，或登頂俯瞰沙漠中的璀璨夜景。',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        lat: 25.1972,
        lng: 55.2744
      }
    ],
    dining: [
      { name: 'Time Out Market Dubai', type: '美食廣場', desc: '集合杜拜頂尖廚師的料理，選擇多樣且氛圍熱鬧。', lat: 25.1953, lng: 55.2789 },
      { name: 'Thiptara', type: '泰式料理', desc: '位於噴泉第一排，是一場味覺與視覺的極致饗宴。', lat: 25.1942, lng: 55.2754 },
      { name: 'Logma', type: '現代阿聯酋料理', desc: '適合初試阿拉伯風味，環境時尚。', lat: 25.196, lng: 55.279 }
    ]
  },
  {
    date: '3/22',
    day: '日',
    title: '舊城魅力與沙漠驚喜',
    transport: '早上使用 Abra 傳統木船橫渡杜拜河，下午由沙漠衝沙接駁車接送。',
    activities: [
      {
        time: '上午',
        location: '黃金市場與香料市場',
        desc: '穿梭在古老的巷弄中，感受濃郁的香料氣息與耀眼的黃金裝飾。',
        image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?auto=format&fit=crop&w=800&q=80',
        lat: 25.2733,
        lng: 55.2952
      },
      {
        time: '下午',
        location: '沙漠衝沙冒險',
        desc: '在紅沙丘中體驗速度感，晚上在營地享受肚皮舞表演與星空晚餐。',
        image: 'https://images.unsplash.com/photo-1452022582947-af3a14542586?auto=format&fit=crop&w=800&q=80',
        lat: 24.8472,
        lng: 55.6023
      }
    ],
    dining: [
      { name: 'Arabian Tea House', type: '傳統早午餐', desc: '這是一座被綠意包圍的綠洲建築，必點傳統阿拉伯托盤。', lat: 25.2635, lng: 55.3003 },
      { name: 'Al Fanar Seafood Market', type: '海鮮料理', desc: '體驗 1960 年代的杜拜氣氛，品嚐新鮮的阿拉伯海味。', lat: 25.2281, lng: 55.3527 }
    ]
  },
  {
    date: '3/23',
    day: '一',
    title: '未來感建築與棕櫚島',
    transport: '搭乘杜拜單軌電車 (Monorail) 前往棕櫚島，或租車自駕。',
    activities: [
      {
        time: '上午',
        location: '未來博物館 (Museum of the Future)',
        desc: '參觀這座被譽為「地球上最美建築」的環形地標，探索 2071 年的科技願景。',
        image: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?auto=format&fit=crop&w=800&q=80',
        lat: 25.2191,
        lng: 55.2819
      },
      {
        time: '下午',
        location: '朱美拉棕櫚島與亞特蘭提斯',
        desc: '在人造奇蹟島嶼上漫步，觀看氣勢磅礡的亞特蘭提斯飯店。',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        lat: 25.131,
        lng: 55.1182
      }
    ],
    dining: [
      { name: 'Ossiano', type: '水下餐廳', desc: '與成千上萬的海洋生物共餐，極致奢華的浪漫。', lat: 25.1305, lng: 55.1171 },
      { name: 'Dinner in the Sky', type: '景觀餐廳', desc: '在 50 公尺的高空用餐，俯瞰整個棕櫚島。', lat: 25.0924, lng: 55.1472 }
    ]
  },
  {
    date: '3/24',
    day: '二',
    title: '杜拜最後巡禮 -> 布達佩斯',
    transport: '前往杜拜國際機場 (DXB) 搭乘航班飛往布達佩斯 (BUD)。',
    activities: [
      {
        time: '上午',
        location: '杜拜奇蹟花園',
        desc: '漫步在由 1.5 億朵鮮花組成的各式巨型裝置中，色彩繽紛。',
        image: 'https://images.unsplash.com/photo-1582650843446-c2830f3a4647?auto=format&fit=crop&w=800&q=80',
        lat: 25.0597,
        lng: 55.2445
      }
    ],
    dining: [
      { name: 'Eggspectation', type: '海灘早午餐', desc: '位於 JBR 海灘旁，是當地非常受歡迎的慢活早餐點。', lat: 25.0772, lng: 55.1301 }
    ]
  },
  {
    date: '3/25',
    day: '三',
    title: '抵達與復活節市集',
    transport: '搭乘 100E 機場巴士直達市中心 Deák Ferenc tér，步行至飯店。',
    activities: [
      {
        time: '傍晚',
        location: 'Vörösmarty Square 復活節市集',
        desc: '在初春微涼的空氣中喝一杯熱紅酒，感受節慶氣氛。',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80',
        lat: 47.4967,
        lng: 19.0504
      }
    ],
    dining: [
      { name: 'Comme Chez Soi', type: '義式料理', desc: '雙人首選！鵝肝與義大利麵極受好評，氣氛溫馨浪漫。', lat: 47.4957, lng: 19.0515 },
      { name: 'Gerbeaud Café', type: '百年咖啡館', desc: '適合雙人下午茶，在華麗的皇室裝潢中品嚐經典甜點。', lat: 47.4969, lng: 19.0503 },
      { name: 'Onyx Restaurant', type: '精緻法料', desc: '若想安排一場正式的雙人晚餐，這裡提供頂級的米其林體驗。', lat: 47.4968, lng: 19.0502 }
    ]
  },
  {
    date: '3/26',
    day: '四',
    title: '布達城堡區深度遊',
    transport: '從 Deák Ferenc tér 搭乘 16 號「小城堡巴士」直達山頂。',
    activities: [
      {
        time: '上午',
        location: '馬提亞斯教堂 & 漁人堡',
        desc: '漫步在純白建築中，這裡是拍雙人合照的最佳景點。',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
        lat: 47.5022,
        lng: 19.0348
      },
      {
        time: '晚上',
        location: '多瑙河夕陽遊船',
        desc: '預約晚間航次，在燈火通明的國會大廈前對飲，極致浪漫。',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
        lat: 47.4979,
        lng: 19.0494
      }
    ],
    dining: [
      { name: 'Ruszwurm Cukrászda', type: '傳統甜點', desc: '全城最古老，位子不多但極具歷史感，推薦奶油蛋糕。', lat: 47.5015, lng: 19.0335 },
      { name: '21 Hungarian Kitchen', type: '現代匈式', desc: '專為在地人設計的創意菜，兩個人可以多點幾道分享。', lat: 47.5025, lng: 19.0322 },
      { name: 'Baltazár Grill', type: '炭烤酒吧', desc: '氣氛輕鬆、酒單豐富，適合結束城堡行程後的小酌晚餐。', lat: 47.5034, lng: 19.0305 }
    ]
  },
  {
    date: '3/27',
    day: '五',
    title: '當代藝術與廢墟酒吧',
    transport: '搭乘世界最美電車 Tram 2 沿河前往博物館；晚上步行至猶太區。',
    activities: [
      {
        time: '上午',
        location: 'Ludwig Museum (路德維希博物館)',
        desc: '參觀台灣當代藝術展，享受知性的藝術早晨。',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80',
        lat: 47.4705,
        lng: 19.0708,
        note: '展覽至 3/29 止。'
      },
      {
        time: '晚上',
        location: 'Szimpla Kert 廢墟酒吧',
        desc: '感受布達佩斯獨特的夜生活，探訪迷幻的內部裝飾。',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
        lat: 47.4968,
        lng: 19.0631
      }
    ],
    dining: [
      { name: 'Mazel Tov', type: '中東餐酒館', desc: '猶太區最熱門的雙人約會餐廳，森林系中庭非常漂亮。', lat: 47.5005, lng: 19.0664 },
      { name: 'Két Szerecsen', type: '復古小酒館', desc: '充滿巴黎咖啡館氣息，推薦給喜歡細緻慢餐的伴侶。', lat: 47.5036, lng: 19.0592 },
      { name: 'Bors Gastro Bar', type: '創意街頭美食', desc: '沒時間坐下吃飯的好選擇，創意濃湯風味獨特。', lat: 47.497, lng: 19.063 }
    ]
  },
  {
    date: '3/28',
    day: '六',
    title: '移動至音樂之都維也納',
    transport: '搭乘 Railjet 高鐵 (2.5hr)。市區內使用地鐵 U1/U3 非常便利。',
    activities: [
      {
        time: '下午',
        location: '聖史蒂芬大教堂',
        desc: '維也納的心臟，彩色屋頂與歌德式高塔令人驚嘆。',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80',
        lat: 48.2084,
        lng: 16.3731
      }
    ],
    dining: [
      { name: 'Cafe Sacher', type: '皇室咖啡館', desc: '經典中的經典，為對方切一份薩赫蛋糕是維也納的必經儀式。', lat: 48.2039, lng: 16.3697 },
      { name: 'Figlmüller', type: '奧地利料理', desc: '比臉大的豬排！兩人分食一份剛剛好，需提前數週預約。', lat: 48.2091, lng: 16.3742 },
      { name: 'Café Central', type: '文學咖啡館', desc: '在世界最美咖啡館之一，享受音樂與精緻甜點。', lat: 48.2104, lng: 16.3654 }
    ]
  },
  {
    date: '3/29',
    day: '日',
    title: '哈布斯堡的輝煌',
    transport: '搭乘 U4 綠線直達 Schönbrunn 站。',
    activities: [
      {
        time: '上午',
        location: '熊布朗宮 (Schönbrunn Palace)',
        desc: '漫步在廣闊的皇家花園與凱旋門，俯瞰整座維也納城。',
        image: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=800&q=80',
        lat: 48.1848,
        lng: 16.3122
      }
    ],
    dining: [
      { name: 'Brandauers Schlossbräu', type: '釀酒餐廳', desc: '就在宮殿區旁，氣氛豪邁熱鬧，適合大口吃肉喝啤酒。', lat: 48.1878, lng: 16.3015 },
      { name: 'Meierei im Stadtpark', type: '景觀餐廳', desc: '位於市立公園內，落地窗景極美，深受女性旅伴喜愛。', lat: 48.2037, lng: 16.3803 },
      { name: 'Café Residenz', type: '宮廷咖啡', desc: '看一場傳統蘋果捲製作秀，暖暖的甜點最適合初春。', lat: 48.1865, lng: 16.3128 }
    ]
  },
  {
    date: '3/30',
    day: '一',
    title: '名畫、咖啡與市場',
    transport: '搭乘 Tram D 電車前往美景宮；搭 U4 前往納許市場。',
    activities: [
      {
        time: '上午',
        location: '美景宮 (Belvedere) - 《吻》',
        desc: '親眼見證克林姆的名作，金色的浪漫氛圍最適合兩人同行。',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
        lat: 48.1915,
        lng: 16.3808
      },
      {
        time: '下午',
        location: '納許市場 (Naschmarkt)',
        desc: '體驗維也納人的在地生活，購買起司、乾果或特色紀念品。',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80',
        lat: 48.1979,
        lng: 16.3614
      }
    ],
    dining: [
      { name: 'Neni am Naschmarkt', type: '現代地中海', desc: '市場內最有活力的餐廳，料理充滿色彩，氣氛極佳。', lat: 48.1985, lng: 16.3605 },
      { name: 'Salm Bräu', type: '豬肋排餐廳', desc: '美景宮旁必吃！自釀啤酒與烤肋排是兩人的飽足首選。', lat: 48.1952, lng: 16.3814 },
      { name: 'Wratschko', type: '傳統餐酒館', desc: '非常低調但道地的老店，能體驗最純粹的維也納家常味。', lat: 48.2045, lng: 16.3532 }
    ]
  },
  {
    date: '3/31',
    day: '二',
    title: '返回布達佩斯',
    transport: '從 Wien Hbf 搭火車回 Budapest-Keleti。市區搭 Metro M4 到蓋勒特山。',
    activities: [
      {
        time: '下午',
        location: '蓋勒特山 (Gellért Hill) 夕陽',
        desc: '爬一小段山路，收獲整個多瑙河兩岸的絕美全景。',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
        lat: 47.4867,
        lng: 19.0483
      }
    ],
    dining: [
      { name: 'Menza', type: '復古創意菜', desc: '時尚且價格合理，是在地年輕人的約會聖地。', lat: 47.5034, lng: 19.0612 },
      { name: 'Borkonyha', type: '米其林餐酒', desc: '如果回程想慶祝，這家的葡萄酒單絕對能讓你們驚艷。', lat: 47.5002, lng: 19.053 },
      { name: 'Zeller Bistro', type: '地產酒館', desc: '像在家一樣放鬆，充滿手繪元素的裝潢非常可愛。', lat: 47.502, lng: 19.054 }
    ]
  },
  {
    date: '4/01',
    day: '三',
    title: '伴手禮與極致放鬆',
    transport: '搭乘路面電車 M1 歷史線前往國會大廈與溫泉區。',
    activities: [
      {
        time: '上午',
        location: '中央市場 (Great Market Hall)',
        desc: '採買貴腐酒與鵝肝醬，這裡是建築迷必訪的鐵道風格市場。',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80',
        lat: 47.4871,
        lng: 19.0585
      },
      {
        time: '下午',
        location: '匈牙利國會大廈',
        desc: '全世界最美建築之一，內部的金碧輝煌一定要進去參觀。',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
        lat: 47.5071,
        lng: 19.0456,
        note: '需事先預約導覽。'
      }
    ],
    dining: [
      { name: 'New York Café', type: '宮殿咖啡館', desc: '此生必去！建議下午茶時段來，在金箔與水晶燈下度過最後時光。', lat: 47.5002, lng: 19.0706 },
      { name: 'Gundel Restaurant', type: '匈牙利傳奇', desc: '極具儀式感的老字號餐廳，緊鄰塞切尼溫泉與英雄廣場。', lat: 47.5173, lng: 19.0788 },
      { name: 'Párisi Passage', type: '華麗餐廳', desc: '在絕美挑高的拱廊下用餐，氛圍神祕且高級。', lat: 47.4932, lng: 19.0548 }
    ]
  },
  {
    date: '4/02',
    day: '四',
    title: '賦歸',
    transport: '在市中心 Deák Ferenc tér 搭乘 100E 巴士直達機場 (40 min)。',
    activities: [
      {
        time: '早上',
        location: '多瑙河畔慢步早午餐',
        desc: '為旅程劃下完美句點，靜靜欣賞最後一眼多瑙河。',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
        lat: 47.495,
        lng: 19.05
      }
    ],
    dining: [
      { name: 'Deryne Bisztro', type: '布達精緻早午餐', desc: '深受本地上流階層喜愛，音樂、香檳、美味的兩人大餐。', lat: 47.4975, lng: 19.0285 },
      { name: 'Szimply', type: '現代創意早餐', desc: '網美級的擺盤與健康食材，隱身在庭院小徑中。', lat: 47.4945, lng: 19.0535 },
      { name: 'Anyam Dobolta', type: '溫馨手工早餐', desc: '像鄰家媽媽親手做的麵包與果醬，純樸而感動。', lat: 47.494, lng: 19.041 }
    ]
  }
];
