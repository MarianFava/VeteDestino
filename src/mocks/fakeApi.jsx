const productos = [
    {id:"101",categoryId:"Winter 22",nombre:"Mom Brunella",descripcion:"Jean Mom Basic LightBlue",img:"../assets/mom-brunella.jpg",precio:"$3100",talles:"Talles del 36 al 56",stock:"10"},
    {id:"102",categoryId:"Winter 22",nombre:"Mom Ana",descripcion:"Jean Mom Break Blue",img:"../assets/mom-ana.jpg",precio:"$3400",talles:"Talles del 36 al 56",stock:"10"},
    {id:"103",categoryId:"Winter 22",nombre:"Mom Glenda",descripcion:"Jean Mom Break LightBlue",img:"../assets/mom-glenda.jpg",precio:"$3400",talles:"Talles del 36 al 56",stock:"10"},
    {id:"104",categoryId:"Winter 22",nombre:"Mom Lara",descripcion:"Jean Mom Extrabreak Blue",img:"../../assets/mom-lara.jpg",precio:"$3600",talles:"Talles del 36 al 56",stock:"10"},
    {id:"105",categoryId:"Winter 22",nombre:"Skinny Amy",descripcion:"Jean Skinny Extrabreak Gray",img:"../assets/skinny-amy.jpg",precio:"$3600",talles:"Talles del 36 al 56",stock:"10"},
    {id:"106",categoryId:"Winter 22",nombre:"Skinny Flora",descripcion:"Jean Skinny Dark Blue",img:"../assets/skinny-flora.jpg",precio:"$3300",talles:"Talles del 36 al 56",stock:"10"},
    {id:"107",categoryId:"Winter 22",nombre:"Skinny Sonia",descripcion:"Jean Skinny Extrabreak Lightblue",img:"../assets/skinny-sonia.jpg",precio:"$3600",talles:"Talles del 36 al 56",stock:"10"},
    {id:"108",categoryId:"Winter 22",nombre:"Skinny Zara",descripcion:"Jean Skinny Lightblue",img:"../assets/skinny-zara.jpg",precio:"$3300",talles:"Talles del 36 al 56",stock:"10"},
    {id:"109",categoryId:"Winter 22",nombre:"Straight Alice",descripcion:"Jean Straight Extrabreak Darkblue",img:"../assets/straight-alice.jpg",precio:"$3600",talles:"Talles del 36 al 56",stock:"10"},
    {id:"110",categoryId:"Winter 22",nombre:"Straight Juana",descripcion:"Jean Straight Darkblue",img:"../assets/straight-juana.jpg",precio:"$3300",talles:"Talles del 36 al 56",stock:"10"},
    {id:"111",categoryId:"Winter 22",nombre:"Straight Megan",descripcion:"Jean Straight Lightblue",img:"../assets/straight-megan.jpg",precio:"$3300",talles:"Talles del 36 al 56",stock:"10"},
    {id:"112",categoryId:"Winter 22",nombre:"Straight Ruth",descripcion:"Jean Straight Lightblue Spent",img:"../assets/straight-ruth.jpg",precio:"$3500",talles:"Talles del 36 al 56",stock:"10"},
    {id:"113",categoryId:"Sale",nombre:"Mom Michelle",descripcion:"Jean Mom Extrabreak Lightblue",img:"../assets/mom-michelle.jpg",precio:"$2500",talles:"Talles del 40 al 50",stock:"5"},
    {id:"114",categoryId:"Sale",nombre:"Skinny Jana",descripcion:"Jean Skinny Black",img:"../assets/skinny-jana.jpg",precio:"$2300",talles:"Talles del 38 al 50",stock:"5"},
    {id:"115",categoryId:"Sale",nombre:"Straight Milva",descripcion:"Jean Straight Lightblue",img:"../assets/straight-milva.jpg",precio:"$2600",talles:"Talles del 36 al 42",stock:"5"}
]



export const getInfo = new Promise ((resolve, reject) =>{
    setTimeout(()=> resolve(productos),2000)}
)

export const getProdsPorCategoria = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoryId === categoryId
        );
        setTimeout(() => {
           categoryId ? resolve(productosFiltrados) : resolve(productos);
        },1000);
    })
}
export const getProd = (id) =>{
    return new Promise ((resolve, reject) =>{
        const productoEncontrado = productos.find((prod) => prod.id === id);
        setTimeout(() => {
                resolve(productoEncontrado);
        },1000);
    });
}