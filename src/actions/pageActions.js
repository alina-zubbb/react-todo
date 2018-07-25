export const remove = id => dispatch => {
  dispatch({ type: "REMOVE", payload: { id: id } });
};

export const change = text => dispatch => {
  dispatch({ type: "CHANGE", payload: { text: text } });
};

export const add = (id, text) => dispatch => {
  dispatch({ type: "ADD", payload: { id: id, text: text } });
  dispatch({ type: "CHANGE", payload: { text: "" } });
};

export const save = (id, text) => dispatch => {
  dispatch({ type: "SAVE", payload: { id: id, text: text } });
};

export const sortFromNew = () => dispatch => {
  dispatch({ type: "SORT_FROM_NEW", payload: {} });
};

export const sortFromOld = () => dispatch => {
  dispatch({ type: "SORT_FROM_OLD", payload: {} });
};

export const sortFromHour = () => dispatch => {
  dispatch({ type: "SORT_FROM_HOUR", payload: {} });
};
