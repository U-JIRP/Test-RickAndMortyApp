import { Gender } from "./gender.interface";
import { Location } from "./location.interface";
import { Species } from "./species.interface";
import { Status } from "./status.interface";
 

export interface Character {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}
