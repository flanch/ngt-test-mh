import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { getLocaleDayNames } from '@angular/common';
import { Fund } from './fund';
import { FUNDS } from './mock-fund';
import { AlertBoxComponent } from './alertBox.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {
  title = 'ngt-test-mh';
  funds: Fund[] = null;
  dateArray: Array<number> = null;
  fundsDated: Fund[] = null;
  fundsAlerted: Fund[] = null; 
  trendingFunds: Fund[] = null; 
  page: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {

}

  ngOnInit(): void {
    // firebase.initializeApp(environment.firebaseConfig);
    this.funds = FUNDS;
    this.dateArray = [20200504,
      20200505,
      20200506,
      20200507,
      20200508,
      20200511,
      20200512,
      20200513,
      20200514,
      20200515,
      20200518,
      20200519,
      20200520,
      20200522,
      20200525,
      20200526,
      20200527,
      20200528,
      20200529
        ];
    // this.fundsDated = FUNDS;
    // this.getFunds(7);
    // this.getAFund("warren_investments");
    this.getFundsWithAlert();

    let rdNumb: Array<number> = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i=0; i<rdNumb.length; i++){
      rdNumb[i] = (Math.floor(Math.random()*5434*this.dateArray.length));
    } 

    this.getAFund(rdNumb);
    this.getFundsByDate(20200529);
  }

  getFunds(nb): void {

    firebase.database().ref().limitToFirst(nb).once('value').then((snapshot)=>{
      this.updateFunds(snapshot.val());
      console.log(snapshot.val());
    });
  }

  updateFunds(funds): void {
    this.funds = funds;
    funds[0].date
    // this.createDateList(funds[0].date, funds[funds.length-1].date);
  }

  createDateList(date1: number, date2: number): void {
    if(date1 < date2){
        let date = date1;
        while (date <= date2) {
            this.dateArray.push(date);
            date ++;
        }
        console.log("dateArray : "+ this.dateArray);
    }
  }

  getAFund(fundId): void {
    let trendings=fundId;
    fundId.forEach(element => {
      firebase.database().ref(element).once('value').then((snapshot) => {
        trendings.push(snapshot.val());
      })
      this.setTrendingFunds(trendings);
    });
    
  }

  setTrendingFunds(trF): void {
    this.trendingFunds = trF;
  }

  getFundsWithAlert(): void {
    firebase.database().ref().orderByChild('nb_alerts').limitToLast(5).once('value').then((snapshot) => {
      console.log(snapshot.val());
      this.setFundsWithAlertByDate(snapshot.val());
    })
  }

  setFundsWithAlertByDate(values): void {
    this.fundsAlerted = Object.values(values);
  }

  getFundsByDate(date): void {

    firebase.database().ref().orderByChild("date").equalTo(date).limitToFirst(200).on(('value'), (snapshot)=>{
      console.log(date, snapshot.val());
      this.setFundsForADate(snapshot.val());
    });
  }

  setFundsForADate(funds): void {
    
    this.fundsDated = Object.values(funds);
    console.log(this.fundsDated);
  }

  selectFund(fund: Fund): void {
      let link = ['/fund/', fund.index];
      this.router.navigate(link); 
  }
}