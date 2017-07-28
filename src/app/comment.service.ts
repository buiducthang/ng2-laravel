import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
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

    updateComment(id :number, newContent: string){
        const body = JSON.stringify({content: newContent});
        const headers = new Headers({'Content-Type':'application/json'});
        console.log("id:" + id);
        console.log(body);
        return this.http.put('http://localhost:8000/api/comment/' + id, body, {headers:headers})
                    .map(
                        (response: Response) => {
                            return response.json();
                        }
                    );
    }

    createComment(newContent: string){
        const body = JSON.stringify({content: newContent});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:8000/api/comment/', body, {headers:headers});
    }

    deleteComment(id :number){
        return this.http.delete('http://localhost:8000/api/comment/' + id);
    }
}

