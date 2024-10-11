import { Erro } from "../entities/erro";

export class ErrosResponse {
    constructor(public erros: Erro[]){}
}