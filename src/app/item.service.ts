import { Injectable } from '@angular/core';
import {Item} from './item';
import { ITEMS_TO_BUY} from './mock-items_to_buy';
import { Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ItemService {

  private itemsUrl = 'api/items';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found items matching "${term}"`) :
        this.log(`no items matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getItems_to_buy(): Observable<Item[]>{
    const items_to_buy = of(ITEMS_TO_BUY);
    this.messageService.add('ItemService: fetched items_to_buy')
    return items_to_buy;
  }

}
