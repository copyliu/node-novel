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
	['凱路|克亚鲁|ケアル', '克亞魯'],
	['克亚罗加?|克罗亚加?|克亞魯加', '克亞罗'],
	['安娜', '安娜'],

	/**
	 *
	 */
	['セツナ|刹那', '刹那'],

	/**
	 * 勇者
	 *
	 */
	['布雷德', '布雷德'],
	['布雷托', '布雷托'],

	/**
	 * 吉欧拉尔王国
	 * 芙蕾雅・阿魯古兰迪・奇欧拉魯
	 */
	['普隆', '普隆'],

	['芙蕾娅|芙蕾雅', '芙蕾雅'],
	['芙莉雅', '芙莉雅'],

	['吉欧拉尔|奇欧拉魯|吉奧拉尔', '吉欧拉尔'],

	['莱纳拉之间|莱娜拉之间', '莱娜拉之间'],

	/**
	 * 庫因塔（クインタ）
	 */
	['拉納利塔|拉納利特|ラナリッタ', '拉納利塔'],
	['庫因塔|クインタ', '庫因塔'],

	/**
	 * 骑士
	 */
	['馬尔古尔特', '馬尔古尔特'],

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
	['暮羽|庫蕾娅|库蕾赫|庫蕾亞|庫蕾哈', '暮羽'],
	['暮羽[\. ]{1,2}克莱因雷特', '暮羽・克莱因雷特'],

	/**
	 * 武器
	 */
	['拉庫納洛庫', '拉庫納洛庫'],
	['塔司拉莫', '塔司拉莫'],
	['瓦那路甘多', '瓦那路甘多'],
	['神装武具', '神装武具'],

	['艾力庫萨', '艾力庫萨'],

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

	['近衛騎士隊長|近长', '近衛騎士隊長'],

	/**
	 *
	 */
	['水狼|氷狼|冰狼', '冰狼'],
	['莱布多鲁|走龙', '走龙'],

	/**
	 * 第五阶魔法
	 * 第五階位
	 * 第六位阶魔法
	 */

	['第([一-九])(?:位阶|階位|阶級?|等?級)(的|魔法)?', '第$1階位$2'],
	['攻撃', '攻撃'],
	['防御', '防御'],
	['体術', '体術'],

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

	['亜|亞', '亞'],

	['復仇', '復仇'],
	['覺醒', '覺醒'],
	['復合|複合', '複合'],
	['属性', '属性'],
	['剑筋', '劍技'],
	//['機械', '機械'],

	[/(\d+)/g, function (...m)
	{
		return StrUtil.toFullNumber(m[1]);
	}],

	[/^[ \t　]+/gm, ''],

	[/(？)[　 ]([\u4E00-\u9FFF])/gm, '$1$2'],

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
