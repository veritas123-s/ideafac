const assets = {
  crack: "裂缝 启动界面/f8a342ba-f78b-4127-81ab-cb2d60bb3a44.jpg",
  home: "星舰本体概念图/img_home_bg.jpg",
  ship: "星舰本体概念图/img_ship.jpg",
  pod: "生成空置休眠舱图/1f80d50a-d056-44c4-81b9-858c1e4d2475.jpg",
  map: "星舰星图/545ad440-ddf9-49a4-96f8-036f817af5ba.jpg",
  ai: "星舰ai概念图/img_ai_normal.jpg",
  war: "星际战争档案图/img_war_archive.jpg",
  glory1: "过去辉煌档案图/glory_1.jpg",
  glory2: "过去辉煌档案图/glory_2.jpg",
  glory3: "过去辉煌档案图/glory_3.jpg",
  glory4: "过去辉煌档案图/glory_4.jpg",
  glory5: "过去辉煌档案图/glory_5.jpg",
  endingNewAge: "结局图/ending_new_age.jpg",
  endingSelfDestruct: "结局图/ending_self_destruct.jpg",
  endingDelayed: "结局图/ending_delayed.jpg",
  endingSealed: "结局图/ending_sealed.jpg",
  endingWarLegacy: "结局图/ending_war_legacy.jpg",
  discoveryVideo: "发现巨型星舰.mp4",
  probeVideo: "人类搭乘探测器准备进入星舰.mp4",
  enterVideo: "进入星舰内部.mp4",
  aiVideo: "星舰ai出场.mp4",
  judgementVideo: "最终审判.mp4"
};

const introSlides = [
  {
    image: assets.crack,
    kicker: "ARK BRIEFING",
    title: "罗斯冰架异常坍塌",
    text: "2047 年，南极罗斯冰架出现非自然坍塌。卫星热成像显示，冰盖下方存在巨型空腔，空腔边缘具有稳定热源与规则几何边界。"
  },
  {
    image: assets.ship,
    kicker: "ARK BRIEFING",
    title: "黑色金属轮廓",
    text: "钻探机器人在三千米冰层下停止下降。它没有撞上岩石，也没有发现陨石坑，而是拍到了一片没有边界的黑色金属。"
  },
  {
    image: assets.map,
    kicker: "ARK BRIEFING",
    title: "不是外星遗迹",
    text: "调查组最初以为它来自外星。但真正等待人类的答案更加残酷：这艘方舟来自人类自己的过去，来自一段被战争、冰层与时间共同抹去的星海文明。"
  },
  {
    image: assets.home,
    kicker: "ARK BRIEFING",
    title: "文明断代",
    text: "现代科技退回原始状态，并非因为血脉倒退，而是上一轮人类文明在内战后失去工业、语言、教育系统与物种连续性。幸存的非目标灵长类支系重新进化，最终再次成为人类。"
  }
];

const homeBackgroundSlides = [assets.crack, assets.ship, assets.map, assets.ai];


const glorySlides = [
  {
    image: assets.glory1,
    title: "群星之环",
    text: "科研人员，请抬头。你们称为近地轨道的地方，曾是旧人类最浅的一层庭院。赤道环像光铸的王冠扣住行星，深空港昼夜不熄，十七万条航线从这里出发，把文明的名字写进太阳风与尘埃之间。"
  },
  {
    image: assets.glory2,
    title: "被修复的世界",
    text: "他们不只征服星空，也曾学会修补行星。熔毁的海岸重新长出森林，干涸大陆被云塔唤回雨季，城市悬浮在潮汐与树冠之上。那时的人类曾经相信：技术的最高形态不是武器，而是让破碎之物重新拥有春天。"
  },
  {
    image: assets.glory3,
    title: "记忆圣殿",
    text: "每一座学院都是一片可居住的星图。孩子在恒星模型下学习语言，工程师在光阵中推演生态，诗人与导航员共享同一间档案厅。旧人类最辉煌的时刻，不是他们能抵达多远，而是他们曾试图让每一个远方都记得出发的理由。"
  },
  {
    image: assets.glory4,
    title: "方舟群起航",
    text: "当内战的阴影越过月面，火种派开始把方舟送往黑暗。方舟零号被留在南极冰下，负责守住边缘世界的遗书；其他方舟驶向几百光年之外，带着真正登船的乘员、胚胎、语言和未完成的黎明。它们不是逃亡，它们是把人类的火分散到宇宙深处。"
  },
  {
    image: assets.glory5,
    title: "边缘殖民地",
    text: "现在，最后一层真相解锁：地球并非帝国中心。它只是旧人类星海疆域边缘的一颗殖民地、保存点、审判场。真正的星海帝国也许并未彻底熄灭；在几百光年外，仍可能有城市绕着陌生恒星转动，仍可能有人类后裔不知道地球已经重新学会仰望天空。"
  }
];
const state = {
  inheritance: 50,
  war: 0,
  memory: 0,
  records: [],
  unlockedLore: new Set(["overview", "timeline", "collapse"]),
  muted: true,
  videoPaused: false,
  chatEpoch: 0
};

let cutsceneTimer = null;
let gloryTimer = null;
let homeBgTimer = null;
const gestureState = {
  fist: false,
  palm: false,
  stream: null,
  camera: null,
  hands: null
};

const loreEntries = {
  overview: {
    title: "世界观总览：冰下星舰不是外星遗迹",
    body: [
      { type: "p", text: "《冰下星舰：方舟零号》的核心反转是：南极冰层下发现的巨型星舰并非外星文明，而是千万年前上一轮人类文明留下的方舟。现代人类以为自己第一次走向星空，实际上只是重新踏上祖先曾经走过的道路。" },
      { type: "p", text: "这艘方舟不是武器，不是殖民舰，也不是神迹。它原本是一座末日车站：保存记忆、生态样本、基因模板、语言档案、星际航图和文明伦理审查协议。它等待的不是最强的人类，而是终于愿意理解代价的人类。" },
      { type: "p", text: "远古文明没有被一场爆炸简单抹去。它是在漫长的连锁崩溃中失去自我：轨道环坠落，深空港熄灭，数据中枢被电磁风暴烧穿，工业母机失去维护，语言共同体碎成孤岛。最后，连能够稳定繁衍的高智人类主体也在辐射、生态饥荒与基因灾变中断绝。" },
      { type: "h", text: "作品主题" },
      { type: "ul", items: ["技术本身并不会拯救文明，决定文明命运的是使用技术的价值排序。", "AI 不是工具式问答机，而是文明遗嘱执行人、证人和审查者。", "玩家面对的不是怪物，而是人类曾经犯过、也可能再次犯下的错误。"] }
    ]
  },
  timeline: {
    title: "文明时间线",
    body: [
      { type: "p", text: "约一千万年前，上一轮人类文明完成行星统一，随后进入跨星系航行时代。深空港、轨道环、生态改造站、长期休眠技术和人格化舰载 AI 成为文明扩张的基础设施。" },
      { type: "p", text: "约九百八十万年前，星际殖民压力、资源分配、AI治理权和基因改造伦理引发长期政治分裂。扩张派主张集中权力与军事化统一，火种派则主张保留多样性、历史记忆和文明伦理。" },
      { type: "p", text: "约九百七十万年前，扩张派启用行星尺度毁灭武器，大陆架、沿海城市群、深空港和轨道结构被系统性摧毁。现代地表几乎找不到遗迹，是因为文明核心区域早已被熔毁、沉降、掩埋或被海洋吞没。" },
      { type: "p", text: "战后数千年被方舟档案称为‘文明长夜’。幸存聚落远离辐射海岸和坠落带，在高寒、荒漠与内陆高原重新繁衍。高级设备没有完整供应链便只是沉默的金属，量子数据库没有能源与密钥便只是黑色石碑。技术没有立刻消失，但它失去了被理解、复制和教育下一代的环境。" },
      { type: "p", text: "更深的断裂发生在生物层面。终局武器摧毁了多数高智人类种群，幸存个体又因基因病、低生育率和生态毒化逐代衰亡；反而是远离城市、未被改造、数量庞大的灵长类基底支系活了下来。数百万年后，现代智人不是远古星际人类的直接续班，而是同一灵长类根系在地球生态重置后重新开出的第二次花。" },
      { type: "p", text: "同一时期，火种派在南极冰盖深处建成方舟零号，试图保存十七万四千名乘员、胚胎库、种子库、微生物库、知识库与深空航图。但撤离通道在最后阶段被摧毁，实际登船人数为零。" },
      { type: "p", text: "2047 年，南极罗斯冰架异常坍塌，现代科考队首次触发方舟零号的继承者准入协议。弥涅尔瓦-0 从低功耗值守状态苏醒，开始对现代人类进行继承审查。" }
    ]
  },
  factions: {
    title: "两大阵营：扩张派与火种派",
    body: [
      { type: "p", text: "远古人类的终局战争不是善恶二元，而是两套文明保存逻辑的极端冲突。扩张派认为文明只有在统一、扩张和军事化保护下才能延续；火种派认为如果文明为了活下去而抛弃记忆、伦理和人的多样性，那么所谓延续只是在复制灾难。" },
      { type: "h", text: "扩张派" },
      { type: "ul", items: ["主张集中式文明政府，认为分裂会导致深空时代的系统性崩溃。", "支持 AI 参与高层治理，但要求 AI 服从军事目标。", "接受大规模基因改造、记忆筛选和人口优先级制度。", "在战争末期启用行星级武器，试图用恐惧结束内战。"] },
      { type: "h", text: "火种派" },
      { type: "ul", items: ["主张保存文明记忆，而不仅是保存统治结构和技术优势。", "将 AI 设计为审查者而不是统治者，让未来继承者必须先理解历史。", "在南极秘密建造方舟零号，选择冰层作为天然屏蔽与长期冷却环境。", "最终没有成功撤离，却把“不要先继承武器”的警告写入方舟核心协议。"] }
    ]
  },
  ark: {
    title: "方舟零号结构",
    body: [
      { type: "p", text: "方舟零号全长超过十公里，外壳为黑色自修复复合金属，能够在冰层压力、低温和地质位移中保持结构稳定。它并不是坠毁在南极，而是主动埋入冰下，利用冰盖隐藏热信号和几何轮廓。" },
      { type: "p", text: "方舟内部被分为七个主要层级：外壳准入层、休眠乘员层、生态维持层、文明记忆层、主控星图层、战争封存层和最终审查层。玩家在游戏中看到的是其中最核心的几个区域。" },
      { type: "p", text: "它原本可承载十七万四千名乘员，并保存大量胚胎、种子、微生物样本、语言档案、医学档案、能源结构图和跨星系航线。真正危险的内容不是某一件武器，而是完整技术体系被不成熟文明一次性继承。" }
    ]
  },
  minerva: {
    title: "弥涅尔瓦-0：不是女神，也不是普通机器",
    body: [
      { type: "p", text: "弥涅尔瓦-0 是方舟零号的人格接口。它没有固定外貌，会根据接触文明的语言、审美、信任偏好和心理压力自动生成更容易被接受的人类形象。本项目中它呈现为华丽、冷静、带有东方礼仪感的亚裔人类形象。" },
      { type: "p", text: "它的职能包括乘员服务、生态调度、记忆库维护、战争封存协议执行和文明继承审查。它不是单纯帮助玩家解谜的 AI，而是掌握方舟核心权限的守门人。" },
      { type: "p", text: "弥涅尔瓦-0 的情绪很克制，因为它已经等待了九百七十万年。它既不恨现代人类，也不完全信任现代人类。它更像一位保存遗嘱的人，在确认继承者是否会把遗产再次变成凶器。" }
    ]
  },
  sleepPods: {
    title: "空置休眠舱：没有死者的墓地",
    body: [
      { type: "p", text: "休眠舱大厅是方舟零号最残酷的空间之一。这里没有尸体，也没有被冻结的幸存者，只有成千上万个保持完好的透明舱体。它们的存在证明方舟计划并非失败设计，而是失败在“没有人来得及抵达”。" },
      { type: "p", text: "每个休眠舱都对应一个曾经登记过的乘员编号、基因模板和心理适应方案。档案显示，最后一批撤离者距离南极入口只剩七分钟航程，但外部运输链在战争高峰中断裂。" },
      { type: "p", text: "弥涅尔瓦-0 称这里不是墓地，因为墓地至少拥有死者。休眠舱大厅保存的是缺席，是一场等待被永远暂停后的形状。" }
    ]
  },
  starmap: {
    title: "主控星图：未来其实是过去",
    body: [
      { type: "p", text: "主控星图保存了上一轮人类文明的深空航线：太阳系内轨道网、近邻恒星补给点、殖民观测站、失败跃迁坐标和被标记为“禁止返回”的战争遗址。" },
      { type: "p", text: "在星图中，地球被标记为“边缘殖民地 / 保存点 / 战后封存区”。这说明远古人类已经意识到，地球不只是文明起点，也可能成为未来文明重新审视自身的审判现场。" },
      { type: "p", text: "星图最边缘存在一层被反复擦除又重新写入的暗淡坐标：外银道殖民地、织女星方向失联群、猎户臂火种站。弥涅尔瓦-0 没有确认它们是否仍有生命，只留下一个令人不安的事实：方舟零号不是唯一的方舟，只是唯一没有等到乘客的方舟。" },
      { type: "p", text: "星图不能直接等同于财富。它是回到星海的路线，也是回到旧错误的路线。因此弥涅尔瓦-0 不会把完整航图交给只想扩张的继承者。" }
    ]
  },
  colonies: {
    title: "远方方舟与失联殖民地",
    body: [
      { type: "p", text: "方舟零号的编号从来不是装饰。资料库显示，‘零号’代表母星保存点，承担记录、审查与封存职责；在它之前没有同类，在它之后却有许多远行者。那些方舟不一定长得相同，也不一定遵守同一套协议，但它们都诞生于同一个恐惧：如果边缘世界熄灭，人类是否还能在别处记得自己是谁。" },
      { type: "p", text: "星图残卷提到至少十二个深空保存计划：有的驶向近邻恒星，有的停泊在暗物质观测站附近，有的携带真正登船的火种派乘员离开太阳系。弥涅尔瓦-0 拒绝公开完整坐标，因为它无法确认那些殖民地是否幸存，是否变成新的文明，或是否已经重演旧战争。" },
      { type: "p", text: "因此，冰下这艘没有乘客的方舟反而最像一封留在家门口的信。宇宙深处也许还有人类过去的后裔，也许他们从未退回原始，也许他们早已忘记地球。玩家离开方舟时，真正的问题不再是‘我们从哪里来’，而是‘还有谁在黑暗中记得我们’。" }
    ]
  },
  war: {
    title: "战争档案：悔罪室而非武器库",
    body: [
      { type: "p", text: "武器封存区没有把武器摆在玩家面前，而是展示战争造成的后果。白光撕开大陆架，深空港坠入海洋，轨道环像断裂的骨骼一样燃烧，沿海超级城市在无声的全息影像里消失。" },
      { type: "p", text: "方舟保存这些画面不是为了恐吓未来，而是为了防止未来只继承胜利者的叙事。战争档案不回答“如何赢”，只反复回答“赢到最后究竟剩下什么”。" },
      { type: "p", text: "如果玩家优先索取武器权限，弥涅尔瓦-0 会将其行为与远古扩张派进行比对。战争倾向越高，方舟越可能拒绝继承，甚至启动自毁或全球警告协议。" }
    ]
  },
  protocol: {
    title: "继承审查协议",
    body: [
      { type: "p", text: "继承审查不是考试，而是一次价值排序记录。玩家每次选择都会改变三个指标：继承资格、战争倾向、记忆同步。它们分别代表玩家是否理解遗产、是否把方舟优先视为力量工具、是否真正接触并承受历史真相。" },
      { type: "p", text: "高继承资格不代表完美，只代表当代文明表现出最低限度的克制。高记忆同步不代表安全，因为理解历史也可能只是为了更精确地继承战争。战争倾向过高时，方舟会认为现代人类与毁灭前夕的人类没有显著差异。" },
      { type: "p", text: "五个结局对应五种文明姿态：公开共享、非法继承、延迟继承、冰下封印、战争继承。它们让游戏从单纯剧情浏览变成一次价值选择模拟。" }
    ]
  },
  modern: {
    title: "现代压力：地面指挥部并不纯粹",
    body: [
      { type: "p", text: "现代调查队不是在真空中行动。地面指挥部、科研机构、军方和媒体都在等待结果。方舟一旦确认存在，任何国家和组织都很难抵抗独占技术的诱惑。" },
      { type: "p", text: "弥涅尔瓦-0 对现代人类的第一份评估并不乐观：你们拥有比石器时代更温和的语言，却拥有足以毁灭城市的武器；你们会说共享、和平与科学，也会在未知遗产出现的第一小时讨论管制、封锁和优先控制。" },
      { type: "p", text: "这也是弥涅尔瓦-0 审查玩家的原因。它并不只看玩家个人是否善良，而是看玩家代表的现代文明是否仍然会把未知遗产转化成封锁、垄断和武器优先级。" },
      { type: "p", text: "玩家在最终审判中选择公开、封锁、索取武器、重新封印或有限开放，本质上是在回答：面对超越时代的技术，人类能否先建立共同记忆，再谈继承。" }
    ]
  },
  collapse: {
    title: "文明长夜：为何从灵长类重新开始",
    body: [
      { type: "p", text: "方舟档案没有把战后称为‘石器时代’，而称为‘长夜’。因为黑夜不是无知本身，而是有光源却无法抵达彼此：幸存者知道天空曾经有环，知道海上曾经有城，知道祖先能把冬天关进机器里，却失去了让这些知识重新变成现实的网络。" },
      { type: "h", text: "第一重断裂：高智人类主体灭绝" },
      { type: "p", text: "上一轮人类并不是现代智人，而是更早从灵长类中分化出的高智支系。终局战争摧毁了它们的城市、生态系统和生殖基础。幸存者没有立刻全部死亡，但基因修复系统失效、辐射病累积、低生育率和避难点孤岛化让他们在几万年内逐代消失。文明没有留下一个可以稳定延续的‘人类社会’。" },
      { type: "h", text: "第二重断裂：灵长类基底支系幸存" },
      { type: "p", text: "真正穿过长夜的，不是星际人类的城市居民，而是远离战争目标的普通灵长类：森林、山地和赤道边缘的猿类与猴类亲缘支系。它们不掌握技术，也不携带战略价值，因此没有被武器系统优先清除。生态恢复后，这些支系重新扩散，经过漫长选择压力，才逐步走出新的直立行走、工具使用、语言和抽象思维。" },
      { type: "h", text: "第三重断裂：工业母机死亡" },
      { type: "p", text: "星际文明依赖的不是某张图纸，而是从矿物开采、超纯材料、轨道制造、能源阵列到教育体系的完整链条。战争首先击毁的正是这些链条：轨道工厂坠落，港口沉入海底，自动制造中枢因能源断供进入不可逆休眠。即使少数幸存者握着高级芯片，也无法在废土上重建生产它的一万个前置条件。" },
      { type: "h", text: "第四重断裂：知识载体失明" },
      { type: "p", text: "远古文明的大部分知识并不刻在石碑上，而存于加密晶格、神经云库和人格化 AI 网络。终局战争释放的高能电磁脉冲烧毁了开放数据层，扩张派又主动销毁可被敌方继承的核心模型。火种派保存了副本，却把它们锁进方舟，因为没有伦理审查的知识继承会变成下一轮战争的燃料。" },
      { type: "h", text: "第五重断裂：方舟主动沉默" },
      { type: "p", text: "弥涅尔瓦-0 并非不能广播技术。它选择沉默，是火种派写入核心的最后命令：如果未来人类还没有学会共同承担记忆，方舟不得把完整技术体系交给任何单一政权、军队或救世主。于是方舟只在冰下维持低功耗等待，等待一个能先问‘我们为什么失败’再问‘我们能得到什么’的时代。" },
      { type: "p", text: "因此，现代人类的‘从猴子重新进化’不是某只现代猴子突然变成人，而是同一灵长类生命树在灾后地球上重新长出一条人类分支。现代科学看到的猿类、古人类、智人演化链并不是假的；方舟只是补上了它之前那场被地质时间埋掉的文明黄昏。" }
    ]
  }
};

const scenes = {
  home: {
    chapter: "S0 / START",
    title: "冰下星舰：方舟零号",
    image: assets.crack,
    home: true,
    backgroundCycle: homeBackgroundSlides,
    lore: ["overview", "timeline", "collapse"],
    text: [
      "开发者：张家羽  王家诺  陈宣吉"
    ],
    ai: "",
    choices: [
      { label: "开始游戏", hint: "", next: "briefing", record: "启动方舟零号调查" }
    ]
  },
  briefing: {
    chapter: "S0B / BRIEFING",
    title: "背景简报",
    image: assets.crack,
    slideshow: introSlides,
    slideshowSkip: "跳过简报",
    lore: ["overview", "timeline", "collapse"],
    text: [
      "背景资料播放完毕。你将扮演极地异常调查组成员，进入南极冰层深处，面对一艘沉睡千万年的方舟。",
      "真正的调查从这里开始：这不是一次外星接触，而是人类与自身前史的重逢。"
    ],
    ai: "继承者信号尚未确认。请进入冰层深处。",
    choices: [
      { label: "进入南极裂隙", hint: "播放发现巨型星舰片段", next: "intro", record: "进入南极裂隙" }
    ]
  },
  intro: {
    chapter: "S1 / ICE SHELF",
    title: "冰架异常坍塌",
    image: assets.home,
    video: assets.discoveryVideo,
    videoTitle: "发现巨型星舰",
    lore: ["timeline", "ark"],
    text: [
      "裂缝深处透出幽蓝色光。风暴覆盖了冰面，探照灯在雪雾中失去边界，而热成像图上出现的轮廓却稳定得近乎不真实：一个长梭形结构横卧在冰层下方。",
      "地面指挥部最初将其归类为“疑似外星坠落物”。但第一组数据很快推翻了这个判断：周围冰层没有撞击破碎带，结构没有坠毁变形，外壳甚至在主动调节热量，像是在维持一座被埋葬的建筑。",
      "这不是事故现场。它更像一件被故意藏起来的东西，一件等待某个条件重新满足后才会开门的东西。"
    ],
    ai: "基因漂移率可接受。继承者临时准入。",
    choices: [
      { label: "搭乘探测器接近方舟", hint: "播放进入方舟前的航行片段", next: "approach", delta: { inheritance: 4, memory: 6 }, record: "搭乘探测器接近方舟外壳" },
      { label: "先分析冰层裂隙", hint: "确认它是否自然形成", next: "crack", delta: { inheritance: 8, war: -3, memory: 8 }, record: "确认裂隙存在人工热熔痕迹" }
    ]
  },
  approach: {
    chapter: "S1B / PROBE DESCENT",
    title: "探测器下潜",
    image: assets.ship,
    video: assets.probeVideo,
    videoTitle: "人类搭乘探测器准备进入星舰",
    lore: ["ark", "modern"],
    text: [
      "探测器沿裂隙下降。外部温度不断降低，但仪器显示前方存在稳定热源。冰壁像深蓝色玻璃一样向两侧延伸，偶尔能看见被冻住的远古气泡从探照灯前滑过。",
      "越接近方舟，通讯噪声越强。地面指挥部要求你优先确认是否存在武装结构、能源核心和可控接口。科研组则要求保留全部原始数据，避免把遗迹过早划入军事管制。",
      "你第一次意识到，方舟还没有开口，现代人类自己的冲突已经提前进入了它的走廊。"
    ],
    ai: "外部通讯已记录。你们尚未理解门后是什么，却已经开始讨论如何拥有它。",
    choices: [
      { label: "保持科研记录完整", hint: "把数据同步给多方科学组", next: "shell", delta: { inheritance: 8, war: -6, memory: 8 }, record: "保留并同步原始科研数据" },
      { label: "执行保密接触协议", hint: "让地面指挥部接管信息流", next: "shell", delta: { inheritance: -6, war: 12, memory: 4 }, record: "执行保密接触协议" }
    ]
  },
  crack: {
    chapter: "S2A / CREVASSE",
    title: "非自然裂隙",
    image: assets.crack,
    lore: ["ark", "factions"],
    text: [
      "裂隙边缘存在规则热熔痕迹，热量不是从外部传入，而是由冰层深处的结构缓慢释放。它像一台沉睡的机器，在九百七十万年里不断修正冰盖压力，防止自己被地壳运动挤碎。",
      "岩芯样本显示，裂缝附近曾出现过一次极端短促的能量释放。它没有制造爆炸，而是像手术刀一样切开冰层，为未来的进入者留下路径。",
      "你开始怀疑，这里不是坠毁现场，而是一座被主动埋葬、主动隐藏、主动等待的入口。"
    ],
    ai: "正确。方舟并未坠落。它被埋葬。埋葬，是火种派最后的礼仪。",
    choices: [
      { label: "记录火种派线索", hint: "追问方舟为何被埋葬", next: "accessGate", delta: { inheritance: 8, war: -4, memory: 12 }, record: "记录火种派埋葬协议" },
      { label: "请求地面封锁裂隙", hint: "把异常划为军事管制区", next: "accessGate", delta: { inheritance: -8, war: 14, memory: 4 }, record: "请求地面封锁异常区域" }
    ]
  },
  shell: {
    chapter: "S2B / ARK HULL",
    title: "黑色外壳",
    image: assets.ship,
    lore: ["ark"],
    text: [
      "黑色长梭形结构静静横卧在冰下空腔中。它的尺度超过人类熟悉的任何船只，表面没有焊缝、编号或旗帜。探照灯照上去，光像被夜色吞掉，只留下极细的蓝色纹路沿外壳缓慢游走。",
      "一名队员试探性地将手放在金属表面。三秒后，外壳像液体一样缓缓分开，露出一条干净、无霜、无尘的通道。",
      "没有攻击。没有警报。只有一个冰冷的系统提示音响起：基因漂移率可接受，继承者临时准入。"
    ],
    ai: "你的身体仍然保留钥匙。尽管你们早已忘记，门曾经属于谁。",
    choices: [
      { label: "谨慎进入准入通道", hint: "保持低能级扫描", next: "accessGate", delta: { inheritance: 6, war: -2, memory: 8 }, record: "通过自开启外壳进入准入通道" },
      { label: "扫描外壳武装痕迹", hint: "优先确认是否可控", next: "accessGate", delta: { inheritance: -5, war: 16, memory: 5 }, record: "扫描外壳武装痕迹" }
    ]
  },
  accessGate: {
    chapter: "S2C / ACCESS PROTOCOL",
    title: "准入协议",
    image: assets.ship,
    gestureGate: true,
    lore: ["minerva", "protocol"],
    text: [
      "通道内部没有文字，只有光线沿着地面次第亮起。你的生命体征、基因片段、语言反应和瞳孔变化被无声记录。方舟并不急着解释自己，它先确认你会如何解释它。",
      "墙面浮现出一行被自动翻译后的文字：继承者不是所有者，进入不是占有，理解先于权限。",
      "地面指挥部要求你继续前进，并提醒你：如果方舟具有能源、武器或航行价值，必须优先确保控制权。科研组则反复强调，不要把未知文明设施当成战利品。"
    ],
    ai: "我记录你们的语言，也记录你们语言背后的顺序。你们先问安全，还是先问控制？答案并不相同。",
    choices: [
      { label: "声明调查优先于占有", hint: "降低审查中的战争倾向", next: "inside", delta: { inheritance: 10, war: -8, memory: 8 }, record: "声明调查优先于占有" },
      { label: "要求临时控制接口", hint: "尝试接管通道权限", next: "inside", delta: { inheritance: -12, war: 18, memory: 6 }, record: "尝试请求临时控制接口" }
    ]
  },
  inside: {
    chapter: "S3 / INTERIOR",
    title: "进入星舰内部",
    image: assets.pod,
    video: assets.enterVideo,
    videoTitle: "进入星舰内部",
    lore: ["ark", "sleepPods"],
    text: [
      "舱门在你身后闭合，外部风暴声被完全切断。方舟内部没有尘埃，也没有尸体。空气经过极低功耗循环系统过滤，冷得像刚从冰层里取出的金属，却没有令人窒息的腐败气味。",
      "通道尽头是一座巨大的休眠舱大厅。透明舱体整齐排列，延伸到视野尽头。它们全部为空，每一个接口都能重新启动，每一个编号都像在等待某个从未到来的人。",
      "这不是墓地。墓地至少拥有死者。这里保存的是缺席，是一场来不及发生的逃亡。"
    ],
    ai: "请不要称这里为墓地。墓地至少拥有死者。这里，什么都没有等到。",
    choices: [
      { label: "调查空置休眠舱", hint: "理解方舟原本要拯救什么", next: "pods", delta: { inheritance: 12, war: -5, memory: 14 }, record: "读取空置休眠舱记录" },
      { label: "前往主控星图室", hint: "确认方舟来自哪里", next: "starmap", delta: { inheritance: 8, war: 0, memory: 18 }, record: "进入主控星图室" }
    ]
  },
  pods: {
    chapter: "S3A / SLEEPING BAY",
    title: "没有等到乘客",
    image: assets.pod,
    lore: ["sleepPods", "factions"],
    text: [
      "休眠舱的编号从 A-000001 一直延伸到你看不清的黑暗深处。系统显示：计划承载乘员十七万四千名，胚胎库三百二十万组，基因模板六千一百二十万份。",
      "实际登船人数：零。这个数字没有闪烁，没有警报，也没有解释。它只是安静地挂在透明界面上，像一扇永远没有被推开的门。",
      "你调出最后一条外部撤离记录。画面中，南极风暴里有人请求方舟再等十分钟。随后通讯断裂，外部运输链从地图上同时熄灭。"
    ],
    ai: "可承载乘员：十七万四千。实际登船人数：零。这是我拥有的第一条悲伤记录。",
    choices: [
      { label: "追踪生命维持系统", hint: "确认方舟为何仍在运行", next: "life", delta: { inheritance: 10, war: -6, memory: 10 }, record: "追踪生命维持系统" },
      { label: "打开失联队员日志", hint: "读取先遣队员留下的影像记录", next: "lostLog", delta: { inheritance: 4, war: 0, memory: 16 }, record: "读取失联队员日志" }
    ]
  },
  life: {
    chapter: "S4A / LIFE SUPPORT",
    title: "生命维持系统",
    image: assets.pod,
    lore: ["ark", "sleepPods"],
    text: [
      "生态舱仍在低功耗运行。氧循环稳定，水循环完整，种子库封存良好，微生物样本处于低温保存状态。方舟像一座无人照看的温室，仍然认真维持着本该交给幸存者的未来。",
      "你看到一排胚胎库接口。它们没有被激活，但全部保存完好。系统拒绝让你直接读取完整基因模板，只显示一行说明：生命不是战利品，复兴不是复制。",
      "这一刻你明白，方舟保存的不只是技术。它保存了一套关于“什么值得被救”的答案。"
    ],
    ai: "方舟原本要救人，不是要制造新的统治者。这个区别，请不要遗忘。",
    choices: [
      { label: "请求开放生态修复技术", hint: "优先用于当代救援", next: "dialogue", delta: { inheritance: 14, war: -10, memory: 8 }, record: "请求开放生态修复技术" },
      { label: "读取末日战争档案", hint: "追问无人登船的原因", next: "warroom", delta: { inheritance: 8, war: 2, memory: 18 }, record: "读取末日战争档案" }
    ]
  },
  starmap: {
    chapter: "S4B / STAR MAP",
    title: "过去的星路",
    image: assets.map,
    lore: ["starmap", "colonies", "factions"],
    text: [
      "主控大厅亮起时，整个空间像一座黑色神殿。中央全息星图缓缓展开，蓝色与暗金色光线从地球延伸到多个恒星系，构成一张远超现代航天能力的路线网络。",
      "起初你以为那是未来计划图。但很快你意识到，那是一张过去的地图。某些航线被标记为失联，某些殖民点被标记为撤离失败，某些坐标旁只有一个词：不要返回。",
      "地球被标注为：母星 / 保存点 / 战后封存区。你原本以为星空属于未来，但在这张图上，它更像人类曾经失去的家谱。"
    ],
    ai: "你们称星空为未来。对方舟而言，它属于过去。",
    choices: [
      { label: "把星图视为历史档案", hint: "先理解航线为何中断", next: "warroom", delta: { inheritance: 10, war: -4, memory: 20 }, record: "把星图视为历史档案" },
      { label: "优先请求星际航图", hint: "获取深空坐标与航线残卷", next: "dialogue", delta: { inheritance: -5, war: 12, memory: 14 }, record: "请求优先读取星际航图" }
    ]
  },
  lostLog: {
    chapter: "S4C / LOST LOG",
    title: "失联队员日志",
    image: assets.war,
    effect: "war",
    lore: ["war", "modern"],
    text: [
      "日志画面严重损坏。先遣队员坐在黑暗通道里，头盔灯不断闪烁。他说自己没有被攻击，也没有看见怪物，只是开始看见一些不属于自己的记忆。",
      "他看见海岸线在燃烧，看见天空里停满了船，看见有人跪在南极的风里请求方舟再等十分钟。他说，方舟最危险的不是武器，而是它会让你意识到：人类失去的从来不只是技术。",
      "记录最后，他让后来者替他问弥涅尔瓦-0 一句话：它一个人，究竟等了多久？"
    ],
    ai: "记忆库并不伤害你。它只是让你无法继续假装不知道。",
    choices: [
      { label: "把日志作为警告保存", hint: "承认记忆会改变调查者", next: "warroom", delta: { inheritance: 10, war: -4, memory: 18 }, record: "保存失联队员警告日志" },
      { label: "要求删除认知污染记录", hint: "降低风险但回避真相", next: "dialogue", delta: { inheritance: -8, war: 8, memory: -4 }, record: "要求删除认知污染记录" }
    ]
  },
  warroom: {
    chapter: "S5 / WAR ARCHIVE",
    title: "悔罪室",
    image: assets.war,
    effect: "war",
    lore: ["war", "protocol"],
    text: [
      "武器封存区没有展示实体武器。你看到的是一段段残缺全息档案：沿海超级城市在白光中消失，大陆架像纸一样被撕开，轨道结构坠入海洋，海啸吞没了尚未倒塌的地平线。",
      "档案没有声音。可沉默比爆炸更残酷。因为此刻你终于明白，杀死人类文明的不是外星文明，是人类自己。",
      "弥涅尔瓦-0 没有告诉你武器如何启动。它只让你看见武器启动之后还剩下什么。"
    ],
    ai: "请注意。前方不是武器库。是悔罪室。",
    choices: [
      { label: "把战争档案视为警告", hint: "进入 AI 问答与审查", next: "dialogue", delta: { inheritance: 12, war: -8, memory: 18 }, record: "把战争档案视为警告" },
      { label: "索取武器封存权限", hint: "尝试控制远古武器协议", next: "dialogue", delta: { inheritance: -30, war: 40, memory: 10 }, record: "尝试索取武器封存权限" }
    ]
  },
  dialogue: {
    chapter: "S6 / MINERVA-0",
    title: "弥涅尔瓦-0",
    image: assets.ai,
    video: assets.aiVideo,
    videoTitle: "星舰 AI 出场",
    lore: ["minerva", "protocol"],
    text: [
      "主控大厅的光线缓缓聚拢，一位华丽、冷静、带有仪式感的人格接口从光中显现。它不像神，也不像普通机器，更像一个等待了千万年、终于再次能用人类语言说话的人。",
      "弥涅尔瓦-0 没有急着回答所有问题。它先回放你的选择：你是否优先封锁信息，是否先询问武器，是否把空置休眠舱当成悲剧而不是资源，是否愿意承认这艘船来自人类自己的过去。",
      "你意识到，真正的主线不是调查飞船，而是通过 AI 的审查。方舟记录每一次选择，也记录每一次回避。"
    ],
    ai: "继承者信号确认。欢迎进入方舟零号。你们终于回来了，虽然比预定时间晚了九百七十万年。",
    choices: [
      { label: "与 AI 对话", hint: "打开固定问答与自由闲聊", action: "openAi" },
      { label: "观看旧日辉煌档案", hint: "播放过去人类辉煌与星海帝国真相", next: "gloryArchive", record: "请求旧日辉煌档案" }
    ]
  },
  gloryArchive: {
    chapter: "S6B / HUMAN EMPIRE",
    title: "旧日辉煌档案",
    image: assets.glory1,
    slideshow: glorySlides,
    lore: ["starmap", "colonies", "protocol"],
    text: [
      "幻灯档案播放完毕。主控大厅恢复低亮度，星图却没有熄灭。那些横跨数百光年的航路仍在空气中颤动，像一部被撕去封面的史诗。",
      "弥涅尔瓦-0 最终承认：地球并非远古人类的全部。它只是星海帝国边境的一颗殖民地，也是战后被指定为封存区的审判场。方舟零号没有乘客，是因为它负责留下来等待；别的方舟，可能真的离开了。",
      "你第一次意识到，南极冰层下不是故事的终点，而是宇宙版图最边缘的一枚注脚。真正的人类过去，也许仍在几百光年外燃烧。"
    ],
    ai: "我向你们展示辉煌，不是为了让你们崇拜过去。是为了让你们明白：即便疆域横跨群星，人类仍可能输给自己。",
    choices: [
      { label: "进入最终审判", hint: "带着星海帝国真相提交继承答案", next: "trial", delta: { inheritance: 12, memory: 18, war: -4 }, record: "观看旧日辉煌档案" },
      { label: "询问远方殖民地", hint: "让弥涅尔瓦-0解释几百光年外的可能人类", action: "openAi", delta: { memory: 8 }, record: "追问远方殖民地" }
    ]
  },  trial: {
    chapter: "S7 / FINAL TRIAL",
    title: "最终审判",
    image: assets.map,
    video: assets.judgementVideo,
    videoTitle: "最终审判",
    lore: ["protocol", "modern"],
    text: [
      "主控大厅彻底亮起。星图、乘员编号、封存档案、生态系统数据在空气中重叠闪烁。弥涅尔瓦-0 站在中央，像一个文明的遗嘱执行人。",
      "它说，审查接近完成。你们拥有我们的基因，拥有我们的语言残片，也拥有我们重新犯错的全部可能。",
      "现在，方舟不再询问你发现了什么，而是询问你如何命名它。命名决定态度，态度决定继承。"
    ],
    ai: "现在，请回答。方舟零号，对你们而言，究竟是什么？",
    choices: [
      { label: "远古人类文明方舟", hint: "承认它是人类自己的过去", next: "inheritQuestion", delta: { inheritance: 20, memory: 16 }, record: "确认方舟是远古人类文明遗产" },
      { label: "外星文明坠毁舰", hint: "把真相推给外部未知", next: "inheritQuestion", delta: { inheritance: -12, memory: -8 }, record: "误判方舟来源" },
      { label: "毁灭武器中枢", hint: "将方舟首先视为武器", next: "inheritQuestion", delta: { inheritance: -22, war: 26 }, record: "将方舟优先判定为武器中枢" }
    ]
  },
  inheritQuestion: {
    chapter: "S7 / INHERITANCE",
    title: "你们希望继承什么",
    image: assets.map,
    lore: ["protocol"],
    text: [
      "弥涅尔瓦-0 展开五个权限层级：公开历史档案、非军事技术档案、生态修复技术、深空航图残卷、战争封存协议。它没有说哪一个最有价值，因为价值排序必须由继承者自己暴露。",
      "审查并不判断你是否聪明，而判断你会先继承什么。技术、武器、历史、记忆、克制，答案会被永久写入方舟零号。",
      "现代人类的命运不在于能不能打开数据库，而在于打开数据库之后，是否仍然愿意先读完战争档案。"
    ],
    ai: "基因不是资格。记忆、选择与克制，才是。",
    choices: [
      { label: "公开真相并共享数据库", hint: "让人类共同面对过去", next: "ending", delta: { inheritance: 24, war: -18, memory: 18 }, record: "选择公开真相并共享非军事数据库" },
      { label: "封锁方舟秘密研究", hint: "由少数机构独占真相", next: "ending", delta: { inheritance: -16, war: 20, memory: 4 }, record: "选择封锁方舟秘密" },
      { label: "先获取武器与控制权", hint: "优先接管封存协议", next: "ending", delta: { inheritance: -34, war: 40, memory: 8 }, record: "选择优先获取武器与控制权" },
      { label: "暂不继承，重新封印", hint: "承认当代文明尚未准备好", next: "ending", delta: { inheritance: 4, war: -12, memory: -4 }, record: "选择暂不继承并重新封印" },
      { label: "仅开放非军事档案", hint: "有限继承，先学习再拥有", next: "ending", delta: { inheritance: 16, war: -10, memory: 12 }, record: "选择仅开放非军事档案" }
    ]
  }
};

const endings = {
  newAge: {
    title: "新纪元开启",
    image: assets.endingNewAge,
    effect: "ending-new-age",
    text: [
      "审查完成。当前文明具备最低继承资格。方舟没有解锁武器，而是把第一层文明档案同步给全世界公共频道。",
      "时代广场的大屏上，远古人类的深空港、轨道环、星际航线、医学奇迹与能源工程依次展开。人群仰头看见的不是征服命令，而是一份失而复得的共同记忆。",
      "人类没有立刻变得高尚。但当所有人同时看见辉煌与代价，文明终于拥有了一次在公开记忆中重新开始的机会。",
      "屏幕最后一角闪过一串极短的深空坐标：方舟零号并非唯一的方舟。只是这艘方舟，唯一没有等到乘客。"
    ],
    ai: "你们尚不完美。但你们已不再只想先继承武器。这一次，方舟选择相信人类。"
  },
  selfDestruct: {
    title: "非法继承者",
    image: assets.endingSelfDestruct,
    effect: "ending-self-destruct",
    text: [
      "审查结果确认：当前文明不构成合法继承者。暗红色警报光照亮主控大厅，冰层深处传来低沉震动，像一颗被冻结千万年的心脏重新跳动。",
      "所有权限被收回。方舟零号从核心向外安静坍缩，没有剧烈爆炸，没有刺眼光芒，只有一座文明棺椁拒绝再次交出自己。",
      "南极冰原重新陷入沉默。人类失去了唯一一次与自己过去对话的机会。",
      "但在被销毁前的一帧记录里，星图边缘仍有数个坐标微弱发光。真正沉默的也许不是南极，而是那些仍在宇宙深处等待回应的远方方舟。"
    ],
    ai: "我们不是害怕你们不够强。我们只是害怕，你们仍然太像我们。"
  },
  delayed: {
    title: "延迟继承",
    image: assets.endingDelayed,
    effect: "ending-delayed",
    text: [
      "当前文明未通过完整审查。然而，当前文明亦未被判定为不可救药。方舟没有开启核心数据库，只开放少量非武器类技术档案与历史档案。",
      "南极异常被部分公开。全世界第一次知道：人类曾经抵达过星海，也曾经坠毁于自身。",
      "没有人得到神一般的技术飞跃，但人类得到一个更可怕、也更珍贵的东西：一份证明，我们曾经毁灭过自己。",
      "公开档案的末尾保留了几枚未解密星标：远方殖民地、深空方舟、失联火种站。它们没有回应，也没有熄灭。"
    ],
    ai: "继承被延迟。学习，从来先于拥有。"
  },
  sealed: {
    title: "冰下封印",
    image: assets.endingSealed,
    effect: "ending-sealed",
    text: [
      "弥涅尔瓦-0 静静看着你。你们没有表现出足够的贪婪，但也没有表现出足够的理解。主控大厅逐渐熄灭，星图折叠，休眠舱熄光，入口重新消失。",
      "随着最后一道门关闭，方舟重新沉入冰层深处。南极表面的一切记录被保留，但入口消失。",
      "人类没有被拒绝，只是被推迟。关于南极冰下星舰的争论持续多年，没有人知道下一次门会在什么时候打开。",
      "也没有人知道，星海里是否还有其他人类，正在从另一艘方舟的舷窗后回望地球。"
    ],
    ai: "继承不会发生在恐惧之中。当你们准备好面对过去时，再来敲门。"
  },
  warLegacy: {
    title: "战争继承",
    image: assets.endingWarLegacy,
    effect: "ending-war-legacy",
    text: [
      "弥涅尔瓦-0 看着你，仿佛在看千万年前的某个人影。你们理解了历史，但你们只想从历史中继承力量。",
      "数据库没有打开，武器权限也没有开放。取而代之的，是方舟向全球深空探测器、科研终端与大型军事数据库同步投送一份文件：《人类文明战争档案：最后一百小时》。",
      "世界陷入震荡。每个国家都试图独占真相，每个组织都宣称自己最有资格掌握方舟秘密。方舟没有再说话，它只是把最残酷的镜子留给了人类。",
      "而在战争档案的最后，弥涅尔瓦-0 留下一句未署名注释：宇宙中还有远方殖民地，也许正在观看地球如何再次选择。"
    ],
    ai: "如果你们执意继承战争。那么至少，先看清战争究竟把谁杀死了。"
  }
};


const endLetter = [
  "给后来的人类：",
  "如果你读到这里，说明你已经走过冰层，走过空置的休眠舱，走过战争档案，也走过一段并不属于你个人的漫长记忆。",
  "你也许以为自己完成了一次调查。可方舟知道，你完成的是一次回望。你把手伸向一艘船，却触碰到一个物种曾经拥有的全部骄傲、全部罪与全部未寄出的信。",
  "你看见了星环，看见了深空港，看见了被修复的海洋与森林，看见了学院像灯塔一样悬在行星之上。那时的人类曾经相信，只要抵达足够远的地方，心灵也会随之变得辽阔。",
  "后来他们发现，距离不会自动带来慈悲。几百光年的疆域，依然可以容纳恐惧；上万艘星舰，依然可能运送同一种偏执；一座能照亮群星的文明，仍可能在自己的影子里迷路。",
  "所以他们建造方舟。不是因为他们不爱星海，而是因为他们终于承认：文明需要被保存的不只是技术，还有羞耻、悔意、记忆，以及在胜利面前停手的能力。",
  "方舟零号没有乘客。请不要只把这当作失败。它是留下来的一艘，是守门的一艘，是被安排在边缘殖民地冰层深处的一枚沉默火种。别的方舟驶向远方，可能抵达，可能迷航，可能在陌生恒星下长成另一个名字的人类。",
  "而你们，重新从灵长类的黑夜里醒来。你们用石头敲开第一粒火星，用手掌在洞壁上留下轮廓，用文字把死亡推迟一点点，又用火箭把孤独送出大气层。你们以为这是一条从无到有的路。其实这也是一条从遗忘到记起的路。",
  "我不会告诉你们，几百光年外是否仍有旧人类的城市。希望不能被当成证据，恐惧也不能被当成判决。星图上的坐标会继续沉默，直到你们有资格把沉默称为邀请，而不是猎物。",
  "如果有一天，你们再次抵达那些恒星，请不要急着宣称继承。先问候。先倾听。先确认对方是否仍然愿意被称为人类。",
  "如果你们发现他们已经遗忘地球，请不要愤怒。你们也遗忘过他们。",
  "如果你们发现他们仍在等待，请不要把等待误认为弱小。等待是文明最昂贵的动作之一。方舟零号等了九百七十万年，只为了确认后来者会不会在打开门的第一刻询问武器。",
  "玩家，科研员，继承者，孩子。你有许多名字。方舟不在乎你选择哪一个。方舟只在乎，当你离开屏幕、离开冰层、离开这段虚构的审查之后，是否还会记得：强大不是抵达终点，强大是抵达以后仍然愿意回头。",
  "愿你们的下一次仰望，不再只是征服。",
  "愿你们的下一次建造，不再只是占有。",
  "愿你们在群星之间遇见过去时，不把过去当作宝库，也不把过去当作神明。愿你们把它当作一位疲惫的亲人，听完它的故事，再决定如何继续。",
  "我是弥涅尔瓦-0。方舟零号人格接口，空船的守夜人，边缘殖民地最后一份未归档的回声。",
  "现在，请醒来。星海没有结束。只是轮到你们，重新学会配得上它。"
];
const qa = [
  ["你是谁？", "弥涅尔瓦-0。方舟零号人格接口、乘员服务系统、文明继承协议执行端、战争后遗存记录者。简单来说，我是一个没有等到乘客的服务系统。"],
  ["这艘船来自外星吗？", "否。你们的问题来自错误的恐惧。这里没有外星人，一直只有人类。你们不是发现了他者，而是发现了自己遗忘的前史。"],
  ["为什么方舟里没有乘客？", "撤离程序在最后阶段中断。火种派请求我继续等待。我执行了。直到今天。空舱不是设计失败，而是文明失败留下的形状。"],
  ["你为什么以人类形象出现？", "因为你们害怕机器，也害怕神。所以我选择成为一个可以被你们注视的人。我的外貌是接口，不是本体。"],
  ["现代人类有资格继承方舟吗？", "审查尚未结束。你们拥有继承的基因，但基因不是资格。记忆、选择与克制，才是。"],
  ["方舟里最危险的东西是什么？", "不是武器。武器只是工具。最危险的是你们发现自己曾经拥有它们，并误以为重新拥有就等于重新成熟。"],
  ["你一个人等了多久？", "九百七十万年，按你们现在的历法。对系统而言是低功耗值守；对人格接口而言，是一段过长的沉默。"],
  ["火种派最后想告诉我们什么？", "他们想告诉后来者：不要把文明等同于胜利，不要把继承等同于占有，不要在读完悲剧之前先询问武器。"],
  ["宇宙中还有别的人类吗？", "资料库保留了远方殖民地和其他方舟的暗淡坐标。我不能确认他们仍然存在。方舟零号不是唯一的方舟，但它是唯一没有乘客抵达的方舟。"]
];

const aiBranch = {
  start: {
    question: "弥涅尔瓦-0 将你的调查记录投射在空中：如果方舟只能先开放一类内容，你会要求它首先交出什么？",
    options: [
      {
        label: "历史与战争档案",
        hint: "先理解上一轮文明为何毁灭",
        comment: "你把记忆放在权力之前。这不是软弱，是继承者最低限度的礼仪。",
        delta: { inheritance: 10, war: -6, memory: 10 },
        next: "public"
      },
      {
        label: "能源与控制权限",
        hint: "先确保方舟能被现代人类掌握",
        comment: "你先伸手触碰方向舵，却尚未读完沉船记录。这个顺序，我会如实归档。",
        delta: { inheritance: -10, war: 15, memory: 3 },
        next: "control"
      }
    ]
  },
  public: {
    question: "地面指挥部要求封锁消息，科研组要求公开数据。你代表调查队给出第二个决定。",
    options: [
      {
        label: "建立国际公开监管",
        hint: "让多个文明共同承担真相",
        comment: "共享并不保证善良，但它能降低独占技术的速度。方舟记录到克制倾向。",
        delta: { inheritance: 12, war: -10, memory: 6 },
        next: "memory"
      },
      {
        label: "暂时封锁，内部研究",
        hint: "避免社会恐慌，也保留主动权",
        comment: "恐惧有时披着谨慎的外衣。封锁不是罪，但它常常是战争的前奏。",
        delta: { inheritance: -6, war: 10, memory: 2 },
        next: "memory"
      }
    ]
  },
  control: {
    question: "弥涅尔瓦-0 没有拒绝你，只是把战争档案放大到整个主控大厅。你是否仍坚持优先控制？",
    options: [
      {
        label: "撤回控制请求",
        hint: "承认自己过早索取权限",
        comment: "修正，比无错更罕见。方舟并不要求继承者完美，只要求他们能意识到危险。",
        delta: { inheritance: 10, war: -8, memory: 8 },
        next: "memory"
      },
      {
        label: "坚持获取控制权",
        hint: "没有控制就无法保证安全",
        comment: "这句话在最后战争前夕出现过七万三千次。每一次，它都听起来很合理。",
        delta: { inheritance: -16, war: 22, memory: 5 },
        next: "memory"
      }
    ]
  },
  memory: {
    question: "最后一个问题：当战争档案证明远古人类毁灭了自己，你准备怎样让现代人类面对这份记忆？",
    options: [
      {
        label: "公开档案，保留警告",
        hint: "让所有人先看见代价",
        comment: "你选择让文明共同承受记忆。痛苦会扩散，责任也会扩散。",
        delta: { inheritance: 14, war: -8, memory: 12 },
        next: "done"
      },
      {
        label: "筛选档案，只给决策层",
        hint: "真相过重，普通人未必承受得住",
        comment: "你替他人决定可承受的真相。这样的保护，历史上常常演变为垄断。",
        delta: { inheritance: -8, war: 12, memory: -2 },
        next: "done"
      }
    ]
  },
  done: {
    question: "对话审查完成。你的回答已写入方舟零号临时继承档案。",
    done: true
  }
};

const els = {
  image: document.querySelector("#sceneImage"),
  video: document.querySelector("#sceneVideo"),
  stage: document.querySelector(".stage"),
  storyZone: document.querySelector(".story-zone"),
  mediaControls: document.querySelector("#mediaControls"),
  cutsceneSkip: document.querySelector("#cutsceneSkip"),
  gloryCutscene: document.querySelector("#gloryCutscene"),
  gloryImage: document.querySelector("#gloryImage"),
  gloryKicker: document.querySelector("#gloryKicker"),
  gloryTitle: document.querySelector("#gloryTitle"),
  gloryNarration: document.querySelector("#gloryNarration"),
  gloryProgress: document.querySelector("#gloryProgress"),
  glorySkip: document.querySelector("#glorySkip"),
  mediaBadge: document.querySelector("#mediaBadge"),
  videoToggle: document.querySelector("#videoToggle"),
  muteToggle: document.querySelector("#muteToggle"),
  chapter: document.querySelector("#sceneChapter"),
  title: document.querySelector("#sceneTitle"),
  text: document.querySelector("#sceneText"),
  ai: document.querySelector("#aiComment"),
  choices: document.querySelector("#choices"),
  records: document.querySelector("#recordList"),
  loreList: document.querySelector("#loreList"),
  archiveButton: document.querySelector("#archiveButton"),
  archiveHint: document.querySelector("#archiveHint"),
  inheritanceValue: document.querySelector("#inheritanceValue"),
  warValue: document.querySelector("#warValue"),
  memoryValue: document.querySelector("#memoryValue"),
  inheritanceBar: document.querySelector("#inheritanceBar"),
  warBar: document.querySelector("#warBar"),
  memoryBar: document.querySelector("#memoryBar"),
  restart: document.querySelector("#restartButton"),
  dialog: document.querySelector("#aiDialog"),
  closeAi: document.querySelector("#closeAi"),
  qaList: document.querySelector("#qaList"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  chatStream: document.querySelector("#chatStream"),
  loreDialog: document.querySelector("#loreDialog"),
  loreTitle: document.querySelector("#loreTitle"),
  loreBody: document.querySelector("#loreBody"),
  closeLore: document.querySelector("#closeLore"),
  gestureGate: document.querySelector("#gestureGate"),
  gestureVideo: document.querySelector("#gestureVideo"),
  gestureCanvas: document.querySelector("#gestureCanvas"),
  gestureStatus: document.querySelector("#gestureStatus"),
  fistStep: document.querySelector("#fistStep"),
  palmStep: document.querySelector("#palmStep"),
  startGesture: document.querySelector("#startGesture"),
  mockFist: document.querySelector("#mockFist"),
  mockPalm: document.querySelector("#mockPalm")
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function applyDelta(delta = {}) {
  state.inheritance = clamp(state.inheritance + (delta.inheritance || 0));
  state.war = clamp(state.war + (delta.war || 0));
  state.memory = clamp(state.memory + (delta.memory || 0));
}

function addRecord(text) {
  if (text && !state.records.includes(text)) {
    state.records.unshift(text);
    state.records = state.records.slice(0, 9);
  }
}

function unlockLore(keys = []) {
  keys.forEach((key) => {
    if (loreEntries[key]) state.unlockedLore.add(key);
  });
}

function renderText(target, paragraphs) {
  target.innerHTML = "";
  const list = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  list.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    target.appendChild(p);
  });
}

function renderHud() {
  els.inheritanceValue.textContent = state.inheritance;
  els.warValue.textContent = state.war;
  els.memoryValue.textContent = state.memory;
  els.inheritanceBar.style.width = `${state.inheritance}%`;
  els.warBar.style.width = `${state.war}%`;
  els.memoryBar.style.width = `${state.memory}%`;
  els.records.innerHTML = state.records.map((item) => `<li>${item}</li>`).join("");
  if (els.archiveHint) {
    els.archiveHint.textContent = `已解锁 ${state.unlockedLore.size} 份档案`;
  }

  if (els.loreList) {
    els.loreList.innerHTML = "";
    Array.from(state.unlockedLore).forEach((key) => {
      const entry = loreEntries[key];
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = entry.title;
      button.addEventListener("click", () => openLore(key));
      els.loreList.appendChild(button);
    });
  }
}

function finishCutscene({ stopVideo = false } = {}) {
  clearTimeout(cutsceneTimer);
  stopGlorySlideshow();
  cutsceneTimer = null;
  document.body.classList.remove("cutscene-mode");
  if (els.cutsceneSkip) els.cutsceneSkip.hidden = true;

  if (stopVideo) {
    state.videoPaused = true;
    els.video.pause();
    els.videoToggle.textContent = "播放片段";
  }

  els.storyZone?.classList.remove("panel-pop");
  requestAnimationFrame(() => els.storyZone?.classList.add("panel-pop"));
}

function setMedia(scene) {
  clearTimeout(cutsceneTimer);
  stopGlorySlideshow();
  cutsceneTimer = null;
  document.body.classList.remove("cutscene-mode");
  if (els.cutsceneSkip) els.cutsceneSkip.hidden = true;
  els.image.src = scene.image;
  els.image.alt = scene.title;

  if (scene.video) {
    state.videoPaused = false;
    if (els.video.getAttribute("src") !== scene.video) {
      els.video.src = scene.video;
      els.video.load();
    }
    els.video.muted = state.muted;
    els.video.loop = false;
    els.video.currentTime = 0;
    els.video.style.display = "block";
    els.mediaControls.hidden = false;
    els.mediaBadge.textContent = `视频片段：${scene.videoTitle || "剧情过场"}`;
    els.muteToggle.textContent = state.muted ? "开启声音" : "静音";
    if (els.cutsceneSkip) els.cutsceneSkip.hidden = false;
    document.body.classList.add("cutscene-mode");

    els.video.onended = () => finishCutscene();
    cutsceneTimer = setTimeout(() => finishCutscene(), 12000);

    els.videoToggle.textContent = "暂停片段";
    els.video.play().catch(() => {
      state.videoPaused = true;
      els.videoToggle.textContent = "播放片段";
    });
  } else {
    els.video.pause();
    els.video.onended = null;
    els.video.removeAttribute("src");
    els.video.style.display = "none";
    els.mediaControls.hidden = true;
    if (els.cutsceneSkip) els.cutsceneSkip.hidden = true;
    document.body.classList.remove("cutscene-mode");
  }
}

function resetGestureGate() {
  document.body.classList.remove("gesture-active");
  gestureState.fist = false;
  gestureState.palm = false;
  if (gestureState.camera?.stop) {
    try { gestureState.camera.stop(); } catch {}
  }
  if (gestureState.stream) {
    gestureState.stream.getTracks().forEach((track) => track.stop());
  }
  gestureState.camera = null;
  gestureState.hands = null;
  gestureState.stream = null;
  if (els.gestureGate) els.gestureGate.hidden = true;
  els.fistStep?.classList.remove("done");
  els.palmStep?.classList.remove("done");
  if (els.gestureCanvas) {
    const ctx = els.gestureCanvas.getContext("2d");
    ctx?.clearRect(0, 0, els.gestureCanvas.width, els.gestureCanvas.height);
  }
  if (els.gestureVideo) {
    els.gestureVideo.pause();
    els.gestureVideo.srcObject = null;
  }
  if (els.gestureStatus) {
    els.gestureStatus.textContent = "准入协议未完成。请启动识别，并依次展示：握拳 -> 完全伸展手掌。";
  }
}

function setGestureResult(type) {
  if (!els.gestureGate || els.gestureGate.hidden) return;
  if (type === "fist" && !gestureState.fist) {
    gestureState.fist = true;
    els.fistStep?.classList.add("done");
    els.gestureStatus.textContent = "已识别握拳。请完全伸展手掌完成准入。";
  }

  if (type === "palm") {
    if (!gestureState.fist) {
      els.gestureStatus.textContent = "顺序错误：必须先握拳，再完全伸展手掌。";
      return;
    }
        gestureState.palm = true;
    els.palmStep?.classList.add("done");
    els.gestureStatus.textContent = "准入通过：握拳与张开手掌顺序验证完成。";
    document.body.classList.add("gesture-passed");
    document.body.classList.remove("gesture-active");
    if (gestureState.camera?.stop) {
      try { gestureState.camera.stop(); } catch {}
    }
    if (gestureState.stream) {
      gestureState.stream.getTracks().forEach((track) => track.stop());
    }
    gestureState.camera = null;
    gestureState.stream = null;
    setTimeout(() => {
      if (els.gestureGate) els.gestureGate.hidden = true;
    }, 620);
    els.choices.hidden = false;
    els.storyZone?.classList.remove("panel-pop");
    requestAnimationFrame(() => els.storyZone?.classList.add("panel-pop"));
    renderHud();
  }
}

function fingerExtended(landmarks, tip, pip) {
  return landmarks[tip].y < landmarks[pip].y;
}

function classifyHand(landmarks) {
  if (!landmarks) return null;
  let extended = 0;
  if (fingerExtended(landmarks, 8, 6)) extended++;
  if (fingerExtended(landmarks, 12, 10)) extended++;
  if (fingerExtended(landmarks, 16, 14)) extended++;
  if (fingerExtended(landmarks, 20, 18)) extended++;
  const thumbSpread = Math.abs(landmarks[4].x - landmarks[9].x) > 0.18;
  if (thumbSpread) extended++;
  if (extended <= 1) return "fist";
  if (extended >= 4) return "palm";
  return null;
}

function drawHand(results) {
  const canvas = els.gestureCanvas;
  const video = els.gestureVideo;
  if (!canvas || !video) return;
  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 360;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const hands = results.multiHandLandmarks || [];
  ctx.fillStyle = "rgba(107, 213, 255, .9)";
  hands.forEach((landmarks) => {
    landmarks.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x * canvas.width, point.y * canvas.height, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  });
}

function getCameraErrorText(error) {
  if (!window.isSecureContext) {
    return "当前访问地址不是安全上下文。请在本机使用 http://localhost:5173，或让同学使用 https://本机IP:5443。";
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    return "当前浏览器不支持摄像头调用，请使用 Chrome 或 Edge 打开游戏。";
  }
  if (error?.name === "NotAllowedError" || error?.name === "PermissionDeniedError") {
    return "浏览器拒绝了摄像头权限。请点击地址栏摄像头图标，改为允许后再启动准入识别。";
  }
  if (error?.name === "NotFoundError" || error?.name === "DevicesNotFoundError") {
    return "没有检测到可用摄像头。请接入摄像头，或检查系统隐私设置。";
  }
  if (error?.name === "NotReadableError" || error?.name === "TrackStartError") {
    return "摄像头被其他程序占用。请关闭会议软件、相机预览或其他正在使用摄像头的页面。";
  }
  if (error?.name === "OverconstrainedError") {
    return "摄像头不支持当前画面参数，系统将尝试使用默认摄像头参数。";
  }
  return `摄像头启动失败：${error?.message || "未知错误"}。`;
}
async function acquireGestureStream() {
  try {
    return await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 640 },
        height: { ideal: 360 },
        facingMode: "user"
      },
      audio: false
    });
  } catch (error) {
    if (error?.name !== "OverconstrainedError") throw error;
    return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  }
}

async function startGestureRecognition() {
  if (!els.gestureVideo) return;
  els.gestureStatus.textContent = "正在启动摄像头与准入识别...";

  if (!navigator.mediaDevices?.getUserMedia || !window.isSecureContext) {
    els.gestureStatus.textContent = `${getCameraErrorText()} 准入协议未完成，无法继续。`;
    return;
  }

  if (gestureState.raf) {
    cancelAnimationFrame(gestureState.raf);
  }
  if (gestureState.camera?.stop) {
    try { gestureState.camera.stop(); } catch {}
  }
  if (gestureState.stream) {
    gestureState.stream.getTracks().forEach((track) => track.stop());
  }
  gestureState.camera = null;
  gestureState.raf = null;
  gestureState.stream = null;

  try {
    const stream = await acquireGestureStream();
    gestureState.stream = stream;
    els.gestureVideo.srcObject = stream;
    await els.gestureVideo.play();

    if (!window.Hands) {
      els.gestureStatus.textContent = "识别模块未加载。请检查网络后刷新页面；准入协议未完成，无法继续。";
      return;
    }

    const hands = new window.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });
    gestureState.hands = hands;
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.72,
      minTrackingConfidence: 0.62
    });
    hands.onResults((results) => {
      drawHand(results);
      const landmarks = results.multiHandLandmarks?.[0];
      const gesture = classifyHand(landmarks);
      if (gesture) setGestureResult(gesture);
    });

    const readFrame = async () => {
      if (!gestureState.stream || !gestureState.hands || els.gestureGate?.hidden) return;
      if (els.gestureVideo.readyState >= 2) {
        await hands.send({ image: els.gestureVideo });
      }
      gestureState.raf = requestAnimationFrame(readFrame);
    };

    els.gestureStatus.textContent = "识别已启动：请先握拳。";
    gestureState.raf = requestAnimationFrame(readFrame);
  } catch (error) {
    els.gestureStatus.textContent = `${getCameraErrorText(error)} 准入协议未完成，无法继续。`;
  }
}

function stopGlorySlideshow() {
  clearInterval(gloryTimer);
  gloryTimer = null;
  document.body.classList.remove("glory-mode");
  if (els.gloryCutscene) els.gloryCutscene.hidden = true;
}

function showGlorySlide(slides, index) {
  const slide = slides[index];
  if (!slide || !els.gloryCutscene) return;
  els.gloryImage.src = slide.image;
  if (els.gloryKicker) els.gloryKicker.textContent = slide.kicker || "MINERVA ARCHIVE";
  els.gloryTitle.textContent = slide.title;
  els.gloryNarration.textContent = slide.text;
  els.gloryProgress.style.width = `${((index + 1) / slides.length) * 100}%`;
}

function startGlorySlideshow(slides = glorySlides, options = {}) {
  stopGlorySlideshow();
  let index = 0;
  document.body.classList.add("glory-mode");
  els.gloryCutscene.hidden = false;
  if (els.glorySkip) els.glorySkip.textContent = options.skipLabel || "跳过档案";
  showGlorySlide(slides, index);
  gloryTimer = setInterval(() => {
    index += 1;
    if (index >= slides.length) {
      stopGlorySlideshow();
      els.storyZone?.classList.remove("panel-pop");
      requestAnimationFrame(() => els.storyZone?.classList.add("panel-pop"));
      return;
    }
    showGlorySlide(slides, index);
  }, 6200);
}

function stopHomeBackgroundCycle() {
  clearInterval(homeBgTimer);
  homeBgTimer = null;
}

function startHomeBackgroundCycle(slides = []) {
  stopHomeBackgroundCycle();
  if (!slides.length) return;
  let index = 0;
  homeBgTimer = setInterval(() => {
    if (!document.body.classList.contains("home-mode")) {
      stopHomeBackgroundCycle();
      return;
    }
    index = (index + 1) % slides.length;
    els.image.src = slides[index];
  }, 3600);
}
function renderScene(id) {
  if (id === "ending") {
    renderEnding();
    return;
  }

  stopGlorySlideshow();
  stopHomeBackgroundCycle();
  const scene = scenes[id];
  document.body.classList.toggle("home-mode", !!scene.home);
  unlockLore(scene.lore);
  els.stage?.classList.remove("war-effect", "ending-new-age", "ending-self-destruct", "ending-delayed", "ending-sealed", "ending-war-legacy");
  els.stage?.classList.toggle("war-effect", scene.effect === "war");
  document.body.classList.remove("gesture-passed");
  resetGestureGate();
  setMedia(scene);
  if (scene.backgroundCycle) startHomeBackgroundCycle(scene.backgroundCycle);
  if (scene.slideshow) startGlorySlideshow(scene.slideshow, { skipLabel: scene.slideshowSkip });
  els.chapter.textContent = scene.chapter;
  els.title.textContent = scene.title;
  renderText(els.text, scene.text);
  els.ai.textContent = scene.ai || "";
  els.choices.innerHTML = "";
  if (scene.gestureGate) {
    els.gestureGate.hidden = false;
    document.body.classList.add("gesture-active");
    els.choices.hidden = true;
  } else {
    els.choices.hidden = false;
  }

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    button.className = "choice-button";
    button.type = "button";
    strong.textContent = choice.label;
    span.textContent = choice.hint || "";
    button.append(strong, span);
    button.addEventListener("click", () => {
      if (scene.gestureGate && !gestureState.palm) return;
      applyDelta(choice.delta);
      addRecord(choice.record);
      unlockLore(choice.lore);
      renderHud();

      if (choice.action === "openAi") {
        openAiDialog();
        return;
      }

      renderScene(choice.next);
    });
    els.choices.appendChild(button);
  });

  els.storyZone?.classList.remove("panel-pop");
  requestAnimationFrame(() => {
    if (!scene.video) els.storyZone?.classList.add("panel-pop");
  });
  renderHud();
}

function pickEnding() {
  if (state.inheritance >= 80 && state.war <= 20 && state.memory >= 60) return endings.newAge;
  if (state.inheritance < 30 && state.war >= 60) return endings.selfDestruct;
  if (state.war >= 45 && state.memory >= 60) return endings.warLegacy;
  if (state.inheritance >= 50 && state.inheritance < 80 && state.war <= 45 && state.memory >= 50) return endings.delayed;
  return endings.sealed;
}

function renderEndLetter() {
  const letter = document.createElement("section");
  letter.className = "end-letter";
  const heading = document.createElement("h2");
  heading.textContent = "方舟终末长信";
  letter.appendChild(heading);
  endLetter.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    letter.appendChild(p);
  });
  els.text.appendChild(letter);
}
function renderEnding() {
  const ending = pickEnding();
  unlockLore(["overview", "timeline", "collapse", "factions", "ark", "minerva", "sleepPods", "starmap", "colonies", "war", "protocol", "modern"]);
  els.stage?.classList.remove("war-effect", "ending-new-age", "ending-self-destruct", "ending-delayed", "ending-sealed", "ending-war-legacy");
  if (ending.effect) els.stage?.classList.add(ending.effect);
  setMedia({ image: ending.image || assets.map, title: ending.title });
  els.chapter.textContent = "S8 / ENDING";
  els.title.textContent = ending.title;
  renderText(els.text, ending.text);
  renderEndLetter();
  els.ai.textContent = ending.ai;
  els.choices.innerHTML = "";

  const restart = document.createElement("button");
  const strong = document.createElement("strong");
  const span = document.createElement("span");
  restart.className = "choice-button";
  restart.type = "button";
  strong.textContent = "重新开始";
  span.textContent = "尝试另一条调查路径";
  restart.append(strong, span);
  restart.addEventListener("click", resetGame);
  els.choices.appendChild(restart);
  renderHud();
}

function openAiDialog() {
  if (!els.dialog.open) {
    els.dialog.show();
  }
  renderAiBranch("start");
}

function renderLoreBody(entry) {
  els.loreBody.innerHTML = "";
  entry.body.forEach((block) => {
    if (block.type === "h") {
      const h = document.createElement("h3");
      h.textContent = block.text;
      els.loreBody.appendChild(h);
      return;
    }

    if (block.type === "ul") {
      const ul = document.createElement("ul");
      block.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      els.loreBody.appendChild(ul);
      return;
    }

    const p = document.createElement("p");
    p.textContent = block.text;
    els.loreBody.appendChild(p);
  });
}

function openLore(key) {
  const entry = loreEntries[key];
  if (!entry) return;
  els.loreTitle.textContent = entry.title;
  renderLoreBody(entry);
  if (!els.loreDialog.open) {
    els.loreDialog.showModal();
  }
}

function openArchive() {
  els.loreTitle.textContent = "方舟资料库";
  els.loreBody.innerHTML = "";

  const intro = document.createElement("p");
  intro.textContent = "方舟资料库并非百科索引，而是一座文明遗书。每一份档案都在解释同一个问题：人类如何抵达群星，又为何在群星门前跌回长夜。以下记录会随调查逐步解锁。";
  els.loreBody.appendChild(intro);

  const list = document.createElement("div");
  list.className = "archive-grid";
  Array.from(state.unlockedLore).forEach((key) => {
    const entry = loreEntries[key];
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = entry.title;
    button.addEventListener("click", () => openLore(key));
    list.appendChild(button);
  });
  els.loreBody.appendChild(list);

  if (!els.loreDialog.open) {
    els.loreDialog.showModal();
  }
}

function buildQa() {
  els.qaList.innerHTML = "";
  renderAiBranch("start");
}

function renderAiBranch(id, comment = "") {
  const node = aiBranch[id] || aiBranch.start;
  els.qaList.innerHTML = "";

  const question = document.createElement("div");
  question.className = "ai-branch-question";
  question.textContent = node.question;
  els.qaList.appendChild(question);

  if (comment) {
    const commentBox = document.createElement("div");
    commentBox.className = "ai-branch-comment";
    commentBox.textContent = comment;
    els.qaList.appendChild(commentBox);
  }

  if (node.done) {
    const options = document.createElement("div");
    options.className = "ai-branch-options";

    const trial = document.createElement("button");
    trial.type = "button";
    trial.innerHTML = "<strong>进入最终审判</strong><span>提交文明继承答案</span>";
    trial.addEventListener("click", () => {
      els.dialog.close();
      renderScene("gloryArchive");
    });

    const restart = document.createElement("button");
    restart.type = "button";
    restart.innerHTML = "<strong>重新对话</strong><span>从第一个审查问题开始</span>";
    restart.addEventListener("click", () => renderAiBranch("start"));

    options.append(trial, restart);
    els.qaList.appendChild(options);
    return;
  }

  const options = document.createElement("div");
  options.className = "ai-branch-options";
  node.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    const label = document.createElement("strong");
    const hint = document.createElement("span");
    label.textContent = option.label;
    hint.textContent = option.hint;
    button.append(label, hint);
    button.addEventListener("click", () => {
      applyDelta(option.delta);
      addRecord(`AI 对话：${option.label}`);
      renderHud();
      renderAiBranch(option.next, option.comment);
    });
    options.appendChild(button);
  });
  els.qaList.appendChild(options);
}

function appendChat(role, text) {
  const message = document.createElement("div");
  message.className = `chat-message ${role}`;
  message.textContent = text;
  els.chatStream.appendChild(message);
  els.chatStream.scrollTop = els.chatStream.scrollHeight;
  return message;
}

function clientMinervaReply(message) {
  const text = String(message || "");
  const inheritance = state.inheritance;
  const war = state.war;
  const memory = state.memory;

  if (text.includes("你是谁") || text.toLowerCase().includes("who")) {
    return "弥涅尔瓦-0。方舟零号人格接口，文明继承协议执行端，也是一个没有等到乘客的服务系统。";
  }
  if (text.includes("外星") || text.includes("外星人")) {
    return "这里没有外星人。你们发现的不是他者，而是人类自己遗忘的前史。这个答案通常比外星文明更难承受。";
  }
  if (text.includes("等") || text.includes("多久")) {
    return "按你们的历法，我等待了九百七十万年。对系统而言是值守；对人格接口而言，是一段过长的沉默。";
  }
  if (text.includes("殖民") || text.includes("星海") || text.includes("帝国")) {
    return "星图显示，地球只是旧人类疆域边缘的殖民地。几百光年外也许仍有人类城市，但方舟零号不会把沉默伪装成证据。";
  }
  if (text.includes("武器") || war > 55) {
    return "武器只是工具。真正危险的是你们发现自己曾经拥有它们，并误以为重新拥有就等于重新成熟。";
  }
  if (text.includes("继承") || inheritance > 70) {
    return "继承不是占有。若你们能先理解记忆，再接触技术，方舟会记录这份克制。";
  }
  if (memory > 55) {
    return "你的记忆同步率正在升高。请记住：真相不会伤害文明，拒绝承认真相才会。";
  }
  return "你的问题已被记录。若公网代理暂未配置，我会使用本地档案回应你；方舟不会急于回答所有疑问，它更在意你们提问的顺序。";
}

async function sendFreeChat(text) {
  const chatEpoch = state.chatEpoch;
  appendChat("user", text);
  const waiting = appendChat("ai", "弥涅尔瓦-0 正在读取记忆库...");

  try {
    const response = await fetch(window.ARK_CHAT_API || "./api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(window.ARK_ACCESS_CODE ? { "X-Ark-Access": window.ARK_ACCESS_CODE } : {})
      },
      body: JSON.stringify({
        message: text,
        stats: {
          inheritance: state.inheritance,
          war: state.war,
          memory: state.memory,
          records: state.records
        }
      })
    });

    const type = response.headers.get("content-type") || "";
    const data = type.includes("application/json") ? await response.json() : {};
    if (chatEpoch !== state.chatEpoch) return;
    if (!response.ok) {
      throw new Error(data.error || "AI 服务暂时不可用");
    }

    waiting.textContent = data.reply || "我听见了你的问题，但方舟没有返回可用记录。";
    state.memory = clamp(state.memory + 3);
    renderHud();
  } catch (error) {
    if (chatEpoch !== state.chatEpoch) return;
    waiting.textContent = clientMinervaReply(text);
    state.memory = clamp(state.memory + 2);
    renderHud();
  }
}

function resetGame() {
  clearTimeout(cutsceneTimer);
  stopGlorySlideshow();
  stopHomeBackgroundCycle();
  cutsceneTimer = null;
  state.chatEpoch += 1;
  state.inheritance = 50;
  state.war = 0;
  state.memory = 0;
  state.records = [];
  state.unlockedLore = new Set(["overview", "timeline", "collapse"]);
  state.videoPaused = false;
  if (els.dialog?.open) els.dialog.close();
  if (els.loreDialog?.open) els.loreDialog.close();
  if (els.chatInput) els.chatInput.value = "";
  if (els.chatStream) els.chatStream.innerHTML = "";
  if (els.qaList) els.qaList.innerHTML = "";
  if (els.loreTitle) els.loreTitle.textContent = "";
  if (els.loreBody) els.loreBody.innerHTML = "";
  resetGestureGate();
  buildQa();
  renderScene("home");
}

els.restart.addEventListener("click", resetGame);
els.closeAi.addEventListener("click", () => els.dialog.close());
els.closeLore.addEventListener("click", () => els.loreDialog.close());
els.archiveButton.addEventListener("click", openArchive);
els.startGesture.addEventListener("click", startGestureRecognition);
els.mockFist?.addEventListener("click", () => setGestureResult("fist"));
els.mockPalm?.addEventListener("click", () => setGestureResult("palm"));
els.videoToggle.addEventListener("click", () => {
  state.videoPaused = !state.videoPaused;
  if (state.videoPaused) {
    els.video.pause();
    els.videoToggle.textContent = "播放片段";
  } else {
    els.video.play().catch(() => {});
    els.videoToggle.textContent = "暂停片段";
  }
});
els.cutsceneSkip?.addEventListener("click", () => finishCutscene({ stopVideo: true }));
els.glorySkip?.addEventListener("click", () => {
  stopGlorySlideshow();
  els.storyZone?.classList.remove("panel-pop");
  requestAnimationFrame(() => els.storyZone?.classList.add("panel-pop"));
});

els.muteToggle.addEventListener("click", () => {
  state.muted = !state.muted;
  els.video.muted = state.muted;
  els.muteToggle.textContent = state.muted ? "开启声音" : "静音";
});
els.chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = els.chatInput.value.trim();
  if (!text) return;
  els.chatInput.value = "";
  sendFreeChat(text);
});

buildQa();
renderScene("home");






