export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
    }
  };

  export const LOGO='https://static.vecteezy.com/system/resources/previews/009/297/429/non_2x/live-streaming-logo-template-vector.jpg'
  export const  SUPPORTED_LANG=[{identifier:'en',name:"English"},{identifier:'hi',name:"Hindi"},{identifier:'jap',name:"Japanese"}];
  export const TMDB_IMG_URL='https://image.tmdb.org/t/p/original';
  export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;
  export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg';
  export const AVATAR_LOGO ='https://avatars.githubusercontent.com/u/83134946?s=40&v=4'