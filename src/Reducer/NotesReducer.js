export const initialState = [];
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {id: Math.random(), title: `title${state.length + 1}`}];
      break;
    case 'REMOVE':
      return state.filter((note) => action.payload != note.id);
  }
  return state;
};
