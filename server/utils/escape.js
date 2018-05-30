function escapeObj(obj){
  for(let key in obj){
    obj[key] = escape(obj[key])
  }
}

function unescapeObj(obj){
  for(let key in obj){
    obj[key] = unescape(obj[key])
  }
}

module.exports = {
  escapeObj,
  unescapeObj
}