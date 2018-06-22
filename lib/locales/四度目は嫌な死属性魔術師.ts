/**
 * Created by user on 2017/12/18/018.
 */

import * as StrUtil from 'str-util';

import { sp, IWords } from '.';
import sublib from './lib';
import { _word_en } from './lib/index';

export const lang = '四度目は嫌な死属性魔術師';

export const value = {
	chapter_id: '{{0, num2zh}}話',
	chapter_title: `$t(chapter_id, [{{0}}])　{{title}}`,
};

export function words_callback(text)
{
	return text;
	//return StrUtil.toFullNumber(text);
}

export const words: IWords[] = sublib._word_zh_all([

	//达露西亚 ダルシア
	['[达達塔塔妲妲][爾尔露][希西希][亞亚]', '达露西亞'],
	[/[範范班泛班](?:[達达達]?[爾尔鲁魯贝貝]|[贝貝達达達][爾尔鲁魯]?)|班達爾|ヴァンダルー|小提琴/g, '班达魯'],
	[/[範范班泛班](大人|身邊|君)/g, '班$1'],
	[/([，。！、【一])[範范班泛班]([一，。！、])/g, '$1班$2'],

	// @todo 女僕
	['[沙莎薩萨][利莉][娅雅亚亞]|萨里亚|沙利婭|サリア', '沙利婭'],
	['[丽麗利莉][塔萨薩]', '麗塔'],
	['[萨薩][姆姆]|サム', '薩姆'],

	// @todo 食屍鬼/古尔
	['[薩萨][緹蒂提缇][莉莉][絲斯丝]|萨蒂亚斯|ザディリス|萨迪斯|蕯蒂利斯', '薩蒂莉斯'],
	['[巴帕][絲斯絲丝][緹提蒂蒂][亞亚雅]|巴斯提雅|巴斯迪亞', '巴斯蒂亞'],
	['[维維维][格賈贾][罗羅]|彼伽洛|彼伽罗|彼伽羅|維卡洛', '维格罗'],

	['[塔达塔][利蕾雷莉][亚亞]|塔利亞|タレア', '塔利亞'],

	['卡[奇契][亚亞]|卡西[亚亞]', '卡奇亞'],

	//ビルデ_(協助研究食屍鬼少子化的女食屍鬼_食屍鬼)
	['毕露媞|妣耳跌|彼魯帖', '毕露媞'],

	/**
	 * @todo 新生
	 * #37 #99
	 *
	 * ブラガ 布拉格 BLACK GOBLIN(黑哥布林)
	 *
	 * 則曼多 ゼメド 泽米多 ANUBIS(阿努比斯) 哥
	 * メメディガ 媚媚蒂嘉 梅美迪嘉 ANUBIS(阿努比斯) 妹
	 *
	 * 伯格 ANUBIS(阿努比斯)
	 *
	 * ゴーバ 戈巴 ORCUS(奥库斯)
	 *
	 * #49
	 *
	 * 嘉妲露|佳妲爾 ジャダル 食屍鬼
	 *
	 * #42
	 *
	 * パウヴィナ (活死人偽轉生_高貴豬頭人混血) 帕烏維納 帕碧娜 法奥碧娜 宝琳娜 女
	 */
	['布拉卡|布拉格|布拉伽|布拉加|ブラガ', '布拉格'],
	['果巴|戈巴|果帕|锅巴|贡巴|ゴーバ|哥巴', '戈巴'],
	['梅玫迪伽|媚媚蒂嘉|梅美迪嘉|メメディガ', '梅美迪嘉'],
	['泽梅多|則曼多|泽米多|ゼメド', '泽米多'],

	['[嘉佳伽伽][妲妲達达达][露爾尔尔]|賈达魯|ジャダル', '嘉妲露'],

	['帕(碧|[烏乌][維维])[娜納奈娜娜那]|法[奥奧]碧[娜納奈娜娜那]|帕[烏乌]维[娜納奈娜娜那]|帕烏維納|哈帕碧|パウヴィナ', '帕碧娜'],

	['BLACK GOBLIN', 'BLACK GOBLIN'],
	['暗?黑哥布林|ブラックゴブリン', '暗黒哥布林'],
	['黒小鬼', '黒小鬼'],

	['ANUBIS', 'ANUBIS'],
	['アヌビス|阿努比斯', '阿努比斯'],
	['冥犬鬼', '冥犬鬼'],

	['黒豚鬼', '黒豚鬼'],
	['暗黑歐克|奧庫斯|オーカス', '暗黑歐克'],
	['ORCUS', 'ORCUS'],

	//
	//拉批艾薩裘和亞瑪妲

	/**
	 * 骸骨要塞 骨人 酷诺翰
	 * 維比(ヴァービ)
	 * 拉比艾薩裘(ラピエサージュ) 菈比艾莎舒 女 #54 #59
	 *
	 * 雷慕鲁斯
	 *
	 * 八俣是拥有着九个脑袋的多头蛇 蒂尼西亞用最高级个体的尸体做出来的亡灵
	 */
	['[拉菈][批比彼][艾伊][薩萨莎][裘舒久]?|拉彼伊萨久|菈比艾薩裘|ラピエサージュ', '菈比艾薩裘'],
	['[酷庫库酷克][諾诺諾诺诺][翰翰漢亨汉]|庫諾瀚|クノッヘン', '庫諾漢'],
	['維比|范彼|ヴァービ', '維比'],
	['八俣|雅玛塔|ヤマタ|亞瑪妲', '雅玛塔'],

	/**
	 * @todo 蟲
	 *
	 * 比多|皮特
	 * 培因
	 */
	['比多|皮特|彼多|皮托|彼特', '皮特'],
	['培因|佩恩', '培因'],

	['克萊尔|クイン|庫恩', '克萊尔'],
	['杰赫納女王|格丽娜女王|ゲヘナクイーンビー', '格丽娜女王'],

	['ゲヘナビー|格拉娜比', '格拉娜比'],

	['セメタリービー|墓园蜜蜂|墓园蜂|塞尔塔利比|墓園蜂|塞米塔利比', '墓園蜂'],

	/**
	 * 不死树魔
	 */
	['艾赞|艾善|蓝染|爱赞', '艾赞'],

	// 史萊姆
	['奇尤魯|可爾|[庫库][鲁魯]|キュール|逑鲁', '可爾'],

	// 肉块
	['雷吉欧|雷奇奧|雷吉安|レギオン|雷里欧|雷吉恩|欧吉恩', '雷吉欧'],

	/**
	 * @todo 巨人
	 *
	 * ザンディア_(巨人族英雄《小小天才》_第二王女_全屬性適應_殭屍) 桑提亞
	 * ジーナ_(巨人族英雄《聖女》_原祭司長_殭屍) 吉娜
	 * ダタラ_(巨人族鍛造師_殭屍) 達塔拉
	 * ズラン_(巨人族斥侯轉忍者_殭屍) 茲蘭
	 */
	['波庫斯|博克斯|沃[尔爾]克斯|奥克斯|ボークス|博古斯', '沃尔克斯'],
	['努阿扎|[努奴]阿[薩萨]|[诺努][阿亚亞][莎扎]|努阿薩', '努阿扎'],

	['[蕾雷][比碧][亞亚雅]|利维亞|利維[亞亚]|蕾比雅|レビア|雷維亞', '蕾比雅'],
	['第一王女|大公主', '第一王女'],

	['ザンディア|桑提赞亞|[萨莎][提蒂][亚亞]|桑提亞|赞蒂亚|莎蒂亞|蕯蒂亞', '莎蒂亞'],
	['ジーナ|吉娜', '吉娜'],
	['ダタラ|鞑塔拉|達塔拉|达塔拉', '達塔拉'],

	// #83 沃尔克斯的女儿戈法
	['贡法|歌法|戈法|歌法', '歌法'],

	['巨人族|巨人种族?', '巨人种'],

	['ズラン|[茲兹]楠|[茲兹]蘭|兹楠|祖伦', '祖伦'],

	// @todo 人
	['[路鲁魯][切其奇][里里][亞亚][诺諾]|路切里阿久|路西里亚诺|路奇利亞多|ルチリアーノ|魯奇阿諾', '魯奇里亞诺'],

	['卢沙|贝萨', '卢沙'],

	['汉娜|汉萨', '汉娜'],

	['萊利|ライリー|拉里', '萊利'],

	['金伯利|キンバリー|金巴利', '金伯利'],

	// @todo 吸血鬼
	['[特蒂][涅尼]西[亞亚]|テーネシア|蒂妮西婭|蒂尼茜亞', '蒂尼西亞'],
	['[爱愛艾][莲蓮]', '愛莲'],
	['愛莲奧諾拉|エレオノーラ', '愛莲奧諾拉'],

	['[比彼][爾尔鲁魯][凱凯凯][因恩]', '比尔凯恩'],
	['比古巴蒙|谷巴蒙|古巴蒙', '谷巴蒙'],
	['[蓓贝貝][爾尔][蒙蒙][多德]|ベルモンド', '貝尔蒙德'],

	['賽路庫林多|賽尔庫仁特|セルクレント', '賽路庫林多'],

	['[馬马]伊魯[茲兹]|マイルズ', '馬伊魯茲'],
	['埃兰|艾拉', '艾拉'],

	['ゾッド|澤多|索德', '澤多'],
	['澤爾哥多里昂|ゾルコドリオ|索尔科多里奧', '澤爾哥多里昂'],

	['原種', '原種'],

	/**
	 * @todo 神
	 *
	 * 紀錄之神?裘拉托斯（記録の神　キュラトス）
	 *
	 * 詹達庫（ザンターク）
	 * 炎與破壞的戰神・詹達庫
	 *
	 * 《大地与匠的母神》博蒂所选召的勇者，希爾維洛
	 *
	 *
	 */
	['[羅罗]多(可[爾尔]特|特[鲁魯]特)|羅多可爾特|罗多可尔特|罗德科尔特', '罗多特魯特'],
	['阿[尔爾]达|阿魯達|阿納达|阿[纳納][达達]|アルダ|阿达尔', '阿尔达'],

	[`邪神${sp}巴魯魯夏培`, '邪神・巴魯魯夏培'],

	//魔王古杜兰斯
	['古督拉尼斯|古杜兰斯|古敦拉尼斯|グドゥラニス|格德拉尼斯|格拉尼斯', '古杜兰斯'],

	// フィトゥン => fitun => 菲頓
	['电场|场电|菲頓|fitun|费图恩|フィトゥン|菲尔伦|菲尔(?!格)', '菲頓'],
	['雷电之神', '雷雲の神'],

	['アーティファクト|阿蒂法特', '阿蒂法特'],

	['[維维][妲达塔達]|維達|ヴィダ', '維達'],
	['维达新種(?!族)|ヴィダの新種族|維達の?新種?族', '維達的新種族'],
	['ヴィダの?御子|維達的?御子|维达的?皇子|维达御子', '維達的御子'],

	['愛と生命の女神|愛與生命的女神', '愛與生命的女神'],

	['維達的睡所|ヴィダの寝所|維達之睡所', '維達の寝所'],

	['赞塔庫|詹達庫|赞塔克|桑塔克|ザンターク|桑德克|扎德克|扎塔克', '詹達庫'],
	['堕ちた戦神|堕落的战神', '堕落的战神'],

	['火焰與破坏的战神|炎と破壊の戦神|火焰和破坏的战神|破坏與火焰之战神', '炎と破壊の戦神'],

	//『冰之神』尤配翁
	['尤佩昂|尤配翁|尤培因', '尤佩昂'],

	['希薩利翁|西萨利翁|西扎里昂|シザリオン', '希薩利翁'],

	['ゴドウィン|戈德溫|哥德文|哥德尔文', '戈德溫'],

	// 大地と匠の母神
	['ボティン|博坦|博蒂', '博坦'],
	// 水と知識の女神
	['ペリア|佩利亞|沛莉雅|比利亞', '沛莉雅'],

	['水與知识的女神|水と知識の女神', '水與知識的女神'],

	['海之神', '海之神'],
	['特里斯坦|特立斯林|トリスタン', '特里斯坦'],

	['苏培因|苏佩恩|ユペオン', '苏佩恩'],

	// 巨人神ゼーノ
	['芝諾|ゼーノ', '芝諾'],

	// 獣神ガンパプリオ
	['干帕普利奧?|剛帕普莉歐|ガンパプリオ', '干帕普利奧'],

	//时间和法术之神
	['時と術の魔神|时與術之魔神|时間與術式?の魔神', '時與術之魔神'],

	['理刻[連连]多|利[庫库]伦|リクレント', '理刻連多'],
	//创造和空间之神
	['[茲兹兹祖][鲁魯][旺温温]|茲魯溫|ズルワーン', '祖魯旺'],

	// 『地図の女神』ワーンライザ
	['ワーンライザ|瓦恩萊萨|瓦恩萊萨', '瓦恩萊萨'],

	['莱茵兰度|萊茵蘭多|ナインロード|奈茵絡德|納恩卢德', '萊茵蘭多'],

	// 英雄神
	['法卯|ファーマウン|法馬斯|法斯特', '法卯'],
	['戈尔德|ゴルド', '戈尔德'],
	[`(?:法卯|ファーマウン|法馬斯|法西斯)${sp}(?:戈尔德|ゴルド|哥德)`, '法卯・戈尔德'],

	['泽露库斯|泽尔克斯|ゼルクス|塞尔克斯|泽魯克斯|賽尔克斯', '泽露库斯'],

	['狩猎之神|狩?猟の神', '狩猎之神'],
	['リシャーレ|里夏丽|利纱尔|里的裡夏丽|裡夏丽|利沙雷|利夏勒', '利纱尔'],

	['ヘルプミー|赫普米', '赫普米'],

	// 『晶角龍神』リオエン
	['リオエン|里約恩|里約尔', '里約恩'],

	// 『迷宮の邪神』グファドガーン
	['グファドガーン|格法多加恩|格法德加恩', '格法多加恩'],

	['魔塵の邪神', '魔塵の邪神'],
	['邪闇の悪神', '邪闇の悪神'],

	['眠りの神|睡眠女神|睡眠の神', '睡眠の神'],

	['迷宮的邪神|迷宮の邪神', '迷宮的邪神'],
	['格法多加恩|グファドガーン|古法德纲', '格法多加恩'],

	/**
	 * 墮醉之邪神・珠莉咱娜妣（堕酔の邪神　ヂュリザーナピ）轉生體的莉莎娜
	 * 「暴虐之嵐」之中的澤多（ゾッド）……其實是原種吸血鬼澤爾哥多力歐（ゾルコドリオ）
	 *
	 * 《迅雷》修奈達
	 * 女矮人族梅爾汀
	 * 多爾頓
	 */
	['莉莎娜|莉莎娜|リサーナ|丽塔娜', '莉莎娜'],
	['堕酔の邪神|醉醉的邪神', '堕酔の邪神'],

	['珠莉咱娜妣|ヂュリザーナピ|朱莉詹娜皮斯', '朱莉詹娜皮斯'],

	['施耐德|修奈達|施奈德|シュナイダー', '修奈達'],

	['梅爾汀|メルディン|梅蒂', '梅蒂'],
	['多爾頓', '多爾頓'],

	['ティアマト|蒂亞瑪', '蒂亞瑪'],

	['悦命の邪神|悦命的邪神', '悦命的邪神'],
	['非非流修咯咯|ヒヒリュシュカカ|西里酥卡卡', '西里酥卡卡'],

	/**
	 * @todo 勇者
	 *
	 * 奈茵絡德（ナインロード）：
	 * 勇者・奈茵絡德，風與藝術之神・希薩利翁所召喚的勇者，本名九道陽菜
	 *
	 * ザッカートの試練
	 * 寨卡特
	 *
	 * 而她选择了打算在市镇小工厂上吊自杀的青年坂户启介。也就是之后的寨卡特。
	 */

	['[薩萨]卡特|寨卡特?|寨卡特|劄坎托|扎卡特', '寨卡特'],
	['米[亥海][尔爾]|米海耶爾', '米亥爾'],
	['奈洛特|奈茵絡德', '奈茵絡德'],

	['寨卡特の試練|寨卡特的?考验', '寨卡特的試練'],

	['希爾維洛|ヒルウィロウ|希尔維罗|席尔維尔罗', '希爾維洛'],

	['娑爾妲|ソルダ|索尔达', '娑爾妲'],

	['弧光|アーク|阿珂', '阿珂'],

	['海茵茲|海因茨|海恩兹|海因茲|海[因茵恩][茲茨]|海恩滋|ハインツ', '海因茨'],

	['ジェニファー|珍妮佛|珍妮弗|詹妮弗|杰尼弗', '珍妮佛'],
	['德拉|デライザ|德蕾莎|蒂蕾莎', '蒂蕾莎'],

	['五色の刃|五色之刃', '五色之刃'],

	/**
	 * @todo 龍
	 *
	 * 五惡龍神?菲提魯古（五悪龍神フィディルグ）與暴邪龍神?魯維茲馮爾
	 * 龍皇神?瑪爾敦庫
	 * 暴邪龍神・魯維茲馮爾
	 */
	['弗迪[尔爾]克|菲提魯古|菲的卢戈|菲迪魯克斯?|フィディルグ|菲尔格|菲迪尔', '菲迪魯克'],

	['瑪爾敦庫|馬路杜庫|マルドゥーク|瑪德卢庫', '瑪爾敦庫'],

	['魯維茲馮爾|ルヴェズフォル', '魯維茲馮爾'],

	//原《鳞王》
	['里昂|力歐', '里昂'],

	//卢卡斯

	['卡爾康|卡[尔爾]坎', '卡尔坎'],

	// @todo 卡西姆
	['卡希姆|卡西姆|カシム', '卡西姆'],
	['[費费菲][斯施斯][塔特塔]|菲斯塔|フェスター', '费施特'],
	['傑諾|泽诺|杰諾|ゼノ', '泽诺'],
	['[莉丽莉][奈娜娜那]', '丽娜'],
	['丽(─+)娜', '丽$1娜'],

	/**
	 *
	 */
	//米爾古盾國
	['(?:米爾|米[鲁魯])[古固]盾[国國]|米魯庫盾国|米尔格盾国|ミルグ盾国', '米魯固盾国'],

	['兰斯顿|レッグストン|雷夠斯顿|雷格斯顿?|雷古斯托|雷酷斯德|雷庫斯德', '兰斯顿'],

	['阿尔萨德|アルサード', '阿尔萨德'],
	['サルア|萨尔亞', '萨尔亞'],

	['切[札萨薩][列雷]|切扎爾|切蕯雷|チェザーレ', '切薩雷'],
	['庫爾[特德]|クルト', '庫爾特'],

	/**
	 * 将军 / 宰相
	 *
	 * 哥 切薩雷 切萨雷 切札列
	 * 弟 庫爾特・雷酷斯德  雷庫斯德
	 *
	 * 托马斯・帕尔帕库 托马斯・帕鲁巴佩克
	 */

	['托[马馬]斯|多瑪斯', '托馬斯'],
	['帕尔帕库|帕[鲁魯]巴佩克|帕爾帕貝庫|帕魯巴佩克|パルパペック|帕尔帕克', '帕爾巴佩克'],

	['戈尔单|高尔丹|ゴルダン', '戈尔单'],

	['拉伊蘭度|奈茵蘭多', '拉伊蘭度'],

	//尼阿奇鎮（ニアーキの町）：哈托納公爵領，遇到海茵茲的城鎮，dead907閣下翻作"米納其"
	['尼阿奇|米[納纳][其奇]', '米納其'],

	['塔罗斯海姆|塔洛斯海姆|塔洛海姆斯|塔洛斯赫姆|海洛斯海姆|タロスヘイム|塔罗斯(?:海姆)?|达洛斯海姆', '塔洛斯海姆'],

	['タロス|塔洛斯', '塔洛斯'],
	['太陽の巨人', '太陽の巨人'],

	/**
	 * @todo 薩烏隆公爵領
	 */
	['绍恩|[薩萨][烏乌][隆罗]|索伦|塞伦|薩烏羅|サウロン|索龍', '薩烏隆'],
	['(薩烏隆|沙龙)解放戦線', '薩烏隆解放戰線'],

	['伊莉絲|伊莉斯|伊利斯|イリス|伊丽斯丝?|伊丽絲|伊莉絲', '伊莉絲'],
	['貝亞哈(魯德)?|貝阿哈魯特|贝尔哈[鲁魯]德|貝亞哈特里?|ベアハルト', '貝爾哈魯德'],
	[/\?(貝爾哈魯德)/ig, '・$1'],

	[/馬尔梅|馬梅米|マルメ|馬爾默|馬米|麦梅/ig, '馬爾默'],

	[/解放的姬騎士|解放之姬騎士|解放の?(公主|姫)騎士/ig, '解放の姫騎士'],


	['(?:庫歐克|克里科斯|クオーコ)・(拉古修|拉拉斯|ラグジュ|拉斯林)', '克里科斯・拉古修'],
	['(?:庫歐克|克里科斯|クオーコ)|克理科斯', '克里科斯'],

	['鉄錆兵団|铁锈兵団', '鉄錆兵団'],

	//['キューバス|队列葩士', '队列葩士'],

	['デビス|戴維斯', '戴維斯'],
	['ハッジ|帕吉', '帕吉'],

	['ランドルフ|兰多夫', '兰多夫'],

	['ルデル|魯德尔', '魯德尔'],

	['法萨里尔特|法萨里克', '法萨里克'],

	/**
	 * 力克・帕利斯（リック・パリス）
	 * 雷盟多・帕利斯（レイモンド・パリス）
	 */
	['力克|利克|リック', '利克'],
	['雷盟多|雷蒙德|雷蒙得|レイモンド', '雷蒙德'],
	['帕利斯|帕里斯|帕裏斯|巴里斯|パリス', '帕里斯'],

	// ---------------------

	//哈托納公爵領
	['哈[德托][纳納]|哈多那|哈多那|哈托納|哈托拉|哈特納|ハートナー', '哈托納'],
	['尼亞吉|尼亞基|ニアーキ', '尼亞吉'],

	//巴爾切布魯古

	// 選王國
	['歐爾巴烏姆|欧鲍姆|[奥奧]卢邦|奧尔巴|オルバウム', '奧卢邦'],
	['選王国', '選王国'],





	// 海国
	['卡拉哈多|加拉哈德|カラハッド', '加拉哈德'],
	['海国卡拉(哈多)?', '海国加拉哈德'],

	/**
	 * 巴恩蓋亞大陸南部
	 */
	['邦盖[亞亚]|[巴伯]恩[蓋盖][亞亚]|柏凱恩|巴恩加亞|巴恩加伊', '巴恩蓋亞'],

	/**
	 * 山铜（古希腊语：Ὀρείχαλκος， 英语：Orichalcum，又译奧利哈鋼、俄瑞卡尔科斯、奥里哈鲁根、奧利哈康或王者金屬)
	 */
	['[奥奧歐][里理利][哈][爾尔鲁魯]?[鋼鋼康根]|山铜|奧里哈鋼|奧利哈刚', '奧里哈鋼'],

	/**
	 * DUN #36
	 *
	 * 加朗之谷、多伦水宴洞、沃尔克斯亚龙草原、巴利肯减命山
	 *
	 * 扎納爾帕多娜地下的通稱為《避難所》的場所，其正式名稱為《無殼的曠野》
	 */
	['巴里根减少的生命山|巴里根减命山|巴利肯减命山|巴里肯滅命山|バリゲン減命山', '巴利肯减命山'],
	['杜蘭水宴洞|多伦水宴洞', '多伦水宴洞'],
	['加蘭之谷|加朗之谷', '加朗之谷'],
	['(波庫斯|沃[尔爾]克斯)[亞亚][龙龍]草原|波克斯亞龍草原', '沃尔克斯亚龙草原'],
	['(鳞|鱗)王(巢穴|之巢)', '鱗王之巢'],

	['大的肉的洞|大肉洞', '大肉洞'],

	['オーガーの巣|歐克的巢穴?|奧格的巢|歐克之巢', '歐克之巢'],

	// オリジン

	['オリジン|Origin|Origan', 'ORIGIN', 'ig'],
	['Lambda', 'LAMBDA', 'ig'],
	[/EARTH|亞斯\(アース\)/ig, 'EARTH'],
	['拉姆达|拉姆妲|拉姆達|拉姆达|拉姆妲|ラムダ', 'LAMBDA'],
	['[奥奧]利俊|歐力金|欧力金|起源之地|欧利金|奧利丁', 'ORIGIN'],

	/**
	 * @todo 貝武多
	 *
	 * 阿密多帝國
	 * 馬修庫札爾・馮・貝爾烏德・阿密多
	 * マシュクザール・フォン・ベルウッド・アミッド
	 *
	 * 邪砕十五剑！？拯救过初代皇帝巴鲁修米特
	 * 初代皇帝巴尔施米特
	 */
	['[亚亞阿]密[特多]|阿米多|阿米德|アミッド', '阿密特'],
	['艾德帝国|阿密特帝国|阿德帝国|吉德帝国', '阿密特帝国'],


	['冯|馮|フォン', '馮'],
	['[貝贝]武多|[貝贝][爾尔][烏乌]德|貝爾烏多|貝爾烏托|威伍德|ベルウッド|贝舞多|貝武夫|威尔德|佩德木|伯德木', '貝武多'],
	['マシュクザール|馬修庫札爾|玛修克札[鲁魯]|玛仕库扎[尔爾]|玛修克札[鲁魯]|馬修庫紮魯|馬其克萨尔|馬其萨尔', '馬修庫札爾'],

	['巴尔施米特|巴鲁修米特', '巴鲁修米特'],

	['勇者[貝贝][鲁魯]特', '勇者貝武多'],

	/**
	 * 邪碎十五劍
	 *
	 */

	['邪砕十五?劍', '邪砕十五劍'],

	// 聖剣ネメシスベル
	['ネメシスベル|尼科斯貝尔|尼維斯貝尔', '尼科斯貝尔'],

	['里尔特|裡尔特|里克和尚', '里尔特'],
	[`・(?:阿德)`, '・阿密特'],
	[`里尔特${sp}阿密特`, '里尔特・阿密特'],
	[`里尔特。阿密特`, '里尔特・阿密特'],

	[`エルヴィーン|愛蜜維恩`, '愛蜜維恩'],
	[`五头蛇|五頭蛇`, '五頭蛇'],

	[`ベベケット|貝貝卡尔`, '貝貝卡尔'],
	[`スレイガー|斯萊格|斯雷格`, '斯萊格'],

	[`[『「《](柄|花样)[》』」]`, '『柄』'],

	/**
	 * @todo 豬頭人
	 *
	 * 神拉伯彼法多
	 *
	 * 布波比奥
	 *
	 * 布塔里昂皇子
	 *
	 * 高贵歐克天穹王，布奇帝
	 *
	 * 布奇塔斯
	 *
	 * 馬爾默公爵 皇帝馬修庫紮魯的堂兄弟
	 *
	 * 庫奧克・拉古修 库奥克是被美味食材所吸引的抵抗组织《萨乌罗解放战线》的内奸
	 *
	 * 肉婦好像就是指《墮肥的惡神》慕噗噗傑戈用自己的肉片創造出來給予豬人和高貴豬人的魔物
	 * 『堕肥的邪神』姆布布姜戈
	 */

	['布格甘|噗咯剛|普果刚|布格甘|普果剛', '布格甘'],

	['ノーブルオークアビスキング|貴族歐克深淵王', '貴族歐克深淵王'],

	['豬頭?人|[奥奧歐]克|豬人|オーク', '歐克'],
	['崇尚歐克|高贵歐克|贵族歐克', '貴族歐克'],

	['布塔力歐|布塔里昂|布塔裏昂|ブダリオン|布达利翁|布塔里欧|布达里昂|布达里恩', '布塔里昂'],

	['拉波比法(多|特|德)?|拉伯彼法多|拉波彼法多|拉多彼法多|拉波比法特|拉波比法德|ラヴォヴィファード|拉沃维德|拉沃比法多|拉布比法多', '拉波彼法多'],

	['姆布布姜戈|慕噗噗傑戈|姆布布杰戈|姆布布傑戈|穆噗噗简格|ムブブジェンゲ|穆璐璐简格|穆布布斯(基德)?', '姆布布姜戈'],
	['墮肥的惡神|堕肥悪神|堕肥的邪神|落肥的惡神|堕肥の悪神', '堕肥の悪神'],

	['布奇塔斯|ブギータス|布吉斯塔|布吉塔斯|布基尼达|布基尼德?', '布奇塔斯'],

	['ブゴバー|Bugoba', 'ブゴバー', 'ig'],
	['ブキャップ|bugyappu|布咯普', '布咯普', 'ig'],
	['Gerazoog|ゲラゾーグ|格拉佐格|格拉ゾーグ|格拉索古|格拉索斯|格拉索格斯', '格拉佐格', 'ig'],

	['Boumgan|ブモーガン|布莫干', '布莫干', 'ig'],
	['布扎斯|布扎泽斯|ブザゼオス|布扎泽欧斯', '布扎泽斯', 'ig'],


	//['布弗迪恩', '布弗迪恩'],
	['布迪魯特|布迪爾德|布迪魯多|ブディルード', '布迪魯特'],

	['肉婦', '肉婦'],

	['父亲祖', '父祖'],


	/**
	 * @todo 狗头人
	 *
	 * 《猎之神》利沙雷
	 */
	['伽爾亞|伽爾奇|ガルギャ|加路基亞|加尔吉尔', '伽爾亞'],

	['ハイコボルト|高等狗头人|海克特', '高等狗头人'],
	['柯伏特|狗头人', '狗头人'],

	['露露亞|ルルゥ|亞露露|露露瓦', '露露亞'],

	//哥魯檔大祭司

	['wan san|ワンさん', 'ワンさん', 'ig'],

	['吉多|gyido', '吉多'],
	['エレシュキガル|艾露西奇卡爾', '艾露西奇卡爾'],

	[`^　　+`, '　', 'mg'],

	/**
	 * @todo 食尸鬼
	 *
	 * 《佐佐冈提大森林》
	 * 守护着大陆南部食尸鬼们的神明，《暗与森的邪神》佐佐冈提
	 */
	['古尔|食尸鬼|食人鬼', '食屍鬼'],
	['屍食鬼', '屍食鬼'],
	['屍食鬼(古尔|食屍鬼)', '屍食鬼古尔'],
	['GHOUL', 'GHOUL'],

	['食屍鬼之王|グールキング', '食屍鬼之王'],
	['食屍鬼|グール', '食屍鬼'],

	['佐佐岡提|佐佐冈提|ゾゾガンテ|佐佐甘特|索索格德|苏格兰|苏索格德', '佐佐冈提'],
	['闇の森の邪神|暗与森的邪神|闇森林的邪神|黑?暗の森林?の邪神|黑暗的森林的邪神', '闇の森の邪神'],

	['ガンテ餅|钢饼', '冈提餅'],
	['ガンテ|甘特|冈提', '冈提'],

	/**
	 * @todo SCYLLA 斯库拉
	 *
	 * LAMIA(拉米亚：蛇女)、SCYLLA(锡拉：章鱼女)、ARACHNE(阿拉克尼：蜘蛛女)、CENTAURS(萨托斯：半人马)、HARPY(哈比：鸟身女妖)和魔人族
	 */
	['锡[拉菈]|斯[库庫卡][拉菈]|斯卡拉|斯基拉|庫斯拉|スキュラ', '斯庫拉'],

	['旧的?斯庫拉領地', '旧斯庫拉領地'],

	['[奥奧][爾尔][比莉][雅亞亚娅]|奥莉薇[雅亞亚娅]|奧利維[亞亚]|奥尔维亚|オルビア', '奧爾比雅'],
	['梅雷彼[贝貝][爾尔]|梅烈[贝貝]伊尔|梅雷佩[贝貝][爾尔]|梅勒貝貝[鲁魯]|梅勒貝貝依爾|メレベベイル|梅里維尔|甲基貝貝|梅里维尔|梅萊貝貝', '梅烈貝伊爾'],
	['佩莉[贝貝][爾尔]|佩莉[贝貝]尔', '佩莉貝爾'],
	['普莉[贝貝][爾尔]', '普莉貝爾'],

	['(汙|汚)泥與觸手之神|汚泥と触腕の神', '汙泥與觸手之神'],

	/**
	 * @todo 蜥人
	 */
	//傳奇蜥人戰士（リザードマンジェロニモ），夏咻加

	['勇士', '勇者'],
	['蜥蜴?人', '蜥人'],

	/**
	 * 哥布林
	 */
	['祖戈|ゾーゴ|宗贡', '祖戈'],
	['ハイゴブリン|高等哥布林', '高等哥布林'],

	/**
	 * @todo 阿剌克涅
	 *
	 * 《甲壳与復眼的邪恶神》札納魯帕多那
	 *
	 * 《甲壳的邪神》札纳尔和《复眼的恶神》帕多娜这两柱神
	 * 和她们信奉的神明相同的名字《扎纳尔帕多娜》
	 *
	 * 庫涅莉亞公主
	 * 吉札尼亚
	 * 慕莎
	 * 多娜涅莉斯女王
	 *
	 *
	 **/
	['库内莉[亞亚]|庫涅莉[亞亚]|柯涅莉婭|庫内利亞|庫塔利亞|クーネリア|庫内亞|克亞涅侍|克内利亞|克里尼利亞', '庫涅莉亞'],
	['吉劄尼亞|吉札尼亞|吉札尼[亞亚]|吉萨亞|吉薩尼婭|ギザニア|基萨尼亞|吉蕯亞|吉萨尼亞', '吉札尼亞'],

	['甲殻(和|与)複眼的邪惡神|甲殻と複眼の邪悪神', '甲殻與複眼的邪惡神'],

	['多娜涅莉斯?|ドナネリス|多娜莉亞|多納奈斯|德納奈斯', '多娜涅莉斯'],

	['扎纳[爾尔]帕多娜|劄納[爾尔]帕多娜|札納魯帕多那|扎纳[爾尔]帕多娜|扎纳爾帕多娜|帕爾帕多娜|札納魯帕多納|ザナルパドナ|萨納帕多納|扎克巴德納|扎克斯|扎納爾巴多納', '扎納爾帕多娜'],
	['扎纳尔', '扎納爾'],
	['帕多那', '帕多娜'],

	['扎納爾帕多娜的保佑|扎納爾帕多娜的加護|扎納爾帕多娜的庇護', '扎納爾帕多娜的加護'],

	['阿剌克涅|阿拉喀涅|阿拉克拉|アラクネ|阿拉克奈|阿拉尼尔', '阿剌克涅'],

	['亲愛的饰品|亲密的饰品|親愛首飾|親愛的飾品', '亲密的饰品'],

	['亲爱的|ダーリン', '亲爱的'],

	/**
	 * @todo 安普莎
	 *
	 * 慕莎
	 **/
	['慕莎|ミューゼ|梅泽|缪泽', '慕莎'],
	['安普莎|エンプーサ|恩浦萨|阿普莎|安普沙', '安普莎'],

	['伽奧尔|ガオル|加欧諾', '伽奧尔'],

	/**
	 * @todo 鬼人国
	 *
	 * 「老爺，奧迪华克叫是鬼人王的第一个孩子，据說是令人尊敬的名字的幼名。是勇者希爾維洛留下的记录中有那个名字，以为是有名的鬼人族的始祖就给孩子起了那名字了。」
	 「顺便說一下，本名是优瑪」
	 */
	['六角戦鬼衆', '六角戰鬼衆'],
	['戦士の神', '戰士之神'],
	['ガレス|加勒斯|嘎里斯', '加勒斯'],

	['奧迪华克|オニワカ|奧迪华卡', '奧迪华克'],
	['优瑪|ユーマ', '优瑪'],

	['优拉|ユラ', '优拉'],

	/**
	 * @todo 竜人国
	 */
	['ローエン|罗恩', '罗恩'],

	/**
	 *
	 */
	['ケンタウロス|半人馬|健塔洛斯|健塔斯洛斯', '半人馬'],
	['哈比|ハーピィー', '哈比'],

	/**
	 *
	 */
	['サイクロプス|塞克罗山|賽克洛斯', '賽克洛斯'],

	/**
	 *
	 **/

	['ダンピール|丹彼尔|丹皮尔', '丹皮尔'],
	['矮人|多华夫|多尔夫|侏儒', '矮人'],

	['[复]眼', '複眼'],

	['(戰士|勇者|皇家衛士|騎兵)(蜥人|斯库拉)', '$2$1'],

	[`二米半`, '兩米半'],

	['畜力', '蓄力'],

	[`光${sp}生命属性`, '$1・$2'],
	[`神${sp}[魯菲瑪巴裘梅魯沛]`, '$1・$2'],
	[`勇者${sp}[寨娑]`, '$1・$2'],

	['成保', '城堡'],
	['成強', '城牆'],

	['成原', '成員'],

	['死亡?属性', '死属性'],

	['死属性魅了', '死属性魅惑'],

	['甄别', '徵選'],

	['炮[术術]', '砲術'],
	['炮', '砲'],

	['職業改变房間|轉職房間|ジョブチェンジ部屋', '轉職房間'],

	//鎗

	[`^${sp}((?:独特|主动|被动)技能)`, '$1・$2', 'mg'],
	[`^${sp}(名前|種族|年齢|二つ名|ジョブ|レベル|ジョブ履歴|能力値|パッシブスキル|アクティブスキル|ユニークスキル|魔王の欠片|呪い)`, '$1・$2', 'mg'],
	['选举王[国國]', '选王国'],

	['首相', '宰相'],
	['維目包', '為目的'],

	['統合人', '統管者'],

	[/\n+(\(￣▽￣\)"?|（￣）￣）↗|\(\*\/ω＼\*\))\n+/g, '\n\n$1\n\n'],

	['付上', '附上'],

	['不死製者', '不死者'],
	['布死者', '不死者'],

	[/GOLEM/ig, 'GOLEM'],
	['(魔[像象]|哥雷姆|哥雷魯|GOLEM)(?!\\(?(?:魔[像象]|哥雷姆|GOLEM))|ゴーレム', '魔像'],

	['(晉|進)[階阶](?!梯)', '晉階'],
	['[阶階]位|位[阶階]|[阶階][级級]', '位階'],

	[/(位階|Rank) *(\d+) */ig, function (..._m)
	{
		return _m[1] + StrUtil.toFullNumber(_m[2]);
	}],

	[/ *([a-z]) *(級)/ig, function (..._m)
	{
		return StrUtil.toFullEnglish(_m[1]) + _m[2];
	}],

	[/(級) *([a-z]) *(?![a-z0-9])/ig, function (..._m)
	{
		return _m[1] + StrUtil.toFullEnglish(_m[2]);
	}],

	['<-', '←'],

	//['板金', '板金'],
	['的種板金', '的重板金'],

	['女將屍', '女殭屍'],
	['占领君', '占领军'],

	//[/BOSS/ig, 'BOSS'],
	[/Rank/ig, 'Rank'],
	//[/GHOUL/ig, 'GHOUL'],
	[/Dampire|GHOUL|ELF|BOSS|DARK|undead|status/ig, function (...m)
	{
		return m[0].toUpperCase();
	}],

	['精靈', '精灵'],
	['(暗黑|黑暗|闇|暗)(精[灵靈]|艾尔芙)|(黑?暗|暗?黑|黑暗|闇)精靈', '暗黑艾尔芙'],
	['(混血|半)精[灵靈]', '$1艾尔芙'],

	['艾尔夫|艾尔芙|愛尔夫', '艾尔芙'],

	['壹', '一'],

	['禦使', '御使'],

	['level', 'LV', 'ig'],

	/**
	 * 维基感知
	 * 直感
	 */
	['维基感知|危险感知|危机感知', '危机感知'],
	['魔道引诱|魔道诱引', '魔道誘引'],
	['導き：魔道|引导：魔道', '引導：魔道'],

	['疑似導き', '疑似引導'],

	['魔王の[再在](?:临|来|世|来)', '魔王再世'],
	['炼成|錬成', '錬成'],
	['创成|創成', '創成'],
	['创|創', '創'],
	['炼|錬', '錬'],

	['[魔魔]王[之的の][碎肉欠残殘]片|魔王の欠片|魔王殘片|魔王的碎片', '魔王の欠片'],
	['[魔魔]王[之的の]墨[袋汁]?', '魔王の墨'],
	['魔王の甲羅|魔王的甲殼', '魔王の甲殻'],
	['魔王の?吸盤', '魔王の吸盤'],
	['魔王の角', '魔王の角'],
	['魔王の血', '魔王の血'],
	['魔王の?臭腺', '魔王の臭腺'],
	['魔王の発光器官', '魔王の發光器官'],
	['魔王の脂肪', '魔王の脂肪'],
	['魔王の牙', '魔王の牙'],
	['魔王の顎|魔王的下巴', '魔王の顎'],
	['魔王の眼球', '魔王の眼球'],
	['魔王の口吻', '魔王の口吻'],
	['魔王の体毛', '魔王の体毛'],
	['魔王の外骨格', '魔王の外骨格'],
	['魔王の節足', '魔王の節足'],
	['魔王の触角', '魔王の触角'],
	['魔王の鼻', '魔王の鼻'],
	['魔王の胸毛', '魔王の胸毛'],


	['開拓地の?守護者', '開拓地の守護者'],

	['高斯特|幽灵', '幽靈'],

	['簒奪者|篡夺者', '簒奪者'],

	['(僵|殭)屍', '僵屍'],

	['(僵|殭)屍制造(者|商)', '僵屍制造者'],

	['樹術士|树斗士', '樹術士'],
	['滅導士', '滅導士'],

	['連携', '連携'],

	['城市国家|都市国家', '都市国家'],

	['無属性', '無属性'],

	['別名|二つ名|第二名稱', '別名'],
	['两名：', '別名：'],

	['ランク|位階', '位階'],

	['レベル|等級', '等級'],
	['パッシブスキル|被动技能', '被动技能'],
	['アクティブスキル|主动技能', '主动技能'],
	['ユニークスキル|独特技能', '独特技能'],

	[/(\n・?)独特的技能/g, '$1独特技能'],

	['[轮輪][回廻]', '輪廻'],
	['[轮輪][回廻]转生|輪廻転生', '輪廻転生'],

	['作业履历|職業履歴', '職業履歴'],

	['輪廻神の幸運', '輪廻神の幸運'],

	['掠夺|プランダー|略奪', '掠夺'],

	['王|キング', '王'],

	['龍人|竜人', '竜人'],
	['高等?哥布林', '高等哥布林'],
	['ヒュージボア|hubibor', 'ヒュージボア', 'ig'],
	['ホーンラビット|霍金比特', '霍金比特', 'ig'],


	['シアの実|牛油果', '牛油果'],
	['シアバター|乳木果', '乳木果'],
	['アサイー|阿萨', '阿萨'],
	['食品原料|食材', '食材'],
	['ランブータン|红毛丹', '红毛丹'],

	/**
	 *
	 */
	['导士|導士', '導士'],
	['鞭舌禍', '鞭舌禍'],

	['武士|サムライ', '武士'],
	['女忍者|クノイチ', '女忍者'],

	/**
	 * @todo 第八引导
	 *
	 * 布魯托（プルートー）
	 */
	['第八指引|第八引导|第八引導|第八の導き', '第八引導'],

	['村上淳平', '村上淳平'],
	['(?:ジュンペイ|朱烈拉)・(?:ムラカミ|穆拉姆)', '朱烈拉・穆拉姆'],

	['ベルセルク|依佐娜美', '依佐娜美'],

	['バーバヤガー|巴巴亞卡|芭芭亞卡', '芭芭亞卡'],

	['プルートー|布魯托', '布魯托'],

	['艾斯基德|艾露西奇卡爾|エレシュキガル', '艾露西奇卡爾'],

	['閻魔', '閻魔'],

	/**
	 *
	 */
	['鮫島悠里', '鮫島悠里'],
	['鮫島', '鮫島'],
	['ペルセウス|佩尔塞斯|柏修斯|比尔塞斯', '柏修斯'],

	// 田中
	['韋駄天|韋驮天', '韋駄天'],

	['兀魯斯|ウルズ|乌魯斯|烏爾德', '烏爾德'],
	['麦肯齐|マッケンジー', '麦肯齐'],

	/**
	 * @todo Bravers
	 */
	[/Bravers|布萊巴斯|百人众|ブレイバーズ|格雷巴斯/ig, 'Bravers'],
	[/《(布雷伯斯|勇者們)》/ig, '《Bravers》'],

	//海藤卡纳塔(彼方)
	['海腾|海藤', '海藤'],
	['海藤カナタ|海藤加塔納?|海藤卡纳塔|海藤加塔納|海藤加特納', '海藤卡納塔'],

	['永恒之槍|古古尼尔|グングニル', '永恒之槍'],

	//《演算》男
	['町田|町田', '町田'],
	['亞亂|亜乱', '亜乱'],

	['瑪奧|馬奧|馬魯', '瑪奧'],
	[`瑪奧${sp}史密斯`, '瑪奧・史密斯'],

	['克洛諾斯|克罗諾斯', '克羅諾斯'],

	['海卡丘海尔|海卡丘凱尔', '海卡丘凱尔'],

	//《監察官》女
	['島田泉|島田泉|岛田泉', '島田泉'],
	['監察官', '監察官'],

	['圆藤硬弥|圓藤硬彌|円藤硬弥', '円藤硬弥'],

	['狮方院真理|狮子院真理', '獅方院真理'],

	['艾吉斯|宙斯盾', '宙斯盾'],
	[`梅麗莎${sp}J${sp}早乙女`, '梅麗莎・J・早乙女'],
	[`梅麗莎`, '梅麗莎'],

	['变形', '变形'],
	['变质', '变质'],

	['METAMOR变质|METAMOR', '变质'],
	['【(メタモル|变质|变形)】(?:（变质|变形）)?', '【变形】'],

	['成濑成美', '成瀬成美'],
	['三波浅黄', '三波浅黄'],
	['狭間田彰|窄間田彰', '狭間田彰'],
	['天道達也', '天道達也'],

	['イフリータ|伊芙利特', '伊芙利特'],
	['赤城晶子', '赤城晶子'],

	['寛人|宽人', '寛人'],
	['博人', '博人'],

	['ゲイザ―|凝視者', '凝視者'],
	['見沼瞳', '見沼瞳'],

	['死镰|死亡尺距', '死鐮'],
	['近衛宮司', '近衛宮司'],

	['禦子|御子|禦子', '御子'],
	['国|國', '国'],
	['印像壁', '印象'],

	['属性|屬性', '属性'],
	['ジョブ|職業', '職業'],

	['解説', '解說'],
	['job解説|ジョブ解説|職業解說', '職業解說'],

	['呪い|詛咒', '詛咒'],

	['前世経験値持越し不能|前世経験値不能持有|不能继承前世经验值|無法繼承前世經驗值|无法获得前世经验值|前世经验值不能继承', '無法繼承前世經驗值'],
	['既存ジョブ不能|不能取得已有職業|既存職業不能取得|无法就职已存在的職業|现有職業不能|無法就職已存在職業|不能就职既有職業|既存職業不能|無法就職已存在職業取得', '無法就職已存在職業'],
	['経験値自力取得不能|不能自力获取经验值|无法由自身获得经验值|無法自行取得經驗值|不能自力取得经验值|经验值不能自行取得', '無法自行取得經驗值'],

	[`《([^『「《》』」“”‘’\n]+?)[》』」]`, '《$1》'],

	[/^\?/gm, '・'],

	[/^[ \t　]+/gm, ''],
	[/^_+\n/g, ''],
	[/\n,\n/g, '\n\n'],
	[/([・：]) /g, '$1'],

	[/“([^\n“”]+?)‘’/gm, '“$1”'],

	[/^‘’/gm, '“'],
	[/‘’$/gm, '”'],

	[/\n+\(￣▽￣\)"\n+/g, '\n\n\n\n'],

	[/\<\-/g, '←'],

	//[/([」』）])[ ]*\[([^\[\]\n]+)\]$/gm, '$1《$2》'],

	[/〔([^\n〔〕（）\(\)]+)〕/g, '（$1）'],

	[/^【([^【】\n]+)】$/gm, '「$1」'],

	[/^\*(?!\*)/gm, '＊'],

	_word_en(/\d+/g, function (...m)
	{
		return m[1] + StrUtil.toFullNumber(m[2]);
	}),

	...sublib.lazymarks['class'],

	['蟲', '蟲'],
	['術', '術'],
	['屍', '屍'],
	['護', '護'],
	['悪', '惡'],

	...sublib.lazymarks[4],

	...sublib.lazymarks[0],
	...sublib.lazymarks[1],
	...sublib.lazymarks[2],
	...sublib.lazymarks[3],
	...sublib.lazymarks[5],

	[/(\n[^・\n][^\n]+)\n(・)/g, '$1\n\n$2'],
	[/(\n[^：\n]+：[^\n]+)\n{2}([^：\n]+：)/g, '$1\n$2'],
	[/(\S)\n{1,2}(・(?:名稱|職業解說|魔物解說)|名稱)/g, '$1\n\n\n$2'],
	[/^(・(?:職業解說|魔物解說))\n(\S)/g, '$1\n\n$2'],

]);

// 需要人工確認的屏蔽字或錯字用語等等
export const words_maybe = [
	// 將對主角用的用語改為 小家伙
	'小.?子',

	/(.{1,2})?(不死(?!者|巨人|骷髏|沃[尔爾]克斯|小虫|化|骷髅|虫|树魔|性|族))(.{1,2})?/g,
	'亞斯',

	'艾赞',

	'[範范班泛](?![達达達][爾尔鲁魯]|大人|[围圍疇于起畴])',

	'贝鲁特',

];

import * as self from './四度目は嫌な死属性魔術師';

export default self;
