import { User } from '../auth/user';
import {Catalogue, State} from '../ignug/models.index';

export interface Participant {
    id?:number;
    user?: User;
    function?:Catalogue;
    // SOLO DOCENTE
    position?: string; // revisar en la base DE DONDE Y COMO DEBE VENIR LA INFO
    working_hours?: number;
    type?: Catalogue;
    state?: State;
    // DOCENTES, ESTUDIANTES, COORDINADORES, RECTOR.
    // END POINT PARA AUTOMATICO RECTOR
}