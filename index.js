module.exports = function(out){
  var r = Math.round(Math.random()*1)
  return out === 'num' ? r : out === 'bool' ? !!r : (r ? 'head' : 'tail')
}
