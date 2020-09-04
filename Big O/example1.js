const nemo = ['Nemo'];

function findNemo(array){
  for(let i = 0; i < array.length;i++){
    if(array[i] === 'Nemo'){
      console.log('Found Nemo');
    }
  }
}

module.exports.nemo = nemo;
module.exports. findNemo = findNemo;