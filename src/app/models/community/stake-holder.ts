import {Catalogue, State} from '../ignug/models.index';

export interface StakeHolder {
    id?:number;
    name?: string;
    lastname?: string;
    identification?: string;
    position?: string;
    function?: string;
    type?: Catalogue;
    state?: State;
    // REPRESENTANTE LEGAL, COORDINADORE
}