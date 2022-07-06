//ante la necesidad de usar el localstorage para guardar el array de favoritos se creo este componente que permite paginar los datos obtenidos de LocalStorage
export const arrayPagination = (array) =>{
    let allNews = [];
    let fav = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      fav = [...fav,element]
      if((i+1)%8===0){
        //Cada 8 elementos se ira agregando un subarreglo que hara de pagina para la seccion de Favorites
        allNews = [...allNews,fav];
        fav = [];
      };
    }
    allNews = [...allNews,fav];
    //Al final se agregara como ultima pagina todos los elementos que sobren que no alcancen a ser 8 y se entregara un arreglo con estas paginas en formato Noticias[pagina][post]
    return allNews;
  }