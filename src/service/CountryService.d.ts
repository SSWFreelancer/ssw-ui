export interface Country {
  name: string;
  code: string;
}

export const CountryService: {
  getData: () => Country[];
};
