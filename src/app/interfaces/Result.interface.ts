import { Character } from "./character.interface";
import { Info } from "./info.interface";

export interface Result {
    info:    Info;
    results: Character[];
}