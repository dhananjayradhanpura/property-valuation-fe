import { Injectable } from "@angular/core";
import { SessionStorageModel } from "../model/session-storage.model";

@Injectable({
    providedIn: 'root'
})
export class ApplicationStorageService {
    sessionStorageModel: SessionStorageModel = new SessionStorageModel();

    public setAccessToken(accessToken: string){
        this.sessionStorageModel.accessToken = accessToken;
    }
    getAccessToken(){
        return this.sessionStorageModel.accessToken;
    }
    public setUserId(userId: number){
        this.sessionStorageModel.userId = userId;
    }
    getUserId(){
        return this.sessionStorageModel.userId;
    }
    public setusername(username: string){
        this.sessionStorageModel.username = username;
    }
    getusername(){
        return this.sessionStorageModel.username;
    }
    public setrefreshToken(refreshToken: string){
        this.sessionStorageModel.refreshToken = refreshToken;
    }
    getrefreshToken(){
        return this.sessionStorageModel.refreshToken;
    }
    public setroleId(roleId: number){
        this.sessionStorageModel.roleId = roleId;
    }
    getroleId(){
        return this.sessionStorageModel.roleId;
    }
    public setbusinessUnit(businessUnit: string){
        this.sessionStorageModel.businessUnit = businessUnit;
    }
    getBusinessUnit(){
        return this.sessionStorageModel.businessUnit;
    }
    public setRefNo(refNo: number){
        this.sessionStorageModel.refNo = refNo;
    }
    getRefNo(){
        return this.sessionStorageModel.refNo;
    }

    clear() {
        this.sessionStorageModel = new SessionStorageModel();
    }
}