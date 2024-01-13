import { Component, OnInit } from '@angular/core';
import { Module } from '../Model/module';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{

  modules: Module[] = [];
  module: Module = new Module();

  constructor(private moduleService: ModuleService) {}
  
  ngOnInit() {
    this.loadModules();
  }

  private loadModules(): void{
    this.moduleService.getModules().subscribe((data: Module[]) => {
      this.modules = data;
    });
  }

  addModule(): void{
    this.moduleService.addModule(this.module).subscribe(
      response => {

        // Reset the form
        this.module = new Module();
        alert('Product added successfully');

  });
  }
}
