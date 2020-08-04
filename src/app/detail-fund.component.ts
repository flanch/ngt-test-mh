import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { getLocaleDayNames } from '@angular/common';
import { Fund } from './fund';
import { FUNDS } from './mock-fund';

@Component({
    selector: 'detail-fund',
    templateUrl: './detail-fund.component.html',
    styleUrls: ['./detail-fund.component.css']
  })
  export class DetailFundComponent implements OnInit {

    fund: Fund = FUNDS[0];
    index: string = null;
      constructor(private route: ActivatedRoute, private router: Router) {
        
      }

      ngOnInit(): void {
        this.route.params.forEach(params => {
          let theIndex: string = params['index'];
          console.log(params, theIndex);
          this.index = theIndex;
          firebase.database().ref(theIndex).on(('value'), (snapshot) => {
            console.log(theIndex, snapshot.val());
  
            this.setFund(snapshot.val());
          })
        })
        
      }

      getAFund(index): void {
        console.log(index);
        firebase.database().ref().orderByChild('index').equalTo(index).on(('value'), (snapshot) => {
          console.log(index, snapshot.val());

          this.setFund(snapshot.val());
        })
      }

      setFund(fund): void {
        console.log("problem : " + fund);
        this.fund = fund;
      }

      goPreviousDay(): void {
        console.log(this.fund.index);
        if(this.fund.index-5434 >=0){
          console.log("in if");
          let link = ['/fund/', this.fund.index-5434];
        this.router.navigate(link);
        }
      }

      goNextDay(): void {
        if(this.fund.date !== 20200529){
          let link = ['/fund/', this.fund.index+5434];
          this.router.navigate(link);
        }
      }
  }