//#region  取得捷運路線車站基本資料
const KRTCJson = () => {
	return `[
		{
		  "LineNo": "O",
		  "LineID": "O",
		  "Stations": [
			{
			  "Sequence": 1,
			  "StationID": "O1",
			  "StationName": {
				"Zh_tw": "哈瑪星",
				"En": "Hamasen"
			  },
			  "CumulativeDistance": 0
			},
			{
			  "Sequence": 2,
			  "StationID": "O2",
			  "StationName": {
				"Zh_tw": "鹽埕埔",
				"En": "Yanchengpu"
			  },
			  "CumulativeDistance": 1.32
			},
			{
			  "Sequence": 3,
			  "StationID": "O4",
			  "StationName": {
				"Zh_tw": "前金",
				"En": "Cianjin"
			  },
			  "CumulativeDistance": 2.63
			},
			{
			  "Sequence": 4,
			  "StationID": "O5",
			  "StationName": {
				"Zh_tw": "美麗島",
				"En": "Formosa Boulevard"
			  },
			  "CumulativeDistance": 3.55
			},
			{
			  "Sequence": 5,
			  "StationID": "O6",
			  "StationName": {
				"Zh_tw": "信義國小",
				"En": "Sinyi Elementary School"
			  },
			  "CumulativeDistance": 4.38
			},
			{
			  "Sequence": 6,
			  "StationID": "O7",
			  "StationName": {
				"Zh_tw": "文化中心",
				"En": "Cultural Center"
			  },
			  "CumulativeDistance": 5.02
			},
			{
			  "Sequence": 7,
			  "StationID": "O8",
			  "StationName": {
				"Zh_tw": "五塊厝",
				"En": "Wukuaicuo"
			  },
			  "CumulativeDistance": 6.06
			},
			{
			  "Sequence": 8,
			  "StationID": "O9",
			  "StationName": {
				"Zh_tw": "苓雅運動園區",
				"En": "Lingya Sports Park"
			  },
			  "CumulativeDistance": 6.81
			},
			{
			  "Sequence": 9,
			  "StationID": "O10",
			  "StationName": {
				"Zh_tw": "衛武營",
				"En": "Weiwuying"
			  },
			  "CumulativeDistance": 7.5
			},
			{
			  "Sequence": 10,
			  "StationID": "O11",
			  "StationName": {
				"Zh_tw": "鳳山西站",
				"En": "Fongshan West"
			  },
			  "CumulativeDistance": 8.23
			},
			{
			  "Sequence": 11,
			  "StationID": "O12",
			  "StationName": {
				"Zh_tw": "鳳山",
				"En": "Fongshan"
			  },
			  "CumulativeDistance": 8.95
			},
			{
			  "Sequence": 12,
			  "StationID": "O13",
			  "StationName": {
				"Zh_tw": "大東",
				"En": "Dadong"
			  },
			  "CumulativeDistance": 9.81
			},
			{
			  "Sequence": 13,
			  "StationID": "O14",
			  "StationName": {
				"Zh_tw": "鳳山國中",
				"En": "Fongshan Junior High School"
			  },
			  "CumulativeDistance": 10.84
			},
			{
			  "Sequence": 14,
			  "StationID": "OT1",
			  "StationName": {
				"Zh_tw": "大寮",
				"En": "Daliao"
			  },
			  "CumulativeDistance": 13.06
			}
		  ],
		  "SrcUpdateTime": "2024-06-30T11:00:00+08:00",
		  "UpdateTime": "2024-07-01T20:15:18+08:00",
		  "VersionID": 25
		},
		{
		  "LineNo": "R",
		  "LineID": "R",
		  "Stations": [
			{
			  "Sequence": 1,
			  "StationID": "R3",
			  "StationName": {
				"Zh_tw": "小港",
				"En": "Siaogang"
			  },
			  "CumulativeDistance": 0
			},
			{
			  "Sequence": 2,
			  "StationID": "R4",
			  "StationName": {
				"Zh_tw": "高雄國際機場",
				"En": "Kaohsiung International Airport"
			  },
			  "CumulativeDistance": 1.5
			},
			{
			  "Sequence": 3,
			  "StationID": "R4A",
			  "StationName": {
				"Zh_tw": "草衙",
				"En": "Caoya"
			  },
			  "CumulativeDistance": 3.34
			},
			{
			  "Sequence": 4,
			  "StationID": "R5",
			  "StationName": {
				"Zh_tw": "前鎮高中",
				"En": "Cianjhen Senior High School"
			  },
			  "CumulativeDistance": 4.48
			},
			{
			  "Sequence": 5,
			  "StationID": "R6",
			  "StationName": {
				"Zh_tw": "凱旋",
				"En": "Kaisyuan"
			  },
			  "CumulativeDistance": 5.61
			},
			{
			  "Sequence": 6,
			  "StationID": "R7",
			  "StationName": {
				"Zh_tw": "獅甲",
				"En": "Shihjia"
			  },
			  "CumulativeDistance": 6.89
			},
			{
			  "Sequence": 7,
			  "StationID": "R8",
			  "StationName": {
				"Zh_tw": "三多商圈",
				"En": "Sanduo Shopping District"
			  },
			  "CumulativeDistance": 7.82
			},
			{
			  "Sequence": 8,
			  "StationID": "R9",
			  "StationName": {
				"Zh_tw": "中央公園",
				"En": "Central Park"
			  },
			  "CumulativeDistance": 9.08
			},
			{
			  "Sequence": 9,
			  "StationID": "R10",
			  "StationName": {
				"Zh_tw": "美麗島",
				"En": "Formosa Boulevard"
			  },
			  "CumulativeDistance": 9.81
			},
			{
			  "Sequence": 10,
			  "StationID": "R11",
			  "StationName": {
				"Zh_tw": "高雄車站",
				"En": "Kaohsiung Main Station"
			  },
			  "CumulativeDistance": 10.73
			},
			{
			  "Sequence": 11,
			  "StationID": "R12",
			  "StationName": {
				"Zh_tw": "後驛",
				"En": "Houyi"
			  },
			  "CumulativeDistance": 11.71
			},
			{
			  "Sequence": 12,
			  "StationID": "R13",
			  "StationName": {
				"Zh_tw": "凹子底",
				"En": "Aozihdi"
			  },
			  "CumulativeDistance": 12.68
			},
			{
			  "Sequence": 13,
			  "StationID": "R14",
			  "StationName": {
				"Zh_tw": "巨蛋",
				"En": "Kaohsiung Arena"
			  },
			  "CumulativeDistance": 13.66
			},
			{
			  "Sequence": 14,
			  "StationID": "R15",
			  "StationName": {
				"Zh_tw": "生態園區",
				"En": "Ecological District"
			  },
			  "CumulativeDistance": 14.89
			},
			{
			  "Sequence": 15,
			  "StationID": "R16",
			  "StationName": {
				"Zh_tw": "左營",
				"En": "Zuoying"
			  },
			  "CumulativeDistance": 16.48
			},
			{
			  "Sequence": 16,
			  "StationID": "R17",
			  "StationName": {
				"Zh_tw": "世運",
				"En": "World Game"
			  },
			  "CumulativeDistance": 18.15
			},
			{
			  "Sequence": 17,
			  "StationID": "R18",
			  "StationName": {
				"Zh_tw": "油廠國小",
				"En": "Oil Refinery Elementary School"
			  },
			  "CumulativeDistance": 18.92
			},
			{
			  "Sequence": 18,
			  "StationID": "R19",
			  "StationName": {
				"Zh_tw": "楠梓科技園區",
				"En": "Nanzih Technology Industrial Park"
			  },
			  "CumulativeDistance": 20.21
			},
			{
			  "Sequence": 19,
			  "StationID": "R20",
			  "StationName": {
				"Zh_tw": "後勁",
				"En": "Houjing"
			  },
			  "CumulativeDistance": 21.23
			},
			{
			  "Sequence": 20,
			  "StationID": "R21",
			  "StationName": {
				"Zh_tw": "都會公園",
				"En": "Metropolitan Park"
			  },
			  "CumulativeDistance": 22.29
			},
			{
			  "Sequence": 21,
			  "StationID": "R22",
			  "StationName": {
				"Zh_tw": "青埔",
				"En": "Cingpu"
			  },
			  "CumulativeDistance": 23.97
			},
			{
			  "Sequence": 22,
			  "StationID": "R22A",
			  "StationName": {
				"Zh_tw": "橋頭糖廠",
				"En": "Ciaotou Sugar Refinery"
			  },
			  "CumulativeDistance": 25.06
			},
			{
			  "Sequence": 23,
			  "StationID": "R23",
			  "StationName": {
				"Zh_tw": "橋頭火車站",
				"En": "Ciaotou Station"
			  },
			  "CumulativeDistance": 25.94
			},
			{
			  "Sequence": 24,
			  "StationID": "R24",
			  "StationName": {
				"Zh_tw": "岡山高醫",
				"En": "Kaohsiung Medical University Gangshan Hospital"
			  },
			  "CumulativeDistance": 28.33
			},
			{
			  "Sequence": 25,
			  "StationID": "RK1",
			  "StationName": {
				"Zh_tw": "岡山車站",
				"En": "Gangshan Station"
			  },
			  "CumulativeDistance": 29.72
			}
		  ],
		  "SrcUpdateTime": "2024-06-30T11:00:00+08:00",
		  "UpdateTime": "2024-07-01T20:15:18+08:00",
		  "VersionID": 25
		}
	  ]
	`;
};
const KLRTJson = () => {
	return `[
  {
    "LineID": "C",
    "Stations": [
      {
        "Sequence": 1,
        "StationID": "C1",
        "StationName": {
          "Zh_tw": "籬仔內",
          "En": "Lizihnei"
        },
        "CumulativeDistance": 0
      },
      {
        "Sequence": 2,
        "StationID": "C2",
        "StationName": {
          "Zh_tw": "凱旋瑞田",
          "En": "Kaisyuan Rueitian"
        },
        "CumulativeDistance": 0.77
      },
      {
        "Sequence": 3,
        "StationID": "C3",
        "StationName": {
          "Zh_tw": "前鎮之星",
          "En": "Cianjhen Star"
        },
        "CumulativeDistance": 1.4
      },
      {
        "Sequence": 4,
        "StationID": "C4",
        "StationName": {
          "Zh_tw": "凱旋中華",
          "En": "Kaisyuan Jhonghua"
        },
        "CumulativeDistance": 1.94
      },
      {
        "Sequence": 5,
        "StationID": "C5",
        "StationName": {
          "Zh_tw": "夢時代",
          "En": "Dream Mall"
        },
        "CumulativeDistance": 2.66
      },
      {
        "Sequence": 6,
        "StationID": "C6",
        "StationName": {
          "Zh_tw": "經貿園區",
          "En": "Commerce and Trade Park"
        },
        "CumulativeDistance": 3.38
      },
      {
        "Sequence": 7,
        "StationID": "C7",
        "StationName": {
          "Zh_tw": "軟體園區",
          "En": "Software Technology Park"
        },
        "CumulativeDistance": 3.93
      },
      {
        "Sequence": 8,
        "StationID": "C8",
        "StationName": {
          "Zh_tw": "高雄展覽館",
          "En": "Kaohsiung Exhibition Center"
        },
        "CumulativeDistance": 4.58
      },
      {
        "Sequence": 9,
        "StationID": "C9",
        "StationName": {
          "Zh_tw": "旅運中心",
          "En": "Cruise Terminal"
        },
        "CumulativeDistance": 5.1
      },
      {
        "Sequence": 10,
        "StationID": "C10",
        "StationName": {
          "Zh_tw": "光榮碼頭",
          "En": "Glory Pier"
        },
        "CumulativeDistance": 5.8
      },
      {
        "Sequence": 11,
        "StationID": "C11",
        "StationName": {
          "Zh_tw": "真愛碼頭",
          "En": "Love Pier"
        },
        "CumulativeDistance": 6.43
      },
      {
        "Sequence": 12,
        "StationID": "C12",
        "StationName": {
          "Zh_tw": "駁二大義",
          "En": "Dayi Pier-2"
        },
        "CumulativeDistance": 7.07
      },
      {
        "Sequence": 13,
        "StationID": "C13",
        "StationName": {
          "Zh_tw": "駁二蓬萊",
          "En": "Penglai Pier-2"
        },
        "CumulativeDistance": 7.56
      },
      {
        "Sequence": 14,
        "StationID": "C14",
        "StationName": {
          "Zh_tw": "哈瑪星",
          "En": "Hamasen"
        },
        "CumulativeDistance": 8.17
      },
      {
        "Sequence": 15,
        "StationID": "C15",
        "StationName": {
          "Zh_tw": "壽山公園站",
          "En": "Shoushan Park"
        },
        "CumulativeDistance": 8.74
      },
      {
        "Sequence": 16,
        "StationID": "C16",
        "StationName": {
          "Zh_tw": "文武聖殿站",
          "En": "Wenwu Temple"
        },
        "CumulativeDistance": 9.14
      },
      {
        "Sequence": 17,
        "StationID": "C17",
        "StationName": {
          "Zh_tw": "鼓山區公所站",
          "En": "Gushan District Office"
        },
        "CumulativeDistance": 9.92
      },
      {
        "Sequence": 18,
        "StationID": "C18",
        "StationName": {
          "Zh_tw": "鼓山",
          "En": "Gushan"
        },
        "CumulativeDistance": 10.61
      },
      {
        "Sequence": 19,
        "StationID": "C19",
        "StationName": {
          "Zh_tw": "馬卡道",
          "En": "Makadao"
        },
        "CumulativeDistance": 11.17
      },
      {
        "Sequence": 20,
        "StationID": "C20",
        "StationName": {
          "Zh_tw": "臺鐵美術館",
          "En": "TRA Museum of Fine Arts"
        },
        "CumulativeDistance": 11.73
      },
      {
        "Sequence": 21,
        "StationID": "C21A",
        "StationName": {
          "Zh_tw": "內惟藝術中心",
          "En": "Neiwei Arts Center"
        },
        "CumulativeDistance": 12.13
      },
      {
        "Sequence": 22,
        "StationID": "C21",
        "StationName": {
          "Zh_tw": "美術館",
          "En": "Kaohsiung Museum of Fine Arts"
        },
        "CumulativeDistance": 12.57
      },
      {
        "Sequence": 23,
        "StationID": "C22",
        "StationName": {
          "Zh_tw": "聯合醫院",
          "En": "Kaohsiung Municipal United Hospital"
        },
        "CumulativeDistance": 12.96
      },
      {
        "Sequence": 24,
        "StationID": "C23",
        "StationName": {
          "Zh_tw": "龍華國小",
          "En": "Longhua Elementary School"
        },
        "CumulativeDistance": 13.39
      },
      {
        "Sequence": 25,
        "StationID": "C24",
        "StationName": {
          "Zh_tw": "愛河之心",
          "En": "Heart of Love River"
        },
        "CumulativeDistance": 14.34
      },
      {
        "Sequence": 26,
        "StationID": "C25",
        "StationName": {
          "Zh_tw": "新上國小",
          "En": "Sinshang Elementary School"
        },
        "CumulativeDistance": 14.92
      },
      {
        "Sequence": 27,
        "StationID": "C26",
        "StationName": {
          "Zh_tw": "大順民族",
          "En": "Dashun Minzu"
        },
        "CumulativeDistance": 15.47
      },
      {
        "Sequence": 28,
        "StationID": "C27",
        "StationName": {
          "Zh_tw": "灣仔內(大順鼎山)",
          "En": "Wanzihnei(Dashun Dingshan)"
        },
        "CumulativeDistance": 16.03
      },
      {
        "Sequence": 29,
        "StationID": "C28",
        "StationName": {
          "Zh_tw": "高雄高工",
          "En": "Kaohsiung Industrial High School"
        },
        "CumulativeDistance": 16.71
      },
      {
        "Sequence": 30,
        "StationID": "C29",
        "StationName": {
          "Zh_tw": "樹德家商",
          "En": "Shu-Te Home-Economics & Commercial High School"
        },
        "CumulativeDistance": 17.43
      },
      {
        "Sequence": 31,
        "StationID": "C30",
        "StationName": {
          "Zh_tw": "科工館",
          "En": "Science and Technology Museum"
        },
        "CumulativeDistance": 18.23
      },
      {
        "Sequence": 32,
        "StationID": "C31",
        "StationName": {
          "Zh_tw": "聖功醫院",
          "En": "St.Joseph Hospital"
        },
        "CumulativeDistance": 18.72
      },
      {
        "Sequence": 33,
        "StationID": "C32",
        "StationName": {
          "Zh_tw": "凱旋公園站",
          "En": "Kaisyuan Park"
        },
        "CumulativeDistance": 19.17
      },
      {
        "Sequence": 34,
        "StationID": "C33",
        "StationName": {
          "Zh_tw": "衛生局站",
          "En": "Department of Health"
        },
        "CumulativeDistance": 19.68
      },
      {
        "Sequence": 35,
        "StationID": "C34",
        "StationName": {
          "Zh_tw": "五權國小站",
          "En": "Wucyuan Elementary School"
        },
        "CumulativeDistance": 20.15
      },
      {
        "Sequence": 36,
        "StationID": "C35",
        "StationName": {
          "Zh_tw": "凱旋武昌站",
          "En": "Kaisyuan Wuchang"
        },
        "CumulativeDistance": 20.66
      },
      {
        "Sequence": 37,
        "StationID": "C36",
        "StationName": {
          "Zh_tw": "凱旋二聖站",
          "En": "Kaisyuan Ersheng"
        },
        "CumulativeDistance": 21.16
      },
      {
        "Sequence": 38,
        "StationID": "C37",
        "StationName": {
          "Zh_tw": "輕軌機廠站",
          "En": "LRT Depot"
        },
        "CumulativeDistance": 21.62
      }
    ],
    "SrcUpdateTime": "2022-09-30T00:00:00+08:00",
    "UpdateTime": "2022-10-11T00:00:00+08:00",
    "VersionID": 4
  }
]`;
};
//#endregion 取得捷運路線車站基本資料

//#region  取得捷運車站基本資料
const KLRTStationJson = () => {
	return `[
  {
    "StationUID": "KLRT-C1",
    "StationID": "C1",
    "StationName": {
      "Zh_tw": "籬仔內",
      "En": "Lizihnei"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.324651,
      "PositionLat": 22.604625,
      "GeoHash": "wsj8d519r"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C2",
    "StationID": "C2",
    "StationName": {
      "Zh_tw": "凱旋瑞田",
      "En": "Kaisyuan Rueitian"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.319799,
      "PositionLat": 22.599533,
      "GeoHash": "wsj89fn5y"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C3",
    "StationID": "C3",
    "StationName": {
      "Zh_tw": "前鎮之星",
      "En": "Cianjhen Star"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.315368,
      "PositionLat": 22.595503,
      "GeoHash": "wsj89c6ur"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C4",
    "StationID": "C4",
    "StationName": {
      "Zh_tw": "凱旋中華",
      "En": "Kaisyuan Jhonghua"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.310517,
      "PositionLat": 22.593656,
      "GeoHash": "wsj899p3w"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C5",
    "StationID": "C5",
    "StationName": {
      "Zh_tw": "夢時代",
      "En": "Dream Mall"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.305004,
      "PositionLat": 22.594886,
      "GeoHash": "wsj89972v"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C6",
    "StationID": "C6",
    "StationName": {
      "Zh_tw": "經貿園區",
      "En": "Commerce and Trade Park"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.30266,
      "PositionLat": 22.600961,
      "GeoHash": "wsj89d3sp"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C7",
    "StationID": "C7",
    "StationName": {
      "Zh_tw": "軟體園區",
      "En": "Software Technology Park"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.300832,
      "PositionLat": 22.605684,
      "GeoHash": "wsj89e0rs"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  },
  {
    "StationUID": "KLRT-C8",
    "StationID": "C8",
    "StationName": {
      "Zh_tw": "高雄展覽館",
      "En": "Kaohsiung Exhibition Center"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.298022,
      "PositionLat": 22.610133,
      "GeoHash": "wsj89kn3e"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C9",
    "StationID": "C9",
    "StationName": {
      "Zh_tw": "旅運中心",
      "En": "Cruise Terminal"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.293424,
      "PositionLat": 22.611587,
      "GeoHash": "wsj89k6fp"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C10",
    "StationID": "C10",
    "StationName": {
      "Zh_tw": "光榮碼頭",
      "En": "Glory Pier"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.293234,
      "PositionLat": 22.616805,
      "GeoHash": "wsj89m6b7"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C11",
    "StationID": "C11",
    "StationName": {
      "Zh_tw": "真愛碼頭",
      "En": "Love Pier"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.289466,
      "PositionLat": 22.619315,
      "GeoHash": "wsj89m8p5"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鹽埕區",
    "LocationTownCode": "64000010"
  },
  {
    "StationUID": "KLRT-C12",
    "StationID": "C12",
    "StationName": {
      "Zh_tw": "駁二大義",
      "En": "Dayi Pier-2"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.284204,
      "PositionLat": 22.618562,
      "GeoHash": "wsj89js69"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鹽埕區",
    "LocationTownCode": "64000010"
  },
  {
    "StationUID": "KLRT-C13",
    "StationID": "C13",
    "StationName": {
      "Zh_tw": "駁二蓬萊",
      "En": "Penglai Pier-2"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.279923,
      "PositionLat": 22.6205,
      "GeoHash": "wsj89jcjv"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鹽埕區",
    "LocationTownCode": "64000010"
  },
  {
    "StationUID": "KLRT-C14",
    "StationID": "C14",
    "StationName": {
      "Zh_tw": "哈瑪星",
      "En": "Hamasen"
    },
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.275849,
      "PositionLat": 22.621617,
      "GeoHash": "wsj88ynhq"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C15",
    "StationID": "C15",
    "StationName": {
      "Zh_tw": "壽山公園站",
      "En": "Shoushan Park"
    },
    "StationAddress": "五福四路與新樂街段",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.278601,
      "PositionLat": 22.626541,
      "GeoHash": "wsj89p01n"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C16",
    "StationID": "C16",
    "StationName": {
      "Zh_tw": "文武聖殿站",
      "En": "Wenwu Temple"
    },
    "StationAddress": "大公路與鼓山一路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.2807,
      "PositionLat": 22.62959,
      "GeoHash": "wsj89p9dz"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C17",
    "StationID": "C17",
    "StationName": {
      "Zh_tw": "鼓山區公所站",
      "En": "Gushan District Office"
    },
    "StationAddress": "興隆路與河川街103巷",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.282567,
      "PositionLat": 22.635988,
      "GeoHash": "wsj8c0g04"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C18",
    "StationID": "C18",
    "StationName": {
      "Zh_tw": "鼓山",
      "En": "Gushan"
    },
    "StationAddress": "高雄市鼓山區鐵路街及鐵路街18巷",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.281067,
      "PositionLat": 22.642037,
      "GeoHash": "wsj8c1f52"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C19",
    "StationID": "C19",
    "StationName": {
      "Zh_tw": "馬卡道",
      "En": "Makadao"
    },
    "StationAddress": "高雄市鼓山區馬卡道路與華安街口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.281415,
      "PositionLat": 22.647089,
      "GeoHash": "wsj8c4f2b"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C20",
    "StationID": "C20",
    "StationName": {
      "Zh_tw": "臺鐵美術館",
      "En": "TRA Museum of Fine Arts"
    },
    "StationAddress": "高雄市鼓山區馬卡道路與青海路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.281669,
      "PositionLat": 22.652074,
      "GeoHash": "wsj8c5dmy"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C21A",
    "StationID": "C21A",
    "StationName": {
      "Zh_tw": "內惟藝術中心",
      "En": "Neiwei Arts Center"
    },
    "StationAddress": "高雄市鼓山區馬卡道路與美術館路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.282868,
      "PositionLat": 22.65497,
      "GeoHash": "wsj8ch5qc"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C21",
    "StationID": "C21",
    "StationName": {
      "Zh_tw": "美術館",
      "En": "Kaohsiung Museum of Fine Arts"
    },
    "StationAddress": "高雄市鼓山區美術館路與美術東二路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.287437,
      "PositionLat": 22.655026,
      "GeoHash": "wsj8chnxh"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C22",
    "StationID": "C22",
    "StationName": {
      "Zh_tw": "聯合醫院",
      "En": "Kaohsiung Municipal United Hospital"
    },
    "StationAddress": "高雄市鼓山區美術館路與中華一路",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.290918,
      "PositionLat": 22.654827,
      "GeoHash": "wsj8ck1jv"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C23",
    "StationID": "C23",
    "StationName": {
      "Zh_tw": "龍華國小",
      "En": "Longhua Elementary School"
    },
    "StationAddress": "高雄市鼓山區大順一路與龍德路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.295042,
      "PositionLat": 22.654493,
      "GeoHash": "wsj8ckh5v"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C24",
    "StationID": "C24",
    "StationName": {
      "Zh_tw": "愛河之心",
      "En": "Heart of Love River"
    },
    "StationAddress": "高雄市鼓山區大順一路與博愛一路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.30282,
      "PositionLat": 22.65604,
      "GeoHash": "wsj8cs3uf"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鼓山區",
    "LocationTownCode": "64000020"
  },
  {
    "StationUID": "KLRT-C25",
    "StationID": "C25",
    "StationName": {
      "Zh_tw": "新上國小",
      "En": "Sinshang Elementary School"
    },
    "StationAddress": "高雄市左營區大順一路與自由一路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3083,
      "PositionLat": 22.6567,
      "GeoHash": "wsj8cstbf"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "左營區",
    "LocationTownCode": "64000030"
  },
  {
    "StationUID": "KLRT-C26",
    "StationID": "C26",
    "StationName": {
      "Zh_tw": "大順民族",
      "En": "Dashun Minzu"
    },
    "StationAddress": "高雄市三民區大順一路與民族一路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3149,
      "PositionLat": 22.6556,
      "GeoHash": "wsj8cu6dk"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "三民區",
    "LocationTownCode": "64000050"
  },
  {
    "StationUID": "KLRT-C27",
    "StationID": "C27",
    "StationName": {
      "Zh_tw": "灣仔內(大順鼎山)",
      "En": "Wanzihnei(Dashun Dingshan)"
    },
    "StationAddress": "高雄市三民區大順二路與鼎山街口 ",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3185,
      "PositionLat": 22.6538,
      "GeoHash": "wsj8cgvrb"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "三民區",
    "LocationTownCode": "64000050"
  },
  {
    "StationUID": "KLRT-C28",
    "StationID": "C28",
    "StationName": {
      "Zh_tw": "高雄高工",
      "En": "Kaohsiung Industrial High School"
    },
    "StationAddress": "高雄市三民區大順二路與建工路口  ",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3238,
      "PositionLat": 22.6501,
      "GeoHash": "wsj8f5347"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "三民區",
    "LocationTownCode": "64000050"
  },
  {
    "StationUID": "KLRT-C29",
    "StationID": "C29",
    "StationName": {
      "Zh_tw": "樹德家商",
      "En": "Shu-Te Home-Economics & Commercial High School"
    },
    "StationAddress": "高雄市三民區大順二路與建興路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3262,
      "PositionLat": 22.6442,
      "GeoHash": "wsj8f46b5"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "三民區",
    "LocationTownCode": "64000050"
  },
  {
    "StationUID": "KLRT-C30",
    "StationID": "C30",
    "StationName": {
      "Zh_tw": "科工館",
      "En": "Science and Technology Museum"
    },
    "StationAddress": "高雄市三民區大順三路與鐵道園區（大順三路309巷）",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3274,
      "PositionLat": 22.6375,
      "GeoHash": "wsj8f158z"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "三民區",
    "LocationTownCode": "64000050"
  },
  {
    "StationUID": "KLRT-C31",
    "StationID": "C31",
    "StationName": {
      "Zh_tw": "聖功醫院",
      "En": "St.Joseph Hospital"
    },
    "StationAddress": "高雄市苓雅區大順三路與建國一路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.325819,
      "PositionLat": 22.633278,
      "GeoHash": "wsj8f0686"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C32",
    "StationID": "C32",
    "StationName": {
      "Zh_tw": "凱旋公園站",
      "En": "Kaisyuan Park"
    },
    "StationAddress": "中正一路與河南路口（南凱旋公園內）",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.322785,
      "PositionLat": 22.629433,
      "GeoHash": "wsj8dp86h"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C33",
    "StationID": "C33",
    "StationName": {
      "Zh_tw": "衛生局站",
      "En": "Department of Health"
    },
    "StationAddress": "凱旋二路與凱旋二路81巷",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3237,
      "PositionLat": 22.6252,
      "GeoHash": "wsj8dnc13"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C34",
    "StationID": "C34",
    "StationName": {
      "Zh_tw": "五權國小站",
      "En": "Wucyuan Elementary School"
    },
    "StationAddress": "凱旋二路與三多二路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3252,
      "PositionLat": 22.62121,
      "GeoHash": "wsj8dn44h"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C35",
    "StationID": "C35",
    "StationName": {
      "Zh_tw": "凱旋武昌站",
      "En": "Kaisyuan Wuchang"
    },
    "StationAddress": "凱旋三路與武昌路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3269,
      "PositionLat": 22.61693,
      "GeoHash": "wsj8dj735"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "苓雅區",
    "LocationTownCode": "64000080"
  },
  {
    "StationUID": "KLRT-C36",
    "StationID": "C36",
    "StationName": {
      "Zh_tw": "凱旋二聖站",
      "En": "Kaisyuan Ersheng"
    },
    "StationAddress": "凱旋三路與二聖路口",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3272,
      "PositionLat": 22.61253,
      "GeoHash": "wsj8dh7xd"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "鳳山區",
    "LocationTownCode": "64000120"
  },
  {
    "StationUID": "KLRT-C37",
    "StationID": "C37",
    "StationName": {
      "Zh_tw": "輕軌機廠站",
      "En": "LRT Depot"
    },
    "StationAddress": "瑞西街與瑞北路口（輕軌機廠內）",
    "BikeAllowOnHoliday": false,
    "SrcUpdateTime": "2024-03-19T00:00:00+08:00",
    "UpdateTime": "2024-03-19T00:00:00+08:00",
    "VersionID": 8,
    "StationPosition": {
      "PositionLon": 120.3261,
      "PositionLat": 22.6085,
      "GeoHash": "wsj8d5fb1"
    },
    "LocationCity": "高雄市",
    "LocationCityCode": "KHH",
    "LocationTown": "前鎮區",
    "LocationTownCode": "64000090"
  }
]`
};
//#endregion 取得捷運車站基本資料
//#region 運行時間
const KRTCRunTime = () => {
	return `[
		{
			"LineNo": "O",
			"LineID": "O",
			"RouteID": "O",
			"TrainType": 0,
			"TravelTimes": [
				{
					"Sequence": 62,
					"FromStationID": "OT1",
					"FromStationName": {
						"Zh_tw": "大寮",
						"En": "Daliao"
					},
					"ToStationID": "O14",
					"ToStationName": {
						"Zh_tw": "鳳山國中",
						"En": "Fongshan Junior High School"
					},
					"RunTime": 240,
					"StopTime": 300
				},
				{
					"Sequence": 63,
					"FromStationID": "O14",
					"FromStationName": {
						"Zh_tw": "鳳山國中",
						"En": "Fongshan Junior High School"
					},
					"ToStationID": "O13",
					"ToStationName": {
						"Zh_tw": "大東",
						"En": "Dadong"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 64,
					"FromStationID": "O13",
					"FromStationName": {
						"Zh_tw": "大東",
						"En": "Dadong"
					},
					"ToStationID": "O12",
					"ToStationName": {
						"Zh_tw": "鳳山",
						"En": "Fongshan"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 65,
					"FromStationID": "O12",
					"FromStationName": {
						"Zh_tw": "鳳山",
						"En": "Fongshan"
					},
					"ToStationID": "O11",
					"ToStationName": {
						"Zh_tw": "鳳山西站",
						"En": "Fongshan West"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 66,
					"FromStationID": "O11",
					"FromStationName": {
						"Zh_tw": "鳳山西站",
						"En": "Fongshan West"
					},
					"ToStationID": "O10",
					"ToStationName": {
						"Zh_tw": "衛武營",
						"En": "Weiwuying"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 67,
					"FromStationID": "O10",
					"FromStationName": {
						"Zh_tw": "衛武營",
						"En": "Weiwuying"
					},
					"ToStationID": "O9",
					"ToStationName": {
						"Zh_tw": "苓雅運動園區",
						"En": "Lingya Sports Park"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 68,
					"FromStationID": "O9",
					"FromStationName": {
						"Zh_tw": "苓雅運動園區",
						"En": "Lingya Sports Park"
					},
					"ToStationID": "O8",
					"ToStationName": {
						"Zh_tw": "五塊厝",
						"En": "Wukuaicuo"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 69,
					"FromStationID": "O8",
					"FromStationName": {
						"Zh_tw": "五塊厝",
						"En": "Wukuaicuo"
					},
					"ToStationID": "O7",
					"ToStationName": {
						"Zh_tw": "文化中心",
						"En": "Cultural Center"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 70,
					"FromStationID": "O7",
					"FromStationName": {
						"Zh_tw": "文化中心",
						"En": "Cultural Center"
					},
					"ToStationID": "O6",
					"ToStationName": {
						"Zh_tw": "信義國小",
						"En": "Sinyi Elementary School"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 71,
					"FromStationID": "O6",
					"FromStationName": {
						"Zh_tw": "信義國小",
						"En": "Sinyi Elementary School"
					},
					"ToStationID": "O5",
					"ToStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 72,
					"FromStationID": "O5",
					"FromStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"ToStationID": "O4",
					"ToStationName": {
						"Zh_tw": "前金",
						"En": "Cianjin"
					},
					"RunTime": 120,
					"StopTime": 40
				},
				{
					"Sequence": 73,
					"FromStationID": "O4",
					"FromStationName": {
						"Zh_tw": "前金",
						"En": "Cianjin"
					},
					"ToStationID": "O2",
					"ToStationName": {
						"Zh_tw": "鹽埕埔",
						"En": "Yanchengpu"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 74,
					"FromStationID": "O2",
					"FromStationName": {
						"Zh_tw": "鹽埕埔",
						"En": "Yanchengpu"
					},
					"ToStationID": "O1",
					"ToStationName": {
						"Zh_tw": "哈瑪星",
						"En": "Hamasen"
					},
					"RunTime": 120,
					"StopTime": 20
				}
			],
			"SrcUpdateTime": "2024-07-05T10:30:00+08:00",
			"UpdateTime": "2024-07-05T17:15:18+08:00",
			"VersionID": 26
		},
		{
			"LineNo": "O",
			"LineID": "O",
			"RouteID": "O",
			"TrainType": 0,
			"TravelTimes": [
				{
					"Sequence": 49,
					"FromStationID": "O1",
					"FromStationName": {
						"Zh_tw": "哈瑪星",
						"En": "Hamasen"
					},
					"ToStationID": "O2",
					"ToStationName": {
						"Zh_tw": "鹽埕埔",
						"En": "Yanchengpu"
					},
					"RunTime": 120,
					"StopTime": 300
				},
				{
					"Sequence": 50,
					"FromStationID": "O2",
					"FromStationName": {
						"Zh_tw": "鹽埕埔",
						"En": "Yanchengpu"
					},
					"ToStationID": "O4",
					"ToStationName": {
						"Zh_tw": "前金",
						"En": "Cianjin"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 51,
					"FromStationID": "O4",
					"FromStationName": {
						"Zh_tw": "前金",
						"En": "Cianjin"
					},
					"ToStationID": "O5",
					"ToStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 52,
					"FromStationID": "O5",
					"FromStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"ToStationID": "O6",
					"ToStationName": {
						"Zh_tw": "信義國小",
						"En": "Sinyi Elementary School"
					},
					"RunTime": 120,
					"StopTime": 40
				},
				{
					"Sequence": 53,
					"FromStationID": "O6",
					"FromStationName": {
						"Zh_tw": "信義國小",
						"En": "Sinyi Elementary School"
					},
					"ToStationID": "O7",
					"ToStationName": {
						"Zh_tw": "文化中心",
						"En": "Cultural Center"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 54,
					"FromStationID": "O7",
					"FromStationName": {
						"Zh_tw": "文化中心",
						"En": "Cultural Center"
					},
					"ToStationID": "O8",
					"ToStationName": {
						"Zh_tw": "五塊厝",
						"En": "Wukuaicuo"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 55,
					"FromStationID": "O8",
					"FromStationName": {
						"Zh_tw": "五塊厝",
						"En": "Wukuaicuo"
					},
					"ToStationID": "O9",
					"ToStationName": {
						"Zh_tw": "苓雅運動園區",
						"En": "Lingya Sports Park"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 56,
					"FromStationID": "O9",
					"FromStationName": {
						"Zh_tw": "苓雅運動園區",
						"En": "Lingya Sports Park"
					},
					"ToStationID": "O10",
					"ToStationName": {
						"Zh_tw": "衛武營",
						"En": "Weiwuying"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 57,
					"FromStationID": "O10",
					"FromStationName": {
						"Zh_tw": "衛武營",
						"En": "Weiwuying"
					},
					"ToStationID": "O11",
					"ToStationName": {
						"Zh_tw": "鳳山西站",
						"En": "Fongshan West"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 58,
					"FromStationID": "O11",
					"FromStationName": {
						"Zh_tw": "鳳山西站",
						"En": "Fongshan West"
					},
					"ToStationID": "O12",
					"ToStationName": {
						"Zh_tw": "鳳山",
						"En": "Fongshan"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 59,
					"FromStationID": "O12",
					"FromStationName": {
						"Zh_tw": "鳳山",
						"En": "Fongshan"
					},
					"ToStationID": "O13",
					"ToStationName": {
						"Zh_tw": "大東",
						"En": "Dadong"
					},
					"RunTime": 240,
					"StopTime": 20
				},
				{
					"Sequence": 60,
					"FromStationID": "O13",
					"FromStationName": {
						"Zh_tw": "大東",
						"En": "Dadong"
					},
					"ToStationID": "O14",
					"ToStationName": {
						"Zh_tw": "鳳山國中",
						"En": "Fongshan Junior High School"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 61,
					"FromStationID": "O14",
					"FromStationName": {
						"Zh_tw": "鳳山國中",
						"En": "Fongshan Junior High School"
					},
					"ToStationID": "OT1",
					"ToStationName": {
						"Zh_tw": "大寮",
						"En": "Daliao"
					},
					"RunTime": 240,
					"StopTime": 20
				}
			],
			"SrcUpdateTime": "2024-07-05T10:30:00+08:00",
			"UpdateTime": "2024-07-05T17:15:18+08:00",
			"VersionID": 26
		},
		{
			"LineNo": "R",
			"LineID": "R",
			"RouteID": "R",
			"TrainType": 0,
			"TravelTimes": [
				{
					"Sequence": 25,
					"FromStationID": "RK1",
					"FromStationName": {
						"Zh_tw": "岡山車站",
						"En": "Gangshan Station"
					},
					"ToStationID": "R24",
					"ToStationName": {
						"Zh_tw": "岡山高醫",
						"En": "Kaohsiung Medical University Gangshan Hospital"
					},
					"RunTime": 120,
					"StopTime": 300
				},
				{
					"Sequence": 26,
					"FromStationID": "R24",
					"FromStationName": {
						"Zh_tw": "岡山高醫",
						"En": "Kaohsiung Medical University Gangshan Hospital"
					},
					"ToStationID": "R23",
					"ToStationName": {
						"Zh_tw": "橋頭火車站",
						"En": "Ciaotou Station"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 27,
					"FromStationID": "R23",
					"FromStationName": {
						"Zh_tw": "橋頭火車站",
						"En": "Ciaotou Station"
					},
					"ToStationID": "R22A",
					"ToStationName": {
						"Zh_tw": "橋頭糖廠",
						"En": "Ciaotou Sugar Refinery"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 28,
					"FromStationID": "R22A",
					"FromStationName": {
						"Zh_tw": "橋頭糖廠",
						"En": "Ciaotou Sugar Refinery"
					},
					"ToStationID": "R22",
					"ToStationName": {
						"Zh_tw": "青埔",
						"En": "Cingpu"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 29,
					"FromStationID": "R22",
					"FromStationName": {
						"Zh_tw": "青埔",
						"En": "Cingpu"
					},
					"ToStationID": "R21",
					"ToStationName": {
						"Zh_tw": "都會公園",
						"En": "Metropolitan Park"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 30,
					"FromStationID": "R21",
					"FromStationName": {
						"Zh_tw": "都會公園",
						"En": "Metropolitan Park"
					},
					"ToStationID": "R20",
					"ToStationName": {
						"Zh_tw": "後勁",
						"En": "Houjing"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 31,
					"FromStationID": "R20",
					"FromStationName": {
						"Zh_tw": "後勁",
						"En": "Houjing"
					},
					"ToStationID": "R19",
					"ToStationName": {
						"Zh_tw": "楠梓科技園區",
						"En": "Nanzih Technology Industrial Park"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 32,
					"FromStationID": "R19",
					"FromStationName": {
						"Zh_tw": "楠梓科技園區",
						"En": "Nanzih Technology Industrial Park"
					},
					"ToStationID": "R18",
					"ToStationName": {
						"Zh_tw": "油廠國小",
						"En": "Oil Refinery Elementary School"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 33,
					"FromStationID": "R18",
					"FromStationName": {
						"Zh_tw": "油廠國小",
						"En": "Oil Refinery Elementary School"
					},
					"ToStationID": "R17",
					"ToStationName": {
						"Zh_tw": "世運",
						"En": "World Game"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 34,
					"FromStationID": "R17",
					"FromStationName": {
						"Zh_tw": "世運",
						"En": "World Game"
					},
					"ToStationID": "R16",
					"ToStationName": {
						"Zh_tw": "左營",
						"En": "Zuoying"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 35,
					"FromStationID": "R16",
					"FromStationName": {
						"Zh_tw": "左營",
						"En": "Zuoying"
					},
					"ToStationID": "R15",
					"ToStationName": {
						"Zh_tw": "生態園區",
						"En": "Ecological District"
					},
					"RunTime": 180,
					"StopTime": 30
				},
				{
					"Sequence": 36,
					"FromStationID": "R15",
					"FromStationName": {
						"Zh_tw": "生態園區",
						"En": "Ecological District"
					},
					"ToStationID": "R14",
					"ToStationName": {
						"Zh_tw": "巨蛋",
						"En": "Kaohsiung Arena"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 37,
					"FromStationID": "R14",
					"FromStationName": {
						"Zh_tw": "巨蛋",
						"En": "Kaohsiung Arena"
					},
					"ToStationID": "R13",
					"ToStationName": {
						"Zh_tw": "凹子底",
						"En": "Aozihdi"
					},
					"RunTime": 120,
					"StopTime": 35
				},
				{
					"Sequence": 38,
					"FromStationID": "R13",
					"FromStationName": {
						"Zh_tw": "凹子底",
						"En": "Aozihdi"
					},
					"ToStationID": "R12",
					"ToStationName": {
						"Zh_tw": "後驛",
						"En": "Houyi"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 39,
					"FromStationID": "R12",
					"FromStationName": {
						"Zh_tw": "後驛",
						"En": "Houyi"
					},
					"ToStationID": "R11",
					"ToStationName": {
						"Zh_tw": "高雄車站",
						"En": "Kaohsiung Main Station"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 40,
					"FromStationID": "R11",
					"FromStationName": {
						"Zh_tw": "高雄車站",
						"En": "Kaohsiung Main Station"
					},
					"ToStationID": "R10",
					"ToStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"RunTime": 120,
					"StopTime": 35
				},
				{
					"Sequence": 41,
					"FromStationID": "R10",
					"FromStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"ToStationID": "R9",
					"ToStationName": {
						"Zh_tw": "中央公園",
						"En": "Central Park"
					},
					"RunTime": 120,
					"StopTime": 40
				},
				{
					"Sequence": 42,
					"FromStationID": "R9",
					"FromStationName": {
						"Zh_tw": "中央公園",
						"En": "Central Park"
					},
					"ToStationID": "R8",
					"ToStationName": {
						"Zh_tw": "三多商圈",
						"En": "Sanduo Shopping District"
					},
					"RunTime": 180,
					"StopTime": 30
				},
				{
					"Sequence": 43,
					"FromStationID": "R8",
					"FromStationName": {
						"Zh_tw": "三多商圈",
						"En": "Sanduo Shopping District"
					},
					"ToStationID": "R7",
					"ToStationName": {
						"Zh_tw": "獅甲",
						"En": "Shihjia"
					},
					"RunTime": 120,
					"StopTime": 30
				},
				{
					"Sequence": 44,
					"FromStationID": "R7",
					"FromStationName": {
						"Zh_tw": "獅甲",
						"En": "Shihjia"
					},
					"ToStationID": "R6",
					"ToStationName": {
						"Zh_tw": "凱旋",
						"En": "Kaisyuan"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 45,
					"FromStationID": "R6",
					"FromStationName": {
						"Zh_tw": "凱旋",
						"En": "Kaisyuan"
					},
					"ToStationID": "R5",
					"ToStationName": {
						"Zh_tw": "前鎮高中",
						"En": "Cianjhen Senior High School"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 46,
					"FromStationID": "R5",
					"FromStationName": {
						"Zh_tw": "前鎮高中",
						"En": "Cianjhen Senior High School"
					},
					"ToStationID": "R4A",
					"ToStationName": {
						"Zh_tw": "草衙",
						"En": "Caoya"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 47,
					"FromStationID": "R4A",
					"FromStationName": {
						"Zh_tw": "草衙",
						"En": "Caoya"
					},
					"ToStationID": "R4",
					"ToStationName": {
						"Zh_tw": "高雄國際機場",
						"En": "Kaohsiung International Airport"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 48,
					"FromStationID": "R4",
					"FromStationName": {
						"Zh_tw": "高雄國際機場",
						"En": "Kaohsiung International Airport"
					},
					"ToStationID": "R3",
					"ToStationName": {
						"Zh_tw": "小港",
						"En": "Siaogang"
					},
					"RunTime": 120,
					"StopTime": 20
				}
			],
			"SrcUpdateTime": "2024-07-05T10:30:00+08:00",
			"UpdateTime": "2024-07-05T17:15:18+08:00",
			"VersionID": 26
		},
		{
			"LineNo": "R",
			"LineID": "R",
			"RouteID": "R",
			"TrainType": 0,
			"TravelTimes": [
				{
					"Sequence": 1,
					"FromStationID": "R3",
					"FromStationName": {
						"Zh_tw": "小港",
						"En": "Siaogang"
					},
					"ToStationID": "R4",
					"ToStationName": {
						"Zh_tw": "高雄國際機場",
						"En": "Kaohsiung International Airport"
					},
					"RunTime": 120,
					"StopTime": 300
				},
				{
					"Sequence": 2,
					"FromStationID": "R4",
					"FromStationName": {
						"Zh_tw": "高雄國際機場",
						"En": "Kaohsiung International Airport"
					},
					"ToStationID": "R4A",
					"ToStationName": {
						"Zh_tw": "草衙",
						"En": "Caoya"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 3,
					"FromStationID": "R4A",
					"FromStationName": {
						"Zh_tw": "草衙",
						"En": "Caoya"
					},
					"ToStationID": "R5",
					"ToStationName": {
						"Zh_tw": "前鎮高中",
						"En": "Cianjhen Senior High School"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 4,
					"FromStationID": "R5",
					"FromStationName": {
						"Zh_tw": "前鎮高中",
						"En": "Cianjhen Senior High School"
					},
					"ToStationID": "R6",
					"ToStationName": {
						"Zh_tw": "凱旋",
						"En": "Kaisyuan"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 5,
					"FromStationID": "R6",
					"FromStationName": {
						"Zh_tw": "凱旋",
						"En": "Kaisyuan"
					},
					"ToStationID": "R7",
					"ToStationName": {
						"Zh_tw": "獅甲",
						"En": "Shihjia"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 6,
					"FromStationID": "R7",
					"FromStationName": {
						"Zh_tw": "獅甲",
						"En": "Shihjia"
					},
					"ToStationID": "R8",
					"ToStationName": {
						"Zh_tw": "三多商圈",
						"En": "Sanduo Shopping District"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 7,
					"FromStationID": "R8",
					"FromStationName": {
						"Zh_tw": "三多商圈",
						"En": "Sanduo Shopping District"
					},
					"ToStationID": "R9",
					"ToStationName": {
						"Zh_tw": "中央公園",
						"En": "Central Park"
					},
					"RunTime": 180,
					"StopTime": 30
				},
				{
					"Sequence": 8,
					"FromStationID": "R9",
					"FromStationName": {
						"Zh_tw": "中央公園",
						"En": "Central Park"
					},
					"ToStationID": "R10",
					"ToStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"RunTime": 120,
					"StopTime": 30
				},
				{
					"Sequence": 9,
					"FromStationID": "R10",
					"FromStationName": {
						"Zh_tw": "美麗島",
						"En": "Formosa Boulevard"
					},
					"ToStationID": "R11",
					"ToStationName": {
						"Zh_tw": "高雄車站",
						"En": "Kaohsiung Main Station"
					},
					"RunTime": 120,
					"StopTime": 40
				},
				{
					"Sequence": 10,
					"FromStationID": "R11",
					"FromStationName": {
						"Zh_tw": "高雄車站",
						"En": "Kaohsiung Main Station"
					},
					"ToStationID": "R12",
					"ToStationName": {
						"Zh_tw": "後驛",
						"En": "Houyi"
					},
					"RunTime": 180,
					"StopTime": 35
				},
				{
					"Sequence": 11,
					"FromStationID": "R12",
					"FromStationName": {
						"Zh_tw": "後驛",
						"En": "Houyi"
					},
					"ToStationID": "R13",
					"ToStationName": {
						"Zh_tw": "凹子底",
						"En": "Aozihdi"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 12,
					"FromStationID": "R13",
					"FromStationName": {
						"Zh_tw": "凹子底",
						"En": "Aozihdi"
					},
					"ToStationID": "R14",
					"ToStationName": {
						"Zh_tw": "巨蛋",
						"En": "Kaohsiung Arena"
					},
					"RunTime": 120,
					"StopTime": 25
				},
				{
					"Sequence": 13,
					"FromStationID": "R14",
					"FromStationName": {
						"Zh_tw": "巨蛋",
						"En": "Kaohsiung Arena"
					},
					"ToStationID": "R15",
					"ToStationName": {
						"Zh_tw": "生態園區",
						"En": "Ecological District"
					},
					"RunTime": 180,
					"StopTime": 35
				},
				{
					"Sequence": 14,
					"FromStationID": "R15",
					"FromStationName": {
						"Zh_tw": "生態園區",
						"En": "Ecological District"
					},
					"ToStationID": "R16",
					"ToStationName": {
						"Zh_tw": "左營",
						"En": "Zuoying"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 15,
					"FromStationID": "R16",
					"FromStationName": {
						"Zh_tw": "左營",
						"En": "Zuoying"
					},
					"ToStationID": "R17",
					"ToStationName": {
						"Zh_tw": "世運",
						"En": "World Game"
					},
					"RunTime": 180,
					"StopTime": 30
				},
				{
					"Sequence": 16,
					"FromStationID": "R17",
					"FromStationName": {
						"Zh_tw": "世運",
						"En": "World Game"
					},
					"ToStationID": "R18",
					"ToStationName": {
						"Zh_tw": "油廠國小",
						"En": "Oil Refinery Elementary School"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 17,
					"FromStationID": "R18",
					"FromStationName": {
						"Zh_tw": "油廠國小",
						"En": "Oil Refinery Elementary School"
					},
					"ToStationID": "R19",
					"ToStationName": {
						"Zh_tw": "楠梓科技園區",
						"En": "Nanzih Technology Industrial Park"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 18,
					"FromStationID": "R19",
					"FromStationName": {
						"Zh_tw": "楠梓科技園區",
						"En": "Nanzih Technology Industrial Park"
					},
					"ToStationID": "R20",
					"ToStationName": {
						"Zh_tw": "後勁",
						"En": "Houjing"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 19,
					"FromStationID": "R20",
					"FromStationName": {
						"Zh_tw": "後勁",
						"En": "Houjing"
					},
					"ToStationID": "R21",
					"ToStationName": {
						"Zh_tw": "都會公園",
						"En": "Metropolitan Park"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 20,
					"FromStationID": "R21",
					"FromStationName": {
						"Zh_tw": "都會公園",
						"En": "Metropolitan Park"
					},
					"ToStationID": "R22",
					"ToStationName": {
						"Zh_tw": "青埔",
						"En": "Cingpu"
					},
					"RunTime": 180,
					"StopTime": 20
				},
				{
					"Sequence": 21,
					"FromStationID": "R22",
					"FromStationName": {
						"Zh_tw": "青埔",
						"En": "Cingpu"
					},
					"ToStationID": "R22A",
					"ToStationName": {
						"Zh_tw": "橋頭糖廠",
						"En": "Ciaotou Sugar Refinery"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 22,
					"FromStationID": "R22A",
					"FromStationName": {
						"Zh_tw": "橋頭糖廠",
						"En": "Ciaotou Sugar Refinery"
					},
					"ToStationID": "R23",
					"ToStationName": {
						"Zh_tw": "橋頭火車站",
						"En": "Ciaotou Station"
					},
					"RunTime": 120,
					"StopTime": 20
				},
				{
					"Sequence": 23,
					"FromStationID": "R23",
					"FromStationName": {
						"Zh_tw": "橋頭火車站",
						"En": "Ciaotou Station"
					},
					"ToStationID": "R24",
					"ToStationName": {
						"Zh_tw": "岡山高醫",
						"En": "Kaohsiung Medical University Gangshan Hospital"
					},
					"RunTime": 180,
					"StopTime": 25
				},
				{
					"Sequence": 24,
					"FromStationID": "R24",
					"FromStationName": {
						"Zh_tw": "岡山高醫",
						"En": "Kaohsiung Medical University Gangshan Hospital"
					},
					"ToStationID": "RK1",
					"ToStationName": {
						"Zh_tw": "岡山車站",
						"En": "Gangshan Station"
					},
					"RunTime": 120,
					"StopTime": 25
				}
			],
			"SrcUpdateTime": "2024-07-05T10:30:00+08:00",
			"UpdateTime": "2024-07-05T17:15:18+08:00",
			"VersionID": 26
		}
	]`;
}
//#endregion 運行時間

class Station {
	Line: string;
	Sequence: number;
	StationID: string;
	StationName_ZhTw: string;
	StationName_En: string;
	CumulativeDistance: number;

	constructor(Line: string, sequence: number, stationID: string, zh_tw: string, en: string, cumulativeDistance: number) {
		this.Line = Line;
		this.Sequence = sequence;
		this.StationID = stationID;
		this.StationName_ZhTw = zh_tw;
		this.StationName_En = en;
		this.CumulativeDistance = cumulativeDistance;
	}
}

class StationInfo {
	StationUID: string;
	StationID: string;
	StationName_ZhTW: string;
	StationName_En: string;
	BikeAllowOnHoliday: boolean;
	SrcUpdateTime: string;
	UpdateTime: string;
	VersionID: number;
	StationPosition_Lon: number;
	StationPosition_Lat: number;
	StationPosition_GeoHash: string;
	LocationCity: string;
	LocationCityCode: string;
	LocationTown: string;
	LocationTownCode: string;

	constructor(stationUID: string, stationID: string, zh_tw: string, en: string, bikeAllowOnHoliday: boolean,
		srcUpdateTime: string, updateTime: string, versionID: number, positionLon: number, positionLat: number,
		geoHash: string, locationCity: string, locationCityCode: string, locationTown: string, locationTownCode: string) {
		this.StationUID = stationUID;
		this.StationID = stationID;
		this.StationName_ZhTW = zh_tw;
		this.StationName_En = en;
		this.BikeAllowOnHoliday = bikeAllowOnHoliday;
		this.SrcUpdateTime = srcUpdateTime;
		this.UpdateTime = updateTime;
		this.VersionID = versionID;
		this.StationPosition_Lon = positionLon;
		this.StationPosition_Lat = positionLat;
		this.StationPosition_GeoHash = geoHash;
		this.LocationCity = locationCity;
		this.LocationCityCode = locationCityCode;
		this.LocationTown = locationTown;
		this.LocationTownCode = locationTownCode;
	}
}

class RunTime {
	Sequence: number;
	FromStationID: string;
	FromStationName: string;
	ToStationID: string;
	ToStationName: string;
	RunTime: number;
	StopTime: number;
	constructor(sequence: number, fromStationID: string, fromStationName: string, toStationID: string, toStationName: string, runTime: number, stopTime: number) {
		this.Sequence = sequence;
		this.FromStationID = fromStationID;
		this.FromStationName = fromStationName;
		this.ToStationID = toStationID;
		this.ToStationName = toStationName;
		this.RunTime = runTime;
		this.StopTime = stopTime;
	}
}

// https://tdx.transportdata.tw/api-service/swagger/basic/268fc230-2e04-471b-a728-a726167c1cfc#/
async function GetKRTCTrafficStations() {
	const rs = [...JSON.parse(KRTCJson())];
	const station = rs.map(r => {
		return {
			Stations: r.Stations.map((x: any) => new Station(r.LineNo, x.Sequence, x.StationID, x.StationName.Zh_tw, x.StationName.En, x.CumulativeDistance))
		}
	}).map(x => x.Stations).flatMap(x => x);
	return [...station] as Station[];
}

async function GetKLRTTrafficStations() {
	const rs = [...JSON.parse(KLRTJson())];
	const station = rs.map(r => {
		return {
			Stations: r.Stations.map((x: any) => new Station(r.LineNo, x.Sequence, x.StationID, x.StationName.Zh_tw, x.StationName.En, x.CumulativeDistance))
		}
	}).map(x => x.Stations).flatMap(x => x);
	return [...station] as Station[];
}

async function GetKLRCStations() {
	const rs = [...JSON.parse(KLRTStationJson())];
	const station = rs.map((x: any) => new StationInfo(x.StationUID, x.StationID, x.StationName.Zh_tw, x.StationName.En, x.BikeAllowOnHoliday
		, x.SrcUpdateTime, x.UpdateTime, x.VersionID, x.StationPosition.PositionLon, x.StationPosition.PositionLat, x.StationPosition.GeoHash,
		x.LocationCity, x.LocationCityCode, x.LocationTown, x.LocationTownCode
	));
	return [...station] as StationInfo[];
}

async function GetKRTCRunTime() {
	const rs = [...JSON.parse(KRTCRunTime())];
	// return rs;
	const runTime = rs.flatMap((x: any) => x.TravelTimes).map((x: any) =>
		new RunTime(x.Sequence, x.FromStationID, x.FromStationName.Zh_tw, x.ToStationID, x.ToStationName.Zh_tw, x.RunTime, x.StopTime));
	return [...runTime] as RunTime[];
}
export { GetKRTCTrafficStations, GetKLRTTrafficStations, GetKLRCStations, GetKRTCRunTime, Station, StationInfo, RunTime };
