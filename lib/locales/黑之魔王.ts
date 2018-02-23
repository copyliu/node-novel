/**
 * Created by user on 2017/12/9/009.
 */

import { sp, IWords } from '.';
import * as StrUtil from 'str-util';
import sublib from './lib';
import { lazymarks } from './lib/index';

export const lang = '黑之魔王';

//export const ns = '黑之魔王';

export const value = {
	chapter_id: '第{{0, toFullNumber}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	// 實驗性概念自動取代為已有的翻譯
	chapter_title_i18n: `$t({{$t(chapter_id, [{{0}}])　title}})`,

	volume_id: '第{{0, toFullNumber}}章',
};

export const resource = {

	i18n: {
		'リリィ': '莉莉',

		'ディアボロス・エンブレス': '恶魔的拥抱',

		'グリードゴア': '贪婪戈尔',

		'クロノＶＳグリードゴア（２）': '黑乃 VS 贪婪戈尔 （２）',

		'第３５２話　パーティー': '第３５２話　Party（队伍/宴会）',

	},

};

export const words: IWords[] = [

	//['[黑黒]', '黑'],

	/**
	 * 菲奥娜•索蕾优 フィオナ・ソレイユ
	 */

	['克洛诺', '黑乃'],
	['真乃真央|[黒黑]央真乃', '黑乃真央'],

	sublib._word_zh('菲欧娜|菲奥娜', '菲奧娜'),
	sublib._word_zh(`菲奥娜${sp}索蕾优`, '菲奥娜・索蕾优'),

	/**
	 *
	 * 艾因，斯拜因，多来因
	 */

	/**
	 * 伊鲁兹村的街道上相遇
	 */
	//sublib._word_zh('伊尔兹村|伊尔兹村|伊兹村', '伊鲁茲村'),
	sublib._word_zh('伊尔兹|伊尔兹|伊兹|伊鲁茲', '伊魯茲'),

	/**
	 *
	 *
	 * 阿尔萨斯要塞/村
	 *
	 * 瓦爾剛
	 * 伏尔甘?帕瓦特
	 * 沃尔夫冈德
	 */
	sublib._word_zh('伏尔甘|沃尔夫|瓦爾剛|巴魯坦|巴鲁坦', '伏尔甘'),
	sublib._word_zh(`伏尔甘${sp}(?:帕瓦特|冈德)`, '伏尔甘・帕瓦特'),

	sublib._word_zh('阿尔萨斯', '阿尔萨斯'),

	//sublib._word_zh('斯?絲小姐', '斯絲小姐'),

	/**
	 * 冒险者公会
	 *
	 * 艾莉娜
	 * 梦魇玛丽
	 * 我和莉莉共乘一匹，菲奥娜独自乘坐一匹。
	 * 顺便说一下，前者叫梅丽，后者叫玛丽。
	 */
	sublib._word_zh('艾利娜|艾丽娜|艾莉娜|爱丽娜|艾里娜', '艾莉娜'),
	sublib._word_zh('工会|公会|行会', '公会'),

	/**
	 * 鍛造
	 */
	['利金|雷金|雷因', '雷金'],
	//['斯特拉托斯|斯特斯汀|斯特兰特斯', '斯特拉托斯'],
	sublib._word_zh('斯特拉托斯|斯特斯汀|斯特兰特斯|斯特拉特', '斯特拉托斯'),

	sublib._word_zh('莫尔德雷德|莫德雷德|摩尔德雷', '莫德雷德'),

	[`${sp}威尔西${sp}莫德雷德`, '$1・$2・$3'],
	[/[华華]因/g, '华因'],

	/**
	 * 黑魔女恩底弥翁
	 * 黒魔女安蒂米欧
	 * 安迪米昂（エンディミオン），侍奉了旧魔王的黑魔女
	 *
	 * 魔王米娅、妖精女王丝，黑魔女安迪米恩
	 */
	sublib._word_zh('恩底弥翁|安迪米昂|安蒂米欧|安迪米恩', '安蒂米欧'),
	sublib._word_zh('魔女', '魔女'),

	sublib._word_zh('aria|亚里亚', '亚里亚'),

	/**
	 * @todo 代達羅斯
	 *
	 * 戈维纳鲁
	 *
	 * 梅迪亚遗迹
	 */
	sublib._word_zh('代達羅斯', '代達羅斯'),
	sublib._word_zh('加辉纳尔|加维纳尔|加挥那尔|戈维纳鲁|加維魯尔', '戈维纳鲁'),

	/**
	 * @todo 阿瓦隆
	 *
	 * 米娅・艾璐罗德
	 *
	 * 尼禄
	 * 妮露
	 */
	sublib._word_zh('米亚|米娅', '米娅'),

	['内尔(好象|公主)', '妮露$1'],
	[/萘尔|妮露/g, '妮露'],

	sublib._word_zh('尼[禄祿]|尼洛|尼諾', '尼禄'),

	[/(?:妮露|尼禄)(公主)/g, '妮露$1'],

	sublib._word_zh('尤[利里][烏乌]斯|尤里乌斯', '尤里乌斯'),
	sublib._word_zh('艾[璐尔]罗德|埃尔罗德|埃尔路斯|艾尔洛特|艾尔罗德|艾璐罗德|艾路羅德', '艾璐罗德'),

	sublib._word_zh(`${sp}尤里乌斯${sp}(?:艾璐罗德|卢德)`, '$1・尤里乌斯・艾璐罗德'),
	[`${sp}艾璐罗德`, '$1・$2'],

	sublib._word_zh('阿瓦隆', '阿瓦隆'),

	//[`${sp}艾璐罗德`, '$1・$2'],

	/**
	 * 君主之翼
	 */
	sublib._word_zh(/翼之君主|君主之翼/g, '君主之翼'),
	sublib._word_zh(`${sp}艾斯特${sp}加尔布雷斯`, '$1・艾斯特・加尔布雷斯'),
	['[凱凯]', '凱'],

	/**
	 * @todo 海德拉
	 *
	 * 前面的是 萨特，这的是赛义德，然后 海德拉 是 九头蛇
	 * 赛义德·玛雅·九头蛇
	 *
	 * 萨菲
	 */
	['赛义德|萨特|萨義德|萨义德', '萨特'],
	['海德拉|九头蛇', '海德拉'],
	//[`${sp}玛雅${sp}海德拉`, '$1・$2・$3'],
	sublib._word_zh(`${sp}玛雅${sp}海德拉`, '$1・玛雅・海德拉'),
	sublib._word_zh(`萨菲尔?|薩菲尔?`, '萨菲'),

	/**
	 * 親衛隊
	 *
	 * 阿瓦隆十二貴族之一的，亞茲拉爾家的長女海倫
	 */
	sublib._word_zh('貴族', '貴族'),
	sublib._word_zh('親衛隊', '親衛隊'),

	sublib._word_zh('亞茲拉爾|阿兹拉瑞尔', '亞茲拉爾'),
	sublib._word_zh('海倫', '海倫'),

	/**
	 * @todo 斯巴达
	 *
	 * 雷欧納德・托利斯坦・斯巴达
	 *
	 * 雷恩哈鲁特国王
	 * 艾森哈鲁特 第一王子
	 * 威尔哈鲁特
	 *
	 * 赛利亚|瑟莉雅 兰布尔
	 */
	sublib._word_zh('威[爾尔][納纳]德|威[爾尔](哈鲁?特|哈尔?德)|瓦[尔爾][納纳]德|瓦尔哈尔?德', '威尔哈鲁特'),
	sublib._word_zh('威[爾尔]|瓦[尔爾]', '威尔'),

	sublib._word_zh('(威[爾尔]|瓦[尔爾])([納纳]德|哈鲁?特|哈尔?德)', '威尔哈鲁特'),
	sublib._word_zh('(雷欧|雷恩)([納纳]德|哈鲁?特|哈尔?德)', '雷恩哈鲁特'),

	sublib._word_zh('(艾森|雷恩|威尔)([納纳]德|哈鲁?特|哈尔?德)', '$1哈鲁特'),

	sublib._word_zh('夏(露|洛|爾)特?|夏洛特', '夏洛特'),

	sublib._word_zh('特里斯坦|托利斯坦', '托利斯坦'),
	//['斯巴德|斯巴[達]|斯特达|斯伯达', '斯巴达'],
	sublib._word_zh('斯巴德|斯巴達|斯特达|斯伯达|斯巴达', '斯巴达'),

	sublib._word_zh(`${sp}托利斯坦${sp}斯巴达`, '$1・$2・$3'),

	//['赛利亚|瑟莉雅|西利亚|菲莉亞|西莉亞', '赛利亚'],
	sublib._word_zh('赛利亚|瑟莉雅|西利亚|菲莉亞|西莉亞|瑟利雅', '赛莉亞'),

	sublib._word_zh(`[蘭兰]布[爾尔]`, '兰布尔'),
	sublib._word_zh(`${sp}[蘭兰]布[爾尔]`, '$1・$2'),

	/**
	 * 斯巴达女将军，艾梅莉亞・弗里德里希・巴尔緹艾尔
	 *
	 * シモン・フリードリヒ・バルディエル
	 * フリーシア・バルディエル
	 */

	sublib._word_zh('弗里西亚', '弗里西亞'),

	['西满', '西蒙'],
	sublib._word_zh('弗里德里希|弗里德希里', '弗里德里希'),
	sublib._word_zh('巴尔緹艾尔|巴尔迪亚尔|巴尔提艾尔|巴迪艾尔', '巴尔緹艾尔'),

	sublib._word_zh('莉亞', '莉亞'),
	sublib._word_zh('艾梅莉亞|艾米莉亞|艾梅利亚|艾蜜莉娅', '艾梅莉亞'),

	//[`${sp}弗里德里希${sp}巴尔缇艾尔`, '$1・$2・$3'],
	sublib._word_zh(`${sp}弗里德里希${sp}巴尔缇艾尔`, '$1・弗里德里希・巴尔緹艾尔'),

	/**
	 * 王立斯巴達學院的學院長索菲亞・希利烏斯・帕西法爾
	 * 索菲亞・西利烏斯・巴西費魯理事長
	 * 索菲亚·天狼星·帕西法璐
	 */

	sublib._word_zh('索菲亞|苏菲亞?', '索菲亞'),
	sublib._word_zh('希利烏斯|西利[烏乌]斯', '希利烏斯'),
	sublib._word_zh('帕西法爾|帕西法璐|巴西費魯|帕西菲爾', '帕西菲爾'),
	//[`${sp}西利[烏乌]斯${sp}巴西費魯`, '$1・$2・$3'],
	sublib._word_zh(`${sp}(?:希利烏斯|天狼星)${sp}(?:帕西菲爾|特拉法)`, '$1・希利烏斯・帕西菲爾'),
	sublib._word_zh(`・(?:希利烏斯|天狼星)・(?:帕西菲爾|特拉法)`, '・希利烏斯・帕西菲爾'),

	sublib._word_zh(`(?:(?:皇家|王(?:立|丽))斯巴达|斯巴达(?:皇家|王(?:立|丽)))神?学+(?:院|校|园)`, '王立斯巴达神學院'),
	sublib._word_zh(`神学+(?:院|校|园)`, '神學院'),

	/**
	 * @todo 使徒
	 *
	 * 蓼蓝（第8使徒） 第八使徒愛
	 * 第十二使徒玛丽亚伯
	 * 第三使徒米迦勒
	 * 第十一使徒米莎
	 *
	 * 第二使徒 勇者阿贝尔 阿贝尔
	 *
	 * 基塔斯司教
	 *
	 */

	sublib._word_zh(/酋达斯|犹达斯|猶達斯|基塔斯/g, '猶達斯'),
	sublib._word_zh('蓼蓝', '蓼蓝'),
	sublib._word_zh('米萨|米莎|米沙|弥撒', '米莎'),

	sublib._word_zh(/沙利叶|沙利葉|萨利叶|沙利业/g, '沙利叶'),

	sublib._word_zh(`([^丽])(亚伯|亚伯|埃布尔|阿贝尔)`, '$1亚伯'),

	sublib._word_zh(`白の勇者|白色勇者`, '白の勇者'),

	sublib._word_zh(`白色秘仪|白之秘跡|白の秘跡|白之遗迹`, '白の秘跡'),

	/**
	 * @todo 十字军
	 *
	 * 卑尔根伯爵
	 *
	 * 十字军贵族派大将，贝尔古特伯爵
	 * 留库罗姆
	 *
	 * 古雷格留斯司教殿
	 * 梅尔赛迪斯枢机卿
	 *
	 * 諾尔茲祭司长
	 */
	sublib._word_zh(/神父|祭司/g, '祭司'),
	sublib._word_zh(`諾尔茲`, '諾尔茲'),
	sublib._word_zh(`(西尔|施)維(亞|娅)`, '西尔維亞'),
	sublib._word_zh(`格里高利|格列高利`, '格里高利'),
	sublib._word_zh(`アルス|阿尔斯`, '阿尔斯'),
	sublib._word_zh(`红衣主教|枢机卿`, '枢机卿'),

	sublib._word_zh(`ベルグント|卑尔根|贝尔古特`, '貝尔古特'),

	/**
	 * 天馬騎士
	 */
	sublib._word_zh(`艾絲蒂尔`, '艾絲蒂尔'),
	sublib._word_zh(`芙兰|法郎`, '芙兰'),

	/**
	 * 悪食魔獣卡欧斯伊塔
	 *
	 * 贪婪戈亚。
	 怠惰吉尔
	 傲慢杰姆
	 暴食欧庫多
	 淫欲罗茲
	 嫉妒雷伊

	 （グリードゴア。
	 スロウスギル。
	 プライドジェム。
	 グラトニーオクト。
	 ラストローズ。
	 エンヴィーレイ。）

	 サンドワーム和マッドモール等，持有着能在地面挖洞的技能的怪物有很多。
	 Rank5的地城『エルグランドキャニオン』的霸者大地龙，仅仅是通过就会制造出直径长达50米的巨大洞窟。
	 */
	sublib._word_zh('嫉妒吉尔|懒惰吉尔|怠惰吉尔', '怠惰吉尔'),
	sublib._word_zh('贪婪格尔|贪婪戈尔', '貪婪戈尔'),
	sublib._word_zh('傲慢杰姆', '傲慢杰姆'),
	sublib._word_zh('暴食欧库多', '暴食欧库多'),
	sublib._word_zh('嫉妒雷伊', '嫉妒雷伊'),

	sublib._word_zh('悪食', '悪食'),
	sublib._word_zh('懒惰|怠惰', '怠惰'),
	sublib._word_zh('贪婪', '貪婪'),
	sublib._word_zh('色欲', '色欲'),
	sublib._word_zh('傲慢', '傲慢'),
	sublib._word_zh('嫉妬', '嫉妬'),
	sublib._word_zh('暴食', '暴食'),

	sublib._word_zh('ラースプン|憤怒熊兔', '憤怒熊兔'),

	sublib._word_zh('哥雷母|哥雷姆', '哥雷姆'),
	sublib._word_zh('奇美拉', '奇美拉'),

	sublib._word_zh('迷宮|地城|地下城|迷宮', '迷宮'),

	/**
	 * 吸血鬼保镖路多拉
	 * 吸血鬼武士的鲁朵拉
	 */
	sublib._word_zh('鲁朵拉|路多拉', '路多拉'),

	/**
	 * 艾斯梅拉山脉
	 * 斯铃村
	 *
	 * lost rose
	 * Last Rose
	 */
	sublib._word_zh('阿苏贝鲁|艾斯梅拉|阿斯貝尔', '艾斯梅拉'),
	sublib._word_zh('最(后|後)的?玫瑰|终末の玫瑰', '最後的玫瑰'),
	sublib._word_zh(`l[oa]st${sp}rose`, 'Last Rose', 'ig'),

	/**
	 * 威斯特法伦
	 */
	sublib._word_zh('威斯特法伦', '威斯特法伦'),

	/**
	 * @todo 卢恩
	 *
	 * フィオーラ・テオ・ナナブラスト
	 * 菲奥拉?媞奥?布拉斯特
	 *
	 * 赤羽善一
	 * ゼンイチ・テオ・レッドウイング伯爵
	 *
	 * 善一·西奥·红翼
	 */
	[`${sp}媞奥${sp}布拉斯特`, '$1・$2・$3'],
	[`${sp}西奥${sp}红翼`, '$1・媞奥・$3'],
	[/西奧・红翼/, '媞奥・红翼'],

	sublib._word_zh('(雷德因克|红翼)', '红翼'),

	sublib._word_zh('鲁恩|卢恩', '卢恩'),

	/**
	 * 辛克莱共和国
	 */
	sublib._word_zh('辛格雷亚|辛克莱', '辛克莱'),

	/**
	 * 大闘技場古兰多克洛夏姆
	 *
	 * 阿苏贝鲁山脉从潘多拉大陆的中部到北部，以描绘弧线的形式扩大着。
	 *
	 * 潘多拉大陆的地图，加拉哈德山脉位在大陆中央稍偏东侧，向南北成弧形延伸，
	 * 从那个弧形的中心稍微往东走去就是我们的伊鲁兹村
	 */

	[/猫の\*+尾亭|猫尾亭/g, '猫の尻尾亭',],
	//['伊斯基斯|伊斯基亚|依斯基斯', '伊斯基亚'],
	sublib._word_zh('伊斯基斯|伊斯基亚|依斯基斯|伊斯基亞|伊斯奇亞|伊斯基尔|伊苏齐斯|伊斯塔亞?', '伊斯基亞'),
	['伊斯(村|山)', '伊斯基亞$1'],

	sublib._word_zh('加拉哈多|加拉巴德|加拉哈德|瓦拉哈德|卡拉哈德', '加拉哈德'),

	sublib._word_zh('艾利西昂|艾利希恩', '艾利西昂'),
	sublib._word_zh('復活の地下墳墓', '復活の地下墳墓'),

	sublib._word_zh('潘多拉', '潘多拉'),

	sublib._word_zh('斗技场|闘技場', '闘技場'),
	sublib._word_zh('grand coliseum|古兰多克洛夏姆', '古兰多克洛夏姆'),

	/**
	 * 克朗（クラン）
	 */

	['跨夏节|夏日祭|夏越祭', '夏越祭'],
	//['[诅詛]?咒物品?[剑角角][斗鬥]大[会會]|詛咒武器競技大賽', '詛咒物品角鬥大會'],
	sublib._word_zh('[诅詛]?咒物品?(?:剑|角|角)(斗|鬥|闘)大(会|會)|詛咒武器競技大賽', '詛咒物品剣闘大会'),

	sublib._word_zh('克朗|克兰', '克兰'),

	/**
	 * 天穹大陆
	 */
	['(天穹|电弧)大陆', '天穹大陆'],


	/**
	 * title
	 */

	['龙杀手', '屠龍者'],
	['DragonKiller', 'Dragon Killer'],

	sublib._word_zh(/(?:漆黒|黒色|黒之)(?:夢魘|噩梦|悪梦)的?狂(?:戰|戦)士/g, '漆黑夢魘的狂戰士'),

	[/Element\s*master|Elemental\s*Master/ig, 'Elemental Master'],
	[/元素大师|元素掌控者|元素之主|元素支配者|元素大師|Elemental Master/g, '元素支配者'],
	sublib._word_zh('混沌魔獸混沌', '混沌魔獸'),

	sublib._word_zh('(剣|角)(斗|闘|鬥)', '剣闘'),

	/**
	 * weapen
	 *
	 * 恶魔的拥抱《diablo's embrace》
	 */
	[/Haunted\s*grave/ig, 'Haunted Grave'],
	sublib._word_zh('来福枪|来复枪', '来福枪'),

	['ブ儿ーム|ブルーム', 'ブルーム'],
	[/(Ains|艾因茲|アインズ|ainz)[・\?]?(B[rl]oom|布魯姆|ブルーム|ブ儿ーム)/ig, '艾因茲・布魯姆'],

	sublib._word_zh(/custom ・fireball|改造火球杖/g, '定制・火球杖'),
	sublib._word_zh(/定制・火焰水晶球/g, '定制・火焰水晶球'),

	sublib._word_zh('白王桜|白樱王', '白王桜'),
	sublib._word_zh('霊刀', '霊刀'),

	sublib._word_zh('起浮游|浮游羽毛', '浮游羽毛'),
	sublib._word_zh('绝怨鉈', '絶怨鉈'),
	sublib._word_zh('極悪食', '極悪食'),

	sublib._word_zh('白翼の天(?:秤|平)', '白翼の天秤'),

	sublib._word_zh('心神守护的白羽《亚里亚 Guard Feather》|心神守护的白羽亚里亚・守护之羽', '心神守護の白羽「亚里亚・守護之羽」'),
	sublib._word_zh('心神守護の白羽根?|心神守护的白羽', '心神守護の白羽'),

	/*
	['[『「]咒怨铊[「『]腹裂[』」][』」]', '「咒怨铊『腹裂』」'],

	sublib._word_zh('獠牙剣(?:[』」》）】]?[《（「『【？?・]+)悪食[』」》）】]?', '牙劍「悪食」'),
	sublib._word_zh('餓狼之?剣(?:[』」》）】]?[《（「『【？?・]+)悪食[』」》）】]?', '餓狼劍「悪食」'),
	sublib._word_zh('暴食牙剣(?:[』」》）】]?[《（「『【？?・]+)極悪食[』」》）】]?', '暴食牙剣「極悪食」'),

	sublib._word_zh('絶怨鉈(?:[』」》）】]?[《（「『【？?・]+)首断[』」》）】]?', '絶怨鉈「首断」'),
	*/

	...(function (): IWords[]
	{
		let ret = [

			[['獠?牙剣', '悪食'], '牙劍「悪食」'],
			[['餓狼之?剣', '悪食'], '餓狼劍「悪食」'],
			[['暴食牙剣', '極悪食'], '暴食牙剣「極悪食」'],

			[['咒怨铊', '腹裂'], '咒怨铊「腹裂」'],
			[['絶怨鉈', '首断|斩首'], '絶怨鉈「首断」'],

		].reduce(function (a, b)
		{
			let c = [
				`(${b[0][0]})(?:[』」》）】]?[《（「『【？?・]+)(${b[0][1]})[』」》）】]?`,
				b[1] as string,
			];

			a.push(sublib._word_zh.apply(null, c));

			return a;
		}, [] as IWords[]);

		//console.log(ret);

		return ret;
	})(),

	/**
	 * skill
	 */

	sublib._word_zh('雷撃砲', '雷撃砲'),
	sublib._word_zh('魔弾', '魔弾'),
	sublib._word_zh('(鋼)の魔王', '鋼の魔王'),
	sublib._word_zh('(炎)の魔王', '炎の魔王'),
	sublib._word_zh('(雷)の魔王', '雷の魔王'),
	sublib._word_zh('榴弾砲撃', '榴弾砲撃'),
	sublib._word_zh('蒼炎の守護', '蒼炎の守護'),
	sublib._word_zh('影空間', '影空間'),

	sublib._word_zh('加護|加佑', '加護'),

	sublib._word_zh('聖魅术|聖愛魅惑|聖愛魅了', '聖愛魅惑'),
	sublib._word_zh('肉体補填|肉体填補', '肉体填補'),
	sublib._word_zh('荷電粒子(砲|炮)', '荷電粒子砲'),
	sublib._word_zh('凍結領域', '凍結領域'),
	sublib._word_zh('精神防護', '精神防護'),
	sublib._word_zh('生命吸収', '生命吸収'),
	sublib._word_zh('神兵計画', '神兵計画'),
	sublib._word_zh('腕力強化', '腕力強化'),

	sublib._word_zh(`the${sp}greed`, 'The・Greed'),

	...sublib.lazymarks['class'],

	[
		`[《（「『]\\w+[』」》）]`, function (...m)
	{
		return m[0].replace(/^([^\w]*)([a-z])/, function (...m)
		{
			return m[1] +m[2].toUpperCase();
		});
	}],
	[
		`[《（「『]\\w+${sp}\\w+[』」》）]`, function (...m)
	{
		return m.slice(1, 3).map(function (s)
		{
			return s.replace(/^([^\w]*)([a-z])/, function (...m)
			{
				return m[1] +m[2].toUpperCase();
			});
		}).join('・');
	}],
	[`[《（「『]\\w+(?:'\w+)?${sp}\\w+${sp}\\w+[』」》）]`, function (...m)
	{
		return m.slice(1, 4).map(function (s)
		{
			return s.replace(/^([^\w]*)([a-z])/, function (...m)
			{
				return m[1] +m[2].toUpperCase();
			});
		}).join('・');
	}],

	/**
	 *
	 */

	['([・，』」。、]) ', '$1'],
	[/([\u4E00-\u9FFF])[ ]*([・\?])[ ]*([\u4E00-\u9FFF])/g, '$1$2$3'],

	[`アインズ${sp}ブルーム`, 'アインズ・ブルーム'],

	[`… …`, '……'],

	//[/(白金|苍月|新阳|绿风|清水|远雷|初火)(?:[之の的])?(月)/g, '$1の$2'],
	[/(日珥|红炎)(?:[之の的])?(月)/g, '红炎の$2'],

	sublib._word_zh('凍土の月', '凍土の月'),

	...([
		'凍土',
		'冥暗',
		'初火',
		'远雷',
		'绿风',
		'新阳',
		'苍月',
		'白金',
		'红炎',
	].reduce(function (a, b)
	{
		a.push(sublib._word_zh(`${b}の?月`, `${b}の月`));

		return a;
	}, [])),

	['问[道到]', '问到'],

	['[黑黒]', '黒'],

	sublib._word_zh('惡梦|噩梦', '噩梦'),
	sublib._word_zh('戰士', '戰士'),
	sublib._word_zh('競技場', '競技場'),
	sublib._word_zh(`女妓女`, '妓女'),
	sublib._word_zh(`闘技場|角斗场|角闘場`, '闘技場'),
	sublib._word_zh(`新闻报?纸|広報誌`, '新闻报纸'),

	sublib._word_zh(`(你|我)[两]`, '$1倆'),

	//sublib._word_zh(`壽絲`, '壽司'),

	[/^(「?[^“”\n]+)([“”])([^“”\n]+)\2/mg, '$1“$3”'],

	[/^”/mg, '“'],
	[/“$/mg, '”'],

	// 阿拉伯字元
	[/^([^\n]+[\u0600-\u06FF\u0750-\u077F][^\n]+)$/gm, '\n$1\n'],
	[/\n+([^\n]+[\u0600-\u06FF\u0750-\u077F])/g, '\n\n$1'],
	[/([\u0600-\u06FF\u0750-\u077F][^\n]+)\n+/g, '$1\n\n'],

	[
		/(月)的?(\s*[\d０-９一二三四五六七八九十][\d\s０-９一二三四五六七八九十]*)([日日号號])/g, function (...m)
	{
		m[2] = StrUtil.zh2num(m[2]).toString();

		m[2] = StrUtil.toFullNumber(m[2].replace(/\s/g, '')).trim();

		return m[1] + m[2] + '日';
	}
	],
	[
		/(第)(\s*[\d][\d\s]+)([话話])/g, function (...m)
	{
		m[2] = StrUtil.toFullNumber(m[2]).trim();

		return m[1] + m[2] + m[3];
	}
	],

	[
		/第([\d０-９]+)使徒/g, function (...m)
	{
		let n = StrUtil.num2zh(StrUtil.toHalfNumber(m[1]));

		return `第${n}使徒`;
	}
	],

	[
		/(等级|等級)([一二三四五])/g, function (...m)
	{
		return m[1] + StrUtil.zh2num(m[2]);
	}
	],

	[
		/([二三四五])(级|級)/g, function (...m)
	{
		return StrUtil.zh2num(m[1]) + m[2];
	}
	],

	[/level ?(\d)(?!\w)/ig, '等級$1'],

	[
		/(等级|等級|Rank)([ ]*[\d０-９][ ]*)/ig, function (...m)
	{
		m[2] = StrUtil.toFullNumber(m[2]).trim();

		return '等級' + m[2];
	}
	],

	[
		/([ ]*[\d][ ]*)(级|級)/g, function (...m)
	{
		m[1] = StrUtil.toFullNumber(m[1]).trim();

		return m[1] + m[2];
	}
	],

	['[壹一]', '一'],

	[/[·\?]([一二三四五六七八九十][式年型])/ig, '・$1'],

	[
		/(第)([\_\t\uFEFF\xA0　 \d０１２３４５６７８９]+)(话|頁|夜|章|集)/g, function ($0, $1, $2, $3)
	{
		$2 = StrUtil.toFullNumber($2, {
			only: {
				number: true,
				space: true,
			},
		});

		let m;
		if (m = $2.match(/^(\D+)?(.+)(\D+)?$/))
		{
			let s = ((m[1] || m[3]) ? ' ' : '');
			let $2 = m[2].replace(/[^\d]+/ig, '');

			if ($2)
			{
				$2 = s + $2 + s;
				return $1 + $2 + $3;
			}
		}

		return $0;
	}
	],

	[
		/\d+/g, function (...m)
	{
		return StrUtil.toFullNumber(m[0]);
	}
	],

	[/\n,\n/g, '\n\n'],

	...sublib.lazymarks[4],

	...sublib.lazymarks['ltrim'],

	[/([\u4E00-\u9FFF])\.(?!\.)/g, '$1。'],

	[/"([^\n"']*)'([^'"\n]+)'/gm, '"$1『$2』'],
	[/"([^\n"']*)'([^'"\n]+)'/gm, '"$1『$2』'],

	//[/^【([^【】\n]+)】/gm, '「$1」'],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	[/[【]/g, '「'],
	[/[】]/g, '」'],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n+#+\n+/gm, '\n\n\n'],

	[/\n+([\u0600-\u06FF\u0750-\u077F])/gm, '\n$1'],
	[/([\u0600-\u06FF\u0750-\u077F])\n+/gm, '$1\n'],

	...sublib.lazymarks[5],

	[[
		`([《（「『【])`,

		`(`,

		`(?:[^《（「『【』」》）】\\n]{1,12})`,

		`(?:`,
		[
			`（\\w）`,
			`\\w`,
		].join('|'),
		`)?`,

		`)`,

		`([』」》）】])`,

	].join(''), function (...m)
	{
		let _skip;

		switch (m[2])
		{
			case '影空間':
			case '混沌魔獸':
			case '逆干渉':
			case '聖愛魅惑':
			case '進化':
			case '肉体填補':
			case '灯火':
			case '炎の魔王':
			case '鋼の魔王':
			case '雷の魔王':
			case '凍結領域':
			case '逆十字':
			case '精神防護':
			case '生命吸収':
			case '神兵計画':
			case '白の秘跡':
			case '腕力強化':
			case '逆干渉':
			//case 'The・Greed':

				m[1] = '『';
				m[3] = '』';

				break;
				/*
			case '元素支配者':
			case '君主之翼':

				m[1] = '『';
				m[3] = '』';

				break;
				*/
			default:
				_skip = true;
				break;
		}

		if (_skip)
		{
			return m[0];
		}

		return m[1] + m[2] + m[3];
	}],

	[[
		`([《（「『【])?`,

		`(?:`,

		`(`,
		[
			'牙劍',
			'餓狼劍',
			'絶怨鉈',
			'暴食牙剣',
			'心神守護の白羽'
		].join('|'),
		`)`,

		`(?:`,
		[
			[
				`(?:[《（「『【])`,

				`([^《（「『【』」》）】\\n]{1,10})`,

				`(?:[』」》）】])`,
			].join(''),

		].join('|'),
		`)`,

		`)`,

		`([』」》）】])?`,

	].join(''), function (...m)
	{
		let _skip;

		switch (m[2])
		{
			case '牙劍':
			case '餓狼劍':
			case '暴食牙剣':
			case '絶怨鉈':
			case '心神守護の白羽':

				m[1] = '『';

				m[3] = `「${m[3]}」`;

				m[4] = '』';

				break;
			default:
				_skip = true;
				break;
		}

		if (_skip)
		{
			return m[0];
		}

		return m[1] + m[2] + m[3] + m[4];
	}],

];

// 需要人工確認的屏蔽字或錯字用語等等
export const words_maybe = [

	// 沒有成功貼上的咒文
	/([^\n]{1,2})?([\?\—]{3,})([^\n]{1,2})?/mg,

	'咒物',

];

import * as self from './黑之魔王';

export default self;
