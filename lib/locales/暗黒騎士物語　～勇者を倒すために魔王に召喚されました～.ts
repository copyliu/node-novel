/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe, sublib } from './index';
import * as StrUtil from 'str-util';
import { _word_jp1, lazymarks } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = '暗黒騎士物語　～勇者を倒すために魔王に召喚されました～';

/**
 * 其他用途
 *
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '{{0}}',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0, toFullNumber}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words_source: IWords[] = [

	['迪哈尔特|迪哈魯特|迪哈魯特|迪哈爾特|迪哈[ ]特', '迪哈魯特'],

	_word_jp1('ディハルト', '迪哈魯特'),

	_word_jp1('黑樹|黑树|クロキ', '黑树'),

	/**
	 * 艾尔德王国是我们打倒千皮兽之后建立的王国
	 * 班德尔平原
	 *
	 * アズィミド 阿茲維德
	 *
	 * 大賢者瑪裘烏斯
	 */

	['京华|京華', '京华'],
	['加弥|加彌|嘉彌', '加彌'],
	['奈緒美?|奈?緒美', '奈緒美'],
	['憐侍|怜侍|伶侍|怜侍', '怜侍'],

	_word_jp1('チユキ', '千雪'),
	_word_jp1('レイジ', '怜侍'),
	_word_jp1('サホコ', '沙穂子'),
	_word_jp1('リノ', '理乃'),

	_word_jp1('艾尔德|艾蘭德|エルド', '艾爾德'),
	['班德尔|邦多勒', '班德爾'],

	['瑪裘烏斯', '瑪裘烏斯'],

	/**
	 * 穆雷那斯
	 * 奇布琉斯
	 * ミュレナス
	 * ジヴリュス
	 *
	 * 娜迩葛尔边界阿克伦山脉
	 *
	 * 魔界公主珀莲娜
	 * 兽魔将军普琪娜。上一代的爱丽缇娜被光之勇者杀掉
	 *
	 * 兰帕斯庭园
	 *
	 * 蒙提娅是妖魔将军夏莉的母亲。
	 *
	 * 缇贝尔是拥有七色光辉翅膀的小妖精
	 *
	 * 沼泽的大魔女的赫尔卡特
	 * 龙魔将军利布尔木
	 *
	 * 緹貝尔
	 */

	['古洛利西亞|古洛利亚斯|古洛利亞西|格洛里亚斯|格罗里亚斯|古洛利亞斯|グロリアス', '古洛利亞斯'],

	['莫德斯|莫迪斯|莫德斯|モデス', '莫德斯'],
	['兰菲尔德|蘭菲爾德|拉昂菲尔德', '蘭菲爾德'],
	['卢加斯|盧加斯', '盧加斯'],

	['奇布琉斯|吉卜露丝|ジヴリュス', '吉蔔露絲'],
	['穆雷那斯|穆雷納斯|ミュレナス', '穆雷納斯'],

	['納特|納托', '納特'],

	['古諾|古诺', '古諾'],
	['复莉|夏莉', '夏莉'],

	_word_jp1('库娜|クーナ', '庫娜'),

	//['普琪娜|普琪娜', '普琪娜'],
	['珀莲娜|波莲娜', '珀蓮娜'],
	['珀莲|波莲', '珀蓮'],

	/**
	 * 山之女神度萝拉的女儿，谷之女神姆米
	 */
	['艾恩西玛|恩谢玛', '艾恩西瑪'],
	['赫尔卡特', '赫爾卡特'],

	/**
	 * 奥克
	 * 诺索伊的女王，涅芙
	 * 艾泽萨公主
	 */

	/**
	 * 矮人
	 */
	['达利欧|达里奧', '達利歐'],

	/**
	 * 恶魔王乌尔巴尔德
	 * 泽亚尔是让艾诺埃成为魔女的恶魔的名字。
	 * 曼赛伊德
	 *
	 *
	 */
	['惡魔の?王烏爾巴爾德', '惡魔之王烏爾巴爾德'],
	['乌尔巴尔德', '烏爾巴爾德'],


	['妲蒂艾|达提艾|韃媞艾', '妲蒂艾'],
	['戈兹|哥兹|哥茲', '哥茲'],
	['帕爾西斯|帕尔西斯', '帕爾西斯'],

	_word_jp1('賈基|ジャーギ', '賈基'),

	/**
	 *
	 */
	['莉潔娜|莉洁娜|利傑納|リジェナ', '莉潔娜'],

	/**
	 * @todo 神
	 *
	 * 酒神涅特尔（ネクトル）的从属神阿库艾利欧（アクエリオ）
	 * 又是男性随从的神，有着从属于女神菲莉亚的女性随从的女神梅多莉亚（メイドリア）作为妻子
	 *
	 * 阿库艾利欧是同乐神阿尔弗斯（アルフォス）与从属于女神伊什蒂亚的少年神皮斯提丝（ピスティス）一样以美男子而闻名的神。
	 *
	 * 菲利亚 菲莉亚大人是织物的女神。
	 *
	 * 萨提洛斯
	 *
	 * 海博斯的商业女神库贝利亚（クヴェリア）
	 *
	 * 医疗和草药的女神法娜凯雅（ファナケア）
	 *
	 * 海王托莱典
	 * 海之神托莱汀
	 *
	 * 战神托尔斯的女儿，狩猎和战争的女神阿玛佐娜（アマゾナ）的女战士
	 */
	['艾利奧斯|埃里奧斯|伊莱奥斯|[裏]奧斯|エリオス', '艾利奧斯'],

	['奥迪斯|奧迪斯|奥里斯', '奧迪斯'],
	['黑博思|海博思', '海博斯'],
	['(?:赫伊波|海博)([斯思]?)', '海博$1'],



	['扎爾基西斯|扎尔基西斯|札爾基西斯', '扎爾基西斯'],
	['拉维琉斯|拉布琉斯|拉夫鲁斯', '拉維琉斯'],

	['菲莉亚|菲利亚', '菲莉亞'],
	['伊什(特?(蒂|提)亞)', '伊什特蒂亞'],

	['埃尔弗斯|阿尔弗斯', '埃爾弗斯'],

	['托莱典|托莱汀|达拉贡|拖莱登|达拉乌贡', '托萊汀'],
	['托尔兹|托尔斯|兹托', '托爾斯'],

	['法娜凱亞|法娜凯雅|法娜凯娅|菈妲法娜', '法娜凱雅'],

	['丘比乌斯|裘皮乌斯', '裘皮烏斯'],
	['艾特莉|艾莉特|莉艾特', '莉艾特'],

	['玛裘西斯|马丘西斯|馬丘西斯', '瑪裘西斯'],
	['欧米洛斯|歐米洛斯', '歐米洛斯'],

	['塔拉波斯|塔拉博斯|タラボス|塔拉老板', '塔拉博斯'],

	['艾奇古斯|埃奇苟斯', '埃奇苟斯'],
	_word_jp1('大关|戴甘|ダイガン', '戴甘'),



	['库吉格|库奇古', '庫吉格'],
	['吉安古|赞格|全古', '贊格'],

	['斯普里格', '斯普里格'],

	_word_jp1('阿瑪佐娜|アマゾナ', '阿瑪佐娜'),

	/**
	 * 维洛斯
	 */

	['埃卡拉斯|艾卡拉斯|阿卡琉斯|阿喀琉斯', '埃卡拉斯'],
	['柯尔菲娜|克尔菲娜', '柯爾菲娜'],
	//菲莉欧娜

	['颇尔托斯|波鲁托斯', '波鲁托斯'],

	/**
	 * 蕾娜
	 *
	 * 德涅波拉
	 * 光树
	 *
	 * 战乙女德涅波拉
	 */
	['妮娅', '妮婭'],
	['梅迩菲娜', '梅邇菲娜'],

	_word_jp1('蕾娜|レーナ', '蕾娜'),

	_word_jp1('光树|コウキ', '光树'),

	/**
	 * 玛曼（マーマン）赤河岸边的哈提（ハッティ）王国灭亡
	 * 拉比琉斯
	 *
	 * 巴頓曾經是襲擊了艾里亞迪亞
	 *
	 * 睡眠与梦之神赞特
	 *
	 * 蛇之女王蒂亚特纳
	 * 蛇之王子达哈克呢。是蛇之女王迪亚多娜的儿子
	 *
	 * 戴蒙卢德 デイモンロー 惡魔之王
	 *
	 * 西亞多内海的人魚
	 */
	['拉比琉斯|拉维琉斯', '拉維琉斯'],
	['蒂亚特纳|迪亚多娜|迪雅多娜', '迪雅多娜'],
	//['迪雅多娜|迪[亚亞]多娜|迪亞多娜', '迪雅多娜'],

	['扎法菈妲|扎法拉達', '扎法菈妲'],
	['达哈克', '達哈克'],

	['艾克利普斯', '艾克利普斯'],
	['贝努', '貝努'],

	['阿波菲斯', '阿波菲斯'],
	['吉普希尔|ジプシール', '吉普希爾'],

	['混沌之灵杯|混沌的灵杯', '混沌之灵杯'],

	['上位元?精灵?', '上位精灵'],
	['(暗|冰)元精', '$1之精灵'],


	/**
	 * @todo 摩多噶尔
	 *
	 * 红玉公子扎夏
	 * 蛆蝇的大僧正的扎尔比多大人
	 *
	 * 魯瓦尼亞
	 * 桑修斯
	 *
	 * 桑修斯的村女溫蒂
	 * 米卡尔
	 *
	 * 亞雷玛尼亞的大地
	 * 这里是扎尔基西斯所支配的魯瓦尼亞的北方的地域。
	 */
	['摩多噶尔', '摩多噶爾'],
	['吉西欧', '吉西歐'],
	['貝依?古', '貝依古'],

	/**
	 * @todo 亞里亞蒂亞
	 *
	 * 元老院
	 * 图利亚（トゥリア）。是这个国家工商会的会长女性
	 * 元老院议员首席的纳丘乌斯（ナキウス）・菲利特列克斯（ペリクレトス）
	 *
	 * 名为科尔尼斯的元老院议员
	 * 塞维利亚夫人是这个国家有力人士的妻子
	 *
	 * 图卡姆（テュカム）货币
	 */
	['阿裏亞德|亚利亚多|阿利亚德|亚利亚多|亞利亞多|亚里亚諾', '亞利亞多'],
	['亞裡亞蒂亞|阿里亚迪娜|亞莉亞迪娜|亞里亞蒂亞|亚里亚蒂亚|阿里亚迪亚|艾里亞迪亞|アリアディア', '亞里亞蒂亞'],

	['[迪提][塞赛]西[亞亚]|泰瑟西亚', '迪塞西亞'],

	['克拉蘇斯|克拉苏斯|庫拉斯|クラスス', '克拉蘇斯'],
	['托魯瑪魯基斯|特馬爾基斯|トルマルキ', '托魯瑪魯基斯'],

	['塞维利亚', '塞維利亞'],
	['科尔尼斯', '科爾尼斯'],
	['纳丘乌斯', '納丘烏斯'],
	['图利亚', '圖利亞'],

	['キシュ|奇修|基修|基休', '基修'],

	/**
	 * 驴之耳
	 *
	 * 马尔西亚斯（マルシャス）
	 * デキウス=德基乌斯「西耶娜的哥哥」 菲利特列克斯
	 *
	 * 管理本剧场的埃尔弗斯大人的神官库莉欧
	 *
	 * 名為艾诺埃的女性已經不存在了。取而代之的是叫做艾拉的女性。
	 * 有著黑山羊頭的泽亚尔ー惡魔，現在要稱為澤魯
	 */

	['泽亚尔', '澤亞爾'],
	// 艾拉 = 艾诺埃
	['艾诺埃', '艾諾埃'],

	['西耶娜', '西耶娜'],
	['马鲁夏斯|马尔西亚斯', '馬魯夏斯'],
	['米达斯', '米達斯'],

	['德基乌斯', '德基烏斯'],

	['库莉欧|库莉殴', '庫莉歐'],

	['安魯非里亞|埃爾菲莉亞', '埃爾菲莉亞'],
	['驴之耳', '驢之耳'],

	/**
	 * シズフェ=希茲菲
	 *
	 */

	//
	['戈丹|高登', '戈丹'],
	['希茲菲|希丝菲', '希茲菲'],
	['玛蒂亚?|马蒂亚?', '瑪蒂亞'],
	['凯娜', '凱娜'],

	['诺维斯', '諾維斯'],

	//レイリア
	['蕾伊莉亚|萊利亞|蕾伊利亚|蕾伊莉亞', '蕾伊莉亞'],

	['諾拉|娜拉', '娜拉'],
	['賈絲汀|贾丝廷|贾丝婷', '賈絲汀'],

	/**
	 * 水之勇者的ネフィム
	 */
	['ネフィム|奈非姆|涅菲姆|奈非瑪', '涅菲姆'],

	/**
	 * 罗库斯王国
	 */
	['罗库斯|ロクス', '羅庫斯'],

	/**
	 * 基鲁塔尔
	 */
	[[
		'阿特拉(娜|納)庫(雅|娅|拉)|埃托拉娜庫亞|阿特拉納庫拉|阿特拉娜庫雅|阿特拉納庫亚|艾朵拉娜库亚',

		'阿特拉纳克亚?',
		'(阿特|艾朵|埃托)拉(娜|纳)库(雅|亞|娅|拉)',

	].join('|'), '阿特拉娜庫雅'],
	['(阿特|艾朵|埃托)拉娜|アトラナ|阿特拉纳', '阿特拉娜'],

	['艾烏莉亞|艾薇利亚|尤莉亚|艾丽娅|艾歐莉亞', '艾烏莉亞'],

	['基魯塔尔', '基魯塔爾'],
	['布魯尔', '布魯爾'],


	['納尔古尔|娜迩葛尔|娜尔葛尔|娜邇葛爾|纳尔戈尔|纳尔噶尔|納爾戈爾', '娜邇葛爾'],
	['贝洛斯|维洛斯|贝罗斯|洛克斯|韋羅斯', '維洛斯'],
	['阿爾戈亞|阿尔戈亚|阿戈爾亚?', '阿爾戈亞'],
	['卡農|卡隆|卡伦', '卡隆'],

	/**
	 *
	 */


	/**
	 *
	 */
	['米濃|米浓|米农|米農|美農', '米濃'],

	['聖蕾(娜|斯)(莉|利)?亞?共和国', '聖蕾娜莉亞共和国'],

	['萨里亚|萨莉亚', '薩里亞'],

	['帕西芭亞|帕西佩亚|帕西帕艾拉', '帕西芭亞'],

	['阿克伦|阿克隆|亚克隆|阿克倫', '阿克倫'],


	['烏斯之?街', '烏斯之街'],

	['濕地|濕原', '濕地'],

	/**
	 * 妖精
	 */
	//精灵
	['森精|妖精', '妖精'],
	['多莱亚多', '多萊亞多'],
	['涅莱德', '涅萊德'],

	/**
	 *
	 */
	['盧西恩|ルウシエン', '盧西恩'],
	_word_jp1('忒斯|テス', '忒斯'),
	_word_jp1('皮婭拉|ピアラ', '皮婭拉'),
	_word_jp1('オレオラ|歐蕾奧拉', '歐蕾奧拉'),
	_word_jp1('尼妙|妮妙|ニミュ', '妮妙'),

	_word_jp1('塔姆里爾', '塔姆里爾'),

	_word_jp1('卡塔霍夫', '卡塔霍夫'),

	_word_jp1('リベザル|里貝扎爾', '里貝扎爾'),

	/**
	 *
	 */
	_word_jp1('カジーガ|卡吉伽', '卡吉伽'),
	_word_jp1('ヤサブ|亞薩布', '亞薩布'),

	/**
	 *
	 */
	_word_jp1('ボティス|布提斯|波緹絲', '波緹絲'),

	/**
	 * 哈吉斯（ハギース）
	 * 萨特罗斯（サテュロス）
	 * 卡尔基诺斯被称为化蟹。
	 * 巴顿 バドン
	 *
	 * 女性的食尸鬼（グール）也被叫做古拉（グーラ）
	 */

	_word_jp1('非利昂|フェリオン', '非利昂'),

	['萨特罗斯', '薩特羅斯'],
	['巴顿', '巴頓'],

	['戈尔贡', '戈爾貢'],

	['ムシュマッヘ', 'ムシュマッヘ'],

	//矮人 地精 哥布林
	['地精|哥布林', '哥布林'],
	['奧(伽|加)族?|食人魔', '食人魔'],
	//['人狼|狼人', '人狼'],

	['狮鹫|格里芬', '獅鷲'],
	['鹫马|骏鹰|西伯格里夫', '鷲馬'],
	['飞马|佩加索斯|珀伽索斯', '飛馬'],

	['精靈', '精灵'],

	['精靈（ELF）', '妖精（ELF）'],
	['森精', '妖精'],

	['米陶洛斯|弥诺陶洛斯|米諾陶洛斯|米諾陶烏斯', '米諾陶洛斯'],

	['戈雷姆', '哥雷姆'],

	['阿(拉|剌)克(尼|涅|涅|妮|捏)|阿剌克涅|阿剌克捏|阿尔凯尼', '阿剌克涅'],

	['斯特里格斯|斯特里希斯', '斯特里希斯'],

];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	...lazymarks['zh'],

	['勇者|勇士', '勇者'],
	['(暗黒|黒暗)騎士', '暗黒騎士'],
	['法の?騎士', '法の騎士'],
	['騎士', '騎士'],

	['盾之女神', '顿之女神'],

	['劍の(乙女|少女)', '劍の乙女'],
	['黑髮[の之的]賢者(?:[ ]?(千雪))?', '黑髮の賢者$1'],
	['黑髮[の之的]?賢者(?:[ ]?(千雪))', '黑髮の賢者$1'],
	['賢者', '賢者'],

	['锻冶|鐵冶', '锻冶'],

	['(吸血鬼)伯爵?', '$1伯爵'],

	//['[国國]', '国'],
	//['[圣聖]', '圣'],
	['[樹树]', '树'],

	[/\[女昌\]/g, '娼'],
	[/\[女支\]/g, '妓'],

	['娼婦|娼妓|changfu', '娼妓'],

	['丨', '!'],

	['\\([ ]+\\)', ''],

	// 視角
	[/^([\u4E00-\u9FFF][^\n]+[\u4E00-\u9FFF])◆$/gm, '◆$1'],
	[/^[・]([\u4E00-\u9FFF][^\n]+)$/gm, '◆$1'],
	[/^◆([\u4E00-\u9FFF][^\n]+)\n+/gm, '◆$1\n\n'],
	[/(\S)\n{1,2}◆/g, '$1\n\n\n◆'],

	[/([^\d\.\+\-\* ／\/])(\d+)(?=[^\d\.\+\-\* ／\/])/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}],

	...lazymarks[4],

	...lazymarks['ltrim'],

	[/^【([^【】\n]+)】/gm, '「$1」'],

	...lazymarks[1],
	...lazymarks[2],

	[/[【]/g, '「'],
	[/[】]/g, '」'],

	...lazymarks[3],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n[ 　]*\.[ 　]*(?=\n)/g, '\n'],

	[/\n+\-+\n*$/g, ''],

]) as IWords[];

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	'荣耀',

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
