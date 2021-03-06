import {State} from '../ignug/models.index';

export interface Image {
    id?: number;
    code?: string;
    name?: string;
    type?: string;
    state?: boolean;
    uri?: string;
    extension?: string;
}
