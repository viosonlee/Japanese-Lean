import { Lesson } from './types';

// 基于《大家的日本语》第1-25课的完整数据
export const N5_LESSONS: Lesson[] = [
  {
    id: 1,
    title: "第1課：はじめまして",
    description: "自我介绍 / N1はN2です",
    vocabularies: [
      { id: "v1-1", kana: "わたし", kanji: "私", romaji: "watashi", type: "名詞", meaning: "我" },
      { id: "v1-2", kana: "あなた", kanji: "", romaji: "anata", type: "名詞", meaning: "你" },
      { id: "v1-3", kana: "あのひと", kanji: "あの人", romaji: "anohito", type: "名詞", meaning: "那个人 (あのかた是礼貌说法)" },
      { id: "v1-4", kana: "せんせい", kanji: "先生", romaji: "sensei", type: "名詞", meaning: "老师 (不用于称呼自己)" },
      { id: "v1-5", kana: "きょうし", kanji: "教師", romaji: "kyoushi", type: "名詞", meaning: "教师 (职业)" },
      { id: "v1-6", kana: "がくせい", kanji: "学生", romaji: "gakusei", type: "名詞", meaning: "学生" },
      { id: "v1-7", kana: "かいしゃいん", kanji: "会社員", romaji: "kaishain", type: "名詞", meaning: "公司职员" },
      { id: "v1-8", kana: "しゃいん", kanji: "社員", romaji: "shain", type: "名詞", meaning: "～公司的职员 (IMCの社員)" },
      { id: "v1-9", kana: "ぎんこういん", kanji: "銀行員", romaji: "ginkouin", type: "名詞", meaning: "银行职员" },
      { id: "v1-10", kana: "いしゃ", kanji: "医者", romaji: "isha", type: "名詞", meaning: "医生" },
      { id: "v1-11", kana: "けんきゅうしゃ", kanji: "研究者", romaji: "kenkyuusha", type: "名詞", meaning: "研究人员" },
      { id: "v1-12", kana: "だいがく", kanji: "大学", romaji: "daigaku", type: "名詞", meaning: "大学" },
      { id: "v1-13", kana: "びょういん", kanji: "病院", romaji: "byouin", type: "名詞", meaning: "医院" },
      { id: "v1-14", kana: "だれ", kanji: "誰", romaji: "dare", type: "疑問詞", meaning: "谁 (哪位: どなた)" },
      { id: "v1-15", kana: "さい", kanji: "歳", romaji: "sai", type: "接尾辞", meaning: "～岁" },
      { id: "v1-16", kana: "なんさい", kanji: "何歳", romaji: "nansai", type: "疑問詞", meaning: "几岁 (多大年纪: おいくつ)" },
      { id: "v1-17", kana: "はい", kanji: "", romaji: "hai", type: "感嘆詞", meaning: "是、对" },
      { id: "v1-18", kana: "いいえ", kanji: "", romaji: "iie", type: "感嘆詞", meaning: "不、不是" },
      { id: "v1-19", kana: "アメリカ", kanji: "", romaji: "amerika", type: "国名", meaning: "美国" },
      { id: "v1-20", kana: "イギリス", kanji: "", romaji: "igirisu", type: "国名", meaning: "英国" },
      { id: "v1-21", kana: "ちゅうごく", kanji: "中国", romaji: "chuugoku", type: "国名", meaning: "中国" },
      { id: "v1-22", kana: "にほん", kanji: "日本", romaji: "nihon", type: "国名", meaning: "日本" },
    ],
    grammars: [
      { id: "g1-1", pattern: "N1 は N2 です", explanation: "判断句：A是B", examples: [{ jp: "わたしは マイク・ミラーです。", cn: "我是迈克·米勒。" }] },
      { id: "g1-2", pattern: "N1 は N2 じゃありません", explanation: "否定句：A不是B (口语)", examples: [{ jp: "サントスさんは 学生じゃありません。", cn: "桑托斯先生不是学生。" }] },
      { id: "g1-3", pattern: "S か", explanation: "疑问句：...吗？", examples: [{ jp: "ミラーさんは アメリカ人ですか。", cn: "米勒先生是美国人吗？" }] },
      { id: "g1-4", pattern: "N も", explanation: "助词“也”", examples: [{ jp: "ミラーさんは 会社員です。グプタさんも 会社員です。", cn: "米勒先生是公司职员，古普塔先生也是。" }] }
    ],
    readings: [
      {
        id: "r1-A",
        title: "会話：初次见面",
        type: "dialogue",
        content: [
          { id: "s1", role: "佐藤", japanese: "おはよう ございます。", chinese: "早上好。" },
          { id: "s2", role: "山田", japanese: "おはよう ございます。\n佐藤さん、こちらは マイク・ミラーさんです。", chinese: "早上好。佐藤小姐，这位是迈克·米勒先生。" },
          { id: "s3", role: "ミラー", japanese: "はじめまして。\nマイク・ミラーです。\nアメリカから 来ました。\nどうぞ よろしく。", chinese: "初次见面。我是迈克·米勒。我从美国来。请多关照。" },
          { id: "s4", role: "佐藤", japanese: "佐藤けい子です。\nどうぞ よろしく。", chinese: "我是佐藤惠子。请多关照。" }
        ]
      }
    ],
    quizzes: [
      { id: "q1-1", question: "わたし（　）マイク・ミラーです。", options: [{id:"o1", label:"は", isCorrect:true}, {id:"o2", label:"の", isCorrect:false}], explanation: "提示主题用 は。" }
    ]
  },
  {
    id: 2,
    title: "第2課：これから お世話になります",
    description: "指示代词 / これ・それ・あれ",
    vocabularies: [
      { id: "v2-1", kana: "これ", kanji: "", romaji: "kore", type: "代名詞", meaning: "这个 (离说话人近)" },
      { id: "v2-2", kana: "それ", kanji: "", romaji: "sore", type: "代名詞", meaning: "那个 (离听话人近)" },
      { id: "v2-3", kana: "あれ", kanji: "", romaji: "are", type: "代名詞", meaning: "那个 (离两人都远)" },
      { id: "v2-4", kana: "この", kanji: "", romaji: "kono", type: "連体詞", meaning: "这个～" },
      { id: "v2-5", kana: "その", kanji: "", romaji: "sono", type: "連体詞", meaning: "那个～" },
      { id: "v2-6", kana: "あの", kanji: "", romaji: "ano", type: "連体詞", meaning: "那个～" },
      { id: "v2-7", kana: "ほん", kanji: "本", romaji: "hon", type: "名詞", meaning: "书" },
      { id: "v2-8", kana: "じしょ", kanji: "辞書", romaji: "jisho", type: "名詞", meaning: "词典" },
      { id: "v2-9", kana: "ざっし", kanji: "雑誌", romaji: "zasshi", type: "名詞", meaning: "杂志" },
      { id: "v2-10", kana: "しんぶん", kanji: "新聞", romaji: "shinbun", type: "名詞", meaning: "报纸" },
      { id: "v2-11", kana: "ノート", kanji: "", romaji: "nooto", type: "名詞", meaning: "笔记本" },
      { id: "v2-12", kana: "てちょう", kanji: "手帳", romaji: "techou", type: "名詞", meaning: "记事本" },
      { id: "v2-13", kana: "めいし", kanji: "名刺", romaji: "meishi", type: "名詞", meaning: "名片" },
      { id: "v2-14", kana: "カード", kanji: "", romaji: "kaado", type: "名詞", meaning: "卡片" },
      { id: "v2-15", kana: "えんぴつ", kanji: "鉛筆", romaji: "enpitsu", type: "名詞", meaning: "铅笔" },
      { id: "v2-16", kana: "ボールペン", kanji: "", romaji: "boorupen", type: "名詞", meaning: "圆珠笔" },
      { id: "v2-17", kana: "かぎ", kanji: "鍵", romaji: "kagi", type: "名詞", meaning: "钥匙" },
      { id: "v2-18", kana: "とけい", kanji: "時計", romaji: "tokei", type: "名詞", meaning: "钟表" },
      { id: "v2-19", kana: "かさ", kanji: "傘", romaji: "kasa", type: "名詞", meaning: "伞" },
      { id: "v2-20", kana: "かばん", kanji: "鞄", romaji: "kaban", type: "名詞", meaning: "包" },
      { id: "v2-21", kana: "じどうしゃ", kanji: "自動車", romaji: "jidousha", type: "名詞", meaning: "汽车" },
      { id: "v2-22", kana: "つくえ", kanji: "机", romaji: "tsukue", type: "名詞", meaning: "桌子" },
      { id: "v2-23", kana: "いす", kanji: "椅子", romaji: "isu", type: "名詞", meaning: "椅子" },
      { id: "v2-24", kana: "コーヒー", kanji: "", romaji: "koohii", type: "名詞", meaning: "咖啡" },
      { id: "v2-25", kana: "えいご", kanji: "英語", romaji: "eigo", type: "名詞", meaning: "英语" },
      { id: "v2-26", kana: "にほんご", kanji: "日本語", romaji: "nihongo", type: "名詞", meaning: "日语" },
      { id: "v2-27", kana: "なん", kanji: "何", romaji: "nan", type: "疑問詞", meaning: "什么" },
    ],
    grammars: [
      { id: "g2-1", pattern: "これ/それ/あれ は N です", explanation: "指示代词做主语。", examples: [{ jp: "これは 辞書です。", cn: "这是词典。" }] },
      { id: "g2-2", pattern: "この/その/あの N", explanation: "连体词修饰名词。", examples: [{ jp: "この本は わたしのです。", cn: "这本书是我的。" }] },
      { id: "g2-3", pattern: "そうです/ちがいます", explanation: "名词句疑问句的回答。", examples: [{ jp: "それは 手帳ですか。\nいいえ、ちがいます。", cn: "那是记事本吗？不，不是。" }] },
      { id: "g2-4", pattern: "N1 の N2", explanation: "表示所属或内容。", examples: [{ jp: "これは コンピューターの 本です。", cn: "这是讲计算机的书。" }, { jp: "これは わたしの 本です。", cn: "这是我的书。" }] }
    ],
    readings: [
      {
        id: "r2-A",
        title: "会話：一点心意",
        type: "dialogue",
        content: [
          { id: "s1", role: "山田", japanese: "はい。どなたですか。", chinese: "来了。哪位？" },
          { id: "s2", role: "ミラー", japanese: "408の ミラーです。", chinese: "我是408室的米勒。" },
          { id: "s3", role: "山田", japanese: "あ、ミラーさん。こんばんは。", chinese: "啊，米勒先生。晚上好。" },
          { id: "s4", role: "ミラー", japanese: "これから お世話に なります。\nどうぞ よろしく お願いします。", chinese: "今后要承蒙您照顾了。请多关照。" },
          { id: "s5", role: "山田", japanese: "こちらこそ よろしく。", chinese: "哪里哪里，也请您多关照。" },
          { id: "s6", role: "ミラー", japanese: "あのう、これ、ほんの 気持ちです。", chinese: "那个，这是一点小意思。" },
          { id: "s7", role: "山田", japanese: "あ、どうも……。何ですか。", chinese: "啊，谢谢……。是什么？" },
          { id: "s8", role: "ミラー", japanese: "コーヒーです。\nどうぞ。", chinese: "是咖啡。请收下。" },
          { id: "s9", role: "山田", japanese: "どうも ありがとう ございます。", chinese: "非常感谢。" }
        ]
      }
    ],
    quizzes: [
        { id: "q2-1", question: "（　）本は わたしのです。", options: [{id:"o1", label:"これ", isCorrect:false}, {id:"o2", label:"この", isCorrect:true}], explanation: "修饰名词时使用连体词「この」。" }
    ]
  },
  {
    id: 3,
    title: "第3課：これを ください",
    description: "场所 / ここ・そこ・あそこ",
    vocabularies: [
      { id: "v3-1", kana: "ここ", kanji: "", romaji: "koko", type: "代名詞", meaning: "这里" },
      { id: "v3-2", kana: "そこ", kanji: "", romaji: "soko", type: "代名詞", meaning: "那里" },
      { id: "v3-3", kana: "あそこ", kanji: "", romaji: "asoko", type: "代名詞", meaning: "那里 (远处)" },
      { id: "v3-4", kana: "どこ", kanji: "", romaji: "doko", type: "疑問詞", meaning: "哪里" },
      { id: "v3-5", kana: "きょうしつ", kanji: "教室", romaji: "kyoushitsu", type: "名詞", meaning: "教室" },
      { id: "v3-6", kana: "しょくどう", kanji: "食堂", romaji: "shokudou", type: "名詞", meaning: "食堂" },
      { id: "v3-7", kana: "じむしょ", kanji: "事務所", romaji: "jimusho", type: "名詞", meaning: "办公室" },
      { id: "v3-8", kana: "かいぎしつ", kanji: "会議室", romaji: "kaigishitsu", type: "名詞", meaning: "会议室" },
      { id: "v3-9", kana: "うけつけ", kanji: "受付", romaji: "uketsuke", type: "名詞", meaning: "接待处" },
      { id: "v3-10", kana: "ロビー", kanji: "", romaji: "robii", type: "名詞", meaning: "大厅" },
      { id: "v3-11", kana: "へや", kanji: "部屋", romaji: "heya", type: "名詞", meaning: "房间" },
      { id: "v3-12", kana: "トイレ", kanji: "", romaji: "toire", type: "名詞", meaning: "厕所 (お手洗い)" },
      { id: "v3-13", kana: "かいだん", kanji: "階段", romaji: "kaidan", type: "名詞", meaning: "楼梯" },
      { id: "v3-14", kana: "エレベーター", kanji: "", romaji: "erebeetaa", type: "名詞", meaning: "电梯" },
      { id: "v3-15", kana: "エスカレーター", kanji: "", romaji: "esukareetaa", type: "名詞", meaning: "自动扶梯" },
      { id: "v3-16", kana: "くに", kanji: "お国", romaji: "kuni", type: "名詞", meaning: "贵国" },
      { id: "v3-17", kana: "かいしゃ", kanji: "会社", romaji: "kaisha", type: "名詞", meaning: "公司" },
      { id: "v3-18", kana: "うち", kanji: "", romaji: "uchi", type: "名詞", meaning: "家" },
      { id: "v3-19", kana: "でんわ", kanji: "電話", romaji: "denwa", type: "名詞", meaning: "电话" },
      { id: "v3-20", kana: "くつ", kanji: "靴", romaji: "kutsu", type: "名詞", meaning: "鞋" },
      { id: "v3-21", kana: "ネクタイ", kanji: "", romaji: "nekutai", type: "名詞", meaning: "领带" },
      { id: "v3-22", kana: "ワイン", kanji: "", romaji: "wain", type: "名詞", meaning: "葡萄酒" },
      { id: "v3-23", kana: "うりば", kanji: "売り場", romaji: "uriba", type: "名詞", meaning: "柜台、卖场" },
      { id: "v3-24", kana: "ちか", kanji: "地下", romaji: "chika", type: "名詞", meaning: "地下" },
      { id: "v3-25", kana: "いくら", kanji: "", romaji: "ikura", type: "疑問詞", meaning: "多少钱" },
      { id: "v3-26", kana: "ひゃく", kanji: "百", romaji: "hyaku", type: "数詞", meaning: "百" },
      { id: "v3-27", kana: "せん", kanji: "千", romaji: "sen", type: "数詞", meaning: "千" },
      { id: "v3-28", kana: "まん", kanji: "万", romaji: "man", type: "数詞", meaning: "万" },
    ],
    grammars: [
      { id: "g3-1", pattern: "ここ/そこ/あそこ", explanation: "指示代词（场所）。", examples: [{ jp: "ここは 教室です。", cn: "这里是教室。" }] },
      { id: "g3-2", pattern: "N は place です", explanation: "存在场所（人/物在哪里）。", examples: [{ jp: "お手洗いは あそこです。", cn: "洗手间在那里。" }, { jp: "ミラーさんは 事務所です。", cn: "米勒先生在办公室。" }] },
      { id: "g3-3", pattern: "N の N (所属)", explanation: "产地、所属。", examples: [{ jp: "これは どこの ネクタイですか。", cn: "这是哪里的领带？" }, { jp: "イタリアの ネクタイです。", cn: "是意大利的领带。" }] },
      { id: "g3-4", pattern: "お国は どちらですか", explanation: "礼貌询问国家/公司。", examples: [{ jp: "お国は どちらですか。", cn: "您是哪国人？" }] }
    ],
    readings: [
      {
        id: "r3-A",
        title: "会話：请给我这个",
        type: "dialogue",
        content: [
          { id: "s1", role: "店員", japanese: "いらっしゃいませ。", chinese: "欢迎光临。" },
          { id: "s2", role: "マリア", japanese: "すみません。\nワイン売り場は どこですか。", chinese: "请问，卖葡萄酒的柜台在哪里？" },
          { id: "s3", role: "店員", japanese: "地下1階です。", chinese: "在地下一层。" },
          { id: "s4", role: "マリア", japanese: "どうも。", chinese: "谢谢。" },
          { id: "s5", role: "店員", japanese: "いらっしゃいませ。", chinese: "欢迎光临 (地下柜台)。" },
          { id: "s6", role: "マリア", japanese: "その ワインを 見せて ください。", chinese: "请让我看看那种酒。" },
          { id: "s7", role: "店員", japanese: "はい、どうぞ。", chinese: "好的，请看。" },
          { id: "s8", role: "マリア", japanese: "これは フランスの ワインですか。", chinese: "这是法国酒吗？" },
          { id: "s9", role: "店員", japanese: "いいえ、イタリアのです。", chinese: "不，是意大利的。" },
          { id: "s10", role: "マリア", japanese: "いくらですか。", chinese: "多少钱？" },
          { id: "s11", role: "店員", japanese: "2,500円です。", chinese: "2500日元。" },
          { id: "s12", role: "マリア", japanese: "じゃ、これを ください。", chinese: "好，请给我这个。" }
        ]
      }
    ],
    quizzes: [
        { id: "q3-1", question: "トイレは（　）ですか。", options: [{id:"o1", label:"どちら", isCorrect:true}, {id:"o2", label:"だれ", isCorrect:false}], explanation: "询问场所或方向时用「どちら」比「どこ」更礼貌。" }
    ]
  },
  {
    id: 4,
    title: "第4課：そちらは 何時からですか",
    description: "时间 / 动词ます形",
    vocabularies: [
      { id: "v4-1", kana: "おきます", kanji: "起きます", romaji: "okimasu", type: "動詞", meaning: "起床" },
      { id: "v4-2", kana: "ねます", kanji: "寝ます", romaji: "nemasu", type: "動詞", meaning: "睡觉" },
      { id: "v4-3", kana: "はたらきます", kanji: "働きます", romaji: "hatarakimasu", type: "動詞", meaning: "工作" },
      { id: "v4-4", kana: "やすみます", kanji: "休みます", romaji: "yasumimasu", type: "動詞", meaning: "休息" },
      { id: "v4-5", kana: "べんきょうします", kanji: "勉強します", romaji: "benkyoushimasu", type: "動詞", meaning: "学习" },
      { id: "v4-6", kana: "おわります", kanji: "終わります", romaji: "owarimasu", type: "動詞", meaning: "结束" },
      { id: "v4-7", kana: "デパート", kanji: "", romaji: "depaato", type: "名詞", meaning: "百货商店" },
      { id: "v4-8", kana: "ぎんこう", kanji: "銀行", romaji: "ginkou", type: "名詞", meaning: "银行" },
      { id: "v4-9", kana: "ゆうびんきょく", kanji: "郵便局", romaji: "yuubinkyoku", type: "名詞", meaning: "邮局" },
      { id: "v4-10", kana: "としょかん", kanji: "図書館", romaji: "toshokan", type: "名詞", meaning: "图书馆" },
      { id: "v4-11", kana: "びじゅつかん", kanji: "美術館", romaji: "bijutsukan", type: "名詞", meaning: "美术馆" },
      { id: "v4-12", kana: "いま", kanji: "今", romaji: "ima", type: "名詞", meaning: "现在" },
      { id: "v4-13", kana: "～じ", kanji: "～時", romaji: "ji", type: "助数詞", meaning: "～点" },
      { id: "v4-14", kana: "～ふん", kanji: "～分", romaji: "fun", type: "助数詞", meaning: "～分" },
      { id: "v4-15", kana: "はん", kanji: "半", romaji: "han", type: "名詞", meaning: "半" },
      { id: "v4-16", kana: "なんじ", kanji: "何時", romaji: "nanji", type: "疑問詞", meaning: "几点" },
      { id: "v4-17", kana: "なんぷん", kanji: "何分", romaji: "nanpun", type: "疑問詞", meaning: "几分" },
      { id: "v4-18", kana: "ごぜん", kanji: "午前", romaji: "gozen", type: "名詞", meaning: "上午" },
      { id: "v4-19", kana: "ごご", kanji: "午後", romaji: "gogo", type: "名詞", meaning: "下午" },
      { id: "v4-20", kana: "あさ", kanji: "朝", romaji: "asa", type: "名詞", meaning: "早上" },
      { id: "v4-21", kana: "ひる", kanji: "昼", romaji: "hiru", type: "名詞", meaning: "白天、中午" },
      { id: "v4-22", kana: "ばん", kanji: "晩", romaji: "ban", type: "名詞", meaning: "晚上 (夜: よる)" },
      { id: "v4-23", kana: "おととい", kanji: "", romaji: "ototoi", type: "名詞", meaning: "前天" },
      { id: "v4-24", kana: "きのう", kanji: "", romaji: "kinou", type: "名詞", meaning: "昨天" },
      { id: "v4-25", kana: "きょう", kanji: "", romaji: "kyou", type: "名詞", meaning: "今天" },
      { id: "v4-26", kana: "あした", kanji: "", romaji: "ashita", type: "名詞", meaning: "明天" },
      { id: "v4-27", kana: "あさって", kanji: "", romaji: "asatte", type: "名詞", meaning: "后天" },
      { id: "v4-28", kana: "けさ", kanji: "今朝", romaji: "kesa", type: "名詞", meaning: "今天早上" },
      { id: "v4-29", kana: "こんばん", kanji: "今晩", romaji: "konban", type: "名詞", meaning: "今天晚上" },
      { id: "v4-30", kana: "やすみ", kanji: "休み", romaji: "yasumi", type: "名詞", meaning: "休息、假期" },
      { id: "v4-31", kana: "ひるやすみ", kanji: "昼休み", romaji: "hiruyasumi", type: "名詞", meaning: "午休" },
      { id: "v4-32", kana: "まいにち", kanji: "毎日", romaji: "mainichi", type: "名詞", meaning: "每天" },
      { id: "v4-33", kana: "げつようび", kanji: "月曜日", romaji: "getsuyoubi", type: "名詞", meaning: "星期一" },
      { id: "v4-34", kana: "かようび", kanji: "火曜日", romaji: "kayoubi", type: "名詞", meaning: "星期二" },
      { id: "v4-35", kana: "すいようび", kanji: "水曜日", romaji: "suiyoubi", type: "名詞", meaning: "星期三" },
      { id: "v4-36", kana: "もくようび", kanji: "木曜日", romaji: "mokuyoubi", type: "名詞", meaning: "星期四" },
      { id: "v4-37", kana: "きんようび", kanji: "金曜日", romaji: "kinyoubi", type: "名詞", meaning: "星期五" },
      { id: "v4-38", kana: "どようび", kanji: "土曜日", romaji: "doyoubi", type: "名詞", meaning: "星期六" },
      { id: "v4-39", kana: "にちようび", kanji: "日曜日", romaji: "nichiyoubi", type: "名詞", meaning: "星期日" },
    ],
    grammars: [
      { id: "g4-1", pattern: "今～時～分", explanation: "时刻表达。", examples: [{ jp: "今 4時5分です。", cn: "现在是4点5分。" }] },
      { id: "g4-2", pattern: "Vます / Vません / Vました", explanation: "动词时态（现在/过去/否定）。", examples: [{ jp: "わたしは 毎日 勉強します。", cn: "我每天学习。" }, { jp: "あした 働きません。", cn: "明天不工作。" }, { jp: "きのう 勉強しました。", cn: "昨天学习了。" }] },
      { id: "g4-3", pattern: "Time に V", explanation: "动作发生的时间点。", examples: [{ jp: "わたしは 6時に 起きます。", cn: "我6点起床。" }] },
      { id: "g4-4", pattern: "Time から Time まで", explanation: "时间的起点与终点。", examples: [{ jp: "9時から 5時まで 働きます。", cn: "从9点工作到5点。" }] }
    ],
    readings: [
      {
        id: "r4-A",
        title: "会話：那边几点开始？",
        type: "dialogue",
        content: [
          { id: "s1", role: "番号案内", japanese: "はい、104の 石田です。", chinese: "你好，这里是104查号台石田。" },
          { id: "s2", role: "ミラー", japanese: "大和美術館の 電話番号を お願いします。", chinese: "请帮我查一下大和美术馆的号码。" },
          { id: "s3", role: "番号案内", japanese: "大和美術館ですね。\n0797-38-5432です。", chinese: "是大和美术馆吧。号码是0797-38-5432。" },
          { id: "s4", role: "ミラー", japanese: "はい、ありがとう ございました。", chinese: "好的，谢谢。" },
          { id: "s5", role: "", japanese: "（通話）", chinese: "（拨通电话）" },
          { id: "s6", role: "館員", japanese: "はい、大和美術館です。", chinese: "你好，这里是大和美术馆。" },
          { id: "s7", role: "ミラー", japanese: "すみません。\nそちらは 何時から 何時までですか。", chinese: "请问，你们那里几点开到几点？" },
          { id: "s8", role: "館員", japanese: "9時から 4時までです。", chinese: "9点到4点。" },
          { id: "s9", role: "ミラー", japanese: "休みは 何曜日ですか。", chinese: "星期几休息？" },
          { id: "s10", role: "館員", japanese: "月曜日です。", chinese: "星期一。" },
          { id: "s11", role: "ミラー", japanese: "どうも ありがとう ございました。", chinese: "非常感谢。" }
        ]
      }
    ],
    quizzes: [
        { id: "q4-1", question: "きのう 10時に（　）。", options: [{id:"o1", label:"寝ます", isCorrect:false}, {id:"o2", label:"寝ました", isCorrect:true}], explanation: "时间是昨天，动词要用过去式。" }
    ]
  },
  {
    id: 5,
    title: "第5課：甲子園へ 行きます",
    description: "移动 / 行きます・来ます・帰ります",
    vocabularies: [
      { id: "v5-1", kana: "いきます", kanji: "行きます", romaji: "ikimasu", type: "動詞", meaning: "去" },
      { id: "v5-2", kana: "きます", kanji: "来ます", romaji: "kimasu", type: "動詞", meaning: "来" },
      { id: "v5-3", kana: "かえります", kanji: "帰ります", romaji: "kaerimasu", type: "動詞", meaning: "回去" },
      { id: "v5-4", kana: "がっこう", kanji: "学校", romaji: "gakkou", type: "名詞", meaning: "学校" },
      { id: "v5-5", kana: "スーパー", kanji: "", romaji: "suupaa", type: "名詞", meaning: "超市" },
      { id: "v5-6", kana: "えき", kanji: "駅", romaji: "eki", type: "名詞", meaning: "车站" },
      { id: "v5-7", kana: "ひこうき", kanji: "飛行機", romaji: "hikouki", type: "名詞", meaning: "飞机" },
      { id: "v5-8", kana: "ふね", kanji: "船", romaji: "fune", type: "名詞", meaning: "船" },
      { id: "v5-9", kana: "でんしゃ", kanji: "電車", romaji: "densha", type: "名詞", meaning: "电车" },
      { id: "v5-10", kana: "ちかてつ", kanji: "地下鉄", romaji: "chikatetsu", type: "名詞", meaning: "地铁" },
      { id: "v5-11", kana: "しんかんせん", kanji: "新幹線", romaji: "shinkansen", type: "名詞", meaning: "新干线" },
      { id: "v5-12", kana: "バス", kanji: "", romaji: "basu", type: "名詞", meaning: "公共汽车" },
      { id: "v5-13", kana: "タクシー", kanji: "", romaji: "takushii", type: "名詞", meaning: "出租车" },
      { id: "v5-14", kana: "じてんしゃ", kanji: "自転車", romaji: "jitensha", type: "名詞", meaning: "自行车" },
      { id: "v5-15", kana: "あるいて", kanji: "歩いて", romaji: "aruite", type: "副詞", meaning: "步行" },
      { id: "v5-16", kana: "ひと", kanji: "人", romaji: "hito", type: "名詞", meaning: "人" },
      { id: "v5-17", kana: "ともだち", kanji: "友達", romaji: "tomodachi", type: "名詞", meaning: "朋友" },
      { id: "v5-18", kana: "かれ", kanji: "彼", romaji: "kare", type: "名詞", meaning: "他、男朋友" },
      { id: "v5-19", kana: "かのじょ", kanji: "彼女", romaji: "kanojo", type: "名詞", meaning: "她、女朋友" },
      { id: "v5-20", kana: "かぞく", kanji: "家族", romaji: "kazoku", type: "名詞", meaning: "家人" },
      { id: "v5-21", kana: "ひとりで", kanji: "一人で", romaji: "hitoride", type: "副詞", meaning: "一个人" },
      { id: "v5-22", kana: "せんしゅう", kanji: "先週", romaji: "senshuu", type: "名詞", meaning: "上周" },
      { id: "v5-23", kana: "こんしゅう", kanji: "今週", romaji: "konshuu", type: "名詞", meaning: "这周" },
      { id: "v5-24", kana: "らいしゅう", kanji: "来週", romaji: "raishuu", type: "名詞", meaning: "下周" },
      { id: "v5-25", kana: "せんげつ", kanji: "先月", romaji: "sengetsu", type: "名詞", meaning: "上个月" },
      { id: "v5-26", kana: "こんげつ", kanji: "今月", romaji: "kongetsu", type: "名詞", meaning: "这个月" },
      { id: "v5-27", kana: "らいげつ", kanji: "来月", romaji: "raigetsu", type: "名詞", meaning: "下个月" },
      { id: "v5-28", kana: "きょねん", kanji: "去年", romaji: "kyonen", type: "名詞", meaning: "去年" },
      { id: "v5-29", kana: "ことし", kanji: "", romaji: "kotoshi", type: "名詞", meaning: "今年" },
      { id: "v5-30", kana: "らいねん", kanji: "来年", romaji: "rainen", type: "名詞", meaning: "明年" },
      { id: "v5-31", kana: "～がつ", kanji: "～月", romaji: "gatsu", type: "助数詞", meaning: "～月" },
      { id: "v5-32", kana: "なんがつ", kanji: "何月", romaji: "nangatsu", type: "疑問詞", meaning: "几月" },
      { id: "v5-33", kana: "ついたち", kanji: "1日", romaji: "tsuitachi", type: "名詞", meaning: "1号" },
      { id: "v5-34", kana: "ふつか", kanji: "2日", romaji: "futsuka", type: "名詞", meaning: "2号" },
      { id: "v5-35", kana: "みっか", kanji: "3日", romaji: "mikka", type: "名詞", meaning: "3号" },
      { id: "v5-36", kana: "よっか", kanji: "4日", romaji: "yokka", type: "名詞", meaning: "4号" },
      { id: "v5-37", kana: "いつか", kanji: "5日", romaji: "itsuka", type: "名詞", meaning: "5号" },
      { id: "v5-38", kana: "むいか", kanji: "6日", romaji: "muika", type: "名詞", meaning: "6号" },
      { id: "v5-39", kana: "なのか", kanji: "7日", romaji: "nanoka", type: "名詞", meaning: "7号" },
      { id: "v5-40", kana: "ようか", kanji: "8日", romaji: "youka", type: "名詞", meaning: "8号" },
      { id: "v5-41", kana: "ここのか", kanji: "9日", romaji: "kokonoka", type: "名詞", meaning: "9号" },
      { id: "v5-42", kana: "とおか", kanji: "10日", romaji: "tooka", type: "名詞", meaning: "10号" },
      { id: "v5-43", kana: "はつか", kanji: "20日", romaji: "hatsuka", type: "名詞", meaning: "20号" },
      { id: "v5-44", kana: "～にち", kanji: "～日", romaji: "nichi", type: "助数詞", meaning: "～号" },
      { id: "v5-45", kana: "たんじょうび", kanji: "誕生日", romaji: "tanjoubi", type: "名詞", meaning: "生日" },
    ],
    grammars: [
      { id: "g5-1", pattern: "Place へ 行きます/来ます/帰ります", explanation: "移动动词。助词「へ」读作「e」。", examples: [{ jp: "わたしは 京都へ 行きます。", cn: "我去京都。" }, { jp: "わたしは うちへ 帰ります。", cn: "我回家。" }] },
      { id: "g5-2", pattern: "Transport で V", explanation: "交通手段。助词「で」表示手段。", examples: [{ jp: "電車で 行きます。", cn: "坐电车去。" }, { jp: "歩いて 行きます。", cn: "走路去 (不用で)。" }] },
      { id: "g5-3", pattern: "Person/Animal と V", explanation: "共同做某事的对象。", examples: [{ jp: "家族と 日本へ 来ました。", cn: "和家人一起来了日本。" }, { jp: "一人で 東京へ 行きます。", cn: "一个人去东京 (不用と)。" }] }
    ],
    readings: [
      {
        id: "r5-A",
        title: "会話：去甲子园",
        type: "dialogue",
        content: [
          { id: "s1", role: "ミラー", japanese: "すみません。\n甲子園まで いくらですか。", chinese: "请问，到甲子园多少钱？" },
          { id: "s2", role: "女の人", japanese: "350円です。", chinese: "350日元。" },
          { id: "s3", role: "ミラー", japanese: "350円ですね。\nありがとう ございました。", chinese: "350日元啊。谢谢。" },
          { id: "s4", role: "ミラー", japanese: "すみません。\n甲子園は 何番線ですか。", chinese: "请问，去甲子园是在几号站台？" },
          { id: "s5", role: "駅員", japanese: "5番線です。", chinese: "5号站台。" },
          { id: "s6", role: "ミラー", japanese: "どうも。", chinese: "谢谢。" },
          { id: "s7", role: "ミラー", japanese: "あのう、この 電車は 甲子園へ 行きますか。", chinese: "请问，这趟车去甲子园吗？" },
          { id: "s8", role: "男の人", japanese: "いいえ。\n次の 「急行」ですよ。", chinese: "不。下一趟“急行”去。" },
          { id: "s9", role: "ミラー", japanese: "そうですか。\nどうも。", chinese: "是吗。谢谢。" }
        ]
      }
    ],
    quizzes: [
        { id: "q5-1", question: "会社（　）行きます。", options: [{id:"o1", label:"へ", isCorrect:true}, {id:"o2", label:"を", isCorrect:false}], explanation: "移动目的地用「へ」(读作e)。" },
        { id: "q5-2", question: "バス（　）うちへ 帰ります。", options: [{id:"o1", label:"で", isCorrect:true}, {id:"o2", label:"と", isCorrect:false}], explanation: "交通手段用「で」。" }
    ]
  },
  {
    id: 6,
    title: "第6課：いっしょに 行きませんか",
    description: "他动词 / ～を します / ～ませんか",
    vocabularies: [
      { id: "v6-1", kana: "たべます", kanji: "食べます", romaji: "tabemasu", type: "動詞", meaning: "吃" },
      { id: "v6-2", kana: "のみます", kanji: "飲みます", romaji: "nomimasu", type: "動詞", meaning: "喝" },
      { id: "v6-3", kana: "すいます", kanji: "吸います", romaji: "suimasu", type: "動詞", meaning: "吸（烟）" },
      { id: "v6-4", kana: "みます", kanji: "見ます", romaji: "mimasu", type: "動詞", meaning: "看" },
      { id: "v6-5", kana: "ききます", kanji: "聞きます", romaji: "kikimasu", type: "動詞", meaning: "听" },
      { id: "v6-6", kana: "よみます", kanji: "読みます", romaji: "yomimasu", type: "動詞", meaning: "读" },
      { id: "v6-7", kana: "かきます", kanji: "書きます", romaji: "kakimasu", type: "動詞", meaning: "写" },
      { id: "v6-8", kana: "かいます", kanji: "買います", romaji: "kaimasu", type: "動詞", meaning: "买" },
      { id: "v6-9", kana: "とります", kanji: "撮ります", romaji: "torimasu", type: "動詞", meaning: "拍（照）" },
      { id: "v6-10", kana: "します", kanji: "", romaji: "shimasu", type: "動詞", meaning: "做" },
      { id: "v6-11", kana: "あいます", kanji: "会います", romaji: "aimasu", type: "動詞", meaning: "遇见（朋友）" },
      { id: "v6-12", kana: "ごはん", kanji: "", romaji: "gohan", type: "名詞", meaning: "饭、米饭" },
      { id: "v6-13", kana: "あさごはん", kanji: "朝ごはん", romaji: "asagohan", type: "名詞", meaning: "早饭" },
      { id: "v6-14", kana: "ひるごはん", kanji: "昼ごはん", romaji: "hirugohan", type: "名詞", meaning: "午饭" },
      { id: "v6-15", kana: "ばんごはん", kanji: "晩ごはん", romaji: "bangohan", type: "名詞", meaning: "晚饭" },
      { id: "v6-16", kana: "パン", kanji: "", romaji: "pan", type: "名詞", meaning: "面包" },
      { id: "v6-17", kana: "たまご", kanji: "卵", romaji: "tamago", type: "名詞", meaning: "鸡蛋" },
      { id: "v6-18", kana: "にく", kanji: "肉", romaji: "niku", type: "名詞", meaning: "肉" },
      { id: "v6-19", kana: "さかな", kanji: "魚", romaji: "sakana", type: "名詞", meaning: "鱼" },
      { id: "v6-20", kana: "やさい", kanji: "野菜", romaji: "yasai", type: "名詞", meaning: "蔬菜" },
      { id: "v6-21", kana: "くだもの", kanji: "果物", romaji: "kudamono", type: "名詞", meaning: "水果" },
      { id: "v6-22", kana: "みず", kanji: "水", romaji: "mizu", type: "名詞", meaning: "水" },
      { id: "v6-23", kana: "おちゃ", kanji: "お茶", romaji: "ocha", type: "名詞", meaning: "茶" },
      { id: "v6-24", kana: "こうちゃ", kanji: "紅茶", romaji: "koucha", type: "名詞", meaning: "红茶" },
      { id: "v6-25", kana: "ぎゅうにゅう", kanji: "牛乳", romaji: "gyuunyuu", type: "名詞", meaning: "牛奶" },
      { id: "v6-26", kana: "ジュース", kanji: "", romaji: "juusu", type: "名詞", meaning: "果汁" },
      { id: "v6-27", kana: "ビール", kanji: "", romaji: "biiru", type: "名詞", meaning: "啤酒" },
      { id: "v6-28", kana: "おさけ", kanji: "お酒", romaji: "osake", type: "名詞", meaning: "酒、日本酒" },
      { id: "v6-29", kana: "ビデオ", kanji: "", romaji: "bideo", type: "名詞", meaning: "录像带" },
      { id: "v6-30", kana: "えいが", kanji: "映画", romaji: "eiga", type: "名詞", meaning: "电影" },
      { id: "v6-31", kana: "てがみ", kanji: "手紙", romaji: "tegami", type: "名詞", meaning: "信" },
      { id: "v6-32", kana: "レポート", kanji: "", romaji: "repooto", type: "名詞", meaning: "报告" },
      { id: "v6-33", kana: "しゃしん", kanji: "写真", romaji: "shashin", type: "名詞", meaning: "照片" },
      { id: "v6-34", kana: "みせ", kanji: "店", romaji: "mise", type: "名詞", meaning: "店" },
      { id: "v6-35", kana: "レストラン", kanji: "", romaji: "resutoran", type: "名詞", meaning: "餐厅" },
      { id: "v6-36", kana: "にわ", kanji: "庭", romaji: "niwa", type: "名詞", meaning: "院子" },
      { id: "v6-37", kana: "しゅくだい", kanji: "宿題", romaji: "shukudai", type: "名詞", meaning: "作业" },
      { id: "v6-38", kana: "テニス", kanji: "", romaji: "tenisu", type: "名詞", meaning: "网球" },
      { id: "v6-39", kana: "サッカー", kanji: "", romaji: "sakkaa", type: "名詞", meaning: "足球" },
      { id: "v6-40", kana: "おはなみ", kanji: "お花見", romaji: "ohanami", type: "名詞", meaning: "赏花" },
      { id: "v6-41", kana: "なに", kanji: "何", romaji: "nani", type: "疑問詞", meaning: "什么" },
      { id: "v6-42", kana: "いっしょに", kanji: "一緒に", romaji: "isshoni", type: "副詞", meaning: "一起" },
      { id: "v6-43", kana: "ちょっと", kanji: "", romaji: "chotto", type: "副詞", meaning: "稍微" },
      { id: "v6-44", kana: "いつも", kanji: "", romaji: "itsumo", type: "副詞", meaning: "总是" },
      { id: "v6-45", kana: "ときどき", kanji: "時々", romaji: "tokidoki", type: "副詞", meaning: "有时" },
    ],
    grammars: [
      { id: "g6-1", pattern: "N を V(他动词)", explanation: "他动词的宾语用助词「を」表示。", examples: [{ jp: "ジュースを 飲みます。", cn: "喝果汁。" }, { jp: "ご飯を 食べます。", cn: "吃饭。" }] },
      { id: "g6-2", pattern: "N を します", explanation: "做（运动、游戏、动作、举办活动）。", examples: [{ jp: "サッカーを します。", cn: "踢足球。" }, { jp: "宿題を します。", cn: "做作业。" }] },
      { id: "g6-3", pattern: "何 を しますか", explanation: "询问做什么。", examples: [{ jp: "月曜日 何を しますか。", cn: "星期一做什么？" }] },
      { id: "g6-4", pattern: "Place で V", explanation: "动作发生的场所用「で」。", examples: [{ jp: "駅で 新聞を 買います。", cn: "在车站买报纸。" }] },
      { id: "g6-5", pattern: "Vませんか / Vましょう", explanation: "劝诱：不...吗？/ ...吧。", examples: [{ jp: "いっしょに 京都へ 行きませんか。", cn: "不一起去京都吗？" }, { jp: "ええ、行きましょう。", cn: "好啊，去吧。" }] }
    ],
    readings: [
      {
        id: "r6-A",
        title: "会話：不一起去吗？",
        type: "dialogue",
        content: [
          { id: "s1", role: "佐藤", japanese: "ミラーさん。", chinese: "米勒先生。" },
          { id: "s2", role: "ミラー", japanese: "何ですか。", chinese: "什么事？" },
          { id: "s3", role: "佐藤", japanese: "あした 友達と お花見を します。\nミラーさんも いっしょに 行きませんか。", chinese: "明天我要和朋友去赏花。米勒先生也不一起去吗？" },
          { id: "s4", role: "ミラー", japanese: "いいですね。\nどこへ 行きますか。", chinese: "真不错啊。去哪里？" },
          { id: "s5", role: "佐藤", japanese: "大阪城公園です。", chinese: "大阪城公园。" },
          { id: "s6", role: "ミラー", japanese: "何時ですか。", chinese: "几点？" },
          { id: "s7", role: "佐藤", japanese: "10時です。\n大阪城公園の 駅で 会いましょう。", chinese: "10点。在大阪城公园车站见面吧。" },
          { id: "s8", role: "ミラー", japanese: "わかりました。", chinese: "知道了。" },
          { id: "s9", role: "佐藤", japanese: "じゃ、また あした。", chinese: "那么，明天见。" }
        ]
      }
    ],
    quizzes: [
        { id: "q6-1", question: "酒（　）飲みます。", options: [{id:"o1", label:"を", isCorrect:true}, {id:"o2", label:"で", isCorrect:false}], explanation: "他动词宾语用「を」。" },
        { id: "q6-2", question: "図書館（　）勉強します。", options: [{id:"o1", label:"に", isCorrect:false}, {id:"o2", label:"で", isCorrect:true}], explanation: "动作进行的场所用「で」。" }
    ]
  },
  {
    id: 7,
    title: "第7課：ごめんください",
    description: "工具 / 授受动词 (あげる/もらう)",
    vocabularies: [
      { id: "v7-1", kana: "きります", kanji: "切ります", romaji: "kirimasu", type: "動詞", meaning: "切、剪" },
      { id: "v7-2", kana: "おくります", kanji: "送ります", romaji: "okurimasu", type: "動詞", meaning: "寄、送" },
      { id: "v7-3", kana: "あげます", kanji: "", romaji: "agemasu", type: "動詞", meaning: "给" },
      { id: "v7-4", kana: "もらいます", kanji: "", romaji: "moraimasu", type: "動詞", meaning: "收、得到" },
      { id: "v7-5", kana: "かします", kanji: "貸します", romaji: "kashimasu", type: "動詞", meaning: "借出" },
      { id: "v7-6", kana: "かります", kanji: "借ります", romaji: "karimasu", type: "動詞", meaning: "借入" },
      { id: "v7-7", kana: "おしえます", kanji: "教えます", romaji: "oshiemasu", type: "動詞", meaning: "教" },
      { id: "v7-8", kana: "ならいます", kanji: "習います", romaji: "naraimasu", type: "動詞", meaning: "学习" },
      { id: "v7-9", kana: "かけます", kanji: "", romaji: "kakemasu", type: "動詞", meaning: "打（电话）" },
      { id: "v7-10", kana: "て", kanji: "手", romaji: "te", type: "名詞", meaning: "手" },
      { id: "v7-11", kana: "はし", kanji: "", romaji: "hashi", type: "名詞", meaning: "筷子" },
      { id: "v7-12", kana: "スプーン", kanji: "", romaji: "supuun", type: "名詞", meaning: "勺子" },
      { id: "v7-13", kana: "ナイフ", kanji: "", romaji: "naifu", type: "名詞", meaning: "刀" },
      { id: "v7-14", kana: "フォーク", kanji: "", romaji: "fooku", type: "名詞", meaning: "叉子" },
      { id: "v7-15", kana: "はさみ", kanji: "", romaji: "hasami", type: "名詞", meaning: "剪刀" },
      { id: "v7-16", kana: "パソコン", kanji: "", romaji: "pasokon", type: "名詞", meaning: "个人电脑" },
      { id: "v7-17", kana: "ケータイ", kanji: "", romaji: "keetai", type: "名詞", meaning: "手机" },
      { id: "v7-18", kana: "メール", kanji: "", romaji: "meeru", type: "名詞", meaning: "邮件" },
      { id: "v7-19", kana: "ねんがじょう", kanji: "年賀状", romaji: "nengajou", type: "名詞", meaning: "贺年卡" },
      { id: "v7-20", kana: "パンチ", kanji: "", romaji: "panchi", type: "名詞", meaning: "打孔机" },
      { id: "v7-21", kana: "ホッチキス", kanji: "", romaji: "hotchikisu", type: "名詞", meaning: "订书机" },
      { id: "v7-22", kana: "セロテープ", kanji: "", romaji: "seroteepu", type: "名詞", meaning: "透明胶带" },
      { id: "v7-23", kana: "けしゴム", kanji: "消しゴム", romaji: "keshigomu", type: "名詞", meaning: "橡皮" },
      { id: "v7-24", kana: "かみ", kanji: "紙", romaji: "kami", type: "名詞", meaning: "纸" },
      { id: "v7-25", kana: "はな", kanji: "花", romaji: "hana", type: "名詞", meaning: "花" },
      { id: "v7-26", kana: "シャツ", kanji: "", romaji: "shatsu", type: "名詞", meaning: "衬衫" },
      { id: "v7-27", kana: "プレゼント", kanji: "", romaji: "purezento", type: "名詞", meaning: "礼物" },
      { id: "v7-28", kana: "にもつ", kanji: "荷物", romaji: "nimotsu", type: "名詞", meaning: "行李" },
      { id: "v7-29", kana: "おかね", kanji: "お金", romaji: "okane", type: "名詞", meaning: "钱" },
      { id: "v7-30", kana: "きっぷ", kanji: "切符", romaji: "kippu", type: "名詞", meaning: "票" },
      { id: "v7-31", kana: "クリスマス", kanji: "", romaji: "kurisumasu", type: "名詞", meaning: "圣诞节" },
      { id: "v7-32", kana: "ちち", kanji: "父", romaji: "chichi", type: "名詞", meaning: "（我）父亲" },
      { id: "v7-33", kana: "はは", kanji: "母", romaji: "haha", type: "名詞", meaning: "（我）母亲" },
      { id: "v7-34", kana: "おとうさん", kanji: "お父さん", romaji: "otousan", type: "名詞", meaning: "（别人）父亲" },
      { id: "v7-35", kana: "おかあさん", kanji: "お母さん", romaji: "okaasan", type: "名詞", meaning: "（别人）母亲" },
      { id: "v7-36", kana: "もう", kanji: "", romaji: "mou", type: "副詞", meaning: "已经" },
      { id: "v7-37", kana: "まだ", kanji: "", romaji: "mada", type: "副詞", meaning: "还（未）" },
      { id: "v7-38", kana: "これから", kanji: "", romaji: "korekara", type: "副詞", meaning: "今后、从现在起" },
    ],
    grammars: [
      { id: "g7-1", pattern: "Tool で V", explanation: "手段、工具、语言用「で」表示。", examples: [{ jp: "はしで 食べます。", cn: "用筷子吃。" }, { jp: "日本語で レポートを 書きます。", cn: "用日语写报告。" }] },
      { id: "g7-2", pattern: "「Word」は ～語で 何ですか", explanation: "询问某个词用另一种语言怎么说。", examples: [{ jp: "「ありがとう」は 英語で 何ですか。", cn: "“谢谢”用英语怎么说？" }, { jp: "「Thank you」です。", cn: "是“Thank you”。" }] },
      { id: "g7-3", pattern: "Person に Give", explanation: "给/借出/教的对象用「に」。", examples: [{ jp: "山田さんに 花を あげました。", cn: "送了花给山田先生。" }, { jp: "イーさんに 本を 貸しました。", cn: "借了书给李先生。" }] },
      { id: "g7-4", pattern: "Person に Receive", explanation: "收/借入/学的来源用「に」。", examples: [{ jp: "木村さんに 花を もらいました。", cn: "从木村小姐那里收到了花。" }, { jp: "カリナさんに ＣＤを 借りました。", cn: "向卡莉娜借了CD。" }] },
      { id: "g7-5", pattern: "もう Vました", explanation: "已经做完了。", examples: [{ jp: "もう 荷物を 送りましたか。", cn: "行李已经寄了吗？" }, { jp: "いいえ、まだです。", cn: "不，还没有。" }] }
    ],
    readings: [
      {
        id: "r7-A",
        title: "会話：有人在家吗？",
        type: "dialogue",
        content: [
          { id: "s1", role: "ホセ", japanese: "ごめんください。", chinese: "有人在家吗？" },
          { id: "s2", role: "山田", japanese: "いらっしゃい。\nどうぞ お上がり ください。", chinese: "欢迎。请进。" },
          { id: "s3", role: "ホセ", japanese: "失礼します。", chinese: "打扰了。" },
          { id: "s4", role: "山田の妻", japanese: "コーヒー、どうぞ。", chinese: "请喝咖啡。" },
          { id: "s5", role: "ホセ", japanese: "ありがとう ございます。", chinese: "谢谢。" },
          { id: "s6", role: "ホセ", japanese: "あのう、これ、お土産です。", chinese: "那个，这是礼物。" },
          { id: "s7", role: "山田", japanese: "え、何ですか。", chinese: "哎？是什么？" },
          { id: "s8", role: "ホセ", japanese: "ブラジルの コーヒーです。\nどうぞ。", chinese: "是巴西的咖啡。请收下。" },
          { id: "s9", role: "山田", japanese: "どうも ありがとう ございます。", chinese: "非常感谢。" }
        ]
      }
    ],
    quizzes: [
        { id: "q7-1", question: "スプーン（　）ご飯を食べます。", options: [{id:"o1", label:"で", isCorrect:true}, {id:"o2", label:"に", isCorrect:false}], explanation: "工具手段用「で」。" },
        { id: "q7-2", question: "母（　）手紙を もらいました。", options: [{id:"o1", label:"で", isCorrect:false}, {id:"o2", label:"に", isCorrect:true}], explanation: "接受动作的来源对象用「に」。" }
    ]
  },
  {
    id: 8,
    title: "第8課：そろそろ 失礼します",
    description: "形容词 (イ形/ナ形) / 修饰名词",
    vocabularies: [
      { id: "v8-1", kana: "ハンサム（な）", kanji: "", romaji: "hansamu", type: "ナ形容詞", meaning: "英俊" },
      { id: "v8-2", kana: "きれい（な）", kanji: "", romaji: "kirei", type: "ナ形容詞", meaning: "漂亮、干净" },
      { id: "v8-3", kana: "しずか（な）", kanji: "静か", romaji: "shizuka", type: "ナ形容詞", meaning: "安静" },
      { id: "v8-4", kana: "にぎやか（な）", kanji: "", romaji: "nigiyaka", type: "ナ形容詞", meaning: "热闹" },
      { id: "v8-5", kana: "ゆうめい（な）", kanji: "有名", romaji: "yuumei", type: "ナ形容詞", meaning: "有名" },
      { id: "v8-6", kana: "しんせつ（な）", kanji: "親切", romaji: "shinsetsu", type: "ナ形容詞", meaning: "亲切" },
      { id: "v8-7", kana: "げんき（な）", kanji: "元気", romaji: "genki", type: "ナ形容詞", meaning: "健康、精神" },
      { id: "v8-8", kana: "ひま（な）", kanji: "暇", romaji: "hima", type: "ナ形容詞", meaning: "空闲" },
      { id: "v8-9", kana: "べんり（な）", kanji: "便利", romaji: "benri", type: "ナ形容詞", meaning: "方便" },
      { id: "v8-10", kana: "すてき（な）", kanji: "", romaji: "suteki", type: "ナ形容詞", meaning: "极好" },
      { id: "v8-11", kana: "おおきい", kanji: "大きい", romaji: "ookii", type: "イ形容詞", meaning: "大" },
      { id: "v8-12", kana: "ちいさい", kanji: "小さい", romaji: "chiisai", type: "イ形容詞", meaning: "小" },
      { id: "v8-13", kana: "あたらしい", kanji: "新しい", romaji: "atarashii", type: "イ形容詞", meaning: "新" },
      { id: "v8-14", kana: "ふるい", kanji: "古い", romaji: "furui", type: "イ形容詞", meaning: "旧" },
      { id: "v8-15", kana: "いい", kanji: "", romaji: "ii", type: "イ形容詞", meaning: "好 (よい)" },
      { id: "v8-16", kana: "わるい", kanji: "悪い", romaji: "warui", type: "イ形容詞", meaning: "坏" },
      { id: "v8-17", kana: "あつい", kanji: "暑い", romaji: "atsui", type: "イ形容詞", meaning: "热 (天气)" },
      { id: "v8-18", kana: "あつい", kanji: "熱い", romaji: "atsui", type: "イ形容詞", meaning: "热 (物体)" },
      { id: "v8-19", kana: "さむい", kanji: "寒い", romaji: "samui", type: "イ形容詞", meaning: "冷 (天气)" },
      { id: "v8-20", kana: "つめたい", kanji: "冷たい", romaji: "tsumetai", type: "イ形容詞", meaning: "凉 (物体)" },
      { id: "v8-21", kana: "むずかしい", kanji: "難しい", romaji: "muzukashii", type: "イ形容詞", meaning: "难" },
      { id: "v8-22", kana: "やさしい", kanji: "易しい", romaji: "yasashii", type: "イ形容詞", meaning: "容易" },
      { id: "v8-23", kana: "たかい", kanji: "高い", romaji: "takai", type: "イ形容詞", meaning: "高、贵" },
      { id: "v8-24", kana: "やすい", kanji: "安い", romaji: "yasui", type: "イ形容詞", meaning: "便宜" },
      { id: "v8-25", kana: "ひくい", kanji: "低い", romaji: "hikui", type: "イ形容詞", meaning: "低" },
      { id: "v8-26", kana: "おもしろい", kanji: "", romaji: "omoshiroi", type: "イ形容詞", meaning: "有趣" },
      { id: "v8-27", kana: "おいしい", kanji: "", romaji: "oishii", type: "イ形容詞", meaning: "好吃" },
      { id: "v8-28", kana: "いそがしい", kanji: "忙しい", romaji: "isogashii", type: "イ形容詞", meaning: "忙" },
      { id: "v8-29", kana: "たのしい", kanji: "楽しい", romaji: "tanoshii", type: "イ形容詞", meaning: "愉快" },
      { id: "v8-30", kana: "しろい", kanji: "白い", romaji: "shiroi", type: "イ形容詞", meaning: "白" },
      { id: "v8-31", kana: "くろい", kanji: "黒い", romaji: "kuroi", type: "イ形容詞", meaning: "黑" },
      { id: "v8-32", kana: "あかい", kanji: "赤い", romaji: "akai", type: "イ形容詞", meaning: "红" },
      { id: "v8-33", kana: "あおい", kanji: "青い", romaji: "aoi", type: "イ形容詞", meaning: "蓝" },
      { id: "v8-34", kana: "さくら", kanji: "桜", romaji: "sakura", type: "名詞", meaning: "樱花" },
      { id: "v8-35", kana: "やま", kanji: "山", romaji: "yama", type: "名詞", meaning: "山" },
      { id: "v8-36", kana: "まち", kanji: "町", romaji: "machi", type: "名詞", meaning: "城镇" },
      { id: "v8-37", kana: "たべもの", kanji: "食べ物", romaji: "tabemono", type: "名詞", meaning: "食物" },
      { id: "v8-38", kana: "ところ", kanji: "所", romaji: "tokoro", type: "名詞", meaning: "地方" },
      { id: "v8-39", kana: "りょう", kanji: "寮", romaji: "ryou", type: "名詞", meaning: "宿舍" },
      { id: "v8-40", kana: "べんきょう", kanji: "勉強", romaji: "benkyou", type: "名詞", meaning: "学习" },
      { id: "v8-41", kana: "せいかつ", kanji: "生活", romaji: "seikatsu", type: "名詞", meaning: "生活" },
      { id: "v8-42", kana: "しごと", kanji: "仕事", romaji: "shigoto", type: "名詞", meaning: "工作" },
      { id: "v8-43", kana: "どう", kanji: "", romaji: "dou", type: "副詞", meaning: "怎么样" },
      { id: "v8-44", kana: "どんな", kanji: "", romaji: "donna", type: "連体詞", meaning: "什么样的" },
      { id: "v8-45", kana: "とても", kanji: "", romaji: "totemo", type: "副詞", meaning: "非常" },
      { id: "v8-46", kana: "あまり", kanji: "", romaji: "amari", type: "副詞", meaning: "不太（接否定）" },
    ],
    grammars: [
      { id: "g8-1", pattern: "N は Adj です", explanation: "形容词做谓语。イ形容词直接加です，ナ形容词去な加です。", examples: [{ jp: "ワット先生は 親切です。", cn: "瓦特老师很亲切。" }, { jp: "富士山は 高いです。", cn: "富士山很高。" }] },
      { id: "g8-2", pattern: "Adj + N", explanation: "形容词修饰名词。イ形容词直接修饰，ナ形容词加な。", examples: [{ jp: "親切な 先生。", cn: "亲切的老师。" }, { jp: "高い 山。", cn: "高山。" }] },
      { id: "g8-3", pattern: "とても / あまり", explanation: "程度副词。あまり后接否定。", examples: [{ jp: "大阪は とても にぎやかです。", cn: "大阪非常热闹。" }, { jp: "桜大学は あまり 有名じゃありません。", cn: "樱花大学不太有名。" }] },
      { id: "g8-4", pattern: "N は どうですか", explanation: "询问感想。", examples: [{ jp: "日本の生活は どうですか。", cn: "日本的生活怎么样？" }, { jp: "楽しいです。", cn: "很开心。" }] },
      { id: "g8-5", pattern: "S1 が、S2", explanation: "但是（逆接）。", examples: [{ jp: "日本の食べ物は おいしいですが、高いです。", cn: "日本的食物很好吃，但是很贵。" }] }
    ],
    readings: [
      {
        id: "r8-A",
        title: "会話：差不多该告辞了",
        type: "dialogue",
        content: [
          { id: "s1", role: "山田", japanese: "マリアさん、日本の 生活は どうですか。", chinese: "玛利亚小姐，日本的生活怎么样？" },
          { id: "s2", role: "マリア", japanese: "毎日 とても 楽しいです。", chinese: "每天都非常开心。" },
          { id: "s3", role: "山田", japanese: "そうですか。\nお仕事は どうですか。", chinese: "是吗。工作怎么样？" },
          { id: "s4", role: "マリア", japanese: "そうですね。\n忙しいですが、おもしろいです。", chinese: "嗯...虽然很忙，但是很有趣。" },
          { id: "s5", role: "マリア", japanese: "コーヒー、もう一杯 いかがですか。", chinese: "再来一杯咖啡怎么样？" },
          { id: "s6", role: "山田", japanese: "いいえ、けっこうです。", chinese: "不用了，够了。" },
          { id: "s7", role: "マリア", japanese: "あ、もう 6時ですね。\nそろそろ 失礼します。", chinese: "啊，已经6点了。差不多该告辞了。" },
          { id: "s8", role: "山田", japanese: "そうですか。", chinese: "是吗。" },
          { id: "s9", role: "マリア", japanese: "きょうは どうも ありがとう ございました。", chinese: "今天非常感谢。" },
          { id: "s10", role: "山田", japanese: "いいえ。\nまた いらっしゃってください。", chinese: "不客气。请再来玩。" }
        ]
      }
    ],
    quizzes: [
        { id: "q8-1", question: "桜大学は（　）大学ですか。", options: [{id:"o1", label:"どんな", isCorrect:true}, {id:"o2", label:"どう", isCorrect:false}], explanation: "询问事物的性质用「どんな N」。" },
        { id: "q8-2", question: "この食べ物は あまり（　）。", options: [{id:"o1", label:"おいしいです", isCorrect:false}, {id:"o2", label:"おいしくないです", isCorrect:true}], explanation: "「あまり」后必须接否定形式。" }
    ]
  },
  {
    id: 9,
    title: "第9課：残念です",
    description: "好恶 / 能力 / 拥有 / 原因 (から)",
    vocabularies: [
      { id: "v9-1", kana: "わかります", kanji: "分かります", romaji: "wakarimasu", type: "動詞", meaning: "懂、明白" },
      { id: "v9-2", kana: "あります", kanji: "", romaji: "arimasu", type: "動詞", meaning: "有（物）" },
      { id: "v9-3", kana: "すき（な）", kanji: "好き", romaji: "suki", type: "ナ形容詞", meaning: "喜欢" },
      { id: "v9-4", kana: "きらい（な）", kanji: "嫌い", romaji: "kirai", type: "ナ形容詞", meaning: "讨厌" },
      { id: "v9-5", kana: "じょうず（な）", kanji: "上手", romaji: "jouzu", type: "ナ形容詞", meaning: "擅长" },
      { id: "v9-6", kana: "へた（な）", kanji: "下手", romaji: "heta", type: "ナ形容詞", meaning: "笨拙" },
      { id: "v9-7", kana: "りょうり", kanji: "料理", romaji: "ryouri", type: "名詞", meaning: "料理" },
      { id: "v9-8", kana: "のみもの", kanji: "飲み物", romaji: "nomimono", type: "名詞", meaning: "饮料" },
      { id: "v9-9", kana: "スポーツ", kanji: "", romaji: "supootsu", type: "名詞", meaning: "体育运动" },
      { id: "v9-10", kana: "やきゅう", kanji: "野球", romaji: "yakyuu", type: "名詞", meaning: "棒球" },
      { id: "v9-11", kana: "ダンス", kanji: "", romaji: "dansu", type: "名詞", meaning: "跳舞" },
      { id: "v9-12", kana: "おんがく", kanji: "音楽", romaji: "ongaku", type: "名詞", meaning: "音乐" },
      { id: "v9-13", kana: "うた", kanji: "歌", romaji: "uta", type: "名詞", meaning: "歌" },
      { id: "v9-14", kana: "クラシック", kanji: "", romaji: "kurashikku", type: "名詞", meaning: "古典音乐" },
      { id: "v9-15", kana: "ジャズ", kanji: "", romaji: "jazu", type: "名詞", meaning: "爵士乐" },
      { id: "v9-16", kana: "コンサート", kanji: "", romaji: "konsaato", type: "名詞", meaning: "音乐会" },
      { id: "v9-17", kana: "カラオケ", kanji: "", romaji: "karaoke", type: "名詞", meaning: "卡拉OK" },
      { id: "v9-18", kana: "かぶき", kanji: "歌舞伎", romaji: "kabuki", type: "名詞", meaning: "歌舞伎" },
      { id: "v9-19", kana: "え", kanji: "絵", romaji: "e", type: "名詞", meaning: "画" },
      { id: "v9-20", kana: "じ", kanji: "字", romaji: "ji", type: "名詞", meaning: "字" },
      { id: "v9-21", kana: "かんじ", kanji: "漢字", romaji: "kanji", type: "名詞", meaning: "汉字" },
      { id: "v9-22", kana: "ひらがな", kanji: "平仮名", romaji: "hiragana", type: "名詞", meaning: "平假名" },
      { id: "v9-23", kana: "かたかな", kanji: "片仮名", romaji: "katakana", type: "名詞", meaning: "片假名" },
      { id: "v9-24", kana: "ローマじ", kanji: "ローマ字", romaji: "roomaji", type: "名詞", meaning: "罗马字" },
      { id: "v9-25", kana: "こまかいおかね", kanji: "細かいお金", romaji: "komakaiokane", type: "名詞", meaning: "零钱" },
      { id: "v9-26", kana: "チケット", kanji: "", romaji: "chiketto", type: "名詞", meaning: "票" },
      { id: "v9-27", kana: "じかん", kanji: "時間", romaji: "jikan", type: "名詞", meaning: "时间" },
      { id: "v9-28", kana: "ようじ", kanji: "用事", romaji: "youji", type: "名詞", meaning: "事情" },
      { id: "v9-29", kana: "やくそく", kanji: "約束", romaji: "yakusoku", type: "名詞", meaning: "约会、约定" },
      { id: "v9-30", kana: "ごしゅじん", kanji: "ご主人", romaji: "goshujin", type: "名詞", meaning: "（别人）丈夫" },
      { id: "v9-31", kana: "おっと", kanji: "夫", romaji: "otto", type: "名詞", meaning: "（我）丈夫" },
      { id: "v9-32", kana: "しゅじん", kanji: "主人", romaji: "shujin", type: "名詞", meaning: "（我）丈夫" },
      { id: "v9-33", kana: "おくさん", kanji: "奥さん", romaji: "okusan", type: "名詞", meaning: "（别人）妻子" },
      { id: "v9-34", kana: "つま", kanji: "妻", romaji: "tsuma", type: "名詞", meaning: "（我）妻子" },
      { id: "v9-35", kana: "かない", kanji: "家内", romaji: "kanai", type: "名詞", meaning: "（我）妻子" },
      { id: "v9-36", kana: "こども", kanji: "子ども", romaji: "kodomo", type: "名詞", meaning: "孩子" },
      { id: "v9-37", kana: "よく", kanji: "", romaji: "yoku", type: "副詞", meaning: "很、十分" },
      { id: "v9-38", kana: "だいたい", kanji: "", romaji: "daitai", type: "副詞", meaning: "大致" },
      { id: "v9-39", kana: "たくさん", kanji: "", romaji: "takusan", type: "副詞", meaning: "很多" },
      { id: "v9-40", kana: "すこし", kanji: "少し", romaji: "sukoshi", type: "副詞", meaning: "少、一点" },
      { id: "v9-41", kana: "ぜんぜん", kanji: "全然", romaji: "zenzen", type: "副詞", meaning: "完全不（接否定）" },
      { id: "v9-42", kana: "はやく", kanji: "早く", romaji: "hayaku", type: "副詞", meaning: "早、快" },
      { id: "v9-43", kana: "～から", kanji: "", romaji: "kara", type: "接続詞", meaning: "因为～" },
      { id: "v9-44", kana: "どうして", kanji: "", romaji: "doushite", type: "疑問詞", meaning: "为什么" },
    ],
    grammars: [
      { id: "g9-1", pattern: "N が 好き/嫌い/上手/下手 です", explanation: "好恶、能力的对象用助词「が」。", examples: [{ jp: "わたしは イタリア料理が 好きです。", cn: "我喜欢意大利菜。" }, { jp: "わたしは 日本語が 下手です。", cn: "我不擅长日语。" }] },
      { id: "g9-2", pattern: "N が あります/わかります", explanation: "拥有、明白的对象用助词「が」。", examples: [{ jp: "わたしは 車が あります。", cn: "我有车。" }, { jp: "だいたい 日本語が わかります。", cn: "大概懂日语。" }] },
      { id: "g9-3", pattern: "S1 から S2", explanation: "表示原因。因为 S1，所以 S2。", examples: [{ jp: "時間が ありませんから、新聞を 読みません。", cn: "因为没时间，所以不看报纸。" }] },
      { id: "g9-4", pattern: "どうして", explanation: "询问原因。", examples: [{ jp: "どうして 朝ごはんを 食べませんか。", cn: "为什么不吃早饭？" }, { jp: "時間が ありませんから。", cn: "因为没时间。" }] }
    ],
    readings: [
      {
        id: "r9-A",
        title: "会話：真遗憾",
        type: "dialogue",
        content: [
          { id: "s1", role: "ミラー", japanese: "もしもし、ミラーです。", chinese: "喂，我是米勒。" },
          { id: "s2", role: "木村", japanese: "ああ、ミラーさん、こんばんは。\nお元気ですか。", chinese: "啊，米勒先生，晚上好。你好吗？" },
          { id: "s3", role: "ミラー", japanese: "ええ、元気です。", chinese: "嗯，很好。" },
          { id: "s4", role: "ミラー", japanese: "あのう、木村さん、クラシックの コンサート、いっしょに 行きませんか。", chinese: "那个，木村小姐，不一起去听古典音乐会吗？" },
          { id: "s5", role: "木村", japanese: "いいですね。\nいつですか。", chinese: "好啊。什么时候？" },
          { id: "s6", role: "ミラー", japanese: "来週の 金曜日の 晩です。", chinese: "下周五晚上。" },
          { id: "s7", role: "木村", japanese: "金曜日ですか。\n金曜日の 晩は ちょっと……。", chinese: "周五吗？周五晚上有点……" },
          { id: "s8", role: "ミラー", japanese: "だめですか。", chinese: "不行吗？" },
          { id: "s9", role: "木村", japanese: "ええ、友達と 約束が ありますから……。", chinese: "嗯，因为和朋友有约……" },
          { id: "s10", role: "ミラー", japanese: "そうですか。\n残念ですね。", chinese: "是吗。真遗憾啊。" },
          { id: "s11", role: "木村", japanese: "ええ。\nまた 今度 お願いします。", chinese: "嗯。下次请再叫我。" }
        ]
      }
    ],
    quizzes: [
        { id: "q9-1", question: "わたしは 歌（　）下手です。", options: [{id:"o1", label:"を", isCorrect:false}, {id:"o2", label:"が", isCorrect:true}], explanation: "能力的巧拙对象用「が」。" },
        { id: "q9-2", question: "忙しいです（　）、どこも行きません。", options: [{id:"o1", label:"から", isCorrect:true}, {id:"o2", label:"が", isCorrect:false}], explanation: "表示原因用「から」。" }
    ]
  },
  {
    id: 10,
    title: "第10課：ナンプラー、ありますか",
    description: "存在 (います/あります) / 位置",
    vocabularies: [
      { id: "v10-1", kana: "います", kanji: "", romaji: "imasu", type: "動詞", meaning: "有（有生命：人、动物）" },
      { id: "v10-2", kana: "あります", kanji: "", romaji: "arimasu", type: "動詞", meaning: "有（无生命：物体、植物）" },
      { id: "v10-3", kana: "いろいろ（な）", kanji: "", romaji: "iroiro", type: "ナ形容詞", meaning: "各种各样" },
      { id: "v10-4", kana: "おとこのひと", kanji: "男の人", romaji: "otokonohito", type: "名詞", meaning: "男人" },
      { id: "v10-5", kana: "おんなのひと", kanji: "女の人", romaji: "onnanohito", type: "名詞", meaning: "女人" },
      { id: "v10-6", kana: "おとこのこ", kanji: "男の子", romaji: "otokonoko", type: "名詞", meaning: "男孩" },
      { id: "v10-7", kana: "おんなのこ", kanji: "女の子", romaji: "onnanoko", type: "名詞", meaning: "女孩" },
      { id: "v10-8", kana: "いぬ", kanji: "犬", romaji: "inu", type: "名詞", meaning: "狗" },
      { id: "v10-9", kana: "ねこ", kanji: "猫", romaji: "neko", type: "名詞", meaning: "猫" },
      { id: "v10-10", kana: "パンダ", kanji: "", romaji: "panda", type: "名詞", meaning: "熊猫" },
      { id: "v10-11", kana: "ぞう", kanji: "象", romaji: "zou", type: "名詞", meaning: "象" },
      { id: "v10-12", kana: "き", kanji: "木", romaji: "ki", type: "名詞", meaning: "树" },
      { id: "v10-13", kana: "もの", kanji: "物", romaji: "mono", type: "名詞", meaning: "东西" },
      { id: "v10-14", kana: "フィルム", kanji: "", romaji: "firumu", type: "名詞", meaning: "胶卷" },
      { id: "v10-15", kana: "でんち", kanji: "電池", romaji: "denchi", type: "名詞", meaning: "电池" },
      { id: "v10-16", kana: "はこ", kanji: "箱", romaji: "hako", type: "名詞", meaning: "盒子" },
      { id: "v10-17", kana: "スイッチ", kanji: "", romaji: "suicchi", type: "名詞", meaning: "开关" },
      { id: "v10-18", kana: "れいぞうこ", kanji: "冷蔵庫", romaji: "reizouko", type: "名詞", meaning: "冰箱" },
      { id: "v10-19", kana: "テーブル", kanji: "", romaji: "teeburu", type: "名詞", meaning: "餐桌" },
      { id: "v10-20", kana: "ベッド", kanji: "", romaji: "beddo", type: "名詞", meaning: "床" },
      { id: "v10-21", kana: "たな", kanji: "棚", romaji: "tana", type: "名詞", meaning: "架子" },
      { id: "v10-22", kana: "ドア", kanji: "", romaji: "doa", type: "名詞", meaning: "门" },
      { id: "v10-23", kana: "まど", kanji: "窓", romaji: "mado", type: "名詞", meaning: "窗户" },
      { id: "v10-24", kana: "ポスト", kanji: "", romaji: "posuto", type: "名詞", meaning: "邮箱" },
      { id: "v10-25", kana: "ビル", kanji: "", romaji: "biru", type: "名詞", meaning: "大楼" },
      { id: "v10-26", kana: "こうえん", kanji: "公園", romaji: "kouen", type: "名詞", meaning: "公园" },
      { id: "v10-27", kana: "きっさてん", kanji: "喫茶店", romaji: "kissaten", type: "名詞", meaning: "咖啡馆" },
      { id: "v10-28", kana: "ほんや", kanji: "本屋", romaji: "honya", type: "名詞", meaning: "书店" },
      { id: "v10-29", kana: "～や", kanji: "～屋", romaji: "ya", type: "名詞", meaning: "～店" },
      { id: "v10-30", kana: "のりば", kanji: "乗り場", romaji: "noriba", type: "名詞", meaning: "乘车处" },
      { id: "v10-31", kana: "けん", kanji: "県", romaji: "ken", type: "名詞", meaning: "县" },
      { id: "v10-32", kana: "うえ", kanji: "上", romaji: "ue", type: "名詞", meaning: "上" },
      { id: "v10-33", kana: "した", kanji: "下", romaji: "shita", type: "名詞", meaning: "下" },
      { id: "v10-34", kana: "まえ", kanji: "前", romaji: "mae", type: "名詞", meaning: "前" },
      { id: "v10-35", kana: "うしろ", kanji: "後ろ", romaji: "ushiro", type: "名詞", meaning: "后" },
      { id: "v10-36", kana: "みぎ", kanji: "右", romaji: "migi", type: "名詞", meaning: "右" },
      { id: "v10-37", kana: "ひだり", kanji: "左", romaji: "hidari", type: "名詞", meaning: "左" },
      { id: "v10-38", kana: "なか", kanji: "中", romaji: "naka", type: "名詞", meaning: "里面" },
      { id: "v10-39", kana: "そと", kanji: "外", romaji: "soto", type: "名詞", meaning: "外面" },
      { id: "v10-40", kana: "となり", kanji: "隣", romaji: "tonari", type: "名詞", meaning: "隔壁" },
      { id: "v10-41", kana: "ちかく", kanji: "近く", romaji: "chikaku", type: "名詞", meaning: "附近" },
      { id: "v10-42", kana: "あいだ", kanji: "間", romaji: "aida", type: "名詞", meaning: "中间" },
      { id: "v10-43", kana: "～や～[など]", kanji: "", romaji: "yanado", type: "接続詞", meaning: "～和～（等等）" },
    ],
    grammars: [
      { id: "g10-1", pattern: "います / あります", explanation: "存在的区分。「います」用于有生命的（人、动物），「あります」用于无生命的（物体、植物）。", examples: [{ jp: "あそこに 男の人が います。", cn: "那里有个男人。" }, { jp: "あそこに 電話が あります。", cn: "那里有电话。" }] },
      { id: "g10-2", pattern: "Place に N が あります/います", explanation: "描述某地有某物。", examples: [{ jp: "部屋に 机が あります。", cn: "房间里有桌子。" }, { jp: "庭に 犬が います。", cn: "院子里有狗。" }] },
      { id: "g10-3", pattern: "N は Place に あります/います", explanation: "描述某物在某地。", examples: [{ jp: "机は 部屋に あります。", cn: "桌子在房间里。" }, { jp: "犬は 庭に います。", cn: "狗在院子里。" }] },
      { id: "g10-4", pattern: "N1 の (位置) に N2", explanation: "具体位置描述。", examples: [{ jp: "机の 上に 本が あります。", cn: "桌子上有书。" }, { jp: "駅の 近くに 銀行が あります。", cn: "车站附近有银行。" }] }
    ],
    readings: [
      {
        id: "r10-A",
        title: "会話：有鱼露吗？",
        type: "dialogue",
        content: [
          { id: "s1", role: "ミラー", japanese: "すみません。\nナンプラー、ありますか。", chinese: "请问，有鱼露吗？" },
          { id: "s2", role: "店員", japanese: "はい。\nあちらに あります。", chinese: "有的。在那边。" },
          { id: "s3", role: "ミラー", japanese: "あちらですね。", chinese: "在那边啊。" },
          { id: "s4", role: "", japanese: "（ミラーさんは 行きます）", chinese: "（米勒先生走过去）" },
          { id: "s5", role: "ミラー", japanese: "あれ？\nないですね。\nすみません。\nナンプラーは どこですか。", chinese: "咦？没有啊。请问，鱼露在哪里？" },
          { id: "s6", role: "店員", japanese: "あ、そこに ありませんか。", chinese: "啊，那里没有吗？" },
          { id: "s7", role: "ミラー", japanese: "いいえ。", chinese: "没有。" },
          { id: "s8", role: "店員", japanese: "あ、ここに あります。\nどうぞ。", chinese: "啊，在这里。请。" },
          { id: "s9", role: "ミラー", japanese: "どうも。", chinese: "谢谢。" }
        ]
      }
    ],
    quizzes: [
        { id: "q10-1", question: "あそこに 佐藤さん（　）います。", options: [{id:"o1", label:"が", isCorrect:true}, {id:"o2", label:"は", isCorrect:false}], explanation: "存在的主体用「が」。" },
        { id: "q10-2", question: "教室に 学生が（　）。", options: [{id:"o1", label:"あります", isCorrect:false}, {id:"o2", label:"います", isCorrect:true}], explanation: "人是有生命的，存在动词用「います」。" }
    ]
  },
  {
    id: 11,
    title: "第11課：これ、お願いします",
    description: "数量词 / 期间 / 频率",
    vocabularies: [
        { id: "v11-1", kana: "います", kanji: "", romaji: "imasu", type: "動詞", meaning: "有（孩子）" },
        { id: "v11-2", kana: "かかります", kanji: "", romaji: "kakarimasu", type: "動詞", meaning: "花费（时间、金钱）" },
        { id: "v11-3", kana: "やすみます", kanji: "休みます", romaji: "yasumimasu", type: "動詞", meaning: "请假" },
        { id: "v11-4", kana: "ひとつ", kanji: "一つ", romaji: "hitotsu", type: "数詞", meaning: "一个" },
        { id: "v11-5", kana: "ふたつ", kanji: "二つ", romaji: "futatsu", type: "数詞", meaning: "两个" },
        { id: "v11-6", kana: "みっつ", kanji: "三つ", romaji: "mittsu", type: "数詞", meaning: "三个" },
        { id: "v11-7", kana: "よっつ", kanji: "四つ", romaji: "yottsu", type: "数詞", meaning: "四个" },
        { id: "v11-8", kana: "いつつ", kanji: "五つ", romaji: "itsutsu", type: "数詞", meaning: "五个" },
        { id: "v11-9", kana: "むっつ", kanji: "六つ", romaji: "muttsu", type: "数詞", meaning: "六个" },
        { id: "v11-10", kana: "ななつ", kanji: "七つ", romaji: "nanatsu", type: "数詞", meaning: "七个" },
        { id: "v11-11", kana: "やっつ", kanji: "八つ", romaji: "yattsu", type: "数詞", meaning: "八个" },
        { id: "v11-12", kana: "ここのつ", kanji: "九つ", romaji: "kokonotsu", type: "数詞", meaning: "九个" },
        { id: "v11-13", kana: "とお", kanji: "十", romaji: "too", type: "数詞", meaning: "十个" },
        { id: "v11-14", kana: "りんご", kanji: "", romaji: "ringo", type: "名詞", meaning: "苹果" },
        { id: "v11-15", kana: "みかん", kanji: "", romaji: "mikan", type: "名詞", meaning: "橘子" },
        { id: "v11-16", kana: "きって", kanji: "切手", romaji: "kitte", type: "名詞", meaning: "邮票" },
        { id: "v11-17", kana: "はがき", kanji: "葉書", romaji: "hagaki", type: "名詞", meaning: "明信片" },
        { id: "v11-18", kana: "ふうとう", kanji: "封筒", romaji: "fuutou", type: "名詞", meaning: "信封" },
        { id: "v11-19", kana: "りょうしん", kanji: "両親", romaji: "ryoushin", type: "名詞", meaning: "父母" },
        { id: "v11-20", kana: "きょうだい", kanji: "兄弟", romaji: "kyoudai", type: "名詞", meaning: "兄弟姐妹" },
        { id: "v11-21", kana: "どのくらい", kanji: "", romaji: "donokurai", type: "疑問詞", meaning: "多少、多久" },
    ],
    grammars: [
        { id: "g11-1", pattern: "数量词的用法", explanation: "数量词一般放在动词前面。", examples: [{ jp: "りんごを 4つ 買いました。", cn: "买了4个苹果。" }] },
        { id: "g11-2", pattern: "Time に ～回", explanation: "表示频率。", examples: [{ jp: "1か月に 2回 映画を 見ます。", cn: "一个月看两次电影。" }] },
        { id: "g11-3", pattern: "Time/Money かかります", explanation: "表示花费的时间或金钱。", examples: [{ jp: "国まで 飛行機で 4時間 かかります。", cn: "坐飞机回国要4个小时。" }] }
    ],
    readings: [
        {
            id: "r11-A",
            title: "会話：拜托寄这个",
            type: "dialogue",
            content: [
                { id: "s1", role: "ワン", japanese: "これ、速達で お願いします。", chinese: "这个，麻烦寄快件。" },
                { id: "s2", role: "郵便局員", japanese: "はい、オーストラリアですね。\n370円です。", chinese: "好的，寄往澳大利亚是吧。370日元。" },
                { id: "s3", role: "ワン", japanese: "それから、この 荷物も お願いします。", chinese: "还有，这个包裹也麻烦寄一下。" },
                { id: "s4", role: "郵便局員", japanese: "船便ですか、航空便ですか。", chinese: "海运还是空运？" },
                { id: "s5", role: "ワン", japanese: "航空便は いくらですか。", chinese: "空运多少钱？" },
                { id: "s6", role: "郵便局員", japanese: "7,600円です。", chinese: "7600日元。" },
                { id: "s7", role: "ワン", japanese: "日数は どのくらい かかりますか。", chinese: "需要几天？" },
                { id: "s8", role: "郵便局員", japanese: "7日、8日ですね。", chinese: "7、8天吧。" },
                { id: "s9", role: "ワン", japanese: "じゃ、航空便で お願いします。", chinese: "那就空运吧。" }
            ]
        }
    ],
    quizzes: [
        { id: "q11-1", question: "みかんを（　）食べました。", options: [{id:"o1", label:"ふたつ", isCorrect:true}, {id:"o2", label:"二階", isCorrect:false}], explanation: "数水果用「ひとつ、ふたつ...」。" }
    ]
  },
  {
    id: 12,
    title: "第12課：祇園祭はどうでしたか",
    description: "形容词过去式 / 比较",
    vocabularies: [
        { id: "v12-1", kana: "かんたん（な）", kanji: "簡単", romaji: "kantan", type: "ナ形容詞", meaning: "简单" },
        { id: "v12-2", kana: "ちかい", kanji: "近い", romaji: "chikai", type: "イ形容詞", meaning: "近" },
        { id: "v12-3", kana: "とおい", kanji: "遠い", romaji: "tooi", type: "イ形容詞", meaning: "远" },
        { id: "v12-4", kana: "はやい", kanji: "速い", romaji: "hayai", type: "イ形容詞", meaning: "快" },
        { id: "v12-5", kana: "おそい", kanji: "遅い", romaji: "osoi", type: "イ形容詞", meaning: "慢" },
        { id: "v12-6", kana: "おおい", kanji: "多い", romaji: "ooi", type: "イ形容詞", meaning: "多" },
        { id: "v12-7", kana: "すくない", kanji: "少ない", romaji: "sukunai", type: "イ形容詞", meaning: "少" },
        { id: "v12-8", kana: "あたたかい", kanji: "暖かい", romaji: "atatakai", type: "イ形容詞", meaning: "温暖" },
        { id: "v12-9", kana: "すずしい", kanji: "涼しい", romaji: "suzushii", type: "イ形容詞", meaning: "凉快" },
        { id: "v12-10", kana: "あまい", kanji: "甘い", romaji: "amai", type: "イ形容詞", meaning: "甜" },
        { id: "v12-11", kana: "からい", kanji: "辛い", romaji: "karai", type: "イ形容詞", meaning: "辣" },
        { id: "v12-12", kana: "おもい", kanji: "重い", romaji: "omoi", type: "イ形容詞", meaning: "重" },
        { id: "v12-13", kana: "かるい", kanji: "軽い", romaji: "karui", type: "イ形容詞", meaning: "轻" },
        { id: "v12-14", kana: "きせつ", kanji: "季節", romaji: "kisetsu", type: "名詞", meaning: "季节" },
        { id: "v12-15", kana: "てんき", kanji: "天気", romaji: "tenki", type: "名詞", meaning: "天气" },
    ],
    grammars: [
        { id: "g12-1", pattern: "形容词过去式", explanation: "イ形：去い加かった (暑かった)。\nナ形/名词：でした (暇でした)。", examples: [{ jp: "きのうは 寒かったです。", cn: "昨天很冷。" }, { jp: "きのうは 雨でした。", cn: "昨天是雨天。" }] },
        { id: "g12-2", pattern: "N1 は N2 より Adj です", explanation: "比较级 (N1比N2...)。", examples: [{ jp: "この車は あの車より 大きいです。", cn: "这辆车比那辆车大。" }] },
        { id: "g12-3", pattern: "N1 と N2 と どちらが Adj", explanation: "二选一疑问句。", examples: [{ jp: "サッカーと 野球と どちらが おもしろいですか。", cn: "足球和棒球哪个更有趣？" }] },
        { id: "g12-4", pattern: "Category で N が 一番 Adj", explanation: "最高级。", examples: [{ jp: "日本料理で 天ぷらが 一番 好きです。", cn: "日本菜里最喜欢天妇罗。" }] }
    ],
    readings: [
        {
            id: "r12-A",
            title: "会話：祇園祭怎么样？",
            type: "dialogue",
            content: [
                { id: "s1", role: "ミラー", japanese: "ただいま。", chinese: "我回来了。" },
                { id: "s2", role: "管理人", japanese: "お帰りなさい。\nこれ、京都の お土産です。", chinese: "你回来啦。这是京都的特产。" },
                { id: "s3", role: "ミラー", japanese: "どうも すみません。\n祇園祭は どうでしたか。", chinese: "太感谢了。祇园祭怎么样？" },
                { id: "s4", role: "管理人", japanese: "おもしろかったですよ。\nとても にぎやかでした。", chinese: "很有意思哦。非常热闹。" },
                { id: "s5", role: "ミラー", japanese: "祇園祭は 京都の 祭りで 一番 有名ですか。", chinese: "祇园祭是京都最出名的庆典吗？" },
                { id: "s6", role: "管理人", japanese: "ええ、そうです。", chinese: "是的。" }
            ]
        }
    ],
    quizzes: [
        { id: "q12-1", question: "きのうは（　）。", options: [{id:"o1", label:"暑いです", isCorrect:false}, {id:"o2", label:"暑かったです", isCorrect:true}], explanation: "描述过去的状态用过去式「暑かったです」。" }
    ]
  },
  {
    id: 13,
    title: "第13課：別々にお願いします",
    description: "愿望 (ほしい/たい) / 目的",
    vocabularies: [
        { id: "v13-1", kana: "あそびます", kanji: "遊びます", romaji: "asobimasu", type: "動詞", meaning: "玩" },
        { id: "v13-2", kana: "およぎます", kanji: "泳ぎます", romaji: "oyogimasu", type: "動詞", meaning: "游泳" },
        { id: "v13-3", kana: "むかえます", kanji: "迎えます", romaji: "mukaemasu", type: "動詞", meaning: "迎接" },
        { id: "v13-4", kana: "つかれます", kanji: "疲れます", romaji: "tsukaremasu", type: "動詞", meaning: "累" },
        { id: "v13-5", kana: "けっこんします", kanji: "結婚します", romaji: "kekkonshimasu", type: "動詞", meaning: "结婚" },
        { id: "v13-6", kana: "かいものします", kanji: "買い物します", romaji: "kaimonoshimasu", type: "動詞", meaning: "购物" },
        { id: "v13-7", kana: "しょくじします", kanji: "食事します", romaji: "shokujishimasu", type: "動詞", meaning: "吃饭" },
        { id: "v13-8", kana: "さんぽします", kanji: "散歩します", romaji: "sanposhimasu", type: "動詞", meaning: "散步" },
        { id: "v13-9", kana: "ほしい", kanji: "欲しい", romaji: "hoshii", type: "イ形容詞", meaning: "想要" },
        { id: "v13-10", kana: "ひろい", kanji: "広い", romaji: "hiroi", type: "イ形容詞", meaning: "宽" },
        { id: "v13-11", kana: "せまい", kanji: "狭い", romaji: "semai", type: "イ形容詞", meaning: "窄" },
        { id: "v13-12", kana: "プール", kanji: "", romaji: "puuru", type: "名詞", meaning: "游泳池" },
        { id: "v13-13", kana: "かわ", kanji: "川", romaji: "kawa", type: "名詞", meaning: "河" },
        { id: "v13-14", kana: "びじゅつ", kanji: "美術", romaji: "bijutsu", type: "名詞", meaning: "美术" },
        { id: "v13-15", kana: "つり", kanji: "釣り", romaji: "tsuri", type: "名詞", meaning: "钓鱼" },
    ],
    grammars: [
        { id: "g13-1", pattern: "N が 欲しい", explanation: "想要某物 (第一人称)。", examples: [{ jp: "わたしは 友達が 欲しいです。", cn: "我想要朋友。" }] },
        { id: "g13-2", pattern: "V-masu たい", explanation: "想做某事 (第一人称)。", examples: [{ jp: "わたしは 沖縄へ 行きたいです。", cn: "我想去冲绳。" }] },
        { id: "g13-3", pattern: "Place へ V(stem) に 行く", explanation: "移动的目的。", examples: [{ jp: "日本へ 美術の 勉強に 来ました。", cn: "来日本是为了学美术。" }, { jp: "デパートへ 買い物に 行きます。", cn: "去百货商店买东西。" }] }
    ],
    readings: [
        {
            id: "r13-A",
            title: "会話：请分开付账",
            type: "dialogue",
            content: [
                { id: "s1", role: "店の人", japanese: "ご注文は？", chinese: "您点什么？" },
                { id: "s2", role: "ミラー", japanese: "わたしは 天ぷら定食。", chinese: "我要天妇罗套餐。" },
                { id: "s3", role: "サントス", japanese: "わたしは 牛丼。", chinese: "我要牛肉盖饭。" },
                { id: "s4", role: "店の人", japanese: "天ぷら定食と 牛丼ですね。\n少々 お待ちください。", chinese: "天妇罗套餐和牛肉盖饭是吧。请稍等。" },
                { id: "s5", role: "", japanese: "……", chinese: "……" },
                { id: "s6", role: "店の人", japanese: "1,680円で ございます。", chinese: "一共1680日元。" },
                { id: "s7", role: "ミラー", japanese: "すみません。\n別々に お願いします。", chinese: "不好意思，请分开付。" },
                { id: "s8", role: "店の人", japanese: "はい。\n天ぷら定食は 980円、牛丼は 700円です。", chinese: "好的。天妇罗套餐980日元，牛肉盖饭700日元。" }
            ]
        }
    ],
    quizzes: [
        { id: "q13-1", question: "神戸へ インド料理を（　）に行きます。", options: [{id:"o1", label:"食べ", isCorrect:true}, {id:"o2", label:"食べる", isCorrect:false}], explanation: "去做的目的用动词益形(stem) + に。" }
    ]
  },
  {
    id: 14,
    title: "第14課：みどり町まで お願いします",
    description: "动词て形 / 请... / 正在...",
    vocabularies: [
        { id: "v14-1", kana: "つけます", kanji: "", romaji: "tsukemasu", type: "動詞", meaning: "打开（电器）" },
        { id: "v14-2", kana: "けします", kanji: "消します", romaji: "keshimasu", type: "動詞", meaning: "关掉（电器）" },
        { id: "v14-3", kana: "あけます", kanji: "開けます", romaji: "akemasu", type: "動詞", meaning: "打开（门窗）" },
        { id: "v14-4", kana: "しめます", kanji: "閉めます", romaji: "shimemasu", type: "動詞", meaning: "关闭（门窗）" },
        { id: "v14-5", kana: "いそぎます", kanji: "急ぎます", romaji: "isogimasu", type: "動詞", meaning: "急" },
        { id: "v14-6", kana: "まちます", kanji: "待ちます", romaji: "machimasu", type: "動詞", meaning: "等待" },
        { id: "v14-7", kana: "もちます", kanji: "持ちます", romaji: "mochimasu", type: "動詞", meaning: "持有" },
        { id: "v14-8", kana: "とります", kanji: "取ります", romaji: "torimasu", type: "動詞", meaning: "拿、递" },
        { id: "v14-9", kana: "てつだいます", kanji: "手伝います", romaji: "tetsudaimasu", type: "動詞", meaning: "帮忙" },
        { id: "v14-10", kana: "よびます", kanji: "呼びます", romaji: "yobimasu", type: "動詞", meaning: "呼叫" },
        { id: "v14-11", kana: "はなします", kanji: "話します", romaji: "hanashimasu", type: "動詞", meaning: "说话" },
        { id: "v14-12", kana: "つかいます", kanji: "使います", romaji: "tsukaimasu", type: "動詞", meaning: "使用" },
        { id: "v14-13", kana: "とめます", kanji: "止めます", romaji: "tomemasu", type: "動詞", meaning: "停" },
        { id: "v14-14", kana: "みせます", kanji: "見せます", romaji: "misemasu", type: "動詞", meaning: "出示" },
        { id: "v14-15", kana: "パスポート", kanji: "", romaji: "pasupooto", type: "名詞", meaning: "护照" },
        { id: "v14-16", kana: "なまえ", kanji: "名前", romaji: "namae", type: "名詞", meaning: "名字" },
        { id: "v14-17", kana: "じゅうしょ", kanji: "住所", romaji: "juusho", type: "名詞", meaning: "地址" },
        { id: "v14-18", kana: "ちず", kanji: "地図", romaji: "chizu", type: "名詞", meaning: "地图" },
        { id: "v14-19", kana: "しお", kanji: "塩", romaji: "shio", type: "名詞", meaning: "盐" },
        { id: "v14-20", kana: "さとう", kanji: "砂糖", romaji: "satou", type: "名詞", meaning: "糖" },
    ],
    grammars: [
        { id: "g14-1", pattern: "动词て形 (Te-form)", explanation: "动词变形：\n一类：い、ち、り→って；み、に、び→んで；き→いて；ぎ→いで；し→して\n二类：去ます加て\n三类：します→して；きます→きて", examples: [{ jp: "待ちます → 待って", cn: "等" }, { jp: "飲みます → 飲んで", cn: "喝" }] },
        { id: "g14-2", pattern: "Vて ください", explanation: "请做某事。", examples: [{ jp: "ちょっと 待って ください。", cn: "请稍等。" }] },
        { id: "g14-3", pattern: "Vて います", explanation: "正在做某事。", examples: [{ jp: "ミラーさんは 今 電話を かけて います。", cn: "米勒先生正在打电话。" }] }
    ],
    readings: [
        {
            id: "r14-A",
            title: "会話：请到绿町",
            type: "dialogue",
            content: [
                { id: "s1", role: "ミラー", japanese: "みどり町まで お願いします。", chinese: "请到绿町。" },
                { id: "s2", role: "運転手", japanese: "はい。", chinese: "好的。" },
                { id: "s3", role: "ミラー", japanese: "すみません。\nあの 信号を 右へ 曲がって ください。", chinese: "不好意思，请在那个信号灯右转。" },
                { id: "s4", role: "運転手", japanese: "右ですね。", chinese: "右边是吧。" },
                { id: "s5", role: "ミラー", japanese: "ええ。\nまっすぐ 行って ください。", chinese: "嗯，请直走。" },
                { id: "s6", role: "ミラー", japanese: "あの 花屋の 前で 止めて ください。", chinese: "请在那个花店前面停一下。" },
                { id: "s7", role: "運転手", japanese: "はい。", chinese: "好的。" }
            ]
        }
    ],
    quizzes: [
        { id: "q14-1", question: "ここに 名前を（　）ください。", options: [{id:"o1", label:"書き", isCorrect:false}, {id:"o2", label:"書いて", isCorrect:true}], explanation: "请求句型：Vて ください。" }
    ]
  },
  {
    id: 15,
    title: "第15課：ご家族は？",
    description: "许可 / 禁止 / 状态",
    vocabularies: [
        { id: "v15-1", kana: "たちます", kanji: "立ちます", romaji: "tachimasu", type: "動詞", meaning: "站" },
        { id: "v15-2", kana: "すわります", kanji: "座ります", romaji: "suwarimasu", type: "動詞", meaning: "坐" },
        { id: "v15-3", kana: "おきます", kanji: "置きます", romaji: "okimasu", type: "動詞", meaning: "放置" },
        { id: "v15-4", kana: "つくります", kanji: "作ります", romaji: "tsukurimasu", type: "動詞", meaning: "制造" },
        { id: "v15-5", kana: "うります", kanji: "売ります", romaji: "urimasu", type: "動詞", meaning: "卖" },
        { id: "v15-6", kana: "しります", kanji: "知ります", romaji: "shirimasu", type: "動詞", meaning: "知道" },
        { id: "v15-7", kana: "すみます", kanji: "住みます", romaji: "sumimasu", type: "動詞", meaning: "居住" },
        { id: "v15-8", kana: "けんきゅうします", kanji: "研究します", romaji: "kenkyuushimasu", type: "動詞", meaning: "研究" },
        { id: "v15-9", kana: "しりょう", kanji: "資料", romaji: "shiryou", type: "名詞", meaning: "资料" },
        { id: "v15-10", kana: "カタログ", kanji: "", romaji: "katarogu", type: "名詞", meaning: "目录" },
        { id: "v15-11", kana: "ふく", kanji: "服", romaji: "fuku", type: "名詞", meaning: "衣服" },
        { id: "v15-12", kana: "せいひん", kanji: "製品", romaji: "seihin", type: "名詞", meaning: "产品" },
        { id: "v15-13", kana: "ソフト", kanji: "", romaji: "sofuto", type: "名詞", meaning: "软件" },
        { id: "v15-14", kana: "はいしゃ", kanji: "歯医者", romaji: "haisha", type: "名詞", meaning: "牙医" },
        { id: "v15-15", kana: "とこや", kanji: "床屋", romaji: "tokoya", type: "名詞", meaning: "理发店" },
        { id: "v15-16", kana: "どくしん", kanji: "独身", romaji: "dokushin", type: "名詞", meaning: "单身" },
    ],
    grammars: [
        { id: "g15-1", pattern: "Vて もいいです", explanation: "许可：可以做...。", examples: [{ jp: "写真を 撮っても いいですか。", cn: "可以拍照吗？" }] },
        { id: "g15-2", pattern: "Vて は いけません", explanation: "禁止：不准做...。", examples: [{ jp: "ここで タバコを 吸っては いけません。", cn: "这里禁止吸烟。" }] },
        { id: "g15-3", pattern: "Vて います (状态)", explanation: "状态持续（居住、婚姻、职业、知道）。", examples: [{ jp: "わたしは 大阪に 住んで います。", cn: "我住在大阪。" }, { jp: "わたしは 結婚して います。", cn: "我结婚了。" }] }
    ],
    readings: [
        {
            id: "r15-A",
            title: "会話：家人呢？",
            type: "dialogue",
            content: [
                { id: "s1", role: "木村", japanese: "いらっしゃい。\n奥さんは？", chinese: "欢迎。您太太呢？" },
                { id: "s2", role: "サントス", japanese: "あいにく 子供が 熱を 出しまして……。", chinese: "不凑巧孩子发烧了……" },
                { id: "s3", role: "木村", japanese: "ご主人は？", chinese: "您丈夫呢？" },
                { id: "s4", role: "シュミット", japanese: "パワー電気へ 仕事に 行きました。", chinese: "去动力电气公司工作了。" },
                { id: "s5", role: "木村", japanese: "ご家族は どこに 住んで いますか。", chinese: "您家人住在哪里？" },
                { id: "s6", role: "シュミット", japanese: "ドイツの デュッセルドルフに 住んで います。", chinese: "住在德国的杜塞尔多夫。" }
            ]
        }
    ],
    quizzes: [
        { id: "q15-1", question: "ここで 写真を（　）いけません。", options: [{id:"o1", label:"撮っては", isCorrect:true}, {id:"o2", label:"撮っても", isCorrect:false}], explanation: "表示禁止用「Vては いけません」。" }
    ]
  },
  {
    id: 16,
    title: "第16課：使い方を教えてください",
    description: "连续动作 / 特征描述",
    vocabularies: [
        { id: "v16-1", kana: "のります", kanji: "乗ります", romaji: "norimasu", type: "動詞", meaning: "乘坐" },
        { id: "v16-2", kana: "おります", kanji: "降ります", romaji: "orimasu", type: "動詞", meaning: "下车" },
        { id: "v16-3", kana: "のりかえます", kanji: "乗り換えます", romaji: "norikaemasu", type: "動詞", meaning: "换乘" },
        { id: "v16-4", kana: "あびます", kanji: "浴びます", romaji: "abimasu", type: "動詞", meaning: "淋浴" },
        { id: "v16-5", kana: "いれます", kanji: "入れます", romaji: "iremasu", type: "動詞", meaning: "放入" },
        { id: "v16-6", kana: "だします", kanji: "出します", romaji: "dashimasu", type: "動詞", meaning: "拿出" },
        { id: "v16-7", kana: "おろします", kanji: "下ろします", romaji: "oroshimasu", type: "動詞", meaning: "取（钱）" },
        { id: "v16-8", kana: "はいります", kanji: "入ります", romaji: "hairimasu", type: "動詞", meaning: "进入" },
        { id: "v16-9", kana: "でます", kanji: "出ます", romaji: "demasu", type: "動詞", meaning: "出来" },
        { id: "v16-10", kana: "おします", kanji: "押します", romaji: "oshimasu", type: "動詞", meaning: "按、推" },
        { id: "v16-11", kana: "はじめます", kanji: "始めます", romaji: "hajimemasu", type: "動詞", meaning: "开始" },
        { id: "v16-12", kana: "けんがくします", kanji: "見学します", romaji: "kengakushimasu", type: "動詞", meaning: "参观" },
        { id: "v16-13", kana: "わかい", kanji: "若い", romaji: "wakai", type: "イ形容詞", meaning: "年轻" },
        { id: "v16-14", kana: "ながい", kanji: "長い", romaji: "nagai", type: "イ形容詞", meaning: "长" },
        { id: "v16-15", kana: "みじかい", kanji: "短い", romaji: "mijikai", type: "イ形容詞", meaning: "短" },
        { id: "v16-16", kana: "あかるい", kanji: "明るい", romaji: "akarui", type: "イ形容詞", meaning: "明亮" },
        { id: "v16-17", kana: "くらい", kanji: "暗い", romaji: "kurai", type: "イ形容詞", meaning: "昏暗" },
        { id: "v16-18", kana: "からだ", kanji: "体", romaji: "karada", type: "名詞", meaning: "身体" },
        { id: "v16-19", kana: "あたま", kanji: "頭", romaji: "atama", type: "名詞", meaning: "头" },
        { id: "v16-20", kana: "かみ", kanji: "髪", romaji: "kami", type: "名詞", meaning: "头发" },
        { id: "v16-21", kana: "かお", kanji: "顔", romaji: "kao", type: "名詞", meaning: "脸" },
        { id: "v16-22", kana: "め", kanji: "目", romaji: "me", type: "名詞", meaning: "眼睛" },
        { id: "v16-23", kana: "みみ", kanji: "耳", romaji: "mimi", type: "名詞", meaning: "耳朵" },
        { id: "v16-24", kana: "はな", kanji: "鼻", romaji: "hana", type: "名詞", meaning: "鼻子" },
        { id: "v16-25", kana: "くち", kanji: "口", romaji: "kuchi", type: "名詞", meaning: "嘴" },
        { id: "v16-26", kana: "は", kanji: "歯", romaji: "ha", type: "名詞", meaning: "牙齿" },
        { id: "v16-27", kana: "おなか", kanji: "", romaji: "onaka", type: "名詞", meaning: "肚子" },
        { id: "v16-28", kana: "あし", kanji: "足", romaji: "ashi", type: "名詞", meaning: "脚" },
        { id: "v16-29", kana: "ジョギング", kanji: "", romaji: "jogingu", type: "名詞", meaning: "慢跑" },
        { id: "v16-30", kana: "シャワー", kanji: "", romaji: "shawaa", type: "名詞", meaning: "淋浴" },
    ],
    grammars: [
        { id: "g16-1", pattern: "Vて、Vて、V", explanation: "动作的连续发生。", examples: [{ jp: "朝 ジョギングを して、シャワーを 浴びて、会社へ 行きます。", cn: "早上慢跑，冲澡，然后去公司。" }] },
        { id: "g16-2", pattern: "Vて から", explanation: "做完A之后马上做B。", examples: [{ jp: "国へ 帰ってから、父の 会社で 働きます。", cn: "回国之后，在父亲的公司工作。" }] },
        { id: "g16-3", pattern: "N1 は N2 が Adj", explanation: "描述N1的某个部分N2的特征。", examples: [{ jp: "マリアさんは 髪が 長いです。", cn: "玛利亚小姐头发很长。" }] }
    ],
    readings: [
        {
            id: "r16-A",
            title: "会話：请教我怎么用",
            type: "dialogue",
            content: [
                { id: "s1", role: "おばあさん", japanese: "すみません。\nこの 使い方を 教えて ください。", chinese: "不好意思，请教我这个怎么用。" },
                { id: "s2", role: "銀行員", japanese: "お引き出しですか。", chinese: "是取钱吗？" },
                { id: "s3", role: "おばあさん", japanese: "そうです。", chinese: "是的。" },
                { id: "s4", role: "銀行員", japanese: "じゃ、まず ここを 押して ください。", chinese: "那么，首先请按这里。" },
                { id: "s5", role: "おばあさん", japanese: "はい。", chinese: "好的。" },
                { id: "s6", role: "銀行員", japanese: "次に カードを 入れて、暗証番号を 押して ください。", chinese: "接下来插入卡片，输入密码。" },
                { id: "s7", role: "おばあさん", japanese: "はい。", chinese: "好的。" },
                { id: "s8", role: "銀行員", japanese: "そして 金額を 押して、確認ボタンを 押して ください。", chinese: "然后输入金额，按确认键。" },
                { id: "s9", role: "おばあさん", japanese: "はい、どうも ありがとう ございました。", chinese: "好的，非常感谢。" }
            ]
        }
    ],
    quizzes: [
        { id: "q16-1", question: "象は 鼻（　）長いです。", options: [{id:"o1", label:"は", isCorrect:false}, {id:"o2", label:"が", isCorrect:true}], explanation: "描述整体的某个部分特征用「N1は N2が Adj」。" }
    ]
  },
  {
    id: 17,
    title: "第17課：どうしましたか",
    description: "动词ない形 / 请不要... / 必须...",
    vocabularies: [
        { id: "v17-1", kana: "おぼえます", kanji: "覚えます", romaji: "oboemasu", type: "動詞", meaning: "记住" },
        { id: "v17-2", kana: "わすれます", kanji: "忘れます", romaji: "wasuremasu", type: "動詞", meaning: "忘记" },
        { id: "v17-3", kana: "なくします", kanji: "", romaji: "nakushimasu", type: "動詞", meaning: "丢失" },
        { id: "v17-4", kana: "はらいます", kanji: "払います", romaji: "haraimasu", type: "動詞", meaning: "支付" },
        { id: "v17-5", kana: "かえします", kanji: "返します", romaji: "kaeshimasu", type: "動詞", meaning: "归还" },
        { id: "v17-6", kana: "でかけます", kanji: "出かけます", romaji: "dekakemasu", type: "動詞", meaning: "出门" },
        { id: "v17-7", kana: "ぬぎます", kanji: "脱ぎます", romaji: "nugimasu", type: "動詞", meaning: "脱（衣服）" },
        { id: "v17-8", kana: "もっていきます", kanji: "持って行きます", romaji: "motteikimasu", type: "動詞", meaning: "带去" },
        { id: "v17-9", kana: "もってきます", kanji: "持って来ます", romaji: "mottekimasu", type: "動詞", meaning: "带来" },
        { id: "v17-10", kana: "しんぱいします", kanji: "心配します", romaji: "shinpaishimasu", type: "動詞", meaning: "担心" },
        { id: "v17-11", kana: "ざんぎょうします", kanji: "残業します", romaji: "zangyoushimasu", type: "動詞", meaning: "加班" },
        { id: "v17-12", kana: "しゅっちょうします", kanji: "出張します", romaji: "shucchoushimasu", type: "動詞", meaning: "出差" },
        { id: "v17-13", kana: "のみます", kanji: "飲みます", romaji: "nomimasu", type: "動詞", meaning: "吃（药）" },
        { id: "v17-14", kana: "はいります", kanji: "入ります", romaji: "hairimasu", type: "動詞", meaning: "洗（澡）" },
        { id: "v17-15", kana: "たいせつ（な）", kanji: "大切", romaji: "taisetsu", type: "ナ形容詞", meaning: "重要" },
        { id: "v17-16", kana: "だいじょうぶ（な）", kanji: "大丈夫", romaji: "daijoubu", type: "ナ形容詞", meaning: "没关系" },
        { id: "v17-17", kana: "あぶない", kanji: "危ない", romaji: "abunai", type: "イ形容詞", meaning: "危险" },
        { id: "v17-18", kana: "きんえん", kanji: "禁煙", romaji: "kinen", type: "名詞", meaning: "禁烟" },
        { id: "v17-19", kana: "ほけんしょう", kanji: "保険証", romaji: "hokenshou", type: "名詞", meaning: "保险证" },
        { id: "v17-20", kana: "ねつ", kanji: "熱", romaji: "netsu", type: "名詞", meaning: "发烧" },
        { id: "v17-21", kana: "びょうき", kanji: "病気", romaji: "byouki", type: "名詞", meaning: "病" },
        { id: "v17-22", kana: "くすり", kanji: "薬", romaji: "kusuri", type: "名詞", meaning: "药" },
        { id: "v17-23", kana: "おふろ", kanji: "お風呂", romaji: "ofuro", type: "名詞", meaning: "澡堂" },
        { id: "v17-24", kana: "うわぎ", kanji: "上着", romaji: "uwagi", type: "名詞", meaning: "上衣" },
        { id: "v17-25", kana: "したぎ", kanji: "下着", romaji: "shitagi", type: "名詞", meaning: "内衣" },
    ],
    grammars: [
        { id: "g17-1", pattern: "动词ない形 (Nai-form)", explanation: "一类：い段→あ段+ない；二类：去ます+ない；三类：しない、こない。", examples: [{ jp: "書きます → 書かない", cn: "写" }, { jp: "食べます → 食べない", cn: "吃" }] },
        { id: "g17-2", pattern: "Vないで ください", explanation: "请不要...。", examples: [{ jp: "ここで 写真を 撮らないで ください。", cn: "请不要在这里拍照。" }] },
        { id: "g17-3", pattern: "Vなければ なりません", explanation: "必须...。", examples: [{ jp: "薬を 飲まなければ なりません。", cn: "必须吃药。" }] },
        { id: "g17-4", pattern: "Vなくても いいです", explanation: "不...也可以。", examples: [{ jp: "あした 来なくても いいです。", cn: "明天不来也可以。" }] }
    ],
    readings: [
        {
            id: "r17-A",
            title: "会話：怎么了？",
            type: "dialogue",
            content: [
                { id: "s1", role: "松本", japanese: "どう しましたか。", chinese: "怎么了？" },
                { id: "s2", role: "サントス", japanese: "昨日から のどが 痛くて、熱も 少し あります。", chinese: "从昨天开始喉咙痛，还有点发烧。" },
                { id: "s3", role: "松本", japanese: "そうですか。\nちょっと 口を 開けて ください。", chinese: "是吗。请张开嘴。" },
                { id: "s4", role: "松本", japanese: "かぜですね。\nゆっくり 休んで ください。", chinese: "是感冒啊。请好好休息。" },
                { id: "s5", role: "サントス", japanese: "あのう、あしたから 東京へ 出張しなければ なりません。", chinese: "那个，明天开始我必须去东京出差。" },
                { id: "s6", role: "松本", japanese: "じゃ、薬を 飲んで、今日は 早く 寝て ください。", chinese: "那吃点药，今天早点睡吧。" },
                { id: "s7", role: "サントス", japanese: "はい。", chinese: "好的。" },
                { id: "s8", role: "松本", japanese: "お大事に。", chinese: "请多保重。" }
            ]
        }
    ],
    quizzes: [
        { id: "q17-1", question: "パスポートを（　）なりません。", options: [{id:"o1", label:"見せても", isCorrect:false}, {id:"o2", label:"見せなければ", isCorrect:true}], explanation: "必须做用「～なければ なりません」。" }
    ]
  },
  {
    id: 18,
    title: "第18課：趣味は 何ですか",
    description: "辞书形 / 能力 / 爱好 / 之前",
    vocabularies: [
        { id: "v18-1", kana: "できます", kanji: "", romaji: "dekimasu", type: "動詞", meaning: "会、能" },
        { id: "v18-2", kana: "あらいます", kanji: "洗います", romaji: "araimasu", type: "動詞", meaning: "洗" },
        { id: "v18-3", kana: "ひきます", kanji: "弾きます", romaji: "hikimasu", type: "動詞", meaning: "弹（琴）" },
        { id: "v18-4", kana: "うたいます", kanji: "歌います", romaji: "utaimasu", type: "動詞", meaning: "唱" },
        { id: "v18-5", kana: "あつめます", kanji: "集めます", romaji: "atsumemasu", type: "動詞", meaning: "收集" },
        { id: "v18-6", kana: "すてます", kanji: "捨てます", romaji: "sutemasu", type: "動詞", meaning: "扔掉" },
        { id: "v18-7", kana: "かえます", kanji: "換えます", romaji: "kaemasu", type: "動詞", meaning: "换" },
        { id: "v18-8", kana: "うんてんします", kanji: "運転します", romaji: "untenshimasu", type: "動詞", meaning: "驾驶" },
        { id: "v18-9", kana: "よやくします", kanji: "予約します", romaji: "yoyakushimasu", type: "動詞", meaning: "预约" },
        { id: "v18-10", kana: "ピアノ", kanji: "", romaji: "piano", type: "名詞", meaning: "钢琴" },
        { id: "v18-11", kana: "メートル", kanji: "", romaji: "meetoru", type: "名詞", meaning: "米" },
        { id: "v18-12", kana: "げんきん", kanji: "現金", romaji: "genkin", type: "名詞", meaning: "现金" },
        { id: "v18-13", kana: "しゅみ", kanji: "趣味", romaji: "shumi", type: "名詞", meaning: "爱好" },
        { id: "v18-14", kana: "にっき", kanji: "日記", romaji: "nikki", type: "名詞", meaning: "日记" },
        { id: "v18-15", kana: "おいのり", kanji: "お祈り", romaji: "oinori", type: "名詞", meaning: "祈祷" },
        { id: "v18-16", kana: "かちょう", kanji: "課長", romaji: "kachou", type: "名詞", meaning: "科长" },
        { id: "v18-17", kana: "ぶちょう", kanji: "部長", romaji: "buchou", type: "名詞", meaning: "部长" },
        { id: "v18-18", kana: "しゃちょう", kanji: "社長", romaji: "shachou", type: "名詞", meaning: "社长" },
        { id: "v18-19", kana: "どうぶつ", kanji: "動物", romaji: "doubutsu", type: "名詞", meaning: "动物" },
        { id: "v18-20", kana: "うま", kanji: "馬", romaji: "uma", type: "名詞", meaning: "马" },
        { id: "v18-21", kana: "インターネット", kanji: "", romaji: "intaanetto", type: "名詞", meaning: "互联网" },
    ],
    grammars: [
        { id: "g18-1", pattern: "动词辞书形 (Dictionary-form)", explanation: "原型（基本形）。一类：い段→う段；二类：去ます加る；三类：する、くる。", examples: [{ jp: "書く", cn: "写" }, { jp: "食べる", cn: "吃" }] },
        { id: "g18-2", pattern: "Vることが できます", explanation: "能力：会做...。", examples: [{ jp: "わたしは 日本語を 話すことが できます。", cn: "我会说日语。" }] },
        { id: "g18-3", pattern: "趣味は Vること です", explanation: "爱好是做...。", examples: [{ jp: "趣味は 映画を 見ることです。", cn: "爱好是看电影。" }] },
        { id: "g18-4", pattern: "Vる まえに", explanation: "在做...之前。", examples: [{ jp: "寝る まえに、本を 読みます。", cn: "睡前看书。" }] }
    ],
    readings: [
        {
            id: "r18-A",
            title: "会話：爱好是什么？",
            type: "dialogue",
            content: [
                { id: "s1", role: "山田", japanese: "サントスさんの 趣味は 何ですか。", chinese: "桑托斯先生的爱好是什么？" },
                { id: "s2", role: "サントス", japanese: "写真です。", chinese: "是摄影。" },
                { id: "s3", role: "山田", japanese: "どんな 写真を 撮りますか。", chinese: "拍什么样的照片？" },
                { id: "s4", role: "サントス", japanese: "動物の 写真です。\n特に 馬が 好きです。", chinese: "动物的照片。特别喜欢马。" },
                { id: "s5", role: "山田", japanese: "へえ、それは おもしろいですね。\n日本へ 来てから、馬の 写真を 撮りましたか。", chinese: "哎，那真有意思。来日本之后拍过马的照片吗？" },
                { id: "s6", role: "サントス", japanese: "いいえ。\n日本では なかなか 馬を 見ることが できません。", chinese: "不。在日本很难见到马。" },
                { id: "s7", role: "山田", japanese: "北海道に たくさん いますよ。", chinese: "北海道有很多哦。" }
            ]
        }
    ],
    quizzes: [
        { id: "q18-1", question: "わたしは ピアノを（　）ことが できます。", options: [{id:"o1", label:"弾く", isCorrect:true}, {id:"o2", label:"弾いて", isCorrect:false}], explanation: "能力句型用辞书形。" }
    ]
  },
  {
    id: 19,
    title: "第19課：ダイエットは 明日から します",
    description: "动词た形 / 经历 / 列举 / 变化",
    vocabularies: [
        { id: "v19-1", kana: "のぼります", kanji: "登ります", romaji: "noborimasu", type: "動詞", meaning: "登（山）" },
        { id: "v19-2", kana: "とまります", kanji: "泊まります", romaji: "tomarimasu", type: "動詞", meaning: "住（酒店）" },
        { id: "v19-3", kana: "そうじします", kanji: "掃除します", romaji: "soujishimasu", type: "動詞", meaning: "打扫" },
        { id: "v19-4", kana: "せんたくします", kanji: "洗濯します", romaji: "sentakushimasu", type: "動詞", meaning: "洗衣服" },
        { id: "v19-5", kana: "なります", kanji: "", romaji: "narimasu", type: "動詞", meaning: "成为" },
        { id: "v19-6", kana: "ねむい", kanji: "眠い", romaji: "nemui", type: "イ形容詞", meaning: "困" },
        { id: "v19-7", kana: "つよい", kanji: "強い", romaji: "tsuyoi", type: "イ形容詞", meaning: "强" },
        { id: "v19-8", kana: "よわい", kanji: "弱い", romaji: "yowai", type: "イ形容詞", meaning: "弱" },
        { id: "v19-9", kana: "れんしゅう", kanji: "練習", romaji: "renshuu", type: "名詞", meaning: "练习" },
        { id: "v19-10", kana: "ゴルフ", kanji: "", romaji: "gorufu", type: "名詞", meaning: "高尔夫" },
        { id: "v19-11", kana: "すもう", kanji: "相撲", romaji: "sumou", type: "名詞", meaning: "相扑" },
        { id: "v19-12", kana: "おちゃ", kanji: "お茶", romaji: "ocha", type: "名詞", meaning: "茶道" },
        { id: "v19-13", kana: "ひ", kanji: "日", romaji: "hi", type: "名詞", meaning: "日子" },
        { id: "v19-14", kana: "ちょうし", kanji: "調子", romaji: "choushi", type: "名詞", meaning: "情况" },
        { id: "v19-15", kana: "いちど", kanji: "一度", romaji: "ichido", type: "副詞", meaning: "一次" },
        { id: "v19-16", kana: "いちども", kanji: "一度も", romaji: "ichidomo", type: "副詞", meaning: "一次也（否定）" },
        { id: "v19-17", kana: "だんだん", kanji: "", romaji: "dandan", type: "副詞", meaning: "逐渐" },
        { id: "v19-18", kana: "もうすぐ", kanji: "", romaji: "mousugu", type: "副詞", meaning: "马上" },
    ],
    grammars: [
        { id: "g19-1", pattern: "动词た形 (Ta-form)", explanation: "变形规则同て形，把て换成た，で换成だ。", examples: [{ jp: "書いて", cn: "書いた" }, { jp: "飲んで", cn: "飲んだ" }] },
        { id: "g19-2", pattern: "Vた ことが あります", explanation: "有过...经历。", examples: [{ jp: "馬に 乗った ことが あります。", cn: "骑过马。" }] },
        { id: "g19-3", pattern: "Vたり Vたり します", explanation: "动作列举：做做...做做...。", examples: [{ jp: "日曜日は テニスを したり、映画を 見たり します。", cn: "周日打打网球，看看电影。" }] },
        { id: "g19-4", pattern: "くなります/になります", explanation: "变化。イ形→く、ナ形/名词→に。", examples: [{ jp: "寒く なります。", cn: "变冷。" }, { jp: "元気に なります。", cn: "变精神。" }] }
    ],
    readings: [
        {
            id: "r19-A",
            title: "会話：减肥从明天开始",
            type: "dialogue",
            content: [
                { id: "s1", role: "マリア", japanese: "ダイエットは あしたから します。", chinese: "减肥从明天开始。" },
                { id: "s2", role: "松本", japanese: "またですか。", chinese: "又来？" },
                { id: "s3", role: "マリア", japanese: "おいしい アイスクリームを 食べたり、ケーキを 食べたり しましたから……。", chinese: "因为又是吃好吃的冰淇淋，又是吃蛋糕的……" },
                { id: "s4", role: "松本", japanese: "そうですか。", chinese: "是吗。" },
                { id: "s5", role: "マリア", japanese: "松本さんは ダイエットを した ことが ありますか。", chinese: "松本先生减肥过吗？" },
                { id: "s6", role: "松本", japanese: "いいえ、一度も ありません。", chinese: "不，一次也没有。" }
            ]
        }
    ],
    quizzes: [
        { id: "q19-1", question: "京都へ（　）ことが ありますか。", options: [{id:"o1", label:"行く", isCorrect:false}, {id:"o2", label:"行った", isCorrect:true}], explanation: "经历用「た形 + ことが あります」。" }
    ]
  },
  {
    id: 20,
    title: "第20課：夏休みはどうする？",
    description: "普通体 (简体)",
    vocabularies: [
        { id: "v20-1", kana: "いります", kanji: "要ります", romaji: "irimasu", type: "動詞", meaning: "需要（签证）" },
        { id: "v20-2", kana: "しらべます", kanji: "調べます", romaji: "shirabemasu", type: "動詞", meaning: "调查" },
        { id: "v20-3", kana: "しゅうりします", kanji: "修理します", romaji: "shuurishimasu", type: "動詞", meaning: "修理" },
        { id: "v20-4", kana: "ぼく", kanji: "僕", romaji: "boku", type: "代名詞", meaning: "我（男性用）" },
        { id: "v20-5", kana: "きみ", kanji: "君", romaji: "kimi", type: "代名詞", meaning: "你（男性对晚辈）" },
        { id: "v20-6", kana: "～くん", kanji: "～君", romaji: "kun", type: "接尾辞", meaning: "～君（称呼男性）" },
        { id: "v20-7", kana: "うん", kanji: "", romaji: "un", type: "感嘆詞", meaning: "嗯（是）" },
        { id: "v20-8", kana: "ううん", kanji: "", romaji: "uun", type: "感嘆詞", meaning: "不（不是）" },
        { id: "v20-9", kana: "ことば", kanji: "言葉", romaji: "kotoba", type: "名詞", meaning: "语言、词" },
        { id: "v20-10", kana: "きもの", kanji: "着物", romaji: "kimono", type: "名詞", meaning: "和服" },
        { id: "v20-11", kana: "ビザ", kanji: "", romaji: "biza", type: "名詞", meaning: "签证" },
        { id: "v20-12", kana: "はじめ", kanji: "初め", romaji: "hajime", type: "名詞", meaning: "开始" },
        { id: "v20-13", kana: "おわり", kanji: "終わり", romaji: "owari", type: "名詞", meaning: "结束" },
        { id: "v20-14", kana: "こっち", kanji: "", romaji: "kocchi", type: "代名詞", meaning: "这边" },
        { id: "v20-15", kana: "そっち", kanji: "", romaji: "socchi", type: "代名詞", meaning: "那边" },
        { id: "v20-16", kana: "あっち", kanji: "", romaji: "acchi", type: "代名詞", meaning: "那边" },
        { id: "v20-17", kana: "どっち", kanji: "", romaji: "docchi", type: "代名詞", meaning: "哪边" },
        { id: "v20-18", kana: "みんなで", kanji: "", romaji: "minnade", type: "副詞", meaning: "大家一起" },
        { id: "v20-19", kana: "～けど", kanji: "", romaji: "kedo", type: "接続詞", meaning: "但是（口语）" },
    ],
    grammars: [
        { id: "g20-1", pattern: "普通体 (Plain Style)", explanation: "简体对话规则：\n动词：使用辞书形/ない形/た形。\nイ形：去掉です。\nナ形/名词：だ (口语中常省略)。\n疑问词：去掉か，句尾上扬。", examples: [{ jp: "食べる？", cn: "吃吗？" }, { jp: "うん、食べる。", cn: "嗯，吃。" }, { jp: "あした 暇？", cn: "明天有空吗？" }] },
        { id: "g20-2", pattern: "书面语与口语", explanation: "口语中助词（は、が、を）经常省略。", examples: [{ jp: "ご飯 食べる？", cn: "吃饭吗？" }] }
    ],
    readings: [
        {
            id: "r20-A",
            title: "会話：暑假打算怎么办？",
            type: "dialogue",
            content: [
                { id: "s1", role: "小林", japanese: "夏休みは どう する？", chinese: "暑假打算怎么办？" },
                { id: "s2", role: "タワポン", japanese: "国へ 帰るつもり。", chinese: "打算回国。" },
                { id: "s3", role: "小林", japanese: "へえ、いいな。", chinese: "哎，真好啊。" },
                { id: "s4", role: "タワポン", japanese: "小林君は？", chinese: "小林你呢？" },
                { id: "s5", role: "小林", japanese: "どう しようかな……。", chinese: "该怎么办呢……" },
                { id: "s6", role: "タワポン", japanese: "富士山に 登った こと ある？", chinese: "爬过富士山吗？" },
                { id: "s7", role: "小林", japanese: "ううん、ない。", chinese: "没，没爬过。" },
                { id: "s8", role: "タワポン", japanese: "じゃ、よかったら いっしょに 行かない？", chinese: "那如果方便的话，不一起去吗？" },
                { id: "s9", role: "小林", japanese: "うん、いつごろ？", chinese: "嗯，大概什么时候？" },
                { id: "s10", role: "タワポン", japanese: "8月の 初めごろは どう？", chinese: "8月初怎么样？" },
                { id: "s11", role: "小林", japanese: "いいね。", chinese: "好啊。" }
            ]
        }
    ],
    quizzes: [
        { id: "q20-1", question: "コーヒー 飲む？（肯定回答）", options: [{id:"o1", label:"うん、飲む", isCorrect:true}, {id:"o2", label:"ううん、飲む", isCorrect:false}], explanation: "肯定用「うん」，否定用「ううん」。" }
    ]
  },
  {
    id: 21,
    title: "第21課：わたしも そう 思います",
    description: "想法 (思います) / 引用 (言いました)",
    vocabularies: [
        { id: "v21-1", kana: "おもいます", kanji: "思います", romaji: "omoimasu", type: "動詞", meaning: "想、觉得" },
        { id: "v21-2", kana: "いいます", kanji: "言います", romaji: "iimasu", type: "動詞", meaning: "说" },
        { id: "v21-3", kana: "たります", kanji: "足ります", romaji: "tarimasu", type: "動詞", meaning: "够" },
        { id: "v21-4", kana: "かちます", kanji: "勝ちます", romaji: "kachimasu", type: "動詞", meaning: "赢" },
        { id: "v21-5", kana: "まけます", kanji: "負けます", romaji: "makemasu", type: "動詞", meaning: "输" },
        { id: "v21-6", kana: "あります", kanji: "", romaji: "arimasu", type: "動詞", meaning: "举行（お祭りが～）" },
        { id: "v21-7", kana: "やくにたちます", kanji: "役に立ちます", romaji: "yakunitachimasu", type: "動詞", meaning: "有用" },
        { id: "v21-8", kana: "むだ（な）", kanji: "無駄", romaji: "muda", type: "ナ形容詞", meaning: "浪费" },
        { id: "v21-9", kana: "ふべん（な）", kanji: "不便", romaji: "fuben", type: "ナ形容詞", meaning: "不便" },
        { id: "v21-10", kana: "おなじ", kanji: "同じ", romaji: "onaji", type: "イ形容詞", meaning: "一样" },
        { id: "v21-11", kana: "しゅしょう", kanji: "首相", romaji: "shushou", type: "名詞", meaning: "首相" },
        { id: "v21-12", kana: "だいとうりょう", kanji: "大統領", romaji: "daitouryou", type: "名詞", meaning: "总统" },
        { id: "v21-13", kana: "せいじ", kanji: "政治", romaji: "seiji", type: "名詞", meaning: "政治" },
        { id: "v21-14", kana: "ニュース", kanji: "", romaji: "nyuusu", type: "名詞", meaning: "新闻" },
        { id: "v21-15", kana: "スピーチ", kanji: "", romaji: "supiichi", type: "名詞", meaning: "演讲" },
        { id: "v21-16", kana: "しあい", kanji: "試合", romaji: "shiai", type: "名詞", meaning: "比赛" },
        { id: "v21-17", kana: "アルバイト", kanji: "", romaji: "arubaito", type: "名詞", meaning: "兼职" },
        { id: "v21-18", kana: "いけん", kanji: "意見", romaji: "iken", type: "名詞", meaning: "意见" },
        { id: "v21-19", kana: "おはなし", kanji: "お話", romaji: "ohanashi", type: "名詞", meaning: "话" },
        { id: "v21-20", kana: "ユーモア", kanji: "", romaji: "yuumoa", type: "名詞", meaning: "幽默" },
        { id: "v21-21", kana: "むだ", kanji: "無駄", romaji: "muda", type: "名詞", meaning: "浪费" },
        { id: "v21-22", kana: "デザイン", kanji: "", romaji: "dezain", type: "名詞", meaning: "设计" },
        { id: "v21-23", kana: "こうつう", kanji: "交通", romaji: "koutsuu", type: "名詞", meaning: "交通" },
        { id: "v21-24", kana: "ラッシュ", kanji: "", romaji: "rasshu", type: "名詞", meaning: "高峰期" },
        { id: "v21-25", kana: "さいきん", kanji: "最近", romaji: "saikin", type: "名詞", meaning: "最近" },
        { id: "v21-26", kana: "たぶん", kanji: "", romaji: "tabun", type: "副詞", meaning: "大概" },
        { id: "v21-27", kana: "きっと", kanji: "", romaji: "kitto", type: "副詞", meaning: "一定" },
        { id: "v21-28", kana: "ほんとうに", kanji: "本当に", romaji: "hontouni", type: "副詞", meaning: "真的" },
        { id: "v21-29", kana: "そんなに", kanji: "", romaji: "sonnani", type: "副詞", meaning: "（不）那么" },
        { id: "v21-30", kana: "～について", kanji: "", romaji: "nitsuite", type: "連語", meaning: "关于～" },
    ],
    grammars: [
        { id: "g21-1", pattern: "～と 思います", explanation: "我想/我觉得。前接简体。", examples: [{ jp: "あした 雨が 降ると 思います。", cn: "我觉得明天会下雨。" }] },
        { id: "g21-2", pattern: "「句子」～と 言いました", explanation: "引用：他说...。", examples: [{ jp: "ミラーさんは 「来週 東京へ 出張します」と 言いました。", cn: "米勒先生说“下周去东京出差”。" }] },
        { id: "g21-3", pattern: "～でしょう？", explanation: "确认：是吧？（升调）", examples: [{ jp: "あした パーティーが あるでしょう？", cn: "明天有晚会吧？" }] }
    ],
    readings: [
        {
            id: "r21-A",
            title: "会話：我也这么觉得",
            type: "dialogue",
            content: [
                { id: "s1", role: "佐藤", japanese: "日本は 物価が 高いですね。", chinese: "日本物价很高呢。" },
                { id: "s2", role: "マリア", japanese: "ええ、ほんとうに そうですね。", chinese: "是啊，真的是这样。" },
                { id: "s3", role: "佐藤", japanese: "でも、果物は おいしいですね。", chinese: "不过，水果很好吃。" },
                { id: "s4", role: "マリア", japanese: "そうですか？\nわたしは 日本の 果物は ちょっと 甘すぎると 思います。", chinese: "是吗？我觉得日本的水果稍微有点太甜了。" },
                { id: "s5", role: "佐藤", japanese: "そうですか。\nわたしも そう 思います。", chinese: "是吗。我也这么觉得。" }
            ]
        }
    ],
    quizzes: [
        { id: "q21-1", question: "あした 雨が（　）と 思います。", options: [{id:"o1", label:"降ります", isCorrect:false}, {id:"o2", label:"降る", isCorrect:true}], explanation: "「と 思います」前面用简体。" }
    ]
  },
  {
    id: 22,
    title: "第22課：どんな アパートが いいですか",
    description: "连体修饰 (定语从句)",
    vocabularies: [
        { id: "v22-1", kana: "きます", kanji: "着ます", romaji: "kimasu", type: "動詞", meaning: "穿（衬衫等）" },
        { id: "v22-2", kana: "はきます", kanji: "履きます", romaji: "hakimasu", type: "動詞", meaning: "穿（鞋、裤子）" },
        { id: "v22-3", kana: "かぶります", kanji: "", romaji: "kaburimasu", type: "動詞", meaning: "戴（帽子）" },
        { id: "v22-4", kana: "かけます", kanji: "", romaji: "kakemasu", type: "動詞", meaning: "戴（眼镜）" },
        { id: "v22-5", kana: "します", kanji: "", romaji: "shimasu", type: "動詞", meaning: "系（领带）" },
        { id: "v22-6", kana: "うまれます", kanji: "生まれます", romaji: "umaremasu", type: "動詞", meaning: "出生" },
        { id: "v22-7", kana: "コート", kanji: "", romaji: "kooto", type: "名詞", meaning: "大衣" },
        { id: "v22-8", kana: "スーツ", kanji: "", romaji: "suutsu", type: "名詞", meaning: "西装" },
        { id: "v22-9", kana: "セーター", kanji: "", romaji: "seetaa", type: "名詞", meaning: "毛衣" },
        { id: "v22-10", kana: "ぼうし", kanji: "帽子", romaji: "boushi", type: "名詞", meaning: "帽子" },
        { id: "v22-11", kana: "めがね", kanji: "眼鏡", romaji: "megane", type: "名詞", meaning: "眼镜" },
        { id: "v22-12", kana: "よく", kanji: "", romaji: "yoku", type: "副詞", meaning: "经常" },
        { id: "v22-13", kana: "おめでとうございます", kanji: "", romaji: "omedetou", type: "挨拶", meaning: "恭喜" },
        { id: "v22-14", kana: "やちん", kanji: "家賃", romaji: "yachin", type: "名詞", meaning: "房租" },
        { id: "v22-15", kana: "ダイニングキッチン", kanji: "", romaji: "dainingu", type: "名詞", meaning: "带餐厅的厨房 (DK)" },
        { id: "v22-16", kana: "わしつ", kanji: "和室", romaji: "washitsu", type: "名詞", meaning: "和室" },
        { id: "v22-17", kana: "おしいれ", kanji: "押し入れ", romaji: "oshiire", type: "名詞", meaning: "壁橱" },
        { id: "v22-18", kana: "ふとん", kanji: "布団", romaji: "futon", type: "名詞", meaning: "被褥" },
    ],
    grammars: [
        { id: "g22-1", pattern: "连体修饰 (定语从句)", explanation: "用句子修饰名词。修饰句用简体。", examples: [{ jp: "ミラーさんが 住んで いる 家は 古いです。", cn: "米勒先生住的房子很旧。" }] },
        { id: "g22-2", pattern: "修饰句中的主语用“が”", explanation: "从句中的主语不能用“は”，必须用“が”。", examples: [{ jp: "これは わたしが 撮った 写真です。", cn: "这是我拍的照片。" }] }
    ],
    readings: [
        {
            id: "r22-A",
            title: "会話：什么样的公寓比较好？",
            type: "dialogue",
            content: [
                { id: "s1", role: "不動産屋", japanese: "どんな アパートが いいですか。", chinese: "想要什么样的公寓？" },
                { id: "s2", role: "ワン", japanese: "駅から 近い ところが いいです。", chinese: "离车站近的地方比较好。" },
                { id: "s3", role: "不動産屋", japanese: "家賃は？", chinese: "房租呢？" },
                { id: "s4", role: "ワン", japanese: "8万円ぐらいです。", chinese: "8万日元左右。" },
                { id: "s5", role: "不動産屋", japanese: "じゃ、ここは どうですか。\n駅から 歩いて 3分です。", chinese: "那这里怎么样？从车站走3分钟。" },
                { id: "s6", role: "ワン", japanese: "ダイニングキッチンと 和室が 1つですね。\nすみません。ここを 見ることが できますか。", chinese: "是一间带餐厅厨房和一间和室的吧。不好意思，能看看这里吗？" },
                { id: "s7", role: "不動産屋", japanese: "ええ、いいですよ。", chinese: "嗯，可以哦。" }
            ]
        }
    ],
    quizzes: [
        { id: "q22-1", question: "これは 母（　）作った 料理です。", options: [{id:"o1", label:"は", isCorrect:false}, {id:"o2", label:"が", isCorrect:true}], explanation: "修饰从句中的主语用「が」。" }
    ]
  },
  {
    id: 23,
    title: "第23課：どうやって 行きますか",
    description: "时候 (とき) / 一...就... (と)",
    vocabularies: [
        { id: "v23-1", kana: "ききます", kanji: "聞きます", romaji: "kikimasu", type: "動詞", meaning: "问（老师）" },
        { id: "v23-2", kana: "まわします", kanji: "回します", romaji: "mawashimasu", type: "動詞", meaning: "转动" },
        { id: "v23-3", kana: "ひきます", kanji: "引きます", romaji: "hikimasu", type: "動詞", meaning: "拉" },
        { id: "v23-4", kana: "かえます", kanji: "変えます", romaji: "kaemasu", type: "動詞", meaning: "改变" },
        { id: "v23-5", kana: "さわります", kanji: "触ります", romaji: "sawarimasu", type: "動詞", meaning: "触碰" },
        { id: "v23-6", kana: "でます", kanji: "出ます", romaji: "demasu", type: "動詞", meaning: "出来（零钱）" },
        { id: "v23-7", kana: "あるきます", kanji: "歩きます", romaji: "arukimasu", type: "動詞", meaning: "走" },
        { id: "v23-8", kana: "わたります", kanji: "渡ります", romaji: "watarimasu", type: "動詞", meaning: "过（桥）" },
        { id: "v23-9", kana: "まがります", kanji: "曲がります", romaji: "magarimasu", type: "動詞", meaning: "转弯" },
        { id: "v23-10", kana: "さびしい", kanji: "寂しい", romaji: "sabishii", type: "イ形容詞", meaning: "寂寞" },
        { id: "v23-11", kana: "おゆ", kanji: "お湯", romaji: "oyu", type: "名詞", meaning: "热水" },
        { id: "v23-12", kana: "おと", kanji: "音", romaji: "oto", type: "名詞", meaning: "声音" },
        { id: "v23-13", kana: "サイズ", kanji: "", romaji: "saizu", type: "名詞", meaning: "尺寸" },
        { id: "v23-14", kana: "こしょう", kanji: "故障", romaji: "koshou", type: "名詞", meaning: "故障" },
        { id: "v23-15", kana: "みち", kanji: "道", romaji: "michi", type: "名詞", meaning: "道路" },
        { id: "v23-16", kana: "こうさてん", kanji: "交差点", romaji: "kousaten", type: "名詞", meaning: "十字路口" },
        { id: "v23-17", kana: "しんごう", kanji: "信号", romaji: "shingou", type: "名詞", meaning: "红绿灯" },
        { id: "v23-18", kana: "かど", kanji: "角", romaji: "kado", type: "名詞", meaning: "拐角" },
        { id: "v23-19", kana: "はし", kanji: "橋", romaji: "hashi", type: "名詞", meaning: "桥" },
        { id: "v23-20", kana: "ちゅうしゃじょう", kanji: "駐車場", romaji: "chuushajou", type: "名詞", meaning: "停车场" },
        { id: "v23-21", kana: "～め", kanji: "～目", romaji: "me", type: "接尾辞", meaning: "第～个" },
        { id: "v23-22", kana: "しょうがつ", kanji: "正月", romaji: "shougatsu", type: "名詞", meaning: "正月" },
    ],
    grammars: [
        { id: "g23-1", pattern: "Vる/ない/た とき", explanation: "...的时候。根据时态选择动词形式。", examples: [{ jp: "図書館で 本を 借りる とき、カードが 要ります。", cn: "在图书馆借书的时候，需要卡。" }, { jp: "道が わからない とき、人に 聞きます。", cn: "不知道路的时候，问别人。" }] },
        { id: "g23-2", pattern: "Vる と、～", explanation: "一...就... (机械条件/指路)。必然结果。", examples: [{ jp: "これを 回すと、音が 大きく なります。", cn: "转动这个，声音就会变大。" }, { jp: "右へ 曲がると、郵便局が あります。", cn: "往右转就有邮局。" }] }
    ],
    readings: [
        {
            id: "r23-A",
            title: "会話：怎么去？",
            type: "dialogue",
            content: [
                { id: "s1", role: "ホセ", japanese: "みどり図書館まで どうやって 行きますか。", chinese: "怎么去绿町图书馆？" },
                { id: "s2", role: "駅員", japanese: "本田駅から バスに 乗って、図書館前で 降ります。\n3つ目の バス停です。", chinese: "在本田站坐公交车，在图书馆前下车。是第三个车站。" },
                { id: "s3", role: "ホセ", japanese: "3つ目ですね。\n降りてから、どう 行きますか。", chinese: "第三个是吧。下车后怎么走？" },
                { id: "s4", role: "駅員", japanese: "バスの 進行方向に 歩いて、信号を 渡ると、右に あります。", chinese: "顺着公交车行进的方向走，过了信号灯，就在右边。" },
                { id: "s5", role: "ホセ", japanese: "どうも ありがとう ございました。", chinese: "非常感谢。" }
            ]
        }
    ],
    quizzes: [
        { id: "q23-1", question: "新聞を（　）とき、眼鏡を かけます。", options: [{id:"o1", label:"読む", isCorrect:true}, {id:"o2", label:"読んだ", isCorrect:false}], explanation: "读报纸是即将发生的动作，用辞书形。" }
    ]
  },
  {
    id: 24,
    title: "第24課：手伝って くれますか",
    description: "授受动词 (くれる) / 为别人做...",
    vocabularies: [
        { id: "v24-1", kana: "くれます", kanji: "", romaji: "kuremasu", type: "動詞", meaning: "给（我）" },
        { id: "v24-2", kana: "なおします", kanji: "直します", romaji: "naoshimasu", type: "動詞", meaning: "修理、修改" },
        { id: "v24-3", kana: "つれていきます", kanji: "連れて行きます", romaji: "tsureteikimasu", type: "動詞", meaning: "带（人）去" },
        { id: "v24-4", kana: "つれてきます", kanji: "連れて来ます", romaji: "tsuretekimasu", type: "動詞", meaning: "带（人）来" },
        { id: "v24-5", kana: "おくります", kanji: "送ります", romaji: "okurimasu", type: "動詞", meaning: "送（人）" },
        { id: "v24-6", kana: "しょうかいします", kanji: "紹介します", romaji: "shoukaishimasu", type: "動詞", meaning: "介绍" },
        { id: "v24-7", kana: "あんないします", kanji: "案内します", romaji: "annaishimasu", type: "動詞", meaning: "向导" },
        { id: "v24-8", kana: "せつめいします", kanji: "説明します", romaji: "setsumeishimasu", type: "動詞", meaning: "说明" },
        { id: "v24-9", kana: "おじいさん", kanji: "", romaji: "ojiisan", type: "名詞", meaning: "爷爷" },
        { id: "v24-10", kana: "おばあさん", kanji: "", romaji: "obaasan", type: "名詞", meaning: "奶奶" },
        { id: "v24-11", kana: "じゅんび", kanji: "準備", romaji: "junbi", type: "名詞", meaning: "准备" },
        { id: "v24-12", kana: "ひっこし", kanji: "引っ越し", romaji: "hikkoshi", type: "名詞", meaning: "搬家" },
        { id: "v24-13", kana: "おかし", kanji: "お菓子", romaji: "okashi", type: "名詞", meaning: "点心" },
        { id: "v24-14", kana: "ぜんぶ", kanji: "全部", romaji: "zenbu", type: "副詞", meaning: "全部" },
        { id: "v24-15", kana: "じぶんで", kanji: "自分で", romaji: "jibunde", type: "副詞", meaning: "自己" },
    ],
    grammars: [
        { id: "g24-1", pattern: "くれます", explanation: "别人给“我”（或我方人员）。", examples: [{ jp: "佐藤さんは わたしに クリスマスカードを くれました。", cn: "佐藤小姐给了我圣诞卡。" }] },
        { id: "g24-2", pattern: "Vて あげます", explanation: "我为别人做（或别人为别人做）。", examples: [{ jp: "わたしは 木村さんに 本を 貸して あげました。", cn: "我借书给了木村小姐。" }] },
        { id: "g24-3", pattern: "Vて もらいます", explanation: "请别人做/承受恩惠。", examples: [{ jp: "わたしは 山田さんに 傘を 貸して もらいました。", cn: "山田先生借了伞给我（我请山田借伞给我）。" }] },
        { id: "g24-4", pattern: "Vて くれます", explanation: "别人主动为我做。", examples: [{ jp: "家内は わたしに 料理を 作って くれます。", cn: "妻子给我做饭。" }] }
    ],
    readings: [
        {
            id: "r24-A",
            title: "会話：能帮我一下吗？",
            type: "dialogue",
            content: [
                { id: "s1", role: "ワン", japanese: "田中さん、日曜日に 引っ越しを します。\n手伝って くれませんか。", chinese: "田中先生，周日我要搬家。能帮帮我吗？" },
                { id: "s2", role: "田中", japanese: "いいですよ。", chinese: "可以啊。" },
                { id: "s3", role: "ワン", japanese: "じゃ、9時に お願いします。", chinese: "那，拜托9点钟过来。" },
                { id: "s4", role: "田中", japanese: "ほかに だれが 行きますか。", chinese: "还有谁去？" },
                { id: "s5", role: "ワン", japanese: "山田さんと ミラーさんが 来て くれます。", chinese: "山田先生和米勒先生会来。" },
                { id: "s6", role: "田中", japanese: "車は？", chinese: "车呢？" },
                { id: "s7", role: "ワン", japanese: "ミラーさんが 貸して くれます。", chinese: "米勒先生借给我。" }
            ]
        }
    ],
    quizzes: [
        { id: "q24-1", question: "父は わたしに 時計を（　）。", options: [{id:"o1", label:"あげました", isCorrect:false}, {id:"o2", label:"くれました", isCorrect:true}], explanation: "别人给“我”用「くれます」。" }
    ]
  },
  {
    id: 25,
    title: "第25課：いろいろ お世話に なりました",
    description: "如果 (たら) / 即使 (ても)",
    vocabularies: [
        { id: "v25-1", kana: "かんがえます", kanji: "考えます", romaji: "kangaemasu", type: "動詞", meaning: "考虑" },
        { id: "v25-2", kana: "つきます", kanji: "着きます", romaji: "tsukimasu", type: "動詞", meaning: "到达" },
        { id: "v25-3", kana: "りゅうがくします", kanji: "留学します", romaji: "ryuugakushimasu", type: "動詞", meaning: "留学" },
        { id: "v25-4", kana: "とります", kanji: "取ります", romaji: "torimasu", type: "動詞", meaning: "上（年纪）" },
        { id: "v25-5", kana: "いなか", kanji: "田舎", romaji: "inaka", type: "名詞", meaning: "乡下" },
        { id: "v25-6", kana: "たいしかん", kanji: "大使館", romaji: "taishikan", type: "名詞", meaning: "大使馆" },
        { id: "v25-7", kana: "グループ", kanji: "", romaji: "guruupu", type: "名詞", meaning: "小组" },
        { id: "v25-8", kana: "チャンス", kanji: "", romaji: "chansu", type: "名詞", meaning: "机会" },
        { id: "v25-9", kana: "おく", kanji: "億", romaji: "oku", type: "数詞", meaning: "亿" },
        { id: "v25-10", kana: "もし", kanji: "", romaji: "moshi", type: "副詞", meaning: "如果" },
        { id: "v25-11", kana: "いくら", kanji: "", romaji: "ikura", type: "副詞", meaning: "无论多少" },
        { id: "v25-12", kana: "てんきん", kanji: "転勤", romaji: "tenkin", type: "名詞", meaning: "调动工作" },
        { id: "v25-13", kana: "こと", kanji: "", romaji: "koto", type: "名詞", meaning: "事情" },
        { id: "v25-14", kana: "いっぱいのみましょう", kanji: "一杯飲みましょう", romaji: "ippainomimashou", type: "挨拶", meaning: "喝一杯吧" },
        { id: "v25-15", kana: "がんばります", kanji: "頑張ります", romaji: "ganbarimasu", type: "動詞", meaning: "努力" },
    ],
    grammars: [
        { id: "g25-1", pattern: "Vたら", explanation: "假定：如果...。た形+ら。", examples: [{ jp: "雨が 降ったら、出かけません。", cn: "如果下雨，就不出门。" }] },
        { id: "g25-2", pattern: "Vたたら (确定条件)", explanation: "...之后（必然发生）。", examples: [{ jp: "10時に なったら、出かけましょう。", cn: "到了10点就出发吧。" }] },
        { id: "g25-3", pattern: "Vても", explanation: "逆接：即使...也...。て形+も。", examples: [{ jp: "雨が 降っても、洗濯します。", cn: "即使下雨也要洗衣服。" }] }
    ],
    readings: [
        {
            id: "r25-A",
            title: "会話：承蒙您多方关照",
            type: "dialogue",
            content: [
                { id: "s1", role: "木村", japanese: "転勤、おめでとう ございます。", chinese: "恭喜您工作调动。" },
                { id: "s2", role: "ミラー", japanese: "ありがとう ございます。", chinese: "谢谢。" },
                { id: "s3", role: "木村", japanese: "東京へ 行っても、大阪の ことを 忘れないで くださいね。", chinese: "即使去了东京，也请别忘了大阪的事哦。" },
                { id: "s4", role: "ミラー", japanese: "もちろんです。\n木村さん、いろいろ お世話に なりました。", chinese: "那是当然。木村小姐，承蒙您多方关照了。" },
                { id: "s5", role: "木村", japanese: "いいえ。どうぞ お元気で。", chinese: "哪里。请多保重。" },
                { id: "s6", role: "ミラー", japanese: "はい、頑張ります。", chinese: "好的，我会努力的。" }
            ]
        }
    ],
    quizzes: [
        { id: "q25-1", question: "雨が（　）、行きます。", options: [{id:"o1", label:"降ったら", isCorrect:false}, {id:"o2", label:"降っても", isCorrect:true}], explanation: "根据上下文，逆接（即使下雨也去）用「～ても」。" }
    ]
  }
];

export const MOCK_LESSON_1 = N5_LESSONS[0]; // Backward compatibility if needed