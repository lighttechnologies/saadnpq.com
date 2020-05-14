const colors = {
  // attr: [dark, light]

  color: ['#D1D0C7', 'black'],
  smallColor: ['#B2B0A0', 'black'],
  inverseColor: ['black', 'white'],
  backgroundColor: ['#161616', '#F0F0E6'],
  sectionAlternate: ['#212121', '#E3E3DA'],
  followerBorder: ['#FFFFFF', 'yellow'],
  cursorColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
  primaryColor: ['#B6A865', '#6E1DAD'],
  noiseOpacity: ['.5', '.9'],
  borderRadius: ['3px', '5px'],
  borderWidth: ['1px', '1px'],
  borderColor: ['#B6A865', '#000000'],
  progressBackColor: ['#000000', '#A7A7A7'],
  progressColorStart: ['#D3C78A', '#976FB6'],
  progressColorEnd: ['#877148', '#4B0186'],
  projectsBackgroundColor: ['#363636', '#CFCFCF'],
  projectsFooterBackgroundColor: ['#2F2F2F', '#AFAFAF'],
  projectsMeta: ['#C2BEAE', '#353535'],
  projectsDescription: ['#DCD8CB', '#black'],
  formBackgroundColor: ['#AEAEAE', '#AEAEAE'],
  globalBorderWidth: ['5px', '5px'],
  railColorMain: ['#FCFCFC', '#9F9F9F'],
  railColorMenu: ['#FCFCFC', '#9F9F9F'],

}


export const dark = Object.keys(colors).reduce((result, key) => {
  result[key] = () => colors[key][0]
  return result
}, {})

export const light = Object.keys(colors).reduce((result, key) => {
  result[key] = () => colors[key][1]
  return result
}, {})

