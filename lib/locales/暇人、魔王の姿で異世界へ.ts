/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字
 */
export const lang = '';

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

	['カイヴォン|凱馮', '凱馮'],

	['露耶|リュエ', '露耶'],
	['賽彌耶魯|セミエール', '賽彌耶魯'],

	['蕾絲|レイス', '蕾絲'],
	['雷斯特|レスト', '雷斯特'],

	['庫洛姆威魯|クロムウェル', '庫洛姆威魯'],
	['艾索德|アイソード', '艾索德'],
	['理希德|リヒト', '理希德'],

	['蓮', '蓮'],
	['レン', 'レン'],

	['吉田|ヨシダ', '吉田'],
	['イグゾウ|伊久造', '伊久造'],

	['イル|伊魯|依琉', '依琉'],

	['伊久造・吉田', '伊久造・吉田'],
	['吉田・伊久造', '吉田・伊久造'],

	['エンドレシア|恩德雷希亞', '恩德雷希亞'],

	['ウィング雷斯特|ウィングレスト|溫古・?雷斯特|溫古斯特', '溫古雷斯特'],

	['恩迪亞|エンディア', '恩迪亞'],
	['普雷希德|プレシード', '普雷希德'],

	['萊拉', '萊拉'],
	['布萊特', '布萊特'],

	['露庫斯貝露|イクスペル', '露庫斯貝露'],
	['斯貝露|スペル', '斯貝露'],

	['歐因克|オインク', '歐因克'],

	/**
	 *
	 */
	['精靈', '精靈'],
	['回復魔法', '回復魔法'],

	/**
	 *
	 */
	...sublib.lazymarks['class'],

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

] as IWords[]);

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
