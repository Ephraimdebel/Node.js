function random(){
  return Math.random()
}
var res =parseInt( random()*10)

module.exports.random = random
console.log(module.exports);