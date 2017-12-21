/**
 * Created by user on 2017/12/9/009.
 */

export const lang = 'zh';

export const value = {
	chapter_id: '第{{0}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,

	volume_id: '第{{0}}章',
	volume_title: `$t(chapter_id, [{{0}}])：{{title}}`,
};

export const sp = '#_@_#';

export const words = [

	['— —', '——'],

	/**
	 * 部分簡繁日 字替換
	 */
	['莲|蓮', '莲'],
	['复', '復'],
	['国|國', '国'],
	['话', '話'],
	['[·‧・]', '・'],
	['围|圍', '圍'],
	['階|阶', '階'],
	['级|級', '級'],
	['亚|亞', '亞'],
	['薩|萨', '薩'],
	['絲|丝', '絲'],
	['爾|尔', '爾'],
	['烏|乌', '烏'],
	['贝|貝', '貝'],
	['賈|贾', '賈'],
	['諾|诺', '諾'],
	['庫|库', '庫'],
	['马|馬', '馬'],
	['納|纳', '納'],
	['奥|奧', '奧'],
	['战|戦', '戦'],
	['鳞|鱗', '鱗'],
	['爱|愛', '愛'],
	['茲|兹', '茲'],
	['連|连', '連'],
	['蚀|蝕', '蝕'],
	['创|創', '創'],
	//['炼|錬', '錬'],
	['锻|鍛', '鍛'],
	['铠|鎧', '鎧'],
	['术|術', '術'],
	['渊|淵', '淵'],
	['鲁|魯', '魯'],
	['温|溫', '溫'],
	['維|维', '維'],
	['残|殘', '殘'],
	['猪|豬', '豬'],

	['位什麼', '為什麼'],
	['(不死者?)[話话]', '$1化'],
	['而后在', '之後在'],

	['解開實，', '解開時，'],
	['四肢成現', '四肢呈現'],
	['看來身前', '看來生前'],
	['進化灰飛', '進化會飛'],
	['馬車行不死', '馬車型不死'],

	['回來的之後', '回來之後'],
	[`恶${sp}心`, '噁心'],
	[`触${sp}手`, '触手'],
	[`白${sp}痴`, '白痴'],
	[/\*\*[纵縱]/g, '操縱'],
	[`打${sp}倒`, '打倒'],
	[`固${sp}守`, '固守'],
	[`貴${sp}族`, '貴族'],
	[`自${sp}由`, '自由'],
	[`討${sp}伐`, '討伐'],
	[`竊${sp}聽`, '竊聽'],
	[`色${sp}情`, '色情'],
	[`禁${sp}止`, '禁止'],
	[`淫${sp}穢`, '淫穢'],
	[`下${sp}流`, '下流'],
	[`含${sp}著`, '含著'],
	[`調${sp}教`, '調教'],
	['敲si', '敲死'],
	['弓虽', '強'],
	['女干', '奸'],

	['很方面', '很方便'],

	['娼婦|娼婦', '娼婦'],

	['壹([声身])', '一$1'],

	['就事就', '就是就'],
	['(困難)就事', '$1就是'],

	['詳細其況', '詳細況'],

	['之配者', '支配者'],

	['範圍得大小', '範圍的大小'],

	['肉體語言', '肢體語言'],

	// @todo 擊
	['(不斷擊|暈|昏)到', '$1倒'],
	['一樣擊到的', '一樣擊倒的'],
	['被擊到', '被擊倒'],

	[`前現(${sp}|[，、。也\n]|$)`, '前線$1'],
	[`選像(${sp}|[，、。也\n]|$)`, '選項$1'],

	['社會行像', '社會形象'],

	['哥雷魯|哥雷姆|格雷姆', '哥雷姆'],
	['阿[拉剌]克[尼涅涅妮捏]|阿剌克涅|阿剌克捏', '阿剌克涅'],
	['被首再', '被守在'],
	['拉米[亚亞娅雅]|阿米拉米亚克|拉米亚克|拉米那克', '拉米亞'],

	['卻時是', '確實是'],
	['不负责人', '不负责任'],

	['也受(露出)', '野獸$1'],

	['(能)就值(跟)?', '$1確實就職$2'],

	['攻擊範為', '攻擊範圍'],

	['(工|女王|墓園|兵隊)綘', '$1蜂'],

	['([反答])[复覆復]', '$1覆'],

	['多於(的)', '多餘$1'],
	['(太)多於', '$1多餘'],

	['發案者', '提案者'],
	['(教學|贈與|信仰)(對像|對相|對象)', '$1對象'],

	['方變活動', '方便活動'],

	['初新者', '初心者'],

	['待再', '待在'],
	['感知道', '感知到'],

	['成為裡想', '成為理想'],
	['掉以輕新', '掉以輕心'],
	['全原的', '全員的'],
	['用興鍛鍊', '用心鍛鍊'],
	['這麼用興', '這麼用心'],
	['輕意', '輕易'],
	['與背其他', '與被其他'],

	// @todo 已/以
	['已經受入', '已經收入'],
	['已([你一自班是]|不堪)', '以$1'],
	['还已权', '还以权'],
	['我已那', '我以那'],
	['要已公', '要以公'],
	['，已阿', '，以阿'],

	['玩全部一樣', '完不一樣'],

	['在[裡裏里](社會|社会)', '在裏社會'],

	['不觉的', '不觉得'],

	['重復着', '重覆着'],
	['恢覆', '恢復'],

	['沒發絕', '沒發覺'],

	['傍边', '旁邊'],

	[/^([^\s　]*)師附/mg, '$1師父'],
	[/^([^\s　]*)指少/mg, '$1至少'],

	['從新編篡', '重新編篡'],
	['將這先經驗', '將這些經驗'],
	['時代得我', '時代的我'],
	['不要對決果抱', '不要對結果抱'],
	['獲得任合', '獲得任何'],
	['自身其忘的', '自身期望的'],
	['中為發現的', '中未發現的'],
	['的人重、', '的人種、'],
	['一邊盡型', '一邊進行'],
	['(.)性課人', '$1性客人'],
	['是故問，', '是顧問，'],
	['或者缺發', '或者缺乏'],
	['個話做', '個化作'],

];

export const words_maybe = [

	'&(gt|lt|amp);?',
	//'&(gt|lt|amp);?',

	'成保',
	'[裡裏里]社[會会]',
	'叫說',
	'成強',
	'成原',
	'首再',
	'裡想',
	'受入',
	'為發現',
	'故問',

	'指少',

	'得我',
	'任合',
	'課人',

	'既得',

	'大工(?!程)',
	//'枪械',
	'不呱',
	'就值',
	'進話',
	'就事',
	'慢生活',

	'從新',

	'玩全',
	'全部(?!人)',

	'已(?![经經。喔])',

	'\\<',

	/(.{1,2})?((?:勇者|神)\?)(.{1,2})?/g,

	//'之巢|巢穴',

	'[覆](?![盖盖])',
	'[复復](?![讐前中兴杂])',
	'受命(?!令)',
	'期理',
	'身前',
	'具集',
	'在世',
	'行像',

	'灰飛',
	'也受(?!到)',

	'草者',
	'大加',
	'限在',
	'是實',
	'後辦',
	'(?:被|會)成为',

	'甄别',

	'維目包',

	'龙杀',

	'魅了',

	'選像',
	'前現',

	'擊到',
	'成現(?!金)',

	//'[奥奧歐][克格]',

	/[\u4E00-\u9FFF]{1,2}[\?][\u4E00-\u9FFF]{1,2}/ig,

];

import * as self from './index';

export default self;
