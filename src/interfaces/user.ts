export interface User {
    id:  number;
    name?: string;
    email?: string,
    area?: string,
    url_photo?: string,
    url_photo_horror?: string,
    has_vote?: boolean,
    points?: number,
    votes? : string[]
}