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



	_word_jp1('米冽莎|ヴィレッサ|米莉絲|米里斯', '米莉絲'),
	_word_jp1('露比絲|ルヴィス', '露比絲'),

	_word_jp1('シャロン|夏洛', '夏洛'),

	/**
	 *
	 */
	_word_jp1('ウルムス|烏爾勃拉姆斯?|拉威爾', '烏爾勃拉姆斯'),

	_word_jp1('カミル|加米烈|加密爾|加密尓|卡密爾', '卡密爾'),
	_word_jp1('ピシリ|比希利', '比希利'),
	_word_jp1('テメエが|天涅', '你這傢伙'),

	_word_jp1('ガステン|加斯汀|賈斯丁', '加斯汀'),

	/**
	 *
	 */
	_word_jp1('ヴァイマー|馬爾|巴利馬', '巴利馬'),
	_word_jp1('維爾蒂露多|ヴェルティルート', '維爾蒂露多'),

	_word_jp1('維爾蒂|ヴェルティ', '維爾蒂'),





	/**
	 *
	 */
	_word_jp1('オルェン|歐德因', '歐德因'),
	_word_jp1('ムーティニアス|穆迪尼亞斯', '穆迪尼亞斯'),

	_word_jp1('迪亞路比魯多|ビルウッド', '迪亞路比魯多'),

	/**
	 *
	 */
	_word_jp1('瑪雅|マーヤ', '瑪雅'),
	_word_jp1('蘿貝爾緹娜西亞|ロベルテュナシア', '蘿貝爾緹娜西亞'),
	_word_jp1('蘿娜|ロナ|羅娜', '蘿娜'),

	_word_jp1('ニャ|喵', '喵'),

	_word_jp1('メア|梅亞', '梅亞'),

	_word_jp1('クリシャ|克蕾莎', '克蕾莎'),
	_word_jp1('アドラマイヤ|阿朵拉麥雅', '阿朵拉麥雅'),

	[`克蕾莎${sp}阿朵拉麥雅`, '克蕾莎・阿朵拉麥雅'],

	_word_jp1('ビルガルド|畢魯馬魯多', '畢魯馬魯多'),

	/**
	 *
	 */
	_word_jp1('澤古多|ゼグード', '澤古多'),
	_word_jp1('愛因茲恩多|アインツェント', '愛因茲恩多'),

	_word_jp1('烏魯斯菲爾德|ブロスフェルト', '烏魯斯菲爾德'),

	_word_jp1('阿古拉巴爾德|アドラバルド|阿德拉巴爾德', '阿德拉巴爾德'),

	_word_jp1('ギルディウス|戈魯蒂盧斯', '戈魯蒂盧斯'),
	_word_jp1('アルトゥス|巴魯都斯', '巴魯都斯'),
	_word_jp1('ジ', 'Ｊ'),

	[`${sp}戈魯蒂盧斯${sp}巴魯都斯${sp}(?:J|Ｊ)${sp}瓦爾多蘭德`, `・戈魯蒂盧斯・巴魯都斯・J・瓦爾多蘭德`],

	_word_jp1('迪奧多拉|テオドア', '迪奧多拉'),

	_word_jp1('ナール|納魯', '納魯'),
	_word_jp1('ナイルポルト|納魯波爾多', '納魯波爾多'),

	_word_jp1('ディアムント|迪安德|迪安多', '迪安德'),

	_word_jp1('ディアム|迪安', '迪安'),
	_word_jp1('ディフリート|迪弗里德', '迪弗里德'),

	_word_jp1('舒特菈莉潔|シュテラリーデ', '舒特菈莉潔'),

	_word_jp1('ビショッフ|比索普', '比索普'),

	_word_jp1('ファイラット|法伊拉特|帕拉多', '法伊拉特'),

	_word_jp1('エリム|愛蒂姆', '愛蒂姆'),

	_word_jp1('ミヒャエル|米歇爾|米夏埃?爾', '米歇爾'),
	_word_jp1('メンフィス|孟菲斯', '孟菲斯'),

	_word_jp1('グレーザー|古雷薩', '古雷薩'),

	_word_jp1('ハイメンダール|海年達爾', '海年達爾'),

	_word_jp1('リアルドメイガー|利亞魯多梅迦|利亞露多梅伽', '利亞魯多梅迦'),

	_word_jp1('ヘルラーン|荷盧蘭|荷魯斯', '荷盧蘭'),

	_word_jp1('ディルク|迪爾克', '迪爾克'),
	_word_jp1('ガイウス|伽琉斯', '伽琉斯'),


	/**
	 *
	 */
	_word_jp1('蕾米利亞|レミディア|蕾米莉亞', '蕾米利亞'),

	_word_jp1('ギルアード|吉爾亞德|格瑞爾多', '吉爾亞德'),
	_word_jp1('インスティウス|因斯特琉斯', '因斯特琉斯'),

	_word_jp1('ボドル|波多爾', '波多爾'),

	_word_jp1('ランドル|蘭德爾|蘭多盧卡', '蘭德爾'),
	_word_jp1('リオーダン|利歐丹|里歐丹', '利歐丹'),

	_word_jp1('ネグロス|內格羅斯', '內格羅斯'),


	_word_jp1('アイザッド|艾扎德', '艾扎德'),

	_word_jp1('フェリシア|菲莉西亞|費利西亞', '菲莉西亞'),

	_word_jp1('フレナンド|弗倫安多|弗雷南德', '弗倫安多'),


	/**
	 *
	 */
	_word_jp1('ビッドブルク|彼得波爾庫', '彼得波爾庫'),

	_word_jp1('クロボス|庫洛博斯', '庫洛博斯'),

	_word_jp1('アンブロス|安格洛斯|昂俄羅斯', '安格洛斯'),

	_word_jp1('ガーゼム|卡塞姆', '卡塞姆'),

	/**
	 * 魔導國
	 *
	 */
	_word_jp1('ミルドレイア|米勒德雷亞|米露多雷亞|米爾露蕾亞|米露多蕾亞|米璐鐸德拉|米露朵蕾亞|米爾露雷亞', '米露朵蕾亞'),

	_word_jp1('グロウシス|狄魯斯', '狄魯斯'),

	_word_jp1('杰爾薩魯|ジェルザール', '杰爾薩魯'),

	_word_jp1('ブラローン|布拉隆', '布拉隆'),

	_word_jp1('ゾエンヌ|佐艾姆', '佐艾姆'),


	_word_jp1('ザンローム|贊戎穆|森羅姆', '贊戎穆'),

	_word_jp1('コンスタン|康斯坦', '康斯坦'),

	_word_jp1('ミーア|米婭', '米婭'),

	_word_jp1('米爾醬|ミルちゃん', '米露醬'),

	/**
	 *
	 */
	_word_jp1('普魯特|プルト', '普魯特'),
	_word_jp1('蕾亞|レイア|蕾婭', '蕾亞'),
	_word_jp1('琉亞娒|リュアーヌ', '琉亞娒'),

	_word_jp1('霍德爾|ホデール', '霍德爾'),

	_word_jp1('噗嚕咚|プルドン', '噗嚕咚'),

	/**
	 *
	 */
	_word_jp1('ルトラント|巴魯特蘭', '巴魯特蘭'),

	_word_jp1('キールブルク|基爾堡', '基爾堡'),

	_word_jp1('迪扎哈村|ディザハムラ', '迪扎哈'),

	_word_jp1('基尼路|ジュニール', '基尼路'),


	_word_jp1('ブランダ|布蘭達', '布蘭達'),
	['布蘭達(工商聯合|商工連合)', '布蘭達工商聯合'],



	_word_jp1('巴爾薩魯|バルツァール', '巴爾薩魯'),

	_word_jp1('艾米德布拉多|エウィドグラード|艾維多克蘭多|艾威格古拉德', '艾米德布拉多'),

	_word_jp1('瓦爾多蘭德|バルトラント', '瓦爾多蘭德'),

	_word_jp1('ヴァーヌ|瓦努|帕凡', '瓦努'),

	_word_jp1('ミストラ|米斯特拉', '米斯特拉'),

	_word_jp1('マジス|馬蒂斯|瑪吉斯', '瑪吉斯'),

	_word_jp1('シュタース|舒塔蘇', '舒塔蘇'),


	/**
	 *
	 */

	_word_jp1('盧迪菲魯多|ルギフェルド|盧迪菲露多', '盧迪菲魯多'),
	_word_jp1('澤魯・沃爾夫|ゼル・ガラフ', '澤魯・沃爾夫'),
	_word_jp1('歌爾維尼亞|ゴールヴェニア', '歌爾維尼亞'),

	_word_jp1('不滅骸骨鎧|不滅骸鎧', '不滅骸鎧'),

	_word_jp1('グレイラム|古雷拉姆', '古雷拉姆'),
	_word_jp1('ガラディス|卡拉迪斯', '卡拉迪斯'),

	_word_jp1('クレイグレイブ|庫雷姆雷古|克萊布雷姆', '克萊布雷姆'),

	_word_jp1('萬魔輪回|万魔流転', '万魔流転'),
	_word_jp1('迪多|ディード', '迪多'),

	['堕天権杖|墮天權杖', '墮天權杖'],
	_word_jp1('ムールヒムト|烏爾西姆多', '烏爾西姆多'),

	_word_jp1('伊爾澤馬|イルゾマ', '伊爾澤馬'),

	_word_jp1('巴拉多|バワード|巴瓦多', '巴瓦多'),
	_word_jp1('吉爾蒙德|ジルモンド', '吉爾蒙德'),

	['傀儡裂鞭', '傀儡裂鞭'],
	_word_jp1('尤里埃爾|ミュリエル|穆里爾|繆麗爾|繆麗埃爾', '繆麗埃爾'),
	_word_jp1('萊克星頓|レキシントン', '萊克星頓'),

	_word_jp1('ゴールヴェニア|歌爾維尼亞|古露比尼亞', '歌爾維尼亞'),

	['骸狂戦士|骷髏狂戰士', '骸狂戰士'],

	['地炎獄剣|地火焰獄劍', '地炎獄剣'],

	//_word_jp1('デス|德斯', '德斯'),
	//_word_jp1('バーサーカー|巴撒卡', '巴撒卡'),

	/**
	 *
	 */
	_word_jp1('羅波多迪亞|モゼルドボディア|摩澤路多・?(波迪拉|波迪亞)', '摩澤路多・波迪亞'),




	_word_jp1('モゼルド|毛則多|摩澤路多|莫澤魯多', '摩澤路多'),
	_word_jp1('ゼゥ|擇', '擇'),
	_word_jp1('波迪拉|ボディア|波迪亞|博迪拉', '波迪亞'),

	[`(?:モゼルド|毛則多|摩澤路多)${sp}(?:ゼゥ|擇)${sp}(?:ボディア|波迪亞)`, '摩澤路多＝擇＝波迪亞'],

	_word_jp1('エルフィン|精靈', '精靈'),
	_word_jp1('ヒューラル|人類Hyu', '人類Hyu'),

	_word_jp1('烏爾迪拉|ウルディラ', '烏爾迪拉'),

	[`(?:ブルド|烏路亞)${sp}(?:ボア|波亞)`, '烏路亞・波亞'],

	[`ブルド・ボア|布魯多蟒`, '布魯多蟒'],

	[`吉拉蟻|Giga・Ant|ギガ・アント`, '吉拉蟻'],

	[`吉爾馬多芬`, '吉爾馬多・蜂'],
	[`(?:ギガマッド|吉爾馬多)${sp}(?:ビー|蜂)`, '吉爾馬多・蜂'],

	_word_jp1('コロム|庫洛姆', '庫洛姆'),

	_word_jp1('ナイトメア|夢魘', '噩夢'),
	_word_jp1('黑色夢魘|黒き悪夢|黑色悪夢|黑色噩夢', '黑色噩夢'),


	_word_jp1('イノシシ皇女', '野豬皇女'),

	_word_jp1('ゴスロリババア|哥特蘿莉老太婆', '哥特蘿莉老太婆'),

	_word_jp1('リーゼルヒルデ|莉澤露希爾蒂', '莉澤露希爾蒂'),

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = _word_zh_all([

	...words_source,

	['司祭|神父', '司祭'],

	['魔導遺跡|魔導遺址', '魔導遺跡'],

	['軍用型極式魔導殲刃|装軍型極式魔導殲滅刃', '裝軍型極式魔導殲滅刃'],

	['魔(法|術)(媒觸|触媒)', '魔術触媒'],
	['催化劑|触媒', '触媒'],

	['魔法師|魔術師', '魔術師'],

	['魔彈公主|魔弾皇女', '魔彈皇女'],

	['雙子公主', '雙子皇女'],

	['遠隔形態|遠程形態', '遠程形態'],
	['近接形態|近戰形態', '近戰形態'],
	['速射形式|速射形態', '速射形態'],
	['擴散形態|散射形態', '擴散形態'],

	['枢機卿|樞機主教', '枢機卿'],

	['屍竜', '屍竜'],
	['紅(黑)', '赤$1'],

	['活體反應|生物反應|生體反應', '生物反應'],

	['(?<=第[一-九]導)士', '師'],

	['魔導國家', '魔導国'],

	['祭司|司祭', '司祭'],

	_word_jp1('プロローグ', '序幕'),

	['魔導師|魔導士', '魔導士'],

	['沖擊|衝撃', '衝撃'],

	['抗魔法術|抗魔術', '抗魔術'],

	['冰珠|凍珠', '凍珠'],

	[/^(　*◇　◇　◇)[　 ◇]+$/gm, '$1'],

	/**
	 *
	 */
	[`火焔城壁|火焰城牆|火焰圍牆`, '火焔城壁'],
	[`飛翔船|飛行船`, '飛翔船'],

	[`砲撃形態|炮擊模式`, '砲撃形態'],
	[`砲撃`, '砲撃'],
	[`砲`, '砲'],

	[`魔導銃|魔導槍`, '魔導槍'],

	[/^[ 　]+/gm, ''],

	[/\{/g, '【'],
	[/\}/g, '】'],

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
