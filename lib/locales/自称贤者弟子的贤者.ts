/**
 * Created by user on 2017/12/21/021.
 */

import { sp, IWords, vMaybe } from '.';
import * as StrUtil from 'str-util';
import sublib from './lib';
import { _word_jp1 } from './lib/index';

/**
 * 改成小說名字
 */
export const lang = '自称贤者弟子的贤者';

/**
 * 在這裡放此小說專屬的取代樣本
 */
export const words_source: IWords[] = [

	//['要取代的字', '取代後的字'],

	//['— —', '——'],

	['((電弧|亚克|Ar[ck]|方舟)大陸)(?! ?online)', '亞克大陸', 'ig'],
	['((Earth|亚斯)大陸)(?! ?online)', '亞斯大陸', 'ig'],

	['(方舟|弧形|弧光|阿萨|Ar[ck])[・ ]?(大地|地球|大陆|方舟|Earth)[　 ]*(online)?', '方舟・大地　ONLINE', 'ig'],

	['邓布鲁夫|邓不鲁夫|邓布利夫|邓布利多|鄧布魯多', '鄧布魯夫'],
	['神樂', '神樂'],
	['鈿女|钿女', '鈿女'],

	['索鲁哈尔哈尔|索尔哈尔|索鲁哈尔|首尔哈尔|索尔哈尔|首尔霍尔|索魯哈爾|索爾哈爾', '索魯哈爾'],
	['美(铃|玲)|梅琳', '美鈴'],

	[/(?:卢|露)米(?:娜|纳)(?:(?:莉|利)(?:娅|亚))?/g, '盧米娜莉亞'],
	[/阿蒂西亚|阿尔特西亚|アルテシア|阿爾緹希亞|阿璐缇希娅|阿蒂西亞|阿露緹希亞|阿蒂西婭/g, '阿蒂西婭'],



	['米拉|米菈|米扣|ミラ', '米菈'],
	//['バルガ|巴鲁卡|巴尔加', '巴鲁卡'],
	['雪莱|雪莉', '雪莉'],

	//['艾尔达・卢米娜莉亚'],

	['雅阁加农炮|亚格加农炮', '亞格加農炮'],

	['克罗斯|克雷乌斯|クレオス|克莱奥斯|克雷欧斯|雷克乌斯|克里乌斯', '克雷烏斯'],
	['Guraia|古瑞亚', '古瑞亞'],
	['玛丽安娜|玛莉安娜|玛利安娜', '瑪麗安娜'],

	['亞瑪拉狄|瑪麗亞', '亞瑪拉狄'],

	['(阿特拉斯|阿斯特拉)的?十界阵', '阿斯特拉的十界陣'],
	['阿特拉斯|阿斯特拉', '阿斯特拉'],

	['奧茲斯坦|奧茲史坦', '奧茲斯坦'],
	['尼爾瓦那|尼爾瓦納|涅磐|尼爾瓦娜', '尼爾瓦娜'],
	['阿爾凱特|阿魯凱特|阿路凯特', '阿爾凱特'],

	['(?:银|銀)之?(?:连|联)(?:塔|塔)', '銀之連塔'],

	['艾梅汝|艾梅拉|梅艾拉', '艾梅拉'],

	['法吉戴斯|弗吉迪斯|ファジーダイス|法吉迪斯', '法吉戴斯'],
	['星崎昴', '星崎昴'],
	['拉斯德納達|最終騎士|ラストラーダ|拉斯德那達', '拉斯德納達'],

	['所罗马|所罗门', '所羅門'],

	['希娜妲|赫娜塔', '赫娜塔'],

	['凯洛斯|卡洛斯', '凱洛斯'],

	['蕾蒂莎|蕾媞莎|莉蒂希娅', '蕾蒂莎'],
	['乌兹兰贝尔|沃兹兰伯特|沃茲蘭貝里|沃茲蘭貝爾|沃兹兰贝鲁|ワーズランベール', '沃兹蘭貝爾'],
	['乌兹|沃兹', '沃茲'],

	['阿露菲娜|阿尔菲娜|艾尔菲娜|アルフィナ', '阿爾菲娜'],
	['克莉斯蒂娜|克里斯蒂娜|克裏斯蒂娜|克莉絲蒂娜|克裡斯提娜', '克莉絲蒂娜'],
	['艾丽珍娜|艾蕾珍娜', '艾蕾珍娜'],

	['迦楼罗|加爾達|迦樓羅', '迦樓羅'],
	['珀伽索斯|伯珈索斯|珀加索斯', '珀伽索斯'],
	['艾泽法尔多|爱泽恩法尔德|艾泽夫鲁德|艾泽法鲁德', '艾澤法爾多'],
	['[緹提蒂]涅', '蒂涅'],
	['安(鲁|兒|儿|爾)(緹|提|蒂)涅|安露提捏|アンルティーネ', '安魯蒂涅'],

	[/凯(?:特?・?西)\??(?:喵|猫)?|凱特(?:喵|猫)/g, '凱西喵'],
	[/桑缇雅|桑蒂亚|桑緹雅|圣克蒂亚|圣克蒂亚/g, '桑缇雅'],

	['艾利斯法利乌斯|阿利斯法琉斯|阿莉斯弗利乌斯|艾利斯法拉里斯', '艾利斯法利烏斯'],
	['玛忒尔|马忒尔|瑪黛爾|マーテル|Martel|瑪忒爾|马忒耳|瑪忒耳', '瑪忒爾'],

	['波波特維茲|波波特維滋|ポポットワイズ', '波波特維茲'],

	['啊伦|阿伦|阿倫', '阿倫'],

	['德斯蒙德|デズモンド', '德斯蒙德'],
	['基斯|ギーズ', '基斯'],

	['格林達特|グリムダート|格倫達特', '格林達特'],

	['薩萊曼達|薩拉曼達', '薩拉曼達'],

	['越境法制官|巡迴監察官|巡回檢察官', '越境法制官'],

	['塞拉|蕾拉', '蕾拉'],

	['混色薔薇|奇美拉', '奇美拉'],

	['艾萨克?迈亚', '艾薩克・邁亞'],
	['艾萨克|艾薩克', '艾薩克'],
	[/\?(因巴蒂斯|诺克斯|ノックス|迈亚|协达尔|シェダル|朱雀|赤)/g, '・$1'],

	['贾马尔|伽玛尔|賈馬爾', '伽瑪爾'],

	['桑奇[之的](墓地|埋(?:藏|葬)地)', '桑奇的埋葬地'],

	['泽尔|泽鲁', '澤爾'],
	['协达尔|谢达露', '謝達露'],

	['赫克斯德赫賽|ハクストハウゼン|哈克斯特豪森|哈克特豪森|哈庫斯托豪森', '哈克斯特豪森'],

	['林克斯羅特|リンクスロット|林庫斯洛特', '林庫斯洛特'],

	['裘達斯|ジューダス', '裘達斯'],

	['トルリ|陶璐利', '陶璐利'],

	['格蘭林格斯|グランリングス', '格蘭林格斯'],

	['銀天之東風|銀天的艾歐羅斯|銀天のエウロス', '銀天的艾歐羅斯'],

	['魔法少女之夜|マジカルナイツ', '魔法少女之夜'],

	['竇蕾斯|ドーレス|道魯斯|竇蕾絲', '道魯斯'],

	['薩酷|ザック', '薩酷'],

	['马迪|玛蒂', '瑪蒂'],

	['路易絲|露易絲', '露易絲'],

	['希爾菲德|シルフィード', '希爾菲德'],

	['吉尔伯特|吉尔贝鲁特', '吉爾貝魯特'],
	['希爾巴翁|希爾巴瓦德', '希爾巴瓦德'],

	['愛雷歐諾拉|艾蕾奥菈|艾蕾歐諾拉|エレオノーラ|艾麗奧諾拉', '艾蕾歐諾拉'],
	['杰克古雷普|傑克古雷普|ジャックグレイブ', '傑克古雷普'],

	['(?:塞|圣|聖)多?波[利力]', '聖波利'],
	['泽飞', '泽菲'],
	['芙丽卡', '芙莉卡'],
	['梅艾拉', '艾梅拉'],
	['塞羅|賽羅|塞罗', '塞羅'],

	['多瓦尔|多瓦弗|德瓦夫', '德瓦夫'],
	['多瓦林|德瓦林', '德瓦林'],

	['托雷德|トライド', '托雷德'],
	['海因里希|哈因裡西', '海因里希'],

	['阿利奥托|阿利奧托|阿利奧託|阿利奥托', '阿利奧托'],

	['卢纳提雷克|鲁娜提克', '盧納提雷克'],
	_word_jp1('ルナティックレイク|盧納提雷克', '盧納提雷克'),

	['阿尔巴蒂努斯', '阿爾巴提奴斯'],

	['商會', '商會'],
	['梅露威鲁|梅爾維爾|梅尔维尔|麥爾維爾', '梅爾維爾'],

	['因巴蒂斯|伊巴蒂斯', '因巴蒂斯'],

	['斯密斯米|米斯密斯', '斯密斯米'],

	['瑪露與斯特雷麗茲|マール＆シュトレリッツ', '瑪露與斯特雷麗茲'],

	['靈獸', '靈獸'],
	['アクタルキア|阿克達魯克雅|阿庫塔露琪亞', '阿庫塔露琪亞'],

	['公國', '公國'],
	['(罗|羅)(兹|茲)(兰|蘭)', '羅茲蘭'],

	['(格雷戈利|格利高里|格里高利|格雷格林|古雷格利)', '格雷戈利'],
	['格雷戈利([烏乌]斯)', '格雷戈利烏斯'],

	['神之生命光辉的|神(之生)?命光辉的?圣杯', '神命光輝聖杯'],

	['媞莉耶爾|蒂丽艾露', '媞莉耶爾'],

	['塞德里克', '塞德里克'],
	['迪諾瓦(爾|魯)?', '迪諾瓦爾'],

	['惠方(卷|巻)', '惠方卷'],

	['(ロックオン|鎖定)(Ｍ|m)(弐|貳)型', '鎖定Ｍ貳型', 'ig'],

	['弗里奧|フリオ', '弗里奧'],
	['魔法書籍会社|グリモワールカンパニー', '魔法書籍會社'],

	['古代神殿聂普拉波利|古代神殿星云之城|古代神殿的白亚之城', '古代神殿星雲之城'],

	// 格林姆达特、艾利斯法拉里斯、奥兹史坦这三神国
	['格伦达特|格林姆达特', '格倫達特'],

	['冯塞西亚|弗赛西亚|芙塞西亚', '芙塞西亞'],

	['尤里乌斯|尤利烏斯|ユリウス', '尤裡烏斯'],

	['哥布林|哥不林', '哥布林'],

	['召喚|召换', '召喚'],

	['精灵|精靈', '精靈'],
	['机器|机械|機械', '機械'],

	['ミスリル|米斯里魯|秘銀', '秘銀'],

	['Primal forest', 'Primal Forest', 'ig'],

	['玛那|玛娜|瑪娜', '瑪娜'],

	[/瓦尔基里(\(女武神\))?/g, '女武神'],



	['静寂|寂静', '靜寂'],

	[/(公|工)会/g, '公會'],
	[/冒[险險]者([综总联统]合?)?([公工][会會]|组合)/g, '冒險者綜合公會'],
	['职人总合(组合|公会)', '職人聯合公會'],
	['術士組合', '術士公會'],

	[/(皇竜|精灵)\-/g, '$1・'],

	[/\(皇龙\)|（皇龙）/g, '【皇龍】'],

	['苹果欧蕾|苹果牛奶', '蘋果牛奶'],
	['(混合?|甜)([水浆果果酱]{1,2})欧蕾', '混合漿果歐蕾'],
	['[四全]季果?欧蕾', '四季果歐蕾'],

	[/预告(?:片|信|书|函|状)/g, '預告信'],

	['皇后之心|女皇的心脏|红心女王', '紅心女王'],

	['重[复復]|重覆', '重覆'],
	['布置', '佈置'],
	//['后(?!之)', '後'],

	//['里(?!乌)', '裡'],

	['布置', '佈置'],





];

/**
 * 實際使用的取代樣式
 */
export const words: IWords[] = sublib._word_zh_all([

	...words_source,

	['十有八九', '十之八九'],

	['始祖的?种子', '始祖种子'],
	['楽園の白霧', '樂園的白霧'],

	['树木?人', '树人'],

	['胡须|鬍鬚', '鬍鬚'],
	['财报', '财宝'],
	['能干', '能幹'],

	['Sense', 'Sense', 'ig'],
	[/RAID\b/ig, 'RAID'],
	['fantasy', 'Fantasy', 'ig'],

	['借口', '藉口'],

	['仨人?', '三人'],
	['壹', '一'],

	['区蒸府', '區政府'],
	['鱼唇', '愚蠢'],
	['从新', '重新'],
	['重複', '重覆'],

	//--------------------

	['(?:等级|Rank|ＲＡＮＫ(?:等级)?)[ \-—]?([a-zＡ-Ｚ])(?:等级)?', '$1级', 'ig'],
	['(?:等级)?([a-zＡ-Ｚ])[ \-—]?(?:等?级|Rank|ＲＡＮＫ)(?:等级)?', '$1级', 'ig'],

	['　([。【「])', '$1'],
	['([。】」])　', '$1'],

	[/([^a-z\d\-\+\.])([a-z\d])(?![a-z\d\-\+\.])/ig, function (..._m)
	{
		return _m[1] + StrUtil.toFullWidth(_m[2]);
	}],

	...sublib.lazymarks[4],

	...sublib.lazymarks['ltrim'],

	[/^([^「」\n【】\[\]［］]*)[\[［]([ ]*[…\u4E00-\u9FFF][^\n【】\[\]］]*)[\]］]/gm, '$1【$2】'],
	[/(「[^「」\n【】\[\]［］]*)[\[［]([ ]*[…\u4E00-\u9FFF][^\n【】\[\]］]*)[\]］]/gm, '$1【$2】'],

	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],

	[/([^】\n])(\n【[^\n]+】\n)/g, '$1\n$2'],
	[/(\n【[^\n]+】\n)([^【\n])/g, '$1\n$2'],

	[/\n[ 　]*\.[ 　]*(?=\n)/g, '\n'],

	...sublib.lazymarks['zh'],

]) as IWords[];

/**
 * 需要人工確認的屏蔽字或錯字用語等等
 */
export const words_maybe: vMaybe = [

	//'需要偵測的字',

	'组合',

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
 * @type {{chapter_id: string; chapter_title: string; volume_id: string; volume_title: string}}
 */
export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

export default exports;
