export const apiKey = '24e0a581f79f63421c4bfc31ffffc173';



export const getPosterPath=(val)=>{
    const url = `https://image.tmdb.org/t/p/w${val}/`;
    return url
}