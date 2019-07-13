/**
 * Created by user on 2017/12/21/021.
 */

import lazymarks from '@node-novel/layout-pattern/lib/core/pattern/index';
import { _word_en, _word_en3, _word_jp1, _word_zh_all } from '@node-novel/layout-pattern/lib/core/word';
import { IWords, vMaybe, IWordsAll } from '@node-novel/layout-pattern/lib/core/word';
import { sp, sp2 } from '@node-novel/layout-pattern/lib/core/const';
import { IPatternRule } from '@node-novel/layout-pattern/lib/core/types';
import * as StrUtil from 'str-util';

/**
 * 改成小說名字 (可留白 則自動設定為檔案名稱)
 */
export const lang = '';

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words_source: IWords[] = [

	_word_jp1('リオン|里昂|利昂', '里昂'),
	_word_jp1('バルトファルト|巴爾特法特|巴魯德菲魯特|巴爾特費爾德|巴爾特法爾特|波羅特弗爾德|波特法爾特|巴爾的法特|巴爾特福特|巴特菲爾德', '巴爾特費爾德'),

	_word_jp1('バルカス|巴二卡斯|巴爾加斯', '巴爾卡斯'),
	_word_jp1('リュース', '琉斯'),

	_word_jp1('ルトアート', '盧特爾特'),
	_word_jp1('メルセ|梅爾潔|梅爾切', '梅爾潔'),

	_word_jp1('ニックス', '尼克斯'),

	_word_jp1('コリン', '科林'),

	_word_jp1('ゾラ|佐拉', '索拉'),

	_word_jp1('ジェナ|珍妮', '珍娜'),

	_word_jp1('フィンリー', '芬莉'),

	/**
	 *
	 */
	_word_jp1('盧克希翁|魯庫爾希翁|拉克森|光子號|ルクシオン|路克西翁|路庫西翁(?:恩|路庫西翁)?|盧克西昂|勒克西翁|盧克西恩|盧克西翁|路克西翁|勒克錫安|勒克西恩|路西翁|魯庫爾西斯|魯庫西翁|利克西翁|盧克錫翁|路克席翁|盧克因恩|魯庫爾因恩|魯克因恩|盧克希恩', '路克西翁'),
	_word_en3('Luxon', '路克西翁'),

	_word_jp1('エリシオン', '伊莉西恩'),

	_word_jp1('ルク|路克|路庫', '路克'),

	_word_jp1('阿洛鋼次?汁?|アロガンツ|傲慢號|阿洛甘茨', '阿洛鋼次'),
	_word_en3('Arroganz', '阿洛鋼次'),

	_word_jp1('パルトナー|帕爾特納|帕爾納特?', '帕爾特納'),

	_word_jp1('シュヴェールト|施韋納特|施韋洛特|修貝魯特|休伯特', '施韋洛特'),

	_word_jp1('ヴァイス|威斯', '瓦伊斯'),

	_word_jp1('クレアーレ|古蕾亞蕾(?:利|克雷|亞蕾)?|克蕾亞蕾(?:克雷)?|古蕾阿蕾', '克萊雅蕾'),
	_word_jp1('アーレ|阿蕾|亞雷', '亞蕾'),

	_word_jp1('アインホルン|艾茵荷露?|阿茵荷露', '艾茵荷'),

	_word_jp1('リコルヌ|里克爾納|利科爾恩|利寇露努', '利科爾恩'),

	_word_jp1('ファクト', '弗古杜'),


	/**
	 *
	 */
	_word_jp1('ダニエル|達尼艾魯|達尼艾特|丹尼爾|達尼艾爾', '達尼艾爾'),
	_word_jp1('ダーランド', '達朗德'),

	_word_jp1('レイモンド|雷蒙特', '雷蒙德'),
	_word_jp1('アーキン', '弗爾金'),

	_word_jp1('ルクル|魯可爾|魯庫爾|盧克(爾|魯)?|盧庫爾', '魯庫爾'),

	_word_jp1('ジルク|ジルクア|吉魯庫|吉爾克|吉爾庫克?|吉魯克', '吉爾克'),
	_word_jp1('マーモリア|蒙莫里阿|馬莫里亞|馬莫利亞', '馬莫里亞'),

	_word_jp1('アンジェリカ|安杰麗卡|安吉麗卡|安潔麗卡|安潔莉卡|安潔利卡|安吉莉卡|安琪莉卡|安杰里卡', '安潔莉卡'),
	_word_jp1('アンジェ|安吉|安濟', '安潔'),

	_word_jp1('レッドグレイブ|雷多格雷夫|雷德古勒普|雷特古睿夫|里德格雷夫', '雷德古勒普'),

	_word_jp1('ヴィンス', '文斯'),
	_word_jp1('ギルバート', '吉爾伯特'),

	_word_jp1('マリエ|瑪麗埃|瑪莉埃|瑪麗艾|瑪莉艾|瑪麗唉|瑪莉唉|瑪莉耶|馬裡埃|馬裡艾|馬利艾|瑪麗耶|瑪利亞|瑪麗葉', '瑪麗艾'),
	_word_jp1('ラーファン|拉凡|拉芳', '拉芳'),

	[`瑪麗艾${sp}馮${sp}(?:拉芳|拉迷|拉方)`, '瑪麗艾・馮・拉芳'],

	_word_jp1('リビア|莉維亞|利維亞|利比亞|麗維亞|利維維亞', '莉維亞'),
	_word_jp1('オリヴィア|奧莉維亞|奧利維亞|奧麗維亞|奧利維爾', '奧莉維亞'),

	_word_jp1('クリス|庫里斯', '克里斯'),
	_word_jp1('アークライト', '阿克萊特'),

	_word_jp1('グレッグ|古雷庫|格雷古|古雷格|格萊格', '古雷格'),
	_word_jp1('セバーグ|賽伯格|塞伯格', '賽伯格'),

	_word_jp1('ブラッド|布拉德', '布萊德'),
	_word_jp1('フィールド|菲爾德|菲魯特', '菲爾德'),



	_word_jp1('ミリー', '米莉'),
	_word_jp1('ジェシカ|杰西卡|潔西卡', '潔西卡'),

	_word_jp1('オマケ', '奧馬凱'),

	_word_jp1('クラリス|克拉里斯|庫拉麗絲|克拉麗斯|庫拉麗斯|克拉麗絲', '庫拉麗絲'),
	_word_jp1('アトリー|亞特利|阿塔利', '阿塔利'),

	_word_jp1('バーナード', '伯納德'),

	[`伯納德${sp}菲阿塔利`, '伯納德・費亞・阿塔利'],

	_word_jp1('カーラ', '卡拉'),
	_word_jp1('ウェイン', '韋恩'),
	_word_jp1('コンラッド', '康拉德'),

	/**
	 *
	 */
	_word_jp1('カイル|凱爾|凱伊路|卡伊魯|卡爾', '凱爾'),
	_word_jp1('ミオル|米奧路|米爾盧', '米爾盧'),
	_word_jp1('ユメリア|尤米利亞|尤米麗亞|尤米莉亞|尤梅利亞', '尤米莉亞'),

	/**
	 *
	 */
	_word_jp1('アーロン|阿倫', '亞倫'),

	_word_jp1('オスカル', '奧斯卡'),
	_word_jp1('ホーガン', '霍根'),

	_word_jp1('エリヤ|伊利亞', '以利亞'),
	_word_jp1('フレーザー', '弗雷澤'),

	_word_jp1('ドミニク', '多明尼克'),
	_word_jp1('モットレイ', '蒙特利'),


	_word_jp1('ドニエル', '多尼爾'),

	/**
	 *
	 *
	 */
	_word_jp1('ユリウス|尤利烏斯|朱麗葉斯|尤里斯', '尤里烏斯'),
	_word_jp1('ホルファート|霍伯法特|霍伯特', '霍爾法特'),

	_word_jp1('ミレーヌ|米蓮(?:艾露)?|米倫|米蓮|米蘭|米蕾(?:艾露)?', '米蓮'),

	_word_jp1('ローランド|羅蘭(特|德)?', '羅蘭特'),

	_word_jp1('エリカ|埃莉卡|艾麗卡|艾利卡', '艾莉卡'),

	_word_jp1('アウトロ|杰克', '傑克'),

	/**
	 *
	 */
	_word_jp1('ヘルトルーデ|希爾忒露蒂|希?赫?爾忒露蒂|貝爾托露蒂|赫爾托魯蒂|赫爾特魯蒂|赫爾特萊德|赫魯德|赫爾託魯蒂', '赫爾忒露蒂'),
	_word_jp1('セラ', '塞拉'),
	_word_jp1('ファンオース|凡奧斯|範奧斯', '范奧斯'),

	_word_jp1('ヘルトラウダ|赫爾忒菈烏達|赫爾忒蘭妲', '赫爾忒菈烏達'),
	_word_jp1('ラウダ|拉烏達', '菈烏達'),

	_word_jp1('ラウ|(?<!爾)忒蘭妲', '蘭妲'),

	_word_jp1('ゲラット', '格拉特'),
	_word_en3('Gelatot', '格拉特'),

	_word_jp1('バンデル|班德爾|賓德爾', '班德爾'),
	_word_jp1('ヒム', '希姆'),
	_word_jp1('ゼンデン|潘登|薩登', '薩登'),

	/**
	 *
	 */
	_word_jp1('アルゼル|阿魯瑟魯|阿塞爾|亞瑟', '阿塞爾'),

	_word_jp1('ジル', '吉爾'),

	_word_jp1('クレマン|格萊曼|克萊曼|格雷曼', '格雷曼'),

	_word_jp1('エミール', '艾米爾'),
	_word_jp1('ラズ|拉斯', '拉茲'),
	_word_jp1('プレヴァン|普列凡', '普列方'),

	_word_jp1('レリア|萊?蕾利亞|蕾莉亞', '蕾莉亞'),
	_word_jp1('ベルトレ|貝托萊|貝托勒|貝託萊', '貝托勒'),
	_word_en3('Bertolle', '貝托勒'),

	_word_jp1('ピエール', '皮埃爾'),
	_word_jp1('イオ', '伊奧'),
	_word_jp1('フェーヴェル', '費維爾'),

	_word_jp1('ランベール', '拉貝爾'),

	_word_jp1('ノエル|諾艾爾|諾艾露', '諾艾兒'),

	_word_jp1('ナルシス', '那魯西斯'),
	_word_jp1('きゅん', '嬌'),
	_word_jp1('グランジュ', '格朗朱'),

	_word_jp1('カルセ', '卡西'),
	_word_jp1('グランジェ', '格蘭特'),

	_word_jp1('アルベルク', '阿爾貝魯克'),
	_word_jp1('サラ', '薩拉'),
	_word_jp1('ラウルト', '勞魯特'),

	_word_jp1('フェルナン', '斐迪南'),
	_word_jp1('トアラ|託亞拉', '托亞拉'),
	_word_jp1('ドレイユ', '德瑞尤'),


	_word_jp1('エリク|艾里克|埃里克', '埃里克'),
	_word_jp1('レタ', '雷塔'),
	_word_jp1('バリエル|巴利耶爾|巴里埃爾', '巴里埃爾'),

	_word_jp1('ベランジュ', '伯蘭提'),

	_word_jp1('セルジュ|賽爾吉斯?', '賽爾吉'),

	_word_jp1('レスピナス|雷斯必納斯|列維納斯', '列維納斯'),
	[`(?:レスピナス|列維納斯)の洞(?:窟|穴)`, '列維納斯的洞窟'],

	_word_jp1('ユーグ', '約克'),
	_word_jp1('トアラ|託亞拉', '托亞拉'),
	_word_jp1('ドルイユ', '德律攸'),


	_word_jp1('ジャン', '約翰'),

	/**
	 *
	 */
	_word_jp1('イデアル', '伊蒂亞爾'),
	_word_jp1('ギーア', '基亞'),

	_word_jp1('ユメ', '夢兒'),

	/**
	 *
	 */
	_word_jp1('フィン', '芬恩'),
	_word_jp1('ルタ', '路德'),
	_word_jp1('ヘリング', '貝林古'),

	_word_jp1('ミア|米亞|美婭', '米婭'),

	_word_jp1('ブレイブ|佈雷夫', '布雷夫'),
	_word_en3('Brave', '布雷夫'),

	_word_jp1('ブー君', '布君'),

	_word_jp1('バルトルト', '巴魯托路德'),

	_word_jp1('アルカディア', '阿卡迪亞'),

	_word_jp1('ミリアリス', '米妮婭麗絲'),
	_word_jp1('ルクス', '勒克斯'),
	_word_jp1('エルツベルガ', '艾洛爾貝格'),


	//['黒助', '黒助'],

	/**
	 *
	 */


	/**
	 *
	 */

	_word_jp1('ラーシェル|拉謝爾', '拉歇爾'),



	/**
	 *
	 */

	_word_jp1('パワードスーツ|力量套裝|動力裝甲|強力套裝', '動力裝甲'),
	_word_en3('Power Suit', ''),

	_word_jp1('フォウ', '馮'),
	[`${sp}(?:佛|沃夫|馮|沃特)${sp}`, '・馮・'],

	_word_jp1('フィア', '費亞'),
	[`${sp}(?:菲亞|菲兒|費亞)${sp}`, '・費亞・'],

	_word_jp1('ラファ', '拉法'),
	[`${sp}(?:拉法|拉菲)${sp}`, '・拉法・'],

	_word_jp1('ディア', '迪亞'),
	_word_jp1('ディル', '迪爾'),

	['特待生', '特待生'],

	_word_jp1('ロストアイテム|失落的?道具|遺失物品', '失落道具'),
	_word_en3('Lost Item', '失落道具'),

	_word_jp1('エアバイク|空中摩托車|空氣摩托', '空中摩托'),

	_word_jp1('さん', '桑'),

	_word_jp1('アダマティアス|亞達曼提斯|亞當斯', '亞達曼提斯'),

	_word_en3('Adamantis', '亞達曼提斯'),



	_word_jp1('フリーエネルギ', '無限能源'),

	[`專屬傭(人|工)|專屬使用人`, '專屬傭人']

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = _word_zh_all([

	...words_source,

	['淑女(之|的)森林?', '淑女之森'],

	['第2作', '第二部'],

	['麥當娜', '瑪丹娜'],

	_word_en3('Last? ?boss', '最終BOSS'),

	['轉世者|轉生人|轉生者', '轉生者'],

	['聖女之杖|聖女拐杖', '聖女之杖'],

	['邊境|邊疆', '邊境'],

	_word_jp1('ゲーム?', '遊戲'),
	['少女遊戲', '乙女遊戲'],


	['來復槍', '來福槍'],

	[/^[　 ]+/gm, ''],

	...lazymarks['class'],
	//...lazymarks['zh_cht'],

	//...lazymarks['unit'],

	...lazymarks[4],

	...lazymarks['full_width_001'],
	//...lazymarks['full_width_002'],

	...lazymarks[0],
	...lazymarks[1],
	...lazymarks[2],
	...lazymarks[3],
	...lazymarks[5],

	...lazymarks['ln_0010'],

	[/(?<=\S)\n{1,2}(?=[○◯]月(?:.{1,3}|□)日)/gu, '\n\n\n'],
	[/(?<=[○◯]月(?:.{1,2}|□|◆)日。?)\n{1,2}(?=\S)/gu, '\n\n'],

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

/**
 * 其他用途
 *
 * @deprecated
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

export default exports;
