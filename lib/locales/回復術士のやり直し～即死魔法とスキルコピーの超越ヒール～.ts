/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { lazymarks } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = '回復術士のやり直し～即死魔法とスキルコピーの超越ヒール～';

/**
 * 其他用途
 *
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words: IWords[] = sublib._word_zh_all([

	//ケアル
	['ケアルラ|克婭萝菈', '克婭萝菈'],
	['克魯亞加|克亞罗甲|克亞罗達|克亚罗加?|克罗亚加?|克亞魯加|ケアルガ|可罗亚加?|Kearuga', '克亞罗'],
	['凱路|克亚鲁|ケアル(?![ガラ])|凱魯|克亚尔', '克亞魯'],

	['安娜', '安娜'],

	['紅蓮|古兰|グレン|Guren', '紅蓮'],

	/**
	 *
	 */
	['セツナ|刹那|塞图娜|塞子娜|Setsuna|霎那', '刹那'],

	/**
	 * 勇者
	 *
	 */
	['布雷德|布萊德|布萊特', '布雷德'],
	['布雷托|弗雷特', '布雷托'],

	/**
	 * 吉欧拉尔王国
	 * 芙蕾雅・阿魯古兰迪・奇欧拉魯
	 */
	['普隆', '普隆'],

	['芙蕾娅|芙蕾雅|芙莱亚|芙雷亚|美善雅|弗雷亞|弗拉雷|芙蕾亞|フレア(?!ア)|弗雷尔', '芙蕾雅'],
	['芙莉雅|美莉雅|芙莉亞|フレイア|芙利亞|芙蕾依雅', '芙莉雅'],

	['アールグランデ|阿魯古兰迪', '阿魯古兰迪'],
	['クラタリッサ|庫拉塔利萨', '庫拉塔利萨'],
	['吉欧拉尔|奇欧拉魯|吉奧拉尔|ジオラル|吉奧拉魯|迪奧拉尔', '吉歐拉爾'],

	['莱纳拉之间|莱娜拉之间', '莱娜拉之间'],

	['諾伦|諾恩', '諾伦'],
	['公主諾伦|諾伦公主', '諾伦姫'],

	['艾伦|艾蓮|愛蓮|埃伦', '艾蓮'],

	['オーパーツ|欧帕茲', '欧帕茲'],

	/**
	 * 庫因塔（クインタ）
	 */
	['拉納利塔|拉納利特|ラナリッタ', '拉納利塔'],
	['庫因塔|クインタ', '庫因塔'],

	//['圆形剧场|圆形竞技场|圆形競技場', '圆形競技場'],
	['竞技场|競技場|斗獸场|斗技场', '競技場'],

	/**
	 * 骑士
	 */
	['馬尔古尔特', '馬尔古尔特'],
	['雷納多|雷納德', '雷納德'],
	['巴姆|巴克', '巴克'],
	['达雷多亞', '达雷多亞'],

	[`特里斯托(?:，)奧魯岡`, '特里斯托・奧魯岡'],

	/**
	 * 剣聖暮羽・克莱因雷特
	 * 库蕾赫・克莱因雷特
	 * 暮羽・暗红
	 *
	 * クレハ・クライレット
	 *
	 * 庫魯塔（クルタ）这个假名
	 *
	 * 索基是剣聖的始祖 ソージ
	 *
	 * 奧克勒路流派劍術
	 */
	['克雷洛特|克莱因雷特|克莱茵雷特', '克莱因雷特'],
	['暮羽|庫蕾娅|库蕾赫|庫蕾亞|庫蕾哈|吴羽化学工业', '暮羽'],
	['暮羽[\\. ]{1,2}克莱因雷特', '暮羽・克莱因雷特'],

	/**
	 * 布拉尼卡
	 * 布兰塔帝国
	 *
	 * 犹斯拉（ユースラ）
	 * 斯拉姆（スラム）街道
	 *
	 * 依芙・莉絲（イヴ・リース）（翻译君：准确来說是依布・莉絲，但觉得没有依芙・莉絲好听。）
	 *
	 */
	['布?拉尼卡|ブラニッカ|布兰尼卡', '布拉尼卡'],
	['夏娃|依芙', '依芙'],
	['利斯|莉絲', '莉絲'],

	[`依芙${sp}(?:莉絲|瑞斯)`, '依芙・莉絲'],

	[`米魯吉爺|米齐魯爺?|米魯吉爺?|米尔爺?|Miru|Miko`, '米魯爺'],

	[`卡拉德里乌斯|卡拉多乌斯|卡拉德里斯|凱兰崔斯`, '卡拉德里乌斯'],

	/**
	 *
	 */
	[`加洛尔|キャロル|加罗尔`, '加洛尔'],

	/**
	 * 武器
	 */
	['拉庫納洛庫|諸神黄昏', '諸神黄昏'],
	['塔司拉莫|塔斯兰', '塔司拉莫'],
	['瓦那路甘多|破灭魔狼', '破灭魔狼'],
	['神装武具|神造宝具|神装舞具|神装宝具|神作宝具', '神装宝具'],

	['艾力庫萨|艾庫里萨', '艾力庫萨'],

	['乔尔乔斯|Georgius|ゲオルギウス', '乔尔乔斯'],

	['鑑定紙|鉴别紙', '鑑定紙'],
	['万能药|万灵药', '万能药'],

	/**
	 *
	 */

	['術', '術'],
	['炮', '砲'],
	['愈|癒', '癒'],

	...sublib.lazymarks['class'],

	['武術家|武闘家', '武闘家'],
	['魔(術|法)師', '魔術師'],
	['(錬|炼)金術(士|师)', '錬金術士'],
	['(錬|炼)金', '錬金'],

	['近衛騎士隊長|近长|禁卫骑士队长', '近衛騎士隊長'],
	['近衛騎士|禁卫骑士', '近衛騎士'],



	['魔王候選人|魔王候補', '魔王候補'],

	/**
	 *
	 */

	['水狼|氷狼|冰狼', '冰狼'],
	['火狐', '火狐'],
	['月猫', '月猫'],
	['夜犬', '夜犬'],
	['莱布多鲁|走龙|迅猛龙|盜龍|拉普托|拉普多|拉布多魯|Raptor', '盜龍'],
	['钢铁母牛|铁头母牛', '钢铁母牛'],

	['卡拉里斯|卡洛里乌斯', '卡洛里乌斯'],

	/**
	 * 第五阶魔法
	 * 第五階位
	 * 第六位阶魔法
	 */

	['第([一-九])(?:位阶|階位|阶級?|等?級)(的|魔法)?', '第$1階位$2'],
	['攻撃', '攻撃'],
	['防御', '防御'],
	['体術', '体術'],

	['魔力值|法力值', '魔力值'],
	['上帝', '神'],

	['Sama', '大人'],

	['錬金魔(術|法)', '錬金魔術'],

	['薬物耐性', '薬物耐性'],
	['薬物耐受性', '薬物耐受性'],
	['強化術式', '強化術式'],
	['改変', '改変'],
	['回復|回复', '回復'],
	['改悪', '改悪'],
	['模倣|模仿', '模仿'],
	['翡翠眼', '翡翠眼'],
	['略奪|掠夺', '略奪'],
	['数据', '数据'],
	['血鮮花', '血鮮花'],

	['見切り|断闪', '見切'],
	['热源索敌|熱源索敵', '熱源索敵'],
	['熱源探査', '熱源探査'],
	['熱氷槍風弾', '冰槍風弾'],
	['恒星', '恒星'],

	['Ziwei|自慰', '自慰'],

	['亜|亞', '亞'],

	['復仇', '復仇'],
	['覺醒', '覺醒'],
	['復合|複合', '複合'],
	['属性', '属性'],
	['剑筋', '劍技'],
	['白己|自己', '自己'],

	['料理|饭菜', '料理'],

	//['機械', '機械'],

	['観客席|观众席', '観衆席'],
	['妹妹公主|妹姫', '妹姫'],

	['公主|王女', '王女'],

	// 出現不只一次的錯字
	['郭嘉|国家', '国家'],

	['第一個世界|一周目的世界|第一世界', '一周目的世界'],

	['恢复治疗|回復', '回復'],

	['火焰漩涡|炎嵐', '炎嵐'],

	['星兔部落|星兔族', '星兔族'],

	['治愈勇者|治癒勇者|【(治癒|疗癒)】の勇者', '【癒】之勇者'],

	['【(.+)】の(?:勇者|英雄|勇士)', '【$1】之勇者'],
	['(剑|砲|術|癒)(?:の(?:勇者|英雄|勇士))', '【$1】之勇者'],

	['鷹眼', '鷹眼'],

	['圌', ''],
	['淦', '幹'],

	[/(\d+)/g, function (...m)
	{
		return StrUtil.toFullNumber(m[1]);
	}],

	[/^[ \t　]+/gm, ''],

	[/(？)[　 ]([\u4E00-\u9FFF])/gm, '$1$2'],

	[/\n+(～[^\n]+～)\n+/gm, '\n\n\n$1\n\n'],

	[/^【([^\n「」【】]+)】$/gm, '「$1」'],

	[/^“([^“”]+)“(?= *[(（])/gm, '「$1」'],

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

	[/([《（「『【])([^《（「『【』」》）】\n]{1,10}(?:（\w）|\w)?)([』」》）】])/g, function (...m)
	{
		let _skip;

		switch (m[2])
		{
			case '回復（Heal）':
			case '回復Heal':
				m[2] = '回復（Heal）';
				break;
			case '模仿（Heal）':
			case '模仿Heal':
			case '模仿治疗':
				m[2] = '模仿（Heal）';
				break;
			case '改良（Heal）':
			case '改良Heal':
				m[2] = '改良（Heal）';
				break;
			case '改悪（Heal）':
			case '改悪Heal':
				m[2] = '改悪（Heal）';
				break;
			case '模仿':
			case '改悪':
			case '回復':
			case '癒':
			case '砲':
			case '術':
			case '勇者':
			case '翡翠眼':
			case '略奪':
			case '劍':
			case '血鮮花':
			case '改良':
			case '鷹眼':
				break;
			case '数据':
				_skip = true;
				break;
			default:
				_skip = true;
		}

		if (_skip)
		{
			return m[1] + m[2] + m[3];
		}

		return `【${m[2]}】`;
	}],



]);

//console.log(words);

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	'打到',

] as vMaybe;

/**
 * 分析取代完成後執行的代碼
 *
 * @param {string} text
 * @returns {string}
 */
export function words_callback(text: string): string
{
	return text;
}

export default exports;
