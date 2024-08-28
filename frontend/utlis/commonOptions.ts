type optionType = {
  label: string;
  value: string;
};

export const sortOptions: optionType[] = [
  { label: "金額：高い順", value: "金額：高い順" },
  { label: "金額：低い順", value: "金額：低い順" },
];

export const zoneOptions: optionType[] = [
  { label: "未選択", value: "未選択" },
  { label: "ゾーン1", value: "Zone1" },
  { label: "ゾーン2", value: "Zone2" },
  { label: "ゾーン3", value: "Zone3" },
];
export const areaOptions: optionType[] = [
  { label: "未選択", value: "未選択" },
  { label: "ダウンタウン", value: "ダウンタウン" },
  { label: "イーストバンクーバー", value: "イーストバンクーバー" },
  { label: "ウェストバンクーバー", value: "ウェストバンクーバー" },
  { label: "ノースバンクーバー", value: "ノースバンクーバー" },
  { label: "サウスバンクーバー", value: "サウスバンクーバー" },
  { label: "リッチモンド", value: "リッチモンド" },
  { label: "バーナビー", value: "バーナビー" },
];

// export const zoneAreaOptions = [{ zone1: ["ダウンタウン"] }];
