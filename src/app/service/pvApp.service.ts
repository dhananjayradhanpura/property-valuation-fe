import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConstants, AppConstants } from "../app.constants";
import { PVApplicationRequest } from "../model/pvApplication-request.model";

@Injectable({
    providedIn: 'root'
})
export class PVAppService {
    constructor(private http: HttpClient) {
    }

    getDropDowns(){
        let url = AppConstants.HOST + ApiConstants.DROPDOWN_URL;
        return this.http.get<any>(url);
    }
    getNextAppRefNo(){
        let url = AppConstants.HOST + ApiConstants.NEXT_REF_NO;
        return this.http.get<any>(url);
    }
    createPvForm(pvApplicationReq: PVApplicationRequest, file: Blob) {
        let url = AppConstants.HOST + ApiConstants.CREATE_FORM_URL;
        let formData = new FormData();
        formData.append("file",file);
        formData.append("appData",JSON.stringify(pvApplicationReq));

        return this.http.post<any>(url, formData);
    }
    fetchApplications(){
        let url = AppConstants.HOST + ApiConstants.FETCH_APPLICATIONS;
        return this.http.get<any>(url);
    }
    fetchComments(userId: number){
        let url = AppConstants.HOST + ApiConstants.FETCH_COMMENTS;
        return this.http.get<any>(url+"/"+userId);
    }
    fetchDocuments(userId : number){
        let url = AppConstants.HOST + ApiConstants.FETCH_DOCUMENTS;
        return this.http.get<any>(url+"/"+userId);
    }
}