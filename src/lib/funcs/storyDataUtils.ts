import data from "../../data.json";

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;
export type datum = ArrElement<typeof data>;
export type d3Datum = Omit<datum, "date"> & { date: Date };

export function sortByDateAscending(a: { date: Date }, b: { date: Date }) {
	return a.date.getTime() - b.date.getTime();
}

export const subjects = [...new Set(data.map((d) => d.subject_and_method).flat())].sort();
export const genres = [...new Set(data.map((d) => d.genre).flat())].sort();
export const tenses = [...new Set(data.map((d) => d.tenses).flat())];
export const grammaticalPersons = [...new Set(data.map((d) => d.grammatical_person))];

export const width = 800;
export const height = 600;
export const margin = { left: 40, right: 40, top: 40, bottom: 40 };
export const padding = 4;
