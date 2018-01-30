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

	['菲欧娜|菲奥娜', '菲奥娜'],
	[`菲奥娜${sp}索蕾优`, '菲奥娜・索蕾优'],

	['ブ儿ーム|ブルーム', 'ブルーム'],
	[/(Ains|艾因茲|アインズ)[・\?](B[rl]oom|布魯姆|ブルーム|ブ儿ーム)/ig, '艾因茲・布魯姆'],
	[/custom ・fireball|改造火球杖/g, '改造・火球杖'],

	/**
	 * 鍛造
	 */
	['利金|雷金|雷因', '雷金'],
	//['斯特拉托斯|斯特斯汀|斯特兰特斯', '斯特拉托斯'],
	sublib._word_zh('斯特拉托斯|斯特斯汀|斯特兰特斯', '斯特拉托斯'),

	/**
	 *
	 * 米娅・艾璐罗德
	 *
	 * 尼禄
	 * 妮露
	 */
	['内尔(好象|公主)', '妮露$1'],
	[/萘尔|妮露/g, '妮露'],

	['尼[禄祿]|尼洛', '尼禄'],

	['尤[利里][烏乌]斯|尤里乌斯', '尤里乌斯'],
	['艾[璐尔]罗德|埃尔罗德|埃尔路斯|艾尔洛特|艾尔罗德', '艾璐罗德'],

	[`${sp}尤里[烏乌]斯${sp}艾璐罗德`, '$1・$2・$3'],
	[`${sp}艾璐罗德`, '$1・$2'],

	//[`${sp}艾璐罗德`, '$1・$2'],

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
	['威[爾尔][納纳]德|威[爾尔]哈鲁特|瓦[尔爾][納纳]德|瓦尔哈德', '威尔哈鲁特'],
	['威[爾尔]|瓦[尔爾]', '威尔'],

	['(威[爾尔]|瓦[尔爾])([納纳]德|哈鲁特|哈德)', '威尔哈鲁特'],
	['(雷欧|雷恩)([納纳]德|哈鲁特|哈德)', '雷恩哈鲁特'],

	['(艾森|雷恩|威尔)([納纳]德|哈鲁特|哈德)', '$1哈鲁特'],

	['夏[露洛]特?', '夏洛特'],

	['特里斯坦|托利斯坦', '托利斯坦'],
	//['斯巴德|斯巴[達]|斯特达|斯伯达', '斯巴达'],
	sublib._word_zh('斯巴德|斯巴達|斯特达|斯伯达|斯巴达', '斯巴达'),

	[`${sp}托利斯坦${sp}斯巴达`, '$1・$2・$3'],

	//['赛利亚|瑟莉雅|西利亚|菲莉亞|西莉亞', '赛利亚'],
	sublib._word_zh('赛利亚|瑟莉雅|西利亚|菲莉亞|西莉亞', '赛莉亞'),

	[`[蘭兰]布[爾尔]`, '兰布尔'],
	[`${sp}[蘭兰]布[爾尔]`, '$1・$2'],

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
	sublib._word_zh('艾梅莉亞|艾米莉亞|艾梅利亚', '艾梅莉亞'),

	//[`${sp}弗里德里希${sp}巴尔缇艾尔`, '$1・$2・$3'],
	sublib._word_zh(`${sp}弗里德里希${sp}巴尔缇艾尔`, '$1・弗里德里希・巴尔緹艾尔'),

	/**
	 * 王立斯巴達學院的學院長索菲亞・希利烏斯・帕西法爾
	 * 索菲亞・西利烏斯・巴西費魯理事長
	 * 索菲亚·天狼星·帕西法璐
	 */
	sublib._word_zh('索菲亞', '索菲亞'),
	sublib._word_zh('希利烏斯|西利[烏乌]斯', '希利烏斯'),
	sublib._word_zh('帕西法爾|帕西法璐|巴西費魯|帕西菲爾', '帕西菲爾'),
	//[`${sp}西利[烏乌]斯${sp}巴西費魯`, '$1・$2・$3'],
	sublib._word_zh(`${sp}(?:希利烏斯|天狼星)${sp}帕西菲爾`, '$1・希利烏斯・帕西菲爾'),
	sublib._word_zh(`・(?:希利烏斯|天狼星)・帕西菲爾`, '・希利烏斯・帕西菲爾'),

	sublib._word_zh(`(?:(?:皇家|王(?:立|丽))斯巴达|斯巴达(?:皇家|王(?:立|丽)))神?学(?:院|校|园)`, '王立斯巴达神學院'),
	sublib._word_zh(`神学(?:院|校|园)`, '神學院'),

	/**
	 * @todo 使徒
	 *
	 * 蓼蓝（第8使徒） 第八使徒愛
	 * 第十二使徒玛丽亚伯
	 * 第三使徒米迦勒
	 * 第十一使徒米莎
	 */
	['米萨|米莎', '米莎'],

	[/酋达斯|犹达斯|猶達斯/g, '猶達斯'],
	[/沙利叶|沙利葉/g, '沙利葉'],

	/**
	 *
	 */
	sublib._word_zh('嫉妒吉尔|懒惰吉尔|怠惰吉尔', '懒惰吉尔'),
	sublib._word_zh('贪婪格尔|贪婪戈尔', '贪婪戈尔'),

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

	['鲁恩|卢恩', '卢恩'],

	/**
	 * @todo 海德拉
	 *
	 * 前面的是 萨特，这的是赛义德，然后 海德拉 是 九头蛇
	 * 赛义德·玛雅·九头蛇
	 *
	 * 萨菲
	 */
	['赛义德|萨特', '萨特'],
	['海德拉|九头蛇', '海德拉'],

	/**
	 *
	 */

	[/猫の\*+尾亭|猫尾亭/g, '猫の尻尾亭',],
	//['伊斯基斯|伊斯基亚|依斯基斯', '伊斯基亚'],
	sublib._word_zh('伊斯基斯|伊斯基亚|依斯基斯|伊斯基亞|伊斯奇亞', '伊斯基亞'),

	['加拉哈多|加拉巴德|加拉哈德', '加拉哈德'],

	['跨夏节|夏日祭|夏越祭', '夏越祭'],
	['[诅詛]?咒物品?[剑角角][斗鬥]大[会會]', '詛咒物品角鬥大會'],

	[/翼之君主/g, '君主之翼'],

	['龙杀手', '屠龍者'],
	['DragonKiller', 'Dragon Killer'],
	[/(?:漆黑|黑色)(?:夢魘|噩梦|惡梦)的狂戰士/g, '漆黑夢魘的狂战士'],

	[/Element\s*master|Elemental\s*Master/ig, 'Elemental Master'],
	[/元素大师|元素掌控者|元素之主|元素支配者|元素大師|Elemental Master/g, '元素支配者'],

	[/Haunted\s*grave/ig, 'Haunted Grave'],

	/**
	 *
	 */

	['([・，』」。、]) ', '$1'],
	[/([\u4E00-\u9FFF])[ ]*([・\?])[ ]*([\u4E00-\u9FFF])/g, '$1$2$3'],



	[`${sp}威尔西${sp}莫德雷德`, '$1・$2・$3'],
	[/[华華]因/g, '华因'],

	[`${sp}艾斯特${sp}加尔布雷斯`, '$1・$2・$3'],
	[`${sp}玛雅${sp}海德拉`, '$1・$2・$3'],

	[`${sp}艾斯特${sp}加尔布雷斯`, '$1・$2・$3'],

	[`アインズ${sp}ブルーム`, 'アインズ・ブルーム'],

	[/(白金|苍月|新阳|绿风|清水|远雷|初火)(?:[之の的])?(月)/g, '$1の$2'],
	[/(日珥|红炎)(?:[之の的])?(月)/g, '红炎の$2'],

	['惡梦', '噩梦'],

	['来福枪|来复枪', '来福枪'],

	['懒惰|怠惰', '怠惰'],

	['问[道到]', '问到'],

	['[黑黒]', '黒'],
	['[壹一]', '一'],

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

	[/第([\d０-９]+)使徒/g, function (...m)
	{
		let n = StrUtil.num2zh(StrUtil.toHalfNumber(m[1]));

		return `第${n}使徒`;
	}],

	[
		/(等级|等級)([一二三四五])/g, function (...m)
	{
		return m[1] + StrUtil.zh2num(m[2]);
	}
	],

	[
		/([一二三四五])(级|級)/g, function (...m)
	{
		return StrUtil.zh2num(m[1]) + m[2];
	}
	],

	[/level ?(\d)(?!\w)/ig, '等級$1'],

	[
		/(等级|等級)(\s*[\d][ ]*)/g, function (...m)
	{
		m[2] = StrUtil.toFullNumber(m[2]).trim();

		return m[1] + m[2];
	}
	],

	[
		/([ ]*[\d][ ]*)(级|級)/g, function (...m)
	{
		m[1] = StrUtil.toFullNumber(m[1]).trim();

		return m[1] + m[2];
	}
	],

	[/[·\?]([一二三四五六七八九十][式年型])/ig, '・$1'],

	[/(第)([\_\t\uFEFF\xA0　 \d０１２３４５６７８９]+)(话|頁|夜|章|集)/g, function ($0, $1, $2, $3)
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
	}],

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

	['[『「]咒怨铊[「『]腹裂[』」][』」]', '「咒怨铊『腹裂』」'],

];

// 需要人工確認的屏蔽字或錯字用語等等
export const words_maybe = [

	// 沒有成功貼上的咒文
	/([^\n]{1,2})?([\?\—]{3,})([^\n]{1,2})?/mg,

	'咒物',

];

import * as self from './黑之魔王';

export default self;
