import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CommentService{
    constructor(private http: Http)
    {

    }

    getComments(): Observable<any>
    {
        return this.http.get('http://localhost:8000/api/comments')
                    .map(
                        (response: Response) => {
                            return response.json().comments;
                        }
                    );
    }
}

