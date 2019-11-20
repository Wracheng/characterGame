// 非特殊的 （以level取值）
var Arr = {
  noSpecialArr: ['川', '竟', '鸟', '延', '士', '胄', '已', '钱', '曰', '肓'],
  specialArr: ['卅', '竞', '乌', '廷', '土', '胃', '己', '我', '日', '育']
}
// 造出一个等级数组
var wordList = function (level) {
  var List = []
  var floor = null
  // 返回值
  var obj = {}
  if (level === 1) {
    floor = 2
  } else {
    floor =
      (level - 1) % 3 === 0
        ? parseInt((level - 1) / 3) + 2
        : parseInt((level - 1) / 3) + 3
  }
  const x = parseInt(Math.random() * floor)
  const y = parseInt(Math.random() * floor)
  for (var i = 0; i < floor; i++) {
    for (var j = 0; j < floor; j++) {
      if (i === x && j === y) {
        List[i + j + j * (floor - 1)] = Arr.specialArr[level - 1]
        obj.position = i + j + j * (floor - 1)
        /* eslint-disable */
        continue;
      }
      List[i + j + j * (floor - 1)] = Arr.noSpecialArr[level - 1];
    }
  }
  obj.List = List;
  return obj;
};
export default wordList;
