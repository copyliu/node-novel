/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_en, lazymarks, _word_jp1, _word_en3 } from './lib/index';
import { words_source as import_words_source } from './吸血姫は薔薇色の夢をみる';

/**
 * 改成小說名字 (可留白 則自動設定為檔案名稱)
 */
export const lang = '';

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words_source: IWords[] = [

	_word_jp1('茜兒|ジル', '茜兒'),
	['茜提安娜|茜緹安娜|シルティアーナ|茜爾緹安娜', '茜緹安娜'],

	_word_jp1('エディス|艾迪絲', '艾迪絲'),
	_word_jp1('アグネーゼ|阿庫尼澤', '阿庫尼澤'),

	['ジュリア|ジュリア|茱莉亞|朱莉婭|朱麗亞', '茱莉亞'],
	['フォルトゥーナ|芙圖雫|福爾圖娜|フォルトゥーナ', '福爾圖娜'],
	['グラウィス|格拉麗絲|格拉斯', '格拉麗絲'],

	/**
	 * 闇之森
	 */
	['蕾吉娜|レジーナ|雷吉娜', '蕾吉娜'],

	['オリアーナ|オリアーナ|歐利安娜|利歐安娜|奧利亞娜|奧里亞娜|奧麗亞娜', '奧麗亞娜'],
	['アイネアス|埃尼亞斯|安妮拉斯', '埃尼亞斯'],
	_word_jp1('ミルン|尼爾姆|米露恩', '米露恩'),

	['瑪雅|マーヤ', '瑪雅'],
	['黑暴貓', '黑暴貓'],

	_word_jp1('菲婭|フィーア|菲娜|菲雅', '菲婭'),



	[`克里斯蒂亞娜|クリスティアーネ`, '克里斯蒂亞娜'],
	[`克里斯蒂|クリスティ|克里斯汀`, '克里斯蒂'],
	_word_jp1(`リタ|麗塔`, '麗塔'),
	[`ブランドミュラー|ブラントミュラー|勃蘭特穆勒|布蘭特繆勒|布蘭特繆拉|布蘭德繆萊爾`, '布蘭特繆勒'],

	[`克里斯蒂亞娜・麗塔・布蘭特繆勒`, '克里斯蒂亞娜・麗塔・布蘭特繆勒'],

	['巴爾?托洛梅|バルトロメイ', '巴爾托洛梅', 'ig'],

	['ロイス|羅伊斯', '羅伊斯', 'ig'],
	['バード|巴德', '巴德', 'ig'],

	_word_jp1('モニカ|莫妮卡', '莫妮卡', 'ig'),
	['羅蘭', '羅蘭', 'ig'],

	_word_jp1(`ラナ|拉娜|菈娜`, '菈娜'),

	['ベアトリス|貝阿朵莉斯|貝亞特莉斯', '貝阿朵莉斯', 'ig'],

	['カーティス|柯蒂斯', '柯蒂斯', 'ig'],

	/**
	 * 康瑟爾
	 */
	['コンスル|康瑟爾|康斯魯', '康瑟爾', 'ig'],

	[`卡露莉娜|咖魯緹娜|カルディナ`, '卡露莉娜'],

	[`艾拉路德|エラルド`, '艾拉路德'],

	[`エミリア|艾米莉雅|艾米里亞|艾米莉亞`, '艾米莉雅'],

	[`ウォルター|沃爾特`, '沃爾特'],

	/**
	 * 開拓村
	 */
	['朵彌茨阿諾|ドミツィアーノ', '朵彌茨阿諾'],
	['舊朵彌茨阿諾|旧ドミツィアーノ', '舊朵彌茨阿諾'],

	['安迪|アンディ', '安迪'],
	['查德|札德|チャド', '查德'],

	_word_jp1('艾蓮|エレン|艾倫', '艾蓮'),
	['亞羅德|亞羅路德|アロルド|阿羅魯多', '亞羅路德'],
	['巴雷吉|バレージ', '巴雷吉'],
	['卡麗娜', '卡麗娜'],

	['洛克', '洛克'],

	['布魯諾|ブルーノ', '布魯諾'],

	['艾米麗', '艾米麗'],
	['伊莎貝拉', '伊莎貝拉'],

	// 珍妮特阿姨是牧場主丹先生的夫人
	['珍妮特', '珍妮特'],
	['丹', '丹'],

	/**
	 *
	 */
	['デメリオ|戴米利歐', '戴米利歐'],
	['ダミアン|達米恩', '達米恩'],

	_word_jp1('バーダ|巴塔', '巴塔'),

	[`諾曼|ノーマン`, '諾曼'],

	/**
	 *
	 */
	_word_jp1(`プリュイ|普露依|普路易|普露易|普萊伊|普旒伊|譜旒伊`, '普露依'),
	_word_jp1(`謝爾|シエル`, '謝爾'),

	_word_jp1(`アシミ|艾西米|艾希米|亞西米`, '艾希米'),
	_word_jp1(`アステリ|阿斯特利`, '阿斯特利'),

	[`ウラノス|烏拉諾斯`, '烏拉諾斯'],
	[`烏拉諾斯${sp}(?:凱奧|科恩)`, '烏拉諾斯・凱奧'],

	[`艾希米。阿斯塔利`, '艾希米・阿斯塔利'],

	/**
	 * 奧蘭修
	 */
	[`利貝提姆|リビティウム|利貝利姆`, '利貝提姆'],

	[`格魯拉德|コルラード|弗魯那多|科魯拉德|科魯拉德|科爾拉德`, '格魯拉德'],
	[`コッラード|Korrado`, '格魯拉德'],

	_word_jp1(`西蒙|シモン`, '西蒙'),
	[`オーランシュ|奧蘭修|奧蘭休|奧蘭什`, '奧蘭修'],

	[`格魯拉德・西蒙・奧蘭修`, '格魯拉德・西蒙・奧蘭修'],

	[`西蒙內塔|シモネッタ|茜蒙莉塔`, '西蒙內塔'],
	[`格莉索菈|Griselda`, '格莉索菈'],

	_word_jp1(`殷尤利婭|インユリア|界內尤莉亞|殷尤莉亞|殷尤利亞`, '殷尤莉亞'),

	[`埃烏菲米亞|エウフェーミア`, '埃烏菲米亞'],
	_word_jp1(`露西亞|ルチア|露琪亞`, '露西亞'),
	[`艾洛伊絲|エロイーズ`, '艾洛伊絲'],

	[`クララ|克拉拉`, '克拉拉'],
	[`卡特蘭花?|卡特利亞|卡特萊亞|カトレア`, '卡特萊亞'],

	[`卡特萊亞の花`, '卡特萊亞之花'],

	[`蘭花?の女王`, '蘭之女王'],
	[`蘭花的巫女姬`, '蘭花的巫女姬'],
	[`巫女姬|巫女公主`, '巫女姬'],

	[`利貝提姆皇國的蘭花|利貝提姆皇國的?卡特萊亞`, '利貝提姆皇國的蘭花'],

	_word_jp1(`バトラー|巴特勒`, '巴特勒'),

	_word_jp1(`エミール|埃米爾|艾米爾`, '埃米爾'),



	/**
	 * 克爾圖拉
	 */
	[`克爾圖拉|克魯圖拉|クルトゥーラ`, '克爾圖拉'],

	[`阿克蒙德|エグモント`, '阿克蒙德'],
	[`拜夜|バイアー`, '拜夜'],
	[`阿克蒙德・拜(?:夜|也)`, '阿克蒙德・拜夜'],

	/**
	 * 利貝提姆王國，皇都奇蘭托
	 */
	['シレント|奇蘭托|奇倫托|席連多|西連多', '奇蘭托', 'ig'],

	['鳶尾花|アイリス', '鳶尾花', 'ig'],
	['麗潔羅忒|莉潔羅黛|リーゼロッテ|麗潔洛特', '莉潔羅黛', 'ig'],
	['愛麗絲', '愛麗絲', 'ig'],

	['紫陽花', '紫陽花', 'ig'],
	_word_jp1('碧歐拉|薇歐拉|ヴィオラ', '碧歐拉', 'ig'),
	['伊格娜西奧|イグナシオ', '伊格娜西奧', 'ig'],

	['薩菲拉斯|薩菲拉拉斯|サフィラス', '薩菲拉斯', 'ig'],

	_word_jp1('ロクスソルス|羅克斯索', '羅克斯索'),

	_word_jp1('デア|戴亞', '戴亞'),
	_word_jp1('アミティア|阿米迪亞', '阿米迪亞'),

	[`(?:戴亞|迪阿|戴爾|迪亞)${sp}(?:阿米迪?亞|亞美提亞)`, '戴亞＝阿米迪亞', 'ig'],

	_word_jp1('メイ|梅伊', '梅伊'),
	_word_jp1('伊諾烏哈|イロウーハ', '伊諾烏哈'),

	_word_jp1('ドーン', 'ドーン'),

	_word_jp1('巴里|バリー', '巴里'),
	_word_jp1('卡特|カーター', '卡特'),

	_word_jp1('艾利斯|エリアス|埃利阿斯', '艾利斯'),
	_word_jp1('楊|ヤン', '楊'),
	_word_jp1('巴魯迪庫|バルテク', '巴魯迪庫'),

	/**
	 *
	 */
	[`鋼鉄の荷車|鋼鐵戰車`, '鋼鐵戰車', 'ig'],

	_word_jp1('ラザル|拉扎魯', '拉扎魯'),
	_word_jp1('オルランド|歐魯那多', '歐魯那多'),

	_word_jp1('クワルツ|卡瓦努斯|庫瓦盧茨|庫瓦爾茲', '庫瓦盧茨'),

	/**
	 *
	 */
	[`葛蓓莉亞|コッペリア|葛蓓莉婭`, '葛蓓莉婭', 'ig'],

	[`ヴィクター|維克多|維庫塔`, '維克多', 'ig'],
	[`フランシス|弗朗西斯`, '弗朗西斯', 'ig'],

	[`イゴーロナク|伊果羅納庫|伊格魯納庫|伊戈隆奈克|伊格羅那克`, '伊格魯納庫', 'ig'],
	_word_jp1(`伊格魯|イゴール|伊果魯`, '伊格魯', 'ig'),

	_word_jp1(`赫爾墨斯|ホムンクルス|Homunculus|Homunculus`, '赫爾墨斯', 'ig'),

	/**
	 * 尤尼斯教國
	 */
	['ユニス|路易斯|尤尼斯|Yunis|尤妮斯', '尤尼斯', 'ig'],

	['セラヴィ|斯拉比|賽拉維|塞拉維', '賽拉維', 'ig'],
	_word_jp1('ロウ|洛', '洛'),

	[`賽拉維・羅伊`, '賽拉維・洛', 'ig'],

	_word_jp1('ローレンス|勞倫斯|Lawrence|羅倫斯', '勞倫斯', 'ig'),
	_word_jp1('アロン|亞倫', '亞倫', 'ig'),

	/**
	 * 尤尼斯法國
	 */
	['尤尼斯法國家', '尤尼斯法國', 'ig'],

	_word_jp1('テラメエリタ|提拉美利亞|Terameerita|特拉梅麗塔', '特拉梅麗塔'),

	_word_jp1('阿德爾海德拉?|アーデルハイド?|阿蒂爾海德', '阿德爾海德'),

	_word_jp1('(伊麗莎)+|イライザ|伊麗莎|伊裡莎|伊莉莎|伊萊莎', '伊萊莎'),
	_word_jp1('ファリアス|法里亞斯', '法里亞斯'),

	_word_jp1('バーバラ|巴巴拉|芭芭拉', '芭芭拉'),

	_word_jp1('古拉露斯|クラルス', '古拉露斯'),

	_word_jp1('ラビエル|拉比露|拉比艾爾', '拉比艾爾'),
	_word_jp1('テレーザ|特蕾莎', '特蕾莎'),

	['特蕾莎明?巫女', '特蕾莎明巫女'],

	_word_jp1('クロリンダ|黑琳達|科羅琳達', '黑琳達'),
	_word_jp1('オッタヴィア|奧塔維亞', '奧塔維亞'),

	_word_jp1('シドン|希德', '希德'),
	_word_jp1('シドニア|希德尼亞', '希德尼亞'),

	['一角獣|獨角獸', '獨角獸'],

	_word_jp1('リーダー|西姆拉', '西姆拉'),
	_word_jp1('フムトアンデル|弗姆托安德魯', '弗姆托安德魯'),
	_word_jp1('ヨルトホエール|尤魯托侯厄魯', '尤魯托侯厄魯'),

	_word_jp1('瑪麗娜|マリナ', '瑪麗娜'),

	_word_jp1('スタラーバ|史塔羅帕', '史塔羅帕'),

	_word_jp1('科林|コリン|科倫|柯林|克林|葛林', '柯林'),
	_word_jp1('湯姆森|トムスン', '湯姆森'),

	[`柯林${sp}湯姆森`, '柯林・湯姆森'],

	_word_jp1('アルジャーノン|阿伽農', '阿伽農'),

	_word_jp1('(?:北部日刊)+|デイリー・セプテントリオ|北部日刊|日刊北部', '北部日刊'),

	_word_jp1('赤山羊|赤之羊|紅羊|赤羊(?:埃德拉姆)?|紅色綿羊|紅色朗姆酒|赤い羊', '赤之羊'),

	_word_jp1('カリスト|卡利斯特?', '卡利斯特'),

	_word_jp1('瑪莉艾露|マリアルウ|瑪利亞露|瑪?莉亞露|マ?リアルウ', '瑪莉亞露'),
	_word_jp1('マリアさん', '瑪利亞桑'),
	_word_jp1('瑪莉艾|マリア|瑪利亞|瑪莉亞', '瑪莉亞'),
	_word_jp1('シェフィールド|謝菲爾德', '謝菲爾德'),

	_word_jp1('愛琪朵娜|エキドナ', '愛琪朵娜'),

	_word_jp1('さん', '桑'),

	_word_jp1('タルキ|塔爾基|塔魯吉', '塔爾基'),
	_word_jp1('ユースス川|尤斯斯河', '尤斯斯河'),

	_word_jp1(`(卡伊莎)+|カイサ|卡伊莎|凱薩|凱莎|かいさ`, '卡伊莎'),
	_word_jp1(`マルギット|瑪吉特|瑪爾吉特`, '瑪爾吉特'),
	_word_jp1(`ダニエラ|丹妮拉|丹尼拉|達妮艾拉|丹尼艾菈`, '達妮艾拉'),
	_word_jp1(`ナタリー|娜塔莉`, '娜塔莉'),
	_word_jp1(`ノーラ|諾拉`, '諾拉'),

	_word_jp1(`カロロス|卡洛羅斯|卡羅洛斯`, '卡羅洛斯'),
	_word_jp1(`パパンドレウ`, 'パパンドレウ'),

	_word_jp1(`シプリアノ|西普里亞諾`, '西普里亞諾'),
	_word_jp1(`賽爾班提斯|賽爾班特斯|セルバンテス`, '賽爾班特斯'),

	_word_jp1(`丹|ダン`, '丹'),

	/**
	 *
	 */
	_word_jp1(`愛德華|エドワード|華萊士`, '愛德華'),

	_word_jp1(`特奧多羅斯|テオドロス`, '特奧多羅斯'),
	_word_jp1(`ジョルジオ|吉爾吉歐`, '吉爾吉歐'),

	_word_jp1(`レグルス|雷古魯斯`, '雷古魯斯'),

	/**
	 * 夜光蝶
	 */
	_word_jp1(`瑪莎|マーサ`, '瑪莎'),

	/**
	 *
	 */
	_word_jp1(`ヤギュー|雅古爾`, '雅古爾'),
	_word_jp1(`タジマ|塔吉瑪`, '塔吉瑪'),

	/**
	 *
	 */
	['阿里拉|アーレア', '阿里拉', 'ig'],

	/**
	 * 怪人的巢穴
	 * 萬事包辦商會
	 * Sonderling Nest
	 */
	['シルエット|影', '影', 'ig'],
	['莎托|シャトン|夏彤|薩頓|夏冬', '莎托', 'ig'],

	['よろず商会|萬事包辦商會', '萬事包辦商會', 'ig'],
	['ゾンダーリングネスト|Sonderling Nest', 'Sonderling Nest', 'ig'],

	['ミルフィーユ|米爾菲優', '米爾菲優', 'ig'],
	_word_jp1('ミル|米爾', '米爾'),

	/**
	 *
	 */
	['ヨークス|優庫斯', '優庫斯', 'ig'],
	['ビートン|比頓', '比頓', 'ig'],

	_word_jp1('エト|艾德', '艾德', 'ig'),
	_word_jp1('克特拉|ケテラ', '克特拉', 'ig'),

	['コルラード|科爾亞多', '科爾亞多', 'ig'],
	['パッツィー|潘西', '潘西', 'ig'],

	/**
	 * 疾風之刃
	 */
	[`疾風之刃`, '疾風之刃'],

	/**
	 * 萊卡 女戰士
	 *
	 */
	_word_jp1(`萊卡|ライカ`, '萊卡'),
	_word_jp1(`菲朵拉|フェドーラ`, '菲朵拉'),
	_word_jp1(`阿朵爾那特|アドルナート`, '阿朵爾那特'),

	[`ジェシー|傑西`, '傑西'],
	[`傑西・(?:亞蘭德|阿蘭得)`, '傑西・亞蘭德'],
	[`艾雷諾亞?|艾蕾諾亞|エレノア|埃莉諾`, '艾蕾諾亞'],

	_word_jp1('グリゼリダ|古利澤利達', '古利澤利達'),
	_word_jp1('バッソ|巴索', '巴索'),



	[`ビョルン|伯恩`, '伯恩'],

	// 琳
	_word_jp1(`リーン|里奧`, '里奧'),

	[`史黛拉・巴約那`, '史黛拉・巴約那'],

	/**
	 *
	 */
	_word_jp1('斯諾|スノウ', '斯諾', 'ig'),

	/**
	 *
	 */
	['修瓦塔', '修瓦塔', 'ig'],
	['薔薇姬', '薔薇姬', 'ig'],

	/**
	 * 格拉畢歐魯帝國
	 * カーディナルローゼ
	 */
	['格拉畢歐魯|グラウィオール|布?拉伊歐魯|古拉維奧爾?|格萊威奧|グラウィール|グラヴィオール', '古拉維奧爾', 'ig'],

	_word_jp1('盧卡斯|ルーカス', '盧卡斯', 'ig'),
	_word_jp1('盧卡|ルーク|盧克', '盧卡', 'ig'),

	['雷恩巴魯特|レオンハルト', '雷恩巴魯特', 'ig'],

	['傑恩盧卡', '傑恩盧卡', 'ig'],

	['傑恩', '傑恩'],
	['瑪貝魯', '瑪貝魯'],

	['艾魯瑪|エイルマー', '艾魯瑪'],

	[`絳魯卡`, '絳魯卡'],

	[`超神?帝(国)`, '超帝$1'],
	[`カーディナル・?ローゼ|真紅玫瑰|鮮紅玫瑰`, '真紅玫瑰'],

	[`(?:深|真)紅帝(國)`, '真紅帝$1'],

	[`ダニエル|丹尼爾`, '丹尼爾'],
	_word_jp1(`オリヴァー|奧利威爾`, '奧利威爾'),

	_word_jp1(`馬克思|マークス`, '馬克思'),

	[`賽雷斯蒂娜`, '賽雷斯蒂娜'],
	[`阿里曼`, '阿里曼'],

	[`ラーティネン`, 'ラーティネン'],

	[`アンジェリーナ|安吉莉娜|安潔莉娜`, '安潔莉娜'],
	_word_jp1(`アンジェ|安吉|安潔`, '安潔'),

	_word_jp1(`希里娜|セレナ`, '希里娜'),

	/**
	 *
	 */
	_word_jp1('Barutorucchi|バルトルッチ|Barutorutchi', 'バルトルッチ'),

	/**
	 * 帝都空瓦魯莉斯卡拉
	 */
	['提涅布列・尼姆斯|黑暗森林|闇之森闇之森|黑暗之森林?|(黑|昏)?闇の森林?|テネブラエ？ネムス|Tenebrae ?Nemus|テネブラエ・ネムス', '闇之森', 'ig'],

	['黑暗森林|闇之森闇之森|黑暗之森林?|(黑|昏)?闇の森林?|テネブラエ？ネムス|Tenebrae ?Nemus|テネブラエ・ネムス|黑森林', '闇之森', 'ig'],

	[`クネパス${sp}ウルプス`, 'クネパス・ウルプス'],

	['空瓦魯莉斯(卡拉|艾)?|コンワルリス|康爾爾斯', '空瓦魯莉斯', 'ig'],

	_word_jp1('ハンネス|漢尼斯|漢那斯', '漢尼斯', 'ig'),
	['漢尼斯(地下)?迷宮|ハンネスの地下迷宮', '漢尼斯地下迷宮', 'ig'],

	['托里斯提思', '托里斯提思', 'ig'],

	/**
	 *
	 */
	['馬里亞', '馬里亞', 'ig'],
	['里爾克', '里爾克', 'ig'],

	['菲尼斯・吉哈德', '菲尼斯・吉哈德', 'ig'],

	['喬伊・(?:亞蘭多|亞蘭德)', '喬伊・亞蘭德', 'ig'],

	['(尤尼斯|路易斯)・卡羅爾', '路易斯・卡羅爾', 'ig'],

	['馬里奧', '馬里奧', 'ig'],

	/**
	 *
	 */
	_word_jp1('クレス|克里斯', '克里斯', 'ig'),

	/**
	 *
	 */
	['天狼星?|Sirius', '天狼', 'ig'],
	['小鬼（哥布林）', '哥布林', 'ig'],

	//['妖精|精靈|エルフ', '妖精', 'ig'],
	['艾露芙|精靈|艾爾芙', '精靈', 'ig'],

	['豚鬼姬|豬鬼姬', '豚鬼姬', 'ig'],

	['岩石猩猩+|岩猩|搖滾短尾猴', '岩石猩猩', 'ig'],

	_word_jp1('ゼクス|澤克斯|賽克斯', '澤克斯', 'ig'),

	_word_jp1('エミュー|鴯鶓', '鴯鶓', 'ig'),

	_word_jp1('矮人|侏儒', '矮人', 'ig'),

	_word_jp1('瑪扎|マザー', '瑪扎', 'ig'),
	_word_jp1('戈利努斯|ギュリーヌス', '戈利努斯'),

	['(小|子)(?=戈利努斯)', '小'],

	/**
	 *
	 */
	['マンドラドラ|曼陀羅陀羅|曼多羅多羅', '曼陀羅陀羅', 'ig'],
	['靈藥|Amrita', '靈藥'],
	['赤の花冠|Rubel Flowes|赤色花冠|ルーベルフロース', '赤の花冠', 'ig'],
	['奧利哈鋼|奧利哈爾鋼|奧利哈剛', '奧利哈爾鋼'],

	['エロイカ號|英雄交響曲號', '英雄交響曲號'],

	['露珊多緹|ルタンドゥテ|下午茶時間|(吃茶店)?茶點時間|盧坦多特|ラタンドゥテ', '茶點時間'],

	['黒錬鋼', '黑錬鋼'],

	_word_jp1('セルメルト|公分|serumeruto', '公分', 'ig'),
	_word_jp1('メルト|美爾|Meruto|米爾特', '美爾', 'ig'),

	_word_jp1('グロースナックトシュネッケ|Gurosunakkutoshunekke|格勞斯納格托修尼克', '格勞斯納格托修尼克'),

	/**
	 *
	 *
	 */
	['豚草|豬草|豕草', '豚草', 'ig'],
	['豚草的?公主|豚草姬|豕草公主|ブタクサ姬|豬姬', '豚草姬', 'ig'],
	['魔女の女王|魔女之王', '魔女の女王', 'ig'],

	['八界仙|はっかせん', '八界仙', 'ig'],

	['黒い虐殺者|黑色虐殺者|ブラックデストロイヤー', '黑色虐殺者', 'ig'],

	['鐵匠之月|鍛冶の月', '鍛冶之月', 'ig'],
	['白猴子|白猿', '白猿', 'ig'],

	['天上紅華|天空紅華', '天上紅華', 'ig'],

	['神の寵児|上帝的寵兒', '神的寵兒', 'ig'],

	['薔薇的聖女|玫瑰的?聖女', '薔薇的聖女', 'ig'],

	['紅衣主教|枢機卿', '樞機卿', 'ig'],

	['(初源(的|之)?人(?:間|類)? ?)+|Dolly Qadmon|ドリーカドモン', '初源之人', 'ig'],

	/**
	 * 吸血姫は薔薇色の夢をみる
	 */
	_word_jp1('阿蘭特|アランド|艾蓮多|アランド|艾倫多|Arando', '阿蘭特'),

	_word_en3('Mithril', '秘銀'),

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

//	['余勢', '餘勢', 'ig'],

	['(?<=氣|魔)斗(?=術|法)', '闘', 'ig'],

	['(?<=(?:気|氣)(?:斗|闘))(術|法)', '法', 'ig'],
	['(?<=魔(?:斗|闘))(術|法)', '術', 'ig'],

	['哥雷姆|歌雷姆', '哥雷姆', 'ig'],

	[/【((?:注|譯)：[^\n【】]+)】/gm, '($1)'],

	//...(import_words_source || []),

	[/魔物|Monster/g, '魔物'],

	[/聖都|聖城/g, '聖都'],

	_word_en3('ランク|排位|級', '級'),

	['克拉拉先生', '克拉拉大人', 'ig'],

	...sublib.lazymarks['class'],

	_word_en3('boos|BOSS', 'BOSS'),
	_word_en3('魔FA', '魔法'),

	...sublib.lazymarks['zh_cht'],

	['公會|工會|ギルド', '公會', 'ig'],
	['(商業|工匠|魔術師|工藝|盜賊|傭兵)行會', '$1公會', 'ig'],
	['行會(主人)', '公會$1', 'ig'],

	['大快癒|大快愈', '大快癒', 'ig'],
	['転移門|轉移門', '轉移門', 'ig'],

	['氣喘籲籲', '氣喘籲籲'],

	['雨的天空', '雨之空'],

	['精靈之(理|里)', '精靈之里'],
	['帶進里的嗎', '帶進里的嗎'],

	['宗教國(?!家)', '教國'],

	[/^[　 ]+/gm, ''],

	[/^\.$/gm, ''],



	...sublib.lazymarks[4],

	...sublib.lazymarks[8],

	...sublib.lazymarks['full_width_001'],
	...sublib.lazymarks['full_width_002'],

	_word_en('SS', '$1ＳＳ', 'ig'),
	_word_en('US', '$1ＵＳ', 'ig'),

	_word_en('iii', '$1Ⅲ', 'ig'),

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

	[/[{]/g, '【'],
	[/[}]/g, '】'],

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
