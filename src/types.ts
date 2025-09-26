export interface IjawNamesData {
  [key: string]: string;
}

export interface IjawNameResult {
  name: string | boolean;
  meaning: string | boolean;
}

export type RandomNameResult = {
  name: string;
  meaning: string;
};