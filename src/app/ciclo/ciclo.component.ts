import { Component, OnInit, OnChanges,
         OnDestroy, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewInit,
         AfterViewChecked,
         Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
OnInit, OnChanges, OnDestroy, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked {
  @Input() valorInicial = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
