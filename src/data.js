export const itinerary = [
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
