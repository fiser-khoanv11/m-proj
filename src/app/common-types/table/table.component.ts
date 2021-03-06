import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Type } from '../i-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends Type implements OnInit {

  displayTable: Array<Array<Array<Array<Object>>>> = [];
  count: number;

  ngOnInit() {
    this.count = this.data['first'];

    for (let i = 0; i < this.data['table'].length; i++) {
      this.displayTable[i] = [];
      let row = this.data['table'][i];
      for (let j = 0; j < row.length; j++) {
        this.displayTable[i][j] = [];
        let cell = row[j];
        for (let t = 0; t < cell.length; t++) {
          this.displayTable[i][j][t] = this.convert(cell[t]);
        }
      }
    }
  }

  convert(para: string): Array<Object> {
    let result: Array<Object> = [];

    while (para.includes('[]')) {
      para = para.replace('[]', '*{}*');
    }

    let splitedPara: Array<string> = para.split('*');
    
    for (let j = 0; j < splitedPara.length; j++) {
      if (splitedPara[j] == '{}') {
        result.push({ isInput: true, data: this.count });
        this.count++;
      } else {
        result.push({ isInput: false, data: splitedPara[j] });
      }
    }

    // console.warn(result);
    return result;
  }

  getAnswers(): Array<string> {
    return this.answers;
  }

}
