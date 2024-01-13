import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = 'http://localhost:3000'; // Removed trailing slash

  constructor(private http: HttpClient) { }
  getModules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addModule(module: any): Observable<any> {
    const addModuleUrl = `${this.apiUrl}/modules`;
    return this.http.post(addModuleUrl, module);
  }
  addModul2e(module: any): Observable<any> {
    const addModuleUrl = `${this.apiUrl}/modules`;
    return this.http.post(addModuleUrl, module);
  }
  addModuleé(module: any): Observable<any> {
    const addModuleUrl = `${this.apiUrl}/modules`;
    return this.http.post(addModuleUrl, module);
  }
  addModule3(module: any): Observable<any> {
    const addModuleUrl = `${this.apiUrl}/modules`;
    return this.http.post(addModuleUrl, module);
  }
  addModul4e(module: any): Observable<any> {
    const addModuleUrl = `${this.apiUrl}/modules`;
    return this.http.post(addModuleUrl, module);
  }
}
