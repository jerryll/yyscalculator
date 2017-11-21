var app = new Vue({
  el: '#app',
  data: {
    Nka: [{
        name: "天邪鬼赤",
        clue: "红鬼/拍屁股"
      },
      {
        name: "天邪鬼青",
        clue: "风筝/青皮肤"
      },
      {
        name: "天邪鬼黄",
        clue: "鼓/单眼"
      },
      {
        name: "天邪鬼绿"
      },
      {
        name: "灯笼鬼"
      },
      {
        name: "赤舌"
      },
      {
        name: "涂壁",
        clue: "石/墙/青苔"
      },
      {
        name: "唐纸伞妖"
      },
      {
        name: "提灯小僧"
      },
      {
        name: "帚神"
      },
      {
        name: "寄生魂"
      },
      {
        name: "盗墓小鬼"
      }
    ],
    Rka: [{
        name: "三尾狐",
        clue: "妖艳/红尾/樱花树/红色"
      },
      {
        name: "座敷童子",
        clue: "鬼火/角/财富/幸运"
      },
      {
        name: "鲤鱼精",
        clue: "水池/尾巴"
      },
      {
        name: "九命猫"
      },
      {
        name: "狸猫"
      },
      {
        name: "河童",
        clue: "水球/河流/荷叶"
      },
      {
        name: "童男",
        clue: "翅膀/羽衣/献祭"
      },
      {
        name: "童女",
        clue: "翅膀/羽衣/幼女"
      },
      {
        name: "饿鬼"
      },
      {
        name: "管狐"
      },
      {
        name: "巫蛊师",
        clue: "蛊/迷魂"
      },
      {
        name: "鸦天狗",
        clue: "薙刀/翅膀/面具"
      },
      {
        name: "食发鬼",
        clue: "蒲公英/治愈/叮~"
      },
      {
        name: "武士之灵"
      },
      {
        name: "雨女",
        clue: "泪珠/雨/伞"
      },
      {
        name: "跳跳弟弟"
      },
      {
        name: "跳跳妹妹"
      },
      {
        name: "兵俑",
        clue: "剑/坚甲/石化"
      },
      {
        name: "丑时之女",
        clue: "稻草人/咒锥"
      },
      {
        name: "独眼小僧",
        clue: "单眼/石菩萨/金刚经"
      },
      {
        name: "铁鼠"
      },
      {
        name: "椒图",
        clue: "扇子/水/贝壳/尾巴"
      },
      {
        name: "山兔",
        clue: "手鼓/小妖精/可爱"
      },
      {
        name: "莹草",
        clue: "蒲公英/治疗"
      },
      {
        name: "蝴蝶精"
      },
      {
        name: "山童",
        clue: "单眼/石锤/怪力"
      },
      {
        name: "首无"
      },
      {
        name: "青蛙瓷器",
        clue: "二筒/瓷/出千"
      },
      {
        name: "古笼火"
      },
      {
        name: "兔丸"
      },
    ],
    SRka: [{
        name: "桃花妖",
        clue: "花/舞"
      },
      {
        name: "雪女"
      },
      {
        name: "鬼使白",
        clue: "冥界/白/夺命"
      },
      {
        name: "鬼使黑",
        clue: "黑镰/短刀"
      },
      {
        name: "孟婆",
        clue: "汤碗/琴/牙牙"
      },
      {
        name: "犬神",
        clue: "剑/柴犬/雀/屋/守护"
      },
      {
        name: "骨女",
        clue: "骷髅/怨恨/剑"
      },
      {
        name: "鬼女红叶",
        clue: "美丽的女妖怪/身上饰品"
      },
      {
        name: "跳跳哥哥",
        clue: "蜡烛/棺材"
      },
      {
        name: "傀儡师",
        clue: "人偶/操纵"
      },
      {
        name: "海坊主",
        clue: "海/胡须/杖"
      },
      {
        name: "判官"
      },
      {
        name: "凤凰火"
      },
      {
        name: "吸血姬",
        clue: "血/蝙蝠"
      },
      {
        name: "妖狐",
        clue: "纸扇/书生/面具"
      },
      {
        name: "妖琴师"
      },
      {
        name: "食梦貘",
        clue: "铃铛/噩梦"
      },
      {
        name: "清姬"
      },
      {
        name: "镰鼬",
        clue: "锤/钉耙/剑"
      },
      {
        name: "姑获鸟"
      },
      {
        name: "二口女"
      },
      {
        name: "白狼"
      },
      {
        name: "樱花妖"
      },
      {
        name: "惠比寿"
      },
      {
        name: "络新妇"
      },
      {
        name: "般若"
      },
      {
        name: "青坊主"
      },
      {
        name: "万年竹"
      },
      {
        name: "黑童子"
      },
      {
        name: "白童子"
      },
      {
        name: "烟烟罗"
      },
      {
        name: "金鱼姬"
      },
      {
        name: "鸩"
      },
      {
        name: "以津真天"
      },
      {
        name: "匣中少女"
      },
      {
        name: "小松丸"
      },
      {
        name: "书翁"
      },
      {
        name: "百目鬼"
      }
    ],
    SSRka: [{
        name: "大天狗",
        clue: "大翅膀/风/羽毛/笛子/扇"
      },
      {
        name: "酒吞童子"
      },
      {
        name: "荒川之主"
      },
      {
        name: "阎魔",
        clue: "云/鬼面/冥界"
      },
      {
        name: "两面佛"
      },
      {
        name: "小鹿男"
      },
      {
        name: "茨木童子"
      },
      {
        name: "青行灯"
      },
      {
        name: "妖刀姬"
      },
      {
        name: "一目连"
      },
      {
        name: "花鸟卷"
      },
      {
        name: "辉夜姬"
      },
      {
        name: "吸血姬"
      },
      {
        name: "荒"
      },
      {
        name: "彼岸花"
      },
      {
        name: "雪童子"
      },
      {
        name: "玉藻前"
      }
    ]
  }
})
