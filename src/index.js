module.exports = function check(str, bracketsConfig) {
  let brackets_array = bracketsConfig.map((el) => el.join('')); 
  for(let i = 0; i < brackets_array.length; i++){
  	if (str.includes(brackets_array[i])) {
  		str = str.replace(brackets_array[i], '');
  		i = -1;
  	}
  }
  return str == '' ? true : false;
}
