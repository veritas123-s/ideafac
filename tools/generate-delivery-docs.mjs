import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("C:/Users/MSI-NB/Desktop/ideafac_github_upload_ready");
const gameFile = path.join(root, "ark-zero", "game.js");
const outputDir = path.join(root, "交付资料");
const outputFile = path.join(outputDir, "ARKZERO_项目纪要_配音手册_过场Prompt.md");

const source = await readFile(gameFile, "utf8");
const cut = source.indexOf("\nconst els =");
if (cut < 0) throw new Error("Cannot locate data section in game.js");

const dataSource = source.slice(0, cut);
const data = new Function(`${dataSource}\nreturn { assets, introSlides, glorySlides, trialSlides, endingSlides, loreEntries, scenes, endings, endLetter, aiBranch };`)();

const lines = [];
const out = (text = "") => lines.push(text);
const clean = (text = "") => String(text).replace(/\s+/g, " ").trim();

function blockquote(text) {
  out(`> ${clean(text)}`);
}

function listText(items = []) {
  items.forEach((item) => out(`- ${clean(item)}`));
}

function writeSlideGroup(title, slides) {
  out(`## ${title}`);
  slides.forEach((slide, index) => {
    out(`### ${index + 1}. ${slide.title}`);
    if (slide.kicker) out(`- 屏幕标签：${slide.kicker}`);
    out("- 舰载 AI/旁白：");
    blockquote(slide.text);
  });
  out();
}

function flattenEndingSlides(groups) {
  const result = [];
  Object.entries(groups).forEach(([key, slides]) => {
    slides.forEach((slide) => result.push({ ...slide, group: key }));
  });
  return result;
}

function writeSceneVoiceover() {
  out("## 主线场景配音文本");
  Object.entries(data.scenes).forEach(([id, scene]) => {
    out(`### ${scene.chapter || id} / ${scene.title}`);
    if (scene.video) out(`- 过场视频：${scene.videoTitle || scene.video}`);
    if (scene.slideshow) out("- 过场形式：点击任意位置进入下一页，右上角可跳过。");
    if (scene.text?.length) {
      out("- 旁白/场景叙述：");
      scene.text.forEach((line) => blockquote(line));
    }
    if (scene.ai) {
      out("- 舰载 AI 台词：");
      blockquote(scene.ai);
    }
    if (scene.choices?.length) {
      out("- 玩家选项台词：");
      scene.choices.forEach((choice) => out(`  - ${clean(choice.label)}${choice.hint ? `（${clean(choice.hint)}）` : ""}`));
    }
    out();
  });
}

function writeEndingVoiceover() {
  out("## 结局配音文本");
  Object.entries(data.endings).forEach(([id, ending]) => {
    out(`### ${ending.title} / ${id}`);
    out("- 结局旁白：");
    ending.text.forEach((line) => blockquote(line));
    out("- 舰载 AI 台词：");
    blockquote(ending.ai);
    out();
  });

  out("## 方舟终末长信");
  data.endLetter.forEach((line) => blockquote(line));
  out();
}

function writeAiBranchVoiceover() {
  out("## 舰载 AI 主线互动分支配音文本");
  out("说明：本节是“与 AI 对话”后的主线分支审查台词，属于需要配音内容。自由闲聊区与快捷问答不计入本配音手册。");
  Object.entries(data.aiBranch).forEach(([id, node]) => {
    out(`### 分支 ${id}`);
    out("- 舰载 AI 问题：");
    blockquote(node.question);
    if (node.options?.length) {
      out("- 玩家选项与 AI 评语：");
      node.options.forEach((option) => {
        out(`  - 玩家：${clean(option.label)}${option.hint ? `（${clean(option.hint)}）` : ""}`);
        if (option.comment) out(`    AI评语：${clean(option.comment)}`);
      });
    }
    if (node.done) out("- 分支终点：进入最终审判或重新对话。");
    out();
  });
}

const promptCatalog = [
  {
    group: "开场简报 PPT",
    items: [
      ["briefing_social_feed.jpg", "Cinematic social media archive screenshot from a human viewpoint, Antarctica ice shelf crack at night, viral public feed layout, huge black unknown object barely visible under blue ice, multilingual hashtags, no spaceship confirmation, restrained documentary UI, legible space for Chinese report text, 16:9."],
      ["briefing_emergency_cable.jpg", "Classified emergency cable document in multiple official languages, polar research crisis, redacted government memo, Antarctica anomaly described only as a giant black unknown object beneath ice, serious bureaucratic tone, no revealed ark details, clean cinematic document composition, 16:9."],
      ["briefing_satellite_file.jpg", "Orbital thermal imaging archive, satellite scan of Antarctic collapse zone, enormous black geometric shadow under ice but still unidentified, annotated file interface, human science viewpoint, dark blue polar palette, no clear spaceship silhouette, 16:9."],
      ["briefing_science_memo.jpg", "Scientific memorandum board, competing hypotheses about a black object under Antarctic ice, charts, ice-core samples, handwritten notes in several languages, cautious human research tone, no fantasy elements, cinematic realistic UI, 16:9."],
      ["briefing_field_report.jpg", "Polar field report at the edge of a deep crevasse, research team floodlights, black reflective surface deep below ice, brutal wind and snow, first-contact realism, the object is unknown and partially obscured, 16:9."],
      ["briefing_mission_order.jpg", "International mission order slide, restrained command-room document, objective: enter Antarctic fissure and identify unknown black structure, multilingual classified headers, clean grid, no ark reveal yet, cinematic sci-fi realism, 16:9."]
    ]
  },
  {
    group: "主线视频 CG",
    items: [
      ["发现巨型星舰.mp4", "Slow cinematic descent into a collapsed Antarctic ice shelf, searchlights reveal only fragments of a gigantic black wedge-shaped object under ice, blue thermal glow, documentary realism, no UI overlays, centered composition, 16:9."],
      ["人类搭乘探测器准备进入星舰.mp4", "Manned probe descending through a deep blue Antarctic crevasse toward a black triangular wedge ark hull, cockpit reflections, ice particles, scale awe, no dialogue UI, centered cinematic movement, 16:9."],
      ["进入星舰内部.mp4", "Camera crosses a silent threshold into the interior of a black triangular ark, cold metallic corridor, empty cryopod hall, blue energy veins, solemn and clean, no monsters, no UI, centered cinematic shot, 16:9."],
      ["星舰ai出场.mp4", "Shipborne AI Minerva-0 appears as an elegant human-like holographic figure above a translucent dialogue platform, solemn black-blue ark control hall, advanced but warm presence, cinematic pop-out entrance, 16:9."],
      ["最终审判.mp4", "Final trial chamber inside the ark, circular core unfolding holographic records of cities, moon base, zero-point disaster and empty nurseries, no repeated previous assets, monumental judgement atmosphere, 16:9."]
    ]
  },
  {
    group: "旧日辉煌档案幻灯",
    items: [
      ["glory_1.jpg", "Pre-stellar ancient human civilization at the threshold of the space age, equatorial orbital ring around Earth, moon lava tube base index, magnificent but ominous, not a galactic empire, 16:9."],
      ["glory_2.jpg", "A city beyond modern human cognition, vertical rivers of lifted seawater, climate-regulating living architecture, silent transit membranes, zero-point towers lighting a second dawn, beautiful and cruel, 16:9."],
      ["zero_point_annihilation_weapon.png", "Surface proving ground for a zero-point annihilation prototype, central crustal target shaft, black tower arrays surrounding a white-blue singularity, red-orange cracked ground, distant volcanoes and impossible flood wall, no orbital weapon, no underwater target, no green biology lab glow, 16:9."],
      ["zero_point_pacific_collapse.png", "Planetary geological collapse near the future Mariana region, old land sinking into a newborn Pacific basin, ocean flooding a continental wound, volcano arcs and trench formation, epic documentary scale, 16:9."],
      ["glory_3.jpg", "Europa One containment facility destroyed by earthquakes and volcanic eruption, titanium alloy armor plates failing against boiling magma, centrifuge explosion throwing invisible anti-gene virus into the atmosphere, not a zero-point weapon, 16:9."],
      ["zero_point_final_flood.png", "Mythic final flood wave caused by ancient zero-point geological aftershocks, ocean and sky both swallowing land, distant primitive humans witnessing a catastrophe later remembered as Noah's flood, solemn epic, 16:9."],
      ["glory_4.jpg", "The last humans in a dying civilization building a black triangular wedge Ark in Antarctica, empty cryopods, moon-base material convoys, Noah Ark symbolism translated into advanced starship engineering, 16:9."],
      ["glory_5.jpg", "A message to the next human civilization, Minerva-0 archive light over seeds, ecological repair vaults, lunar coordinates and warp-engine diagrams, hopeful but restrained, 16:9."]
    ]
  },
  {
    group: "最终审判与结局幻灯",
    items: [
      ["trial_keyframe.jpg", "Final judgement hall inside ARKZERO, no reused footage, holographic court of civilization, Minerva-0 as witness not goddess, records of brilliance and crimes rising from blue light, 16:9."],
      ["trial_ledger.jpg", "A holographic ledger recording player choices, public truth versus control, memory synchronization, war tendency, advanced UI as moral evidence, cinematic close-up, 16:9."],
      ["trial_memory.jpg", "Civilization evidence montage: orbital ring, moon lava tubes, zero-point city, ecological restoration, anti-gene leak day, all presented as one chain of evidence, original composition, 16:9."],
      ["trial_verdict.jpg", "Minerva-0 verdict moment, inheritance gate opening or closing, black ark core, transparent moral interface, no repeated previous image, 16:9."],
      ["new_age_keyframe.jpg", "Times Square and global public screens showing the Ark revealing humanity's past achievements and crimes to all people, public archive not military triumph, uplifting epic, 16:9."],
      ["new_age_archive.jpg", "First public archive layer opens: ecology repair, prion contamination map, ocean microbiome, clean energy, transparent international oversight, 16:9."],
      ["new_age_global_witness.png", "Global public witness moment, screens in cities, schools, polar stations and rescue ships all showing the Ark archive opening; humanity itself becomes part of the record, hopeful epic, no reused old glory archive, 16:9."],
      ["new_age_moon.jpg", "Moon far-side lava tube base index revealed as a classroom for humanity, not a conquest map, pale lunar light and archival overlays, 16:9."],
      ["self_destruct_keyframe.jpg", "Ark refuses inheritance, solemn denial protocol, black triangular core retracting inward, no explosion spectacle, tragic quiet, 16:9."],
      ["self_destruct_core.jpg", "Warp engine indices and lunar coordinates extinguish one by one inside the ark core, red-blue emergency light, no reused visuals, 16:9."],
      ["self_destruct_denial_core.png", "Last Ark core refusal, blue circular core folding inward like a dying star inside the same black triangular wedge Ark, archive rings retracting, tragic and solemn, 16:9."],
      ["self_destruct_ice.jpg", "Antarctic ice closes over the silent Ark, blue lights fading under snow, humanity losing a chance to speak with its past, cinematic wide shot, 16:9."],
      ["delayed_keyframe.jpg", "Limited inheritance approved, ark archive partially opened with red locked layers, human scientists watching restrained data release, 16:9."],
      ["delayed_council.jpg", "International science council studying non-military archives under public audit, transparent screens, restrained hope, 16:9."],
      ["delayed_public_council.png", "Public audit council for non-military Ark archives, sealed red weapon layers, ecology and medicine data only, cautious hope, no weapon controls, 16:9."],
      ["delayed_lock.jpg", "Moon, Europa One and warp core coordinates behind locked red boundary layers, waiting for a more mature humanity, 16:9."],
      ["sealed_keyframe.jpg", "Ark seals itself beneath ice without rejecting humanity forever, entrance fading, quiet blue polar night, 16:9."],
      ["sealed_surface.jpg", "Years later at the Antarctic surface, the crack is gone, scientists debate archived evidence under aurora, 16:9."],
      ["sealed_aurora_wait.png", "Antarctic aurora after the fissure seals, research teams at a distance, faint blue Ark pulse under translucent ice, deferred hope, 16:9."],
      ["sealed_wait.jpg", "The Ark waiting beneath deep ice, low-power blue pulse, not dead but silent, 16:9."],
      ["war_legacy_keyframe.jpg", "War inheritance ending, global military databases receive the war archive instead of weapons, red alert networks and human reflection, 16:9."],
      ["war_command.jpg", "Command rooms around the world arguing over Ark secrets, screens show warnings not controls, no heroic conquest, 16:9."],
      ["war_global_mirror.png", "Global command rooms and scientific terminals receive only the Ark war archive, red-orange reflection on modern faces, severe anti-war mirror, no weapon parameters, 16:9."],
      ["war_mirror.jpg", "A giant dark mirror-like archive screen reflecting modern leaders over images of the previous civilization's last hundred hours, severe anti-war tone, 16:9."]
    ]
  },
  {
    group: "设定参考图",
    items: [
      ["arkzero_three_view.jpg", "ARKZERO strict reference sheet, one consistent black triangular wedge ark, top view triangular planform, left side low wedge hull, rear/front section with circular core, left rear perspective in Antarctic collapsed ice cave, blue energy veins, gold blueprint UI, no alternate hull shapes, 16:9."],
      ["img_ai_normal.jpg", "Minerva-0 human-like shipborne AI portrait, elegant futuristic female-presenting hologram, solemn and compassionate, black-blue ark interface light, fits centered dialogue pop-out, 16:9 or portrait crop safe."]
    ]
  }
];

out("# ARKZERO 项目纪要、配音手册与过场 Prompt");
out();
out("生成位置：`ideafac_github_upload_ready/交付资料/ARKZERO_项目纪要_配音手册_过场Prompt.md`");
out();
out("## 项目纪要");
out("- 项目名：ARKZERO");
out("- 开发者：张家羽、王家诺、陈宣吉");
out("- 类型：AI 交互式网页科幻游戏，GitHub Pages 静态前端 + 可选后端 AI 代理。");
out("- 核心体验：玩家作为南极异常调查组成员，进入冰层下的黑色三角楔形方舟零号，与舰载 AI 弥涅尔瓦-0 对话，通过资料库、过场幻灯、手势准入与最终审判决定人类是否能继承上一轮文明遗产。");
out("- 核心主题：反思贪婪，反对战争，强调公开记忆、共同监督、克制权力，只有人类携手才能让科技成为福音。");
out("- 美术约束：所有方舟必须保持同一黑色三角楔形体系，俯视是三角形，侧视为低矮长楔，有蓝色能量脉络、侧向圆形核心与下方支撑结构；剧情前期在人类视角中只能称其为冰下巨大黑色未知物体。");
out("- 当前关键设定：宇宙中没有已知旧人类殖民地；上一轮人类只接近星际时代。零点能湮灭炸弹是地表试验场试制品，瞄准中央地壳靶井，实际当量约为预期一百万倍，引发太平洋盆地级联塌陷、长期地质崩毁和后世大洪水传说。欧罗巴一号是另一条灾难链，后续被地震与火山摧毁，钛合金护板挡不住沸腾岩浆，离心机爆炸把尚未完成的反基因病毒送入大气。");
out();
out("## 配音范围说明");
out("- 需要配音：主线场景旁白、舰载 AI 主线台词、玩家选项、AI 分支评语、开场简报、旧日辉煌档案、最终审判、结局幻灯、结局长信。");
out("- 不计入配音：自由闲聊区、快捷 QA、按钮提示音、UI 状态提示、摄像头/手势识别系统提示。");
out("- 建议声线：旁白沉稳克制；玩家台词可由年轻科研员声线朗读；弥涅尔瓦-0 声线冷静、优雅、带轻微悲悯，不要像热血机器人。");
out();

writeSlideGroup("开场简报配音文本", data.introSlides);
writeSceneVoiceover();
writeSlideGroup("旧日辉煌档案配音文本", data.glorySlides);
writeSlideGroup("最终审判幻灯配音文本", data.trialSlides);
writeSlideGroup("结局幻灯配音文本", flattenEndingSlides(data.endingSlides));
writeEndingVoiceover();
writeAiBranchVoiceover();

out("## 过场动画与幻灯 Prompt 清单");
out("说明：以下 prompt 用于继续补图、重制 CG 或让美术同学统一风格。已特别写入“不把方舟画变形”“前期未知物体不暴露身份”“零点能地表靶井试验”等约束。");
promptCatalog.forEach((group) => {
  out(`### ${group.group}`);
  group.items.forEach(([name, prompt]) => {
    out(`- ${name}`);
    out(`  - Prompt: ${prompt}`);
  });
});
out();

out("## 缺失物料清单");
listText([
  "所有主线旁白与弥涅尔瓦-0 台词的人声录音，建议按本文档编号分条录制。",
  "玩家选项台词录音，可选做轻声内心独白或不录，由 UI 文本承担。",
  "五段现有视频 CG 的高清重制版，如需统一风格，应按上方视频 prompt 重新生成或剪辑。",
  "最终审判和五个结局幻灯的高精版本，可按上方 prompt 逐张重绘，确保不同路径不复用素材。",
  "公网 AI 代理域名：部署 Vercel 或校内 Node 后端后，将地址填入 `ark-zero/config.js`。",
  "如演示现场需要手势准入，必须使用 HTTPS 或 localhost，并提前授权摄像头。"
]);
out();

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, `\uFEFF${lines.join("\n")}`, "utf8");
console.log(outputFile);
