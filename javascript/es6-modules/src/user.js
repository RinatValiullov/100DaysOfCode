import slug from '../node_modules/slug/slug';
import {
    myUrl
} from './config';
import base64 from '../node_modules/base-64/base64';

export default function User(name, email, website) {
    return {
        name,
        email,
        website
    }
}

export function createURL(name) {
    return `${myUrl}/users/${slug(name)}`;
}

export function gravatar(email) {
    let hash = base64.encode(email);
    let photoUrl = `https://www.gravatar.com/avatar/${hash}`;
    return photoUrl;
}
