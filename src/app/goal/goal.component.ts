import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';
import { from } from 'rxjs';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    // new Goal(1, 'kent', 'great guy', new Date(2020, 3, 1)),
    // new Goal(2, 'kenneth', 'handsome young man' ,  new Date(2020, 1, 2)),
    // new Goal(3, 'joice', 'great mum' ,  new Date(2019, 11, 18)),
    // new Goal(4, 'joz', 'great dude' ,  new Date(2020, 7, 8))
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = ! this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
     let toDelete = confirm('Are you sure you want to delete this ${this.goals[index].name}?');

     if ( toDelete) {
       this.goals.splice(index, 1 );
     }
    }
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal);
  }

  constructor() { }

  ngOnInit() {
  }

}
