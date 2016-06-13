const I18N = {
  'en': {
    todayButtonText: 'Today',
    clearButtonText: 'Clear',
    okButtonText: 'OK',
    cancelButtonText: 'Cancel',
    default: 'None'
  },
  'zh-cn': {
    todayButtonText: '今天',
    clearButtonText: '清除',
    okButtonText: '确定',
    cancelButtonText: '取消',
    default: 'None'
  },
  'zh-tw': {
    todayButtonText: '今天',
    clearButtonText: '清除',
    okButtonText: '確定',
    cancelButtonText: '取消',
    default: 'None'
  },
}

export default function i18n(locale, key){

  locale = locale && I18N[locale] ? locale : 'en'

  // default value
  var value = I18N[locale].default

  // translate value
  if(I18N[locale][key]) {
    value = I18N[locale][key]
  }

  return value
}
