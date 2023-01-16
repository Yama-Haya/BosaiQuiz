var lang = navigator.language;
if (lang==ja||lang==ja_JP||lang==js-JP||lang==null){
  $.getJSON('https://yama-haya.github.io/BosaiQuiz/ja.json')
}
if (lang==en||lang==en_US||lang==en-US){
  $.getJSON('https://yama-haya.github.io/BosaiQuiz/en.json')
}
