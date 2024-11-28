// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

interface PageData {
  /** 
   * 退休日期 
   * 2024-11-28
   */
  lastDay: string | null | undefined;
  /** 目标存款 */
  targetDeposit: number | null | undefined;
  /** 当前存款 */
  deposit: number | null | undefined;
  /** 年收入（税后） */
  yearIncome: number | null | undefined;
  /** 年生活成本 */
  yearCostOfLiving: number | null | undefined;
  /** 日期选择器开始时间 */
  datePickerStartDay: string | null | undefined;
}
interface PageOptions {
  handleDateChange: (e: WechatMiniprogram.PickerChange) => void
}
Page<PageData, PageOptions>({
  data: {
    lastDay: null,
    targetDeposit: null,
    deposit: null,
    yearIncome: null,
    yearCostOfLiving: null,
    datePickerStartDay: null, 
  },
  options: {
		pureDataPattern: /^_/
  },
  onLoad() {
    const now = new Date();
    const monthStr = now.getMonth() > 9 ? `${now.getMonth()}` : `0${now.getMonth()}`;
    const datePickerStartDayStr = `${now.getFullYear()}-${monthStr}-${now.getDate()}`
    console.log('test datePickerStartDayStr', datePickerStartDayStr)
    this.setData({
      datePickerStartDay: datePickerStartDayStr,
    })
  },
  handleDateChange (e) {
    this.setData({
      lastDay: e.detail.value as string
    })
  }
})
