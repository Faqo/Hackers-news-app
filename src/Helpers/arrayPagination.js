
export const arrayPagination = (array) =>{
    let allNews = [];
    let fav = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      fav = [...fav,element]
      if((i+1)%8===0){
        allNews = [...allNews,fav];
        fav = [];
      };
    }
    allNews = [...allNews,fav];
    return allNews;
  }