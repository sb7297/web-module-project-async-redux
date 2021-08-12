export const UPDATE_FORM = "UPDATE_FORM";

export const updateForm = (formText) => {
  return {type: UPDATE_FORM, payload: formText};
}