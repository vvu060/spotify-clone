export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Remove token after devlopment
    //token: 'BQAaKSf4ysXIf8LAxG5kmN5mZLijPg65eSNAyPNyN0BR-BoRfzpE4WS1FimEm9lCOhgVqQYwoB2u29pADHm1TJGphb5DnpqovhBJ0oeSFo6lRe8ah3aqfhfONENjAZjxc2iCa-aG2uBTZb8sLARx1GGhcKxxG2ZRkSaiv6UspvbbZTA92siq',
};


const reducer =  (state, action) => {
    console.log(action);

    //Action --> (type: SET_USER) , (payload: user)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
};

export default reducer;