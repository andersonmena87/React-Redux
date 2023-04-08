import items from "../../data/items";

const defaultState = items;

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}

export default reducer;