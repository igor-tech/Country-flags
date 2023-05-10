const BASE_URl = 'https://restcountries.com/v3.1/'

export const ALL_COUNTRIES = BASE_URl + 'all?fields=name,capital,flags,population,region'

export const searchByCountry = (name: string) => BASE_URl + 'name/' + name;

export const filterByCode = (codes: number[]) => BASE_URl + 'alpha?codes=' + codes.join(',')
