let x = 33;
const promesa = new Promise((resolve,reject)=>{
if (x==33){
    resolve ('La variable es igual a 33');
}else{
    reject ('La variable no es igual a 33');
}
});

promesa
.then(respuesta=>{
    console.log(respuesta);
})
.catch(error=>{
    console.log(error);
});