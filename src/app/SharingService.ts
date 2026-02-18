import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharingService {
    public userData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}