import type { d3Datum } from "./storyDataUtils";

export function isFavourite(data: d3Datum) {
	return data.favourite;
}

export function isChapters(data: d3Datum) {
	return data.chapters;
}

export function isNamed(data: d3Datum) {
	return data.named;
}

export function hasSubject(data: d3Datum, subject: string) {
	return data.subject_and_method.includes(subject);
}

export function hasGenre(data: d3Datum, genre: string) {
	return data.genre.includes(genre);
}

export function hasTense(data: d3Datum, tense: string) {
	return data.tenses.includes(tense);
}

export function isPerson(data: d3Datum, person: string) {
	return data.grammatical_person === person;
}
