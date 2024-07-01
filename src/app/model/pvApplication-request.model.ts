import { Borrower } from "./borrower-model";
import { Facilty } from "./facility-model";
import { User } from "./user-model";
import { Document } from "./document-model";
import { Comment } from "./comment-model";


export class PVApplicationRequest{
    fosreferenceNumber!: string;
    type!: string;
    createdBy!: User
    facilityDto!: Facilty
    borrowersDto: Borrower[] = [];
    documentsDto: Document[] = [];
    commentsDto: Comment[] = [];
}