/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { lazymarks } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = 'シャチになりましたオルカナティブ';

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

	['([\u4E00-\u9FFF])([Oo]+)(?=[\u4E00-\u9FFF])', function (...m)
	{
		return m[1] + '◯'.repeat(m[2].length);
	}],

	[/(\d+)/g, function (...m)
	{
		return StrUtil.toFullNumber(m[1]);
	}],

	//[/^[ \t　]+/gm, ''],
	//[/^[\?]/gm, ''],


	[/(？)[　 ]([\u4E00-\u9FFF])/gm, '$1$2'],

	...lazymarks[4],

	...lazymarks[0],
	...lazymarks[1],
	...lazymarks[2],
	...lazymarks[3],
	...lazymarks[5],

]);

console.log(words);

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

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
