export const itinerary = [
  {
    date: '3/20',
    day: '五',
    title: '出發前夕：前往機場',
    transport: '預約機場接送從土城前往桃園國際機場 (TPE)。',
    activities: [
      { time: '20:50', location: '土城', desc: '機場接送車輛抵達，準備出發。', lat: 24.9723, lng: 121.4431 },
      { time: '21:40', location: '桃園機場 (TPE)', desc: '抵達桃園機場第二航廈，辦理登機與行李託運。', lat: 25.0797, lng: 121.2342 }
    ],
    dining: []
  },
  {
    date: '3/21',
    day: '六',
    title: '啟程與杜拜初探',
    transport: 'EK0387 (00:20 TPE -> 06:10 DXB)。抵達後搭乘機場計程車前往 Downtown。',
    activities: [
      { time: '00:20', location: '桃園機場 (TPE)', desc: '搭乘阿聯酋航空前往杜拜。', lat: 25.0797, lng: 121.2342 },
      { time: '06:10', location: '杜拜機場 (DXB)', desc: '抵達航廈 T3，辦理入境並提取行李。', lat: 25.2532, lng: 55.3657 },
      { time: '08:00', location: '飯店寄放行李', desc: '前往 Downtown 區域飯店寄放行李，稍作梳洗。', lat: 25.1972, lng: 55.2744 },
      { time: '10:00', location: '杜拜購物中心 (Dubai Mall)', desc: '漫步全球最大購物中心，參觀室內水族館外牆。', lat: 25.1974, lng: 55.2797 },
      { time: '14:00', location: '哈里發塔 (Burj Khalifa)', desc: '登頂 124+125 層，俯瞰沙漠與海洋交界的壯麗景觀。', lat: 25.1972, lng: 55.2744 },
      { time: '18:30', location: '杜拜噴泉 (Dubai Fountain)', desc: '欣賞每半小時一場的音樂噴泉表演。', lat: 25.1957, lng: 55.2764 }
    ],
    dining: [
      { name: 'Logma', type: '午餐建議', desc: '現代阿聯酋料理，推薦阿聯酋風味辣薯條與雞肉飯。', lat: 25.196, lng: 55.279 },
      { name: 'Thiptara', type: '晚餐建議', desc: '噴泉第一排泰式料理，氣氛極佳，適合慶祝抵達第一晚。', lat: 25.1942, lng: 55.2754 }
    ]
  },
  {
    date: '3/22',
    day: '日',
    title: '舊城河畔與沙漠奇緣',
    transport: '早上使用 Abra 傳統木船；下午 15:00 預約衝沙車隊接送。',
    activities: [
      { time: '09:00', location: '阿法迪歷史區 (Al Fahidi)', desc: '探索杜拜最古老的建築群，體驗風塔建築風格。', lat: 25.2635, lng: 55.3003 },
      { time: '10:30', location: '黃金與香料市場', desc: '搭乘 Abra (1 AED) 橫渡杜拜河，採購特色紀念品。', lat: 25.2733, lng: 55.2952 },
      { time: '15:00', location: '紅沙丘衝沙 (Desert Safari)', desc: '展開沙漠冒險，包含衝沙、騎駱駝及營地晚會。', lat: 24.8472, lng: 55.6023 }
    ],
    dining: [
      { name: 'Arabian Tea House', type: '早餐建議', desc: '超人氣傳統茶館，必點阿聯酋早餐拖盤與薄荷檸檬汁。', lat: 25.2635, lng: 55.3003 },
      { name: 'Safari Camp BBQ', type: '晚餐行程', desc: '沙漠營地內享受阿拉伯式燒烤自助餐與舞蹈表演。', lat: 24.8472, lng: 55.6023 }
    ]
  },
  {
    date: '3/23',
    day: '一',
    title: '未來科技與棕櫚奇蹟',
    transport: '搭乘地鐵前往未來博物館；下午前往 Monorail 棕櫚島單軌。',
    activities: [
      { time: '10:00', location: '未來博物館 (MOTF)', desc: '進入「地球上最美建築」，探索 50 年後的科技世界。', lat: 25.2191, lng: 55.2819 },
      { time: '14:30', location: '朱美拉棕櫚島 (The Palm)', desc: '搭乘單軌電車前往亞特蘭提斯飯店區域。', lat: 25.131, lng: 55.1182 },
      { time: '17:00', location: 'The View at The Palm', desc: '在 52 層樓高處觀看完整的棕櫚島全貌。', lat: 25.111, lng: 55.138 }
    ],
    dining: [
      { name: 'Dinner in the Sky', type: '午餐挑戰', desc: '在 50 公尺的高空用餐，俯瞰整個棕櫚島與 Marina。', lat: 25.0924, lng: 55.1472 },
      { name: 'Ossiano', type: '晚餐奢華', desc: '亞特蘭提斯飯店內的水下餐廳，與海洋生物共進晚餐。', lat: 25.1305, lng: 55.1171 }
    ]
  },
  {
    date: '3/24',
    day: '二',
    title: '杜拜離境 -> 布達佩斯',
    transport: 'EK0111 (10:05 DXB -> 13:05 BUD)。抵達後搭機場巴士 100E。',
    activities: [
      { time: '07:30', location: '杜拜機場 T3', desc: '預留時間辦理登機與免稅店巡禮。', lat: 25.2532, lng: 55.3657 },
      { time: '10:05', location: '阿聯酋航空 EK0111', desc: '飛往匈牙利布達佩斯。', lat: 25.2532, lng: 55.3657 },
      { time: '13:05', location: '布達佩斯機場 (BUD)', desc: '抵達航廈 2B，辦理入境。', lat: 47.4385, lng: 19.2523 },
      { time: '15:00', location: '飯店 Check-in', desc: '前往 Deák Ferenc tér 周邊飯店入住。', lat: 47.4979, lng: 19.0502 },
      { time: '17:00', location: '聖伊什特萬聖殿', desc: '參觀市中心地標教堂，並在周邊散步。', lat: 47.5009, lng: 19.054 },
      { time: '19:30', location: '多瑙河畔散步', desc: '欣賞對岸布達區的金色夜景。', lat: 47.495, lng: 19.049 }
    ],
    dining: [
      { name: 'Comme Chez Soi', type: '抵達晚餐', desc: '超熱門義式餐廳，推薦烤鵝肝，需事先預約。', lat: 47.4957, lng: 19.0515 },
      { name: 'Gellért Espresso', type: '下午茶建議', desc: '教堂旁歷史悠久的咖啡館。', lat: 47.5005, lng: 19.054 }
    ]
  },
  {
    date: '3/25',
    day: '三',
    title: '布達佩斯：復活節市集',
    transport: '步行或搭乘路面電車。',
    activities: [
      { time: '10:00', location: '瓦茨街 (Váci utca)', desc: '布達佩斯著名的步行購物街。', lat: 47.4935, lng: 19.0535 },
      { time: '14:00', location: 'Vörösmarty Square', desc: '造訪春季復活節市集，品嚐手工藝品與在地小吃。', lat: 47.4967, lng: 19.0504 },
      { time: '17:00', location: '時尚大道 (Fashion Street)', desc: '欣賞精緻的櫥窗設計與歐風街道。', lat: 47.4972, lng: 19.051 }
    ],
    dining: [
      { name: 'Gerbeaud Café', type: '下午茶重點', desc: '兩百年歷史名店，必嚐栗子蛋糕。', lat: 47.4969, lng: 19.0503 },
      { name: 'Onyx Restaurant', type: '晚餐奢華', desc: '米其林精緻料理，適合安排一場正式約會。', lat: 47.4968, lng: 19.0502 }
    ]
  },
  {
    date: '3/26',
    day: '四',
    title: '布達城堡區深度遊',
    transport: '搭乘 16 號巴士直達城堡區山頂。',
    activities: [
      { time: '09:30', location: '馬提亞斯教堂', desc: '參觀彩釉瓦頂的歌德式教堂。', lat: 47.5022, lng: 19.0348 },
      { time: '11:00', location: '漁人堡 (Fisherman\'s Bastion)', desc: '最佳拍照點，俯瞰整個佩斯區與國會大廈。', lat: 47.5022, lng: 19.0348 },
      { time: '14:30', location: '布達皇宮', desc: '參觀國家藝廊與歷史博物館。', lat: 47.4962, lng: 19.0396 },
      { time: '19:00', location: '多瑙河夕陽遊船', desc: '預約一小時航次，享受水上夜景。', lat: 47.4979, lng: 19.0494 }
    ],
    dining: [
      { name: 'Ruszwurm Cukrászda', type: '午茶點心', desc: '城堡區最古老咖啡館，奶油蛋糕與手沖咖啡。', lat: 47.5015, lng: 19.0335 },
      { name: '21 Hungarian Kitchen', type: '晚餐建議', desc: '現代風格的匈牙利家常料理。', lat: 47.5025, lng: 19.0322 }
    ]
  },
  {
    date: '3/27',
    day: '五',
    title: '當代藝術與廢墟酒吧',
    transport: 'Tram 2 電車沿河前往；晚上步行至猶太區。',
    activities: [
      { time: '10:30', location: '路德維希博物館 (Ludwig Museum)', desc: '參觀當代藝術展覽，包含台灣藝術家作品。', lat: 47.4705, lng: 19.0708 },
      { time: '15:00', location: '多瑙河畔之鞋', desc: '紀念歷史的裝置藝術，位於國會大廈旁河岸。', lat: 47.5039, lng: 19.0448 },
      { time: '21:00', location: 'Szimpla Kert 廢墟酒吧', desc: '全球知名廢墟酒吧，體驗布達佩斯獨特的夜生活。', lat: 47.4968, lng: 19.0631 }
    ],
    dining: [
      { name: 'Mazel Tov', type: '晚餐建議', desc: '中東餐酒館，室內充滿植栽，氛圍迷人。', lat: 47.5005, lng: 19.0664 },
      { name: 'Bors Gastro Bar', type: '快速午餐', desc: '超人氣長棍麵包三明治與創意濃湯。', lat: 47.497, lng: 19.063 }
    ]
  },
  {
    date: '3/28',
    day: '六',
    title: '布達佩斯 -> 維也納',
    transport: '搭乘 Railjet (約 2.5 小時)。維也納地鐵便捷。',
    activities: [
      { time: '09:00', location: 'Budapest-Keleti 火車站', desc: '搭乘跨國火車前往奧地利。', lat: 47.5005, lng: 19.0837 },
      { time: '12:00', location: 'Wien Hbf (維也納主火車站)', desc: '抵達並轉乘地鐵前往飯店寄放行李。', lat: 48.1851, lng: 16.3768 },
      { time: '14:30', location: '聖史蒂芬大教堂', desc: '參觀維也納教區主教堂，欣賞彩色屋頂。', lat: 48.2084, lng: 16.3731 },
      { time: '16:30', location: '格拉本大街 (Graben)', desc: '精品名店街散步。', lat: 48.2087, lng: 16.3698 }
    ],
    dining: [
      { name: 'Figlmüller', type: '晚餐必吃', desc: '創始於 1905 年的炸豬排老店，需提前數週預約。', lat: 48.2091, lng: 16.3742 },
      { name: 'Cafe Sacher', type: '甜點時光', desc: '薩赫蛋糕的發源地，維也納最著名的咖啡館之一。', lat: 48.2039, lng: 16.3697 }
    ]
  },
  {
    date: '3/29',
    day: '日',
    title: '哈布斯堡皇家日常',
    transport: '搭乘地鐵 U4 綠線直達 Schönbrunn。',
    activities: [
      { time: '09:00', location: '熊布朗宮 (美泉宮)', desc: '參觀哈布斯堡王朝夏宮，包含皇家花園。', lat: 48.1848, lng: 16.3122 },
      { time: '11:30', location: 'Gloriette 凱旋門', desc: '在山丘上俯瞰整個宮殿與維也納全景。', lat: 48.178, lng: 16.308 },
      { time: '15:00', location: '維也納國立歌劇院', desc: '欣賞這座宏偉的文藝復興風格建築外觀。', lat: 48.203, lng: 16.369 }
    ],
    dining: [
      { name: 'Brandauers Schlossbräu', type: '午餐建議', desc: '宮殿旁的精釀啤酒餐廳，推薦豬肋排。', lat: 48.1878, lng: 16.3015 },
      { name: 'Café Residenz', type: '甜點推薦', desc: '宮殿區內可看到經典蘋果捲製作演示。', lat: 48.1865, lng: 16.3128 }
    ]
  },
  {
    date: '3/30',
    day: '一',
    title: '名畫與在地的對話',
    transport: '搭乘 Tram D 電車。',
    activities: [
      { time: '10:00', location: '美景宮 (Belvedere)', desc: '欣賞克林姆名作《吻》，金色浪漫的視覺饗宴。', lat: 48.1915, lng: 16.3808 },
      { time: '14:30', location: '納許市場 (Naschmarkt)', desc: '漫步在維也納最大的傳統市場。', lat: 48.1979, lng: 16.3614 },
      { time: '16:30', location: '卡爾教堂', desc: '欣賞華麗的巴洛克式圓頂與浮雕柱。', lat: 48.1982, lng: 16.3715 }
    ],
    dining: [
      { name: 'Neni am Naschmarkt', type: '午餐首選', desc: '市場內超夯地中海料理，戶外區氣氛極佳。', lat: 48.1985, lng: 16.3605 },
      { name: 'Salm Bräu', type: '晚餐建議', desc: '美景宮旁的自釀啤酒坊，豬腳與肋排深受喜愛。', lat: 48.1952, lng: 16.3814 }
    ]
  },
  {
    date: '3/31',
    day: '二',
    title: '維也納 -> 布達佩斯',
    transport: '火車回程。市區搭 Metro M4 到蓋勒特山。',
    activities: [
      { time: '10:00', location: '維也納城市公園', desc: '與金色的小約翰史特勞斯像合影。', lat: 48.2045, lng: 16.379 },
      { time: '15:00', location: 'Budapest-Keleti', desc: '回到布達佩斯，前往飯店。', lat: 47.5005, lng: 19.0837 },
      { time: '17:30', location: '蓋勒特山 (Gellért Hill)', desc: '登頂眺望多瑙河夕陽，這裡是全城最美夜景。', lat: 47.4867, lng: 19.0483 }
    ],
    dining: [
      { name: 'Menza', type: '晚餐推薦', desc: '時尚復古風餐廳，大推匈牙利牛肉湯與鴨胸。', lat: 47.5034, lng: 19.0612 },
      { name: 'Zeller Bistro', type: '人氣首選', desc: '溫馨的地產酒館，服務親切，推薦燉肉料理。', lat: 47.502, lng: 19.054 }
    ]
  },
  {
    date: '4/01',
    day: '三',
    title: '歷史迴廊與最後採買',
    transport: '搭乘古老的 M1 地鐵與 Tram。',
    activities: [
      { time: '09:30', location: '中央市場 (Great Market Hall)', desc: '採購貴腐酒、鵝肝醬與各式紀念品。', lat: 47.4871, lng: 19.0585 },
      { time: '13:00', location: '匈牙利國會大廈', desc: '參觀這座全世界最美的議會大廈，入內需預約。', lat: 47.5071, lng: 19.0456 },
      { time: '15:30', location: '英雄廣場', desc: '布達佩斯最宏偉的廣場，一旁即是城市公園。', lat: 47.5148, lng: 19.0776 }
    ],
    dining: [
      { name: 'New York Café', type: '下午茶重點', desc: '世界最美咖啡館，在此度過最後的歐洲午後。', lat: 47.5002, lng: 19.0706 },
      { name: 'Párisi Passage', type: '最後晚餐', desc: '在絕美的拱廊下享用現代匈牙利料理。', lat: 47.4932, lng: 19.0548 }
    ]
  },
  {
    date: '4/02',
    day: '四',
    title: '布達佩斯離境 -> 杜拜轉機',
    transport: 'EK0112 (16:05 BUD -> 23:25 DXB)。',
    activities: [
      { time: '10:00', location: '中央市場最後巡禮', desc: '補買最後遺漏的小物。', lat: 47.4871, lng: 19.0585 },
      { time: '13:30', location: '布達佩斯機場 2B', desc: '預留時間辦理退稅手續。', lat: 47.4385, lng: 19.2523 },
      { time: '16:05', location: '阿聯酋航空 EK0112', desc: '飛往杜拜中轉回台。', lat: 47.4385, lng: 19.2523 }
    ],
    dining: [
      { name: 'Deryne Bisztro', type: '早午餐推薦', desc: '氣氛絕佳的在地名店，為旅程劃下優雅句點。', lat: 47.4975, lng: 19.0285 }
    ]
  },
  {
    date: '4/03',
    day: '五',
    title: '返抵家園',
    transport: 'EK0366 (03:45 DXB -> 16:10 TPE)。',
    activities: [
      { time: '03:45', location: '杜拜機場轉機', desc: '搭乘 EK0366 飛回桃園機場。', lat: 25.2532, lng: 55.3657 },
      { time: '16:10', location: '桃園機場 (TPE)', desc: '抵達台灣，完成歐亞壯遊。', lat: 25.0797, lng: 121.2342 }
    ],
    dining: []
  }
];
