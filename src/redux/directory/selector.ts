import { createSelector } from "reselect";
import { RootState } from "$redux";

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  selectDirectory,
  diretory => diretory.sections
);
