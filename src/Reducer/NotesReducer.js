export const initialState = [];
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
      break;
    case 'REMOVE':
      return state.filter((note) => action.payload != note.id);
  }
  return state;
};
