const productos = [
    {id:"101",nombre:"Mom Brunella",descripcion:"Jean Mom Basic LightBlue",img:"../assets/mom-brunella.jpg",stock:"10"},
    {id:"102",nombre:"Mom Ana",descripcion:"Jean Mom Break Blue",img:"../assets/mom-ana.jpg",stock:"10"},
    {id:"103",nombre:"Mom Glenda",descripcion:"Jean Mom Break LightBlue",img:"../assets/mom-glenda.jpg",stock:"10"},
    {id:"104",nombre:"Mom Lara",descripcion:"Jean Mom ExtraBreak Blue",img:"../../assets/mom-lara.jpg",stock:"10"}
]
 export const getInfo = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        if (condition) {
          resolve(productos)
        }else{
            reject("Compra cancelada")
        }

    },3000)
})