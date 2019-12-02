const initialState = {
  players: []
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS/INIT':
      return {
        players: action.players
      }
    default:
      return state;
  };
};

export default players;
