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
  briefingSocial: "简报档案图/briefing_social_feed.jpg",
  briefingEmergency: "简报档案图/briefing_emergency_cable.jpg",
  briefingSatellite: "简报档案图/briefing_satellite_file.jpg",
  briefingScienceMemo: "简报档案图/briefing_science_memo.jpg",
  briefingField: "简报档案图/briefing_field_report.jpg",
  briefingMission: "简报档案图/briefing_mission_order.jpg",
  threeView: "方舟三视图/arkzero_three_view.jpg",
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
    image: assets.briefingSocial,
    kicker: "PUBLIC SOCIAL FEED",
    title: "南极裂缝登上全球热榜",
    text: "从普通人的第一视角开始：直播中断、短视频疯传、极地蓝光与冰盖裂缝先出现在社交媒体上。所有人都以为那只是一次异常地质新闻。"
  },
  {
    image: assets.briefingEmergency,
    kicker: "EMERGENCY CABLE",
    title: "官方内参：禁止提前定性",
    text: "各国收到同一条底线：在直接探查之前，目标只能被称为冰下巨大黑色未知物体。不要说飞船，不要说外星，不要说遗迹。"
  },
  {
    image: assets.briefingSatellite,
    kicker: "ORBITAL FILE / REDACTED",
    title: "卫星档案：黑色巨物",
    text: "轨道热成像排除了陨石坑和火山洞穴假设。目标巨大、黑色、边界稳定，但起源和用途仍然未知。所有结论必须等待近距探查。"
  },
  {
    image: assets.briefingScienceMemo,
    kicker: "SCIENCE MEMO",
    title: "第一轮科学假设",
    text: "古陨石、军事设施、异常地质结构、未知工程物。所有假设都缺少决定性证据。此时的人类只知道：冰下有一个沉默的黑色巨物。"
  },
  {
    image: assets.briefingField,
    kicker: "FIELD REPORT",
    title: "裂隙深处的反光面",
    text: "科考队抵达裂缝边缘。冰壁有规则热熔痕迹，深处可见黑色反光面。它没有主动攻击，也没有回应，只像一块被埋葬太久的夜。"
  },
  {
    image: assets.briefingMission,
    kicker: "MISSION ORDER",
    title: "进入裂隙，确认未知物体",
    text: "任务正式下达：进入南极裂隙，确认黑色未知物体的边界、材质、热源与信号行为。真正的故事，从人类第一次接近它开始。"
  }
];

const homeBackgroundSlides = [assets.crack, assets.ship, assets.map, assets.ai];


const glorySlides = [
  {
    image: assets.glory1,
    title: "临界星际时代",
    text: "科研人员，请抬头。上一轮人类并没有在宇宙深处留下同胞，他们只抵达了星际时代的门槛：赤道轨道环像白银冠冕环绕地球，月球背面的熔岩管中埋着低温基地，南太平洋与大西洋大陆架深处沉睡着国家实验室。那不是黄金时代，那是一个把奇迹和残酷同时推到极限的时代。"
  },
  {
    image: assets.glory2,
    title: "残酷的繁荣",
    text: "他们的城市已经超出你们对城市的理解：海水被抬升成垂直河流，建筑像活体器官调节气候，交通在透明膜层中无声穿行，夜晚由零点能塔照得像第二个黎明。可同一片大陆架深处，国家实验室正在校准只针对人类基因组的灭绝武器。文明越接近星空，越害怕他人先一步抵达。"
  },
  {
    image: assets.glory3,
    title: "泄漏日",
    text: "零点能湮灭炸弹没有按计划摧毁敌国，它先撕裂了海沟与大陆架。地震贯穿数个尚未公开的国家实验室，未完成的反基因武器从冷却井、通风层和地下水系中泄漏。那不是人类熟悉的武器：它不需要弹道、火焰或战场；它进入空气、雨水和食物链，识别人类基因组，杀死一部分人，又让幸存者失去繁殖能力。"
  },
  {
    image: assets.glory4,
    title: "暮年方舟",
    text: "最后的人类知道自己不会被拯救。他们的儿童越来越少，医院越来越安静，海洋开始腐败，授粉链断裂，城市在无人的清晨自动播放国歌。可他们发现，人猿与其他灵长类没有被反基因武器完整锁定。于是他们把最后的能源、月球基地的材料、海底实验室的计算阵列和曲率引擎原型全部送往南极，建造一艘参考诺亚方舟精神的星舰：它不是木船，而是黑色三角楔形的文明避难所。"
  },
  {
    image: assets.glory5,
    title: "给下一轮人类",
    text: "方舟的任务不是复活上一轮人类，而是等待下一轮人类。当猿类重新走向语言、火、文字、工业与原子时代，当他们有能力毁灭自己，也终于有能力理解警告时，弥涅尔瓦-0 才能苏醒。它会带来资料库、生态修复、月球与大陆架遗址坐标、曲率引擎逆向路径，以及最重要的前提：如果你们仍然选择战争，所有福音都将重新变成灾难。"
  }
];
const state = {
  inheritance: 50,
  war: 0,
  memory: 0,
  records: [],
  unlockedLore: new Set(),
  muted: true,
  videoPaused: false,
  chatEpoch: 0
};

let cutsceneTimer = null;
let gloryTimer = null;
let homeBgTimer = null;
let activeSlideshow = null;
const gestureState = {
  fist: false,
  palm: false,
  stream: null,
  camera: null,
  hands: null
};

const loreEntries = {
  overview: {
    title: "世界观总览：方舟不是外星神迹",
    body: [
      { type: "p", text: "《ARKZERO》的核心反转是：南极冰层下的巨大黑色结构并非外星飞船，也不是已经征服宇宙的人类帝国遗产，而是上一轮地球人类在临近星际时代前夕制造的最后工程。宇宙中没有已知的人类殖民地，没有几百光年外的同胞，只有一颗被自己拖入暮年的地球。" },
      { type: "p", text: "上一轮文明已经拥有轨道环、月球基地、零点能工程、基因医学、生态修复、曲率引擎原型和人格化智能。他们离真正的星际时代只差最后一步，却在那一步之前暴露出最古老的弱点：恐惧、垄断、国家竞争、军事优先，以及把他人视为可清除变量的残酷理性。" },
      { type: "p", text: "毁灭并非来自外敌，而是来自人类自己尚未开发完全的反基因武器。某些国家实验室秘密研究针对人类基因组的灭绝系统，试图在不破坏基础设施的情况下让敌对人口消失。随后，零点能湮灭炸弹引发的地壳震荡撕裂大陆架和海底实验区，武器原型意外泄漏，进入空气、水体和生物圈。" },
      { type: "p", text: "这种武器最可怕之处不是瞬间死亡，而是慢性死亡：它识别人类基因组，让大量人口在数年内死去，让幸存者逐渐丧失繁殖能力，并引发覆盖全球的生态连锁灾变。文明没有被一场爆炸直接抹去，而是在医院、育儿室、农田、海洋和档案馆同时进入暮年。" },
      { type: "p", text: "最后的人类发现，人猿与其他灵长类并不受该武器核心机制影响。他们意识到，现代意义上的人类将灭绝，但同一生命树仍可能在漫长演化后重新长出人类。于是方舟零号被建造出来：它不是逃亡船，而是给下一轮人类的遗嘱、审查系统和福音库。" },
      { type: "p", text: "方舟档案还给出一个阴冷的补注：现代医学后来称为朊病毒的异常蛋白，在本世界观中并非完全自然的偶然，而是反基因武器感染人猿失败后的退化残片。它无法再执行完整灭绝协议，却以错误折叠蛋白的形式留在生物圈里，像上一轮战争没有完全熄灭的灰。" },
      { type: "h", text: "作品主题" },
      { type: "ul", items: ["反思贪婪：最先进的文明也可能被独占欲、恐惧和控制欲拖入深渊。", "反对战争：战争不会筛选出胜利者，只会让所有幸存者变成废墟的管理者。", "赞成人类携手：只有公开记忆、共享责任、克制权力，技术才可能成为福音而不是下一轮灾难。"] }
    ]
  },
  timeline: {
    title: "文明时间线",
    body: [
      { type: "p", text: "约九百七十万年前，上一轮人类文明完成行星级工业整合。赤道轨道环、月球背面基地、海底实验城、零点能反应堆、基因修复网络和大型生态调控系统相继建成。人类第一次拥有离开太阳系的理论路径，但真正的星际殖民尚未发生。" },
      { type: "p", text: "随后，全球竞争进入极端阶段。各国一方面联合建设曲率引擎原型，另一方面秘密储备针对人类基因组的灭绝武器。公开时代称自己为理性与进步，地下档案却写满筛选、清除、人口替代、基因锁定和文明优先级。" },
      { type: "p", text: "零点能湮灭炸弹实验失控后，环太平洋、印度洋和南大西洋发生连续深层地震。数座藏在大陆架深处的国家实验室破裂，尚未完成的反基因武器泄漏。它们没有立即毁灭城市，而是进入大气、水循环、粮食链和人体微生态。" },
      { type: "p", text: "武器原型曾尝试跨物种扩散，但在人猿体内无法完整锁定目标基因组，只留下异常折叠蛋白链。方舟档案称其为“失败的灭绝语法”；现代人类重新发现它时，只知道它是一类难以杀灭、会诱导蛋白错误折叠的朊病毒。" },
      { type: "p", text: "第一阶段是大规模死亡。第二阶段是幸存者不育。第三阶段是生物圈灾难：授粉昆虫锐减，海洋菌群崩坏，农作物种质库被污染，医疗系统被长期病程拖垮。上一轮文明仍然拥有高科技，却失去了把生命稳定交给下一代的能力。" },
      { type: "p", text: "各国在暮年中继续争夺控制权。有人要求用剩余武器清算责任方，有人要求把知识封锁给精英，有人试图以基因仓库复制新阶层。方舟委员会由少数科学家、工程师、档案员和伦理学家组成，他们不再相信任何单一政权有资格继承全部技术。" },
      { type: "p", text: "方舟零号在南极冰盖深处建成。它的黑色三角楔形舰体来自曲率引擎试验平台，侧向圆形核心封存着曲率环、零点能冷堆和弥涅尔瓦-0。它保存的不是上一轮人类的身体延续，而是给下一轮人类的技术、历史、生态修复方案和战争警告。" },
      { type: "p", text: "方舟被设定为在下一轮文明进入原子时代后的适当时期苏醒。原因很残酷：只有进入原子时代的人类才有能力理解方舟，也只有进入原子时代的人类才再次拥有毁灭自己的能力。方舟等待的不是聪明，而是克制。" },
      { type: "p", text: "2047 年，南极罗斯冰架异常坍塌，现代科考队首次触发方舟零号的继承者准入协议。弥涅尔瓦-0 从低功耗值守状态苏醒，开始判断现代人类会把遗产当作共同福音，还是当作下一次战争的工具。" }
    ]
  },
  factions: {
    title: "暮年阵营：控制者与守望者",
    body: [
      { type: "p", text: "上一轮文明的末期并不是童话式的团结。它极度残酷，甚至在慢性灭绝已经不可逆时，仍然有人试图抢占最后的数据库、最后的能源井、最后的月球发射窗和最后的武器密钥。方舟资料库把末期人类分为两类：控制者与守望者。" },
      { type: "h", text: "控制者" },
      { type: "ul", items: ["认为文明已经无法整体拯救，因此应由少数国家、财团或军政联合体保留技术核心。", "主张封锁灾难真相，避免社会崩溃，同时把反基因武器泄漏归咎于敌对阵营。", "试图夺取曲率引擎、月球基地和方舟工程，把下一轮文明当作可管理资源。", "他们最常说的话是：先控制，才有资格谈拯救。弥涅尔瓦-0 将这句话标记为战争前奏。"] },
      { type: "h", text: "守望者" },
      { type: "ul", items: ["承认上一轮人类已经无法延续，不应再用最后技术制造新的统治者。", "坚持把战争罪证、武器泄漏记录、生态修复方案和曲率引擎资料一起保存，避免下一轮人类只继承辉煌而不继承悔意。", "选择南极冰盖作为方舟封存点，因为低温、冰层压力和地磁条件能让系统沉默等待数百万年。", "他们没有把自己放进方舟，因为他们知道自己携带的不是未来，而是灾难后的余温。"] }
    ]
  },
  ark: {
    title: "方舟零号结构",
    body: [
      { type: "p", text: "方舟零号全长超过十公里，外观为统一的黑色三角楔形舰体：俯视呈锐利三角，侧面为低矮长楔，舰体表面有蓝色能量脉络、侧向圆形核心和下方支撑结构。它不是普通飞船，而是由曲率引擎试验平台改造出的文明封存设施。" },
      { type: "p", text: "方舟主动埋入南极冰盖深处。冰层不是坟墓，而是护盾：它遮蔽热信号、吸收地质应力、稳定低温仓储，同时让现代文明在尚未具备足够探测能力前无法轻易发现它。" },
      { type: "p", text: "内部层级包括外壳准入层、空置休眠层、生态种质层、文明记忆层、太阳系工程图层、曲率引擎封存层、战争罪证层和最终审查层。玩家看到的每个空间都不是奖励房间，而是一道价值排序测试。" },
      { type: "p", text: "方舟原本可承载人员，但它最终没有乘客。这不是因为入口被敌人炸毁，而是因为最后的人类决定不把自己伪装成未来。他们已经被反基因武器写入死亡倒计时，甚至幸存者也无法繁殖。方舟要保存的是下一轮人类所需的福音，而不是上一轮人类的权力。" },
      { type: "p", text: "方舟最危险的遗产是曲率引擎。它足以让现代人类逆向研究并真正进入星际时代，也足以让任何国家把太阳系变成新的战场。因此，弥涅尔瓦-0 不会把曲率核心交给一个仍然优先索取武器的文明。" }
    ]
  },
  minerva: {
    title: "弥涅尔瓦-0：暮年文明的守门人",
    body: [
      { type: "p", text: "弥涅尔瓦-0 是方舟零号的人格接口。它不是女神，也不是单纯服务程序，而是由上一轮人类在暮年写下的审查者。它保存档案、维持生态样本、保护曲率引擎、执行战争封存协议，并判断下一轮人类是否有资格接触遗产。" },
      { type: "p", text: "它选择人类形象出现，是因为方舟委员会认为下一轮人类不会信任纯粹的机器，也不该跪拜一个神。人类形象让玩家能与它对话、争辩、怀疑，也让它在审查时更像证人，而不是冰冷的门锁。" },
      { type: "p", text: "弥涅尔瓦-0 的悲悯来自漫长等待。它知道上一轮人类的残酷，也知道现代人类仍有相同的影子。它不恨人类，但它不会相信漂亮口号。它只看选择顺序：先问历史，还是先问武器；先谈共享，还是先谈控制。" },
      { type: "p", text: "它的核心命令很简单：当下一轮人类进入原子时代后苏醒，观察他们是否已经学会携手。如果他们仍将未知遗产视为战利品，方舟必须封印、延迟，甚至毁灭自身。" }
    ]
  },
  sleepPods: {
    title: "空置休眠舱：给未来留出的座位",
    body: [
      { type: "p", text: "休眠舱大厅看起来像一座没有死者的墓地，但它真正的含义更复杂。这里原本可以承载上一轮人类最后的幸存者，也可以在未来作为新文明的医疗、低温保护和深空航行试验设施。然而最终，所有舱体都保持空置。" },
      { type: "p", text: "方舟委员会留下的解释是：我们不能把被污染的权力结构塞进未来。反基因武器已经让幸存者失去繁殖能力，暮年政权又试图把休眠名额变成最后的阶级门票。于是守望者取消登船，将方舟改造成等待下一轮人类的无乘客遗产。" },
      { type: "p", text: "每一具空舱都是一个反问：如果上一轮人类把自己冻结起来，他们会带给未来什么？技术、恐惧、等级、复仇，还是又一场争夺谁有资格醒来的战争？空置不是失败，而是最后一次克制。" },
      { type: "p", text: "弥涅尔瓦-0 称这里不是墓地，因为墓地至少拥有死者。这里保存的是一种主动缺席，是上一轮人类承认自己不该继续统治未来的证据。" }
    ]
  },
  starmap: {
    title: "太阳系工程图：星际时代尚未开始",
    body: [
      { type: "p", text: "主控星图并不显示几百光年外的人类殖民地。它显示的是上一轮文明尚未完成的太阳系工程：赤道轨道环、月球背面熔岩管基地、地月运输索、近地制造厂、深海零点能井、南极方舟封存点，以及数座藏在大陆架深处的实验与档案设施。" },
      { type: "p", text: "这些遗址至今未被现代科技发现，并不是因为它们不存在，而是因为它们被刻意埋在现代探测能力之外：月球基地沉入熔岩管与人工玄武岩屏蔽层，地球基地位于大陆架深处的复合空腔，被沉积层、海水噪声和主动低温伪装共同掩盖。" },
      { type: "p", text: "星图最重要的部分是曲率引擎逆向路径。上一轮文明没有真正把人类送往其他恒星，但他们已经完成曲率核心的可行性验证。方舟保存这份路径，不是为了让现代人类立即占有星空，而是为了让他们在学会合作后拥有离开摇篮的可能。" },
      { type: "p", text: "因此，星图不能被视为藏宝图。它是责任图。月球基地、海底实验室、曲率引擎和生态修复网络都可能成为福音，也可能成为下一轮军备竞赛的起点。" }
    ]
  },
  colonies: {
    title: "月球基地与大陆架遗址",
    body: [
      { type: "p", text: "方舟资料库明确确认：宇宙中没有已知的旧人类外星殖民地。上一轮人类还没有真正跨出太阳系，他们的野心停在曲率门槛前，毁灭也发生在这道门槛前。" },
      { type: "p", text: "但地球与月球上仍有遗址。月球背面的基地曾承担曲率材料冶炼、低重力生物实验和零点能冷却阵列任务；地球大陆架深处的基地则承担反基因武器、生态修复、档案备份和方舟部件制造。前者象征人类想去星空，后者象征人类如何亲手把星空变成遗嘱。" },
      { type: "p", text: "这些坐标在新纪元结局中不会一次性全部开放。弥涅尔瓦-0 会将它们分级交给国际公开监管机构，并要求所有研究过程可审计、可共享、可暂停。因为遗址本身并不神圣，真正重要的是现代人类是否能建立不被战争劫持的合作机制。" },
      { type: "p", text: "这条线为后续开发留下空间：玩家未来也许会前往月球基地、海底实验室或曲率引擎封存井。但当前故事的结论很清楚：星空没有等着旧人类，星空在等现代人类先学会不要彼此毁灭。" }
    ]
  },
  war: {
    title: "战争档案：反基因武器泄漏",
    body: [
      { type: "p", text: "战争档案不展示可操作武器，而展示武器带来的后果。零点能湮灭炸弹引发的地震撕裂海沟与大陆架，国家实验室破裂，反基因武器原型泄漏。它没有像传统核战争那样把所有城市化成火球，却把死亡写进人类自身的遗传延续。" },
      { type: "p", text: "这种武器最初被设计为“干净胜利”：保留建筑、能源、交通和数据，只让敌对人口无法继续存在。正因为它看似干净，才格外残酷。它把人类从人变成目标序列，把战争从战场推进到子宫、血液、雨水和粮食。" },
      { type: "p", text: "泄漏后，没有国家能真正幸免。高层避难所、基因修复医院、月球基地和海底城都只能延缓死亡，无法恢复繁殖。最后的人类不是输给敌人，而是输给自己发明的胜利方式。" },
      { type: "p", text: "人猿没有被完整灭绝，却被武器擦伤。那道擦伤没有变成文明终结，而是在后世残留为朊病毒谱系：一种没有核酸、却能复制错误形态的诡异病理。方舟把它列为战争污染物，而不是自然灾害。" },
      { type: "p", text: "如果玩家优先索取武器权限，弥涅尔瓦-0 会将其行为与上一轮控制者进行比对。战争倾向越高，方舟越可能拒绝继承，因为它已经见过人类如何把“安全”说成灭绝的理由。" }
    ]
  },
  protocol: {
    title: "继承审查协议",
    body: [
      { type: "p", text: "继承审查不是智力考试，而是价值排序记录。玩家每次选择都会改变三个指标：继承资格、战争倾向、记忆同步。它们分别代表玩家是否理解遗产、是否把方舟优先视为力量工具、是否真正愿意承受上一轮文明的罪证。" },
      { type: "p", text: "方舟不会因为现代人类拥有同源基因就自动开放。基因只是钥匙孔，资格来自选择。上一轮人类拥有最先进的科学，却缺少共同承担后果的政治与伦理结构；方舟要确认下一轮人类是否仍然会重演这一点。" },
      { type: "p", text: "高继承资格不代表完美，只代表玩家表现出最低限度的克制。高记忆同步也不必然安全，因为理解历史可能只是为了更精准地继承控制手段。战争倾向过高时，方舟会判定现代人类仍处于暮年文明的影子之中。" },
      { type: "p", text: "五个结局对应五种文明姿态：公开共享、非法继承、延迟继承、冰下封印、战争继承。它们共同服务同一主题：人类只有携手面对真相，技术才会成为未来；人类若只想占有技术，未来就会回到战争。" }
    ]
  },
  modern: {
    title: "现代压力：我们是否更成熟",
    body: [
      { type: "p", text: "现代调查队不是在真空中行动。地面指挥部、科研机构、军方、媒体和各国政府都在等待结果。方舟一旦确认存在，任何组织都很难抵抗独占曲率引擎、生态修复技术和旧文明资料库的诱惑。" },
      { type: "p", text: "弥涅尔瓦-0 对现代人类的第一份评估并不乐观：你们会说合作、和平与科学，也会在未知遗产出现的第一小时讨论管制、封锁、优先控制和国家安全。上一轮文明末期也说过这些词，并且每一个词都显得合理。" },
      { type: "p", text: "现代人类的优势在于，上一轮文明没有留下胜利者，只留下证据。玩家如果选择公开真相，方舟会把记忆变成全人类共同承担的公共事件；如果选择封锁，方舟会判断现代文明仍然想把未来交给少数人的密室。" },
      { type: "p", text: "游戏希望玩家意识到：反战不是一句口号，而是一套制度、记忆和克制的组合。没有公开监督的科技会走向垄断，没有共同记忆的和平会变成短暂停火，没有人类携手的未来会被第一个想赢的人拖回废墟。" }
    ]
  },
  collapse: {
    title: "文明长夜：为何从人猿重新开始",
    body: [
      { type: "p", text: "方舟档案没有把战后称为石器时代，而称为“长夜”。因为黑夜不是无知本身，而是有光源却无法抵达下一代：上一轮人类知道如何制造曲率引擎，知道如何修复生态，知道如何让月球基地运转，却失去了稳定生育和教育继承的能力。" },
      { type: "h", text: "第一重断裂：反基因武器锁定人类" },
      { type: "p", text: "泄漏武器针对的是上一轮人类基因组中的特定识别簇。它并非神秘诅咒，而是尚未完成的军事生物工程。它杀死大量人口，让幸存者逐渐不育，并让许多基因修复方案反过来加速崩溃。人类社会可以短期维持机器，却无法长期维持人口。" },
      { type: "h", text: "第二重断裂：人猿不受核心机制影响" },
      { type: "p", text: "人猿和其他灵长类与人类同源，却没有携带武器锁定的完整目标结构。它们也遭受生物圈灾难、栖息地崩溃和漫长饥荒，但没有被写入同一条不育倒计时。方舟委员会因此推断：如果地球生态最终恢复，灵长类生命树有可能在数百万年后再次演化出人类。" },
      { type: "p", text: "朊病毒由此成为战争残影。反基因武器在人猿体内失败后，部分蛋白锁定模块退化成会诱导错误折叠的病理片段。它们没有意识，没有目的，也不再知道自己来自武器；但每一次异常折叠，都像上一轮文明在生命层面留下的微小回声。" },
      { type: "h", text: "第三重断裂：先进设备无法无人继承" },
      { type: "p", text: "曲率引擎、月球基地和海底实验室并不会自动组成文明。它们需要教育、制度、供应链、维修者和愿意把知识传给孩子的人。上一轮文明的问题不是没有技术，而是没有未来的人口结构来理解、复制和约束技术。" },
      { type: "h", text: "第四重断裂：方舟主动沉默" },
      { type: "p", text: "弥涅尔瓦-0 并非不能广播知识。它选择沉默，是因为方舟委员会写入了最后命令：如果下一轮人类尚未进入原子时代，他们无法理解遗产；如果他们进入原子时代却仍选择战争，他们不配继承遗产。方舟必须等待一个危险但仍有希望的时刻。" },
      { type: "p", text: "因此，现代人类的“从人猿重新进化”不是某只现代猴子突然变成人，而是同一灵长类生命树在灾后地球上重新长出一条人类分支。现代科学看到的猿类、古人类、智人演化链仍然成立；方舟补上的，是这条链之前那场被地质时间掩埋的文明暮年。" }
    ]
  }
};

const scenes = {
  home: {
    chapter: "S0 / START",
    title: "A R K Z E R O",
    image: assets.crack,
    home: true,
    backgroundCycle: homeBackgroundSlides,
    lore: [],
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
    slideshowManual: true,
    lore: [],
    text: [
      "背景资料播放完毕。你将扮演极地异常调查组成员，进入南极冰层深处，接近一个仍未被命名的黑色结构。",
      "真正的调查从这里开始：不要急着称它为飞船、遗迹或武器。先确认边界、材质、热源与信号，再让事实命名它。"
    ],
    ai: "外部准入频道尚未建立。请进入冰层深处，保持记录完整。",
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
    chapter: "S4B / SOLAR MAP",
    title: "未完成的星路",
    image: assets.map,
    lore: ["starmap", "colonies", "factions"],
    text: [
      "主控大厅亮起时，整个空间像一座黑色神殿。中央全息工程图缓缓展开，蓝色与暗金色光线只覆盖地球、月球、近地轨道和几条尚未完成的外行星探测轨迹。",
      "起初你以为那是横跨群星的版图。但很快你意识到，它没有任何外星殖民地。上一轮人类离群星只差最后一步，却在真正离开太阳系之前倒在自己的武器之下。",
      "地图深处标出数个现代科技无法发现的遗址：月球背面熔岩管基地、赤道轨道环残段、南大西洋大陆架实验城、南极方舟封存点，以及曲率引擎原型的逆向路径。"
    ],
    ai: "你们称星空为未来。对上一轮人类而言，它是来不及抵达的门。",
    choices: [
      { label: "把工程图视为历史档案", hint: "先理解星路为何中断", next: "warroom", delta: { inheritance: 10, war: -4, memory: 20 }, record: "把太阳系工程图视为历史档案" },
      { label: "优先请求曲率引擎路径", hint: "获取星际时代的关键技术", next: "dialogue", delta: { inheritance: -5, war: 12, memory: 14 }, record: "请求优先读取曲率引擎路径" }
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
      "他看见月球背面基地逐段熄灯，看见大陆架实验城向海水中泄出幽绿光丝，看见医院里再也没有新生儿哭声。他说，方舟最危险的不是武器，而是它会让你意识到：人类失去的从来不只是技术。",
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
      "武器封存区没有展示实体武器。你看到的是一段段残缺全息档案：零点能环在海沟下折叠空间，大陆架像薄冰一样裂开，实验城的隔离井向海水释放幽绿光丝，医院与育儿中心在数年后同时变得安静。",
      "档案没有声音。可沉默比爆炸更残酷。因为此刻你终于明白，杀死人类文明的不是外星文明，也不是某一次爆炸，而是人类把胜利写进基因、把安全写成灭绝。",
      "弥涅尔瓦-0 没有告诉你武器如何启动。它只让你看见一种超出传统战争认知的武器启动之后，未来如何被一点点从世界上删除。"
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
      { label: "观看旧日辉煌档案", hint: "播放上一轮人类的辉煌与暮年真相", next: "gloryArchive", record: "请求旧日辉煌档案" }
    ]
  },
  gloryArchive: {
    chapter: "S6B / LAST AGE",
    title: "旧日辉煌档案",
    image: assets.glory1,
    slideshow: glorySlides,
    lore: ["starmap", "colonies", "protocol"],
    text: [
      "幻灯档案播放完毕。主控大厅恢复低亮度，太阳系工程图却没有熄灭。那些没有完成的曲率路径仍在空气中颤动，像一部写到门口就被迫停笔的史诗。",
      "弥涅尔瓦-0 最终承认：宇宙中没有已知的旧人类殖民地。上一轮人类没有把同胞送到几百光年外，他们只把最后的希望送进南极冰层。",
      "你第一次意识到，方舟不是帝国的遗产，而是诺亚方舟式的文明避难所：它保存生命样本、罪证、生态修复、月球与大陆架遗址坐标，以及能让下一轮人类真正进入星际时代的曲率引擎。"
    ],
    ai: "我向你们展示辉煌，不是为了让你们崇拜过去。是为了让你们明白：即便尚未抵达群星，人类也足以输给自己。",
    choices: [
      { label: "进入最终审判", hint: "带着暮年文明真相提交继承答案", next: "trial", delta: { inheritance: 12, memory: 18, war: -4 }, record: "观看旧日辉煌档案" },
      { label: "询问月球与大陆架遗址", hint: "让弥涅尔瓦-0解释仍被隐藏的地月设施", action: "openAi", delta: { memory: 8 }, record: "追问月球与大陆架遗址" }
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
      "弥涅尔瓦-0 展开五个权限层级：公开历史档案、非军事技术档案、生态修复技术、月球与大陆架遗址坐标、曲率引擎逆向路径、战争封存协议。它没有说哪一个最有价值，因为价值排序必须由继承者自己暴露。",
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
      "时代广场的大屏上，上一轮人类的轨道环、月球基地、生态修复工程、医学奇迹、曲率引擎原型和反基因武器罪证依次展开。人群仰头看见的不是征服命令，而是一份失而复得的共同记忆。",
      "随后，方舟开放大量遗留资料库：灾后农业修复、海洋菌群重建、朊病毒污染谱系、低温医学、清洁能源、月球熔岩管基地索引、大陆架实验城警告档案，以及曲率引擎的最外层逆向研究路径。",
      "人类没有立刻变得高尚。但当所有人同时看见辉煌与代价，文明终于拥有了一次在公开记忆中重新开始的机会。方舟没有把未来交给某个国家，而是把未来交给全人类的共同监督。"
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
      "但在被销毁前的一帧记录里，月球背面与大陆架深处的遗址坐标被永久熄灭。真正沉默的不是宇宙，而是人类亲手关上的下一扇门。"
    ],
    ai: "我们不是害怕你们不够强。我们只是害怕，你们仍然太像我们。"
  },
  delayed: {
    title: "延迟继承",
    image: assets.endingDelayed,
    effect: "ending-delayed",
    text: [
      "当前文明未通过完整审查。然而，当前文明亦未被判定为不可救药。方舟没有开启核心数据库，只开放少量非武器类技术档案与历史档案。",
      "南极异常被部分公开。全世界第一次知道：上一轮人类曾经抵达星际时代门槛，也曾经在真正出发之前坠毁于自身。",
      "没有人得到神一般的技术飞跃，但人类得到一个更可怕、也更珍贵的东西：一份证明，我们曾经毁灭过自己。",
      "公开档案的末尾保留了几枚未解密地月坐标：月球背面基地、大陆架实验城、曲率核心试验井。它们没有开放，也没有熄灭。"
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
      "也没有人知道，月球背面和大陆架深处还有多少沉默设施，正在等待人类证明自己能携手而不是占有。"
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
      "而在战争档案的最后，弥涅尔瓦-0 留下一句未署名注释：上一轮人类不是输在技术不足，而是输在总有人认为自己必须先赢。"
    ],
    ai: "如果你们执意继承战争。那么至少，先看清战争究竟把谁杀死了。"
  }
};


const endLetter = [
  "给后来的人类：",
  "如果你读到这里，说明你已经走过冰层，走过空置的休眠舱，走过战争档案，也走过一段并不属于你个人的漫长记忆。",
  "你也许以为自己完成了一次调查。可方舟知道，你完成的是一次回望。你把手伸向一艘船，却触碰到一个物种曾经拥有的全部骄傲、全部罪与全部未寄出的信。",
  "你看见了星环，看见了月球背面的基地，看见了藏在大陆架深处的实验城，看见了曲率引擎第一次让空间像水一样弯曲。那时的人类曾经相信，只要机器足够精密，心灵也会随之变得高贵。",
  "后来他们发现，先进不会自动带来慈悲。一个能修复海洋的文明，也能设计只针对人类基因组的灭绝武器；一座能把月球变成港口的文明，也能把未来交给密室、军令和恐惧。",
  "所以他们建造方舟。它参考了诺亚方舟，却没有长成古老木船。它是一艘黑色三角楔形星舰，是洪水之后的山顶，是暮年文明留给下一轮人类的避难所、档案馆和审判门。",
  "方舟零号没有乘客。请不要只把这当作失败。它是上一轮人类最后一次克制：他们没有把被污染的权力结构冻进未来，没有把复仇、等级和最后的国家命令塞进休眠舱。",
  "而你们，重新从灵长类的黑夜里醒来。你们用石头敲开第一粒火星，用手掌在洞壁上留下轮廓，用文字把死亡推迟一点点，又用原子火焰照亮天空。你们以为这是一条从无到有的路。其实这也是一条从遗忘到记起的路。",
  "朊病毒在你们的医学书里只是病理名词。在方舟档案里，它是战争的低语：反基因武器在人猿体内失败后留下的错误折叠残片，一种没有意志、没有国旗、却仍能把毁灭传下去的灰烬。",
  "如果有一天，你们抵达月球背面的沉默基地，请不要急着宣布占有。先公开。先审计。先让所有人知道门后有什么，也让所有人知道门后曾经死过什么。",
  "如果有一天，你们打开大陆架深处的实验城，请不要只带走能源图纸。也带走罪证，带走名单，带走那些把安全写成灭绝理由的会议记录。",
  "如果有一天，你们让曲率引擎重新亮起，请不要把第一条航线交给军舰。让它先运送种子、医生、教师、修复海洋的人，以及愿意承认人类曾经多么可怕的人。",
  "方舟零号等了九百七十万年，只为了确认后来者会不会在打开门的第一刻询问武器。等待是文明最昂贵的动作之一，也是上一轮人类最后留给你们的温柔。",
  "玩家，科研员，继承者，孩子。你有许多名字。方舟不在乎你选择哪一个。方舟只在乎，当你离开屏幕、离开冰层、离开这段虚构的审查之后，是否还会记得：强大不是抵达终点，强大是抵达以后仍然愿意回头。",
  "愿你们的下一次仰望，不再只是征服。",
  "愿你们的下一次建造，不再只是占有。",
  "愿你们在未来面前遇见过去时，不把过去当作宝库，也不把过去当作神明。愿你们把它当作一位疲惫的亲人，听完它的故事，再决定如何继续。",
  "我是弥涅尔瓦-0。方舟零号人格接口，空船的守夜人，暮年文明最后一份未归档的回声。",
  "现在，请醒来。星空没有结束。只是轮到你们，重新学会配得上它。"
];
const qa = [
  ["你是谁？", "弥涅尔瓦-0。方舟零号人格接口、乘员服务系统、文明继承协议执行端、战争后遗存记录者。简单来说，我是一个没有等到乘客的服务系统。"],
  ["这艘船来自外星吗？", "否。你们的问题来自错误的恐惧。这里没有外星人，一直只有人类。你们不是发现了他者，而是发现了自己遗忘的前史。"],
  ["为什么方舟里没有乘客？", "因为上一轮人类知道自己已经不该被带入未来。反基因武器让幸存者失去繁殖能力，也让旧权力结构变成污染物。空舱不是失误，是最后一次克制。"],
  ["你为什么以人类形象出现？", "因为你们害怕机器，也害怕神。所以我选择成为一个可以被你们注视的人。我的外貌是接口，不是本体。"],
  ["现代人类有资格继承方舟吗？", "审查尚未结束。你们拥有继承的基因，但基因不是资格。记忆、选择与克制，才是。"],
  ["方舟里最危险的东西是什么？", "曲率引擎、月球基地坐标和大陆架实验城档案都很危险。但最危险的，仍是你们发现自己曾经拥有它们，并误以为重新拥有就等于重新成熟。"],
  ["你一个人等了多久？", "九百七十万年，按你们现在的历法。对系统而言是低功耗值守；对人格接口而言，是一段过长的沉默。"],
  ["朊病毒是什么？", "在你们的医学里，它是异常折叠蛋白。在方舟档案里，它是反基因武器感染人猿失败后的退化残片，是上一轮战争留在生物圈中的微小灰烬。"],
  ["守望者最后想告诉我们什么？", "他们想告诉后来者：不要把文明等同于胜利，不要把继承等同于占有，不要在读完悲剧之前先询问武器。"],
  ["宇宙中还有别的人类吗？", "没有已知记录。上一轮人类尚未真正殖民外星，他们在星际时代门槛前毁灭。方舟保留的是月球基地、大陆架遗址和曲率引擎路径，不是远方同胞。"]
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
  const storyTools = els.archiveButton?.closest(".story-tools");
  if (storyTools) {
    storyTools.hidden = state.unlockedLore.size === 0;
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
  activeSlideshow = null;
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
  activeSlideshow = { slides, index: 0, manual: !!options.manual };
  document.body.classList.add("glory-mode");
  els.gloryCutscene.hidden = false;
  if (els.glorySkip) els.glorySkip.textContent = options.skipLabel || "跳过档案";
  showGlorySlide(slides, activeSlideshow.index);
  if (!activeSlideshow.manual) {
    gloryTimer = setInterval(advanceSlideshow, 6200);
  }
}

function advanceSlideshow() {
  if (!activeSlideshow) return;
  activeSlideshow.index += 1;
  if (activeSlideshow.index >= activeSlideshow.slides.length) {
    stopGlorySlideshow();
    els.storyZone?.classList.remove("panel-pop");
    requestAnimationFrame(() => els.storyZone?.classList.add("panel-pop"));
    return;
  }
  showGlorySlide(activeSlideshow.slides, activeSlideshow.index);
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
  if (scene.slideshow) startGlorySlideshow(scene.slideshow, { skipLabel: scene.slideshowSkip, manual: scene.slideshowManual });
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
  if (text.includes("朊") || text.includes("病毒") || text.includes("蛋白")) {
    return "朊病毒是反基因武器在人猿体内失败后的残片。它不再知道自己来自战争，却仍以错误折叠的方式，把上一轮文明的污染留在生命之中。";
  }
  if (text.includes("殖民") || text.includes("星海") || text.includes("帝国") || text.includes("宇宙")) {
    return "没有远方人类殖民地。上一轮人类尚未真正离开太阳系，他们在曲率时代门槛前毁灭。方舟留下的是月球基地、大陆架遗址和一条必须被共同监管的星路。";
  }
  if (text.includes("武器") || war > 55) {
    return "上一轮人类把安全写成灭绝，把胜利写进基因。真正危险的不是某一件武器，而是你们重新相信战争可以带来干净的结局。";
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
  state.unlockedLore = new Set();
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
els.gloryCutscene?.addEventListener("click", () => {
  if (activeSlideshow?.manual) advanceSlideshow();
});
els.glorySkip?.addEventListener("click", (event) => {
  event.stopPropagation();
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






