import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Serverlog } from "./server-log";
import { environment } from "src/environments/environment";

const API = environment.serverLog;

@Injectable({providedIn:'root'})
export class ServerLogService{
    constructor(private httpClient: HttpClient){}

    log(serverLog: Serverlog){
        return this.httpClient.post(API + '/infra/log', serverLog);
    }
}