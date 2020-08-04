import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import * as firebase from 'firebase';
import { Fund } from './fund';

@Component({
    selector: 'alert-box',
    templateUrl: './alertBox.component.html',
    styleUrls: ['./alertBox.component.css']
  })
  export class AlertBoxComponent implements OnInit {

    @Input() fundAlerted: Fund;
    constructor(private route: ActivatedRoute, private router: Router) {
    
    }

    ngOnInit(): void {
    
    }
  }