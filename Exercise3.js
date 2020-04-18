let teams = ['cowboys', 'tarheels', 'hornets', 'trojans','rams']

const makeAllCaps = (words) => 
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject(Error('Danger Will Robinson'))
    }
  })

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeAllCaps(teams)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))