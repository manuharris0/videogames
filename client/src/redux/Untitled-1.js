// case FILTER_BY_GENRE:
//             if(action.payload === 'default') {
//                 return {
//                     ...state,
//                     videogames: state.allVideogames
//                 }
//             };
//             return {
//                 ...state,
//                 videogames: state.videogames.filter(game => {
//                     if(game.genresArray){
//                         return game.genresArray.some(genre => genre.name === action.payload)
//                     } else {
//                         return game.genres.some(genre => genre.name === action.payload)
//                     }
//                 })
//             };
//         case FILTER_BY_ORIGIN:
//             if(action.payload === 'default') {
//                 return {
//                     ...state,
//                     videogames: state.allVideogames
//                 };
//             };
//             return {
//                 ...state,
//                 videogames: state.videogames.filter(game => typeof(game.id) === action.payload)
//             };
//         case ORDER_BY_NAME:
//             if(action.payload === 'N') {
//                 return {...state}
//             }
//             let sorterNames = [...state.videogames].sort((a, b) => {
//                 if(action.payload === 'A') {
//                     if(a.name > b.name) return 1;
//                     if(a.name < b.name) return -1;
//                     return 0
//                 } else {
//                     if(a.name < b.name) return 1;
//                     if(a.name > b.name) return -1;
//                     return 0
//                 }
//             });
//             return {
//                 ...state,
//                 videogames: sorterNames
//             };
//         case ORDER_BY_RATING:
//             if(action.payload === 'N') {
//                 return {...state}
//             }
//             let sorterRatings = [...state.videogames].sort((a, b) => {
//                 if(action.payload === 'A') {
//                     if(a.rating > b.rating) return 1;
//                     if(a.rating < b.rating) return -1;
//                     return 0
//                 } else {
//                     if(a.rating < b.rating) return 1;
//                     if(a.rating > b.rating) return -1;
//                     return 0
//                 }
//             });
//             return {
//                 ...state,
//                 videogames: sorterRatings
//             };