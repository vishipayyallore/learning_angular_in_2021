import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ProductDto } from '../interfaces/ProductDto';

const baseUrl = 'http://localhost:3000';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private httpClient: HttpClient) {
    }

    // GET
    GetProducts(): Observable<ProductDto[]> {
        return this.httpClient.get<ProductDto[]>(`${baseUrl}/products`)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }

    // Error handling
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}
