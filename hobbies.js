let hobbies = ['dormir', 'comer'];
hobbies.push('hacer ejercicio');
hobbies.push('programar en JS');

hobbies.forEach(function(item, index){
    console.log(item, index);
})
hobbies.forEach(function(item){
    console.log(item);
})