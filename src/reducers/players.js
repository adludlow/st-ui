const initialState = {
  players: []
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS/INIT':
      return {
        players: action.players
      }
  };
};

export default players;
