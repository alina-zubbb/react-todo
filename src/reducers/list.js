const initialState = {
  list: []
};
export default function list(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text
        })
      };
    case "REMOVE":
      return {
        list: state.list.filter(({ id }) => id !== action.payload.id)
      };
    case "SAVE":
      return Object.assign({}, state, {
        list: state.list.map(
          curr =>
            curr.id === action.payload.id
              ? { ...curr, text: action.payload.text }
              : curr
        )
      });
    case "INIT":
      console.log("INIT");
      return { ...state, ...action.payload.list };
    case "SORT_FROM_NEW":
      console.log("SORT_FROM_NEW");
      return {
        ...state,
        ...{
          list: [
            ...state.list.sort((a, b) => {
              return a.id > b.id ? -1 : a.id === b.id ? 0 : 1;
            })
          ]
        }
      };
    case "SORT_FROM_OLD":
      console.log("SORT_FROM_OLD");
      return {
        ...state,
        ...{
          list: [
            ...state.list.sort((a, b) => {
              return a.id > b.id ? 1 : a.id === b.id ? 0 : -1;
            })
          ]
        }
      };
    case "SORT_FROM_HOUR":
      console.log("SORT_FROM_HOUR");
      return {
        ...state,
        ...{
          list: state.list.filter(({ id }) => {
            const hourPoint = Date.now() - 5000;
            return id > hourPoint;
          })
        }
      };
    default:
      return state;
  }
}
