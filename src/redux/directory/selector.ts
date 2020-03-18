import { createSelector } from "reselect";
import { RootState } from "$redux";
import { DeepReadonly } from "utility-types";
import { DirectorySection } from "./reducer";

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  selectDirectory,
  diretory => diretory.sections
);
export type selectDirectorySectionsShape = DeepReadonly<DirectorySection[]>;
