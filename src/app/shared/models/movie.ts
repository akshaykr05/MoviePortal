export class Movie {
    $key: string;
    id: number;
    poster_path: string;
    title: string;
    release_date: Date;
    overview: string;
    genres: Array<string>;
    production_companies: Array<string>;
    spoken_languages: Array<string>;
    vote_average: number;
    status: string;
}