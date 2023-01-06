import { Component, Input, OnInit } from '@angular/core';
import { Excelpkg2Service } from './excelpkg2.service';
import "../../assets/src/index.js"
import "../../assets/xspreadsheet.css";


@Component({
  selector: 'lib-excelpkg2',
  template: `
  <div style="position: relative">
    <div id="x-spreadsheet-demo" style="height: 100vh"></div>
    <div style="position: absolute;top: 10px;right: 100px" *ngIf="isSaving">Saving.....</div>
  </div>
  `,
  styles: [],
})

export class Excelpkg2Component implements OnInit {

  @Input() url: string = "";
  @Input() getPath: string = "";

  s: any;
  isSaving: boolean = false;
  sheetData: any = null

  myvar1: any = {
    text: "",
    style: 4,
    editable: false,
    dbKey: "",
    id: ""
  }

  sheetConfig: any = {
    name: "",
    styles: [
        {
            border: {
                bottom: ["thin", "#000"],
                top: ["thin", "#000"],
                left: ["thin", "#000"],
                right: ["thin", "#000"]
            }
        },
        {
            border: {
                bottom: ["thin", "#000"],
                top: ["thin", "#000"],
                left: ["thin", "#000"],
                right: ["thin", "#000"]
            },
            font: { bold: true }
        },
        { font: { bold: true } },
        {
            border: {
                bottom: ["thin", "#000"],
                top: ["thin", "#000"],
                left: ["thin", "#000"],
                right: ["thin", "#000"]
            },
            font: { bold: true },
            align: "center"
        },
        { font: { bold: true }, align: "center" }
    ],
    rows: {
        "0": {
            "cells": {}
        }
    },
    validations: [],
    autofilter: {}
  }

  constructor(private sheetService: Excelpkg2Service) { }

  ngOnInit(): void {
    console.log(this.url)
    console.log(this.getPath)
    this.sheetService.getSheetData(this.url, this.getPath).subscribe((data: any) => {
      if (data && data.sheetData) {
        this.sheetData = data.sheetData
        this.sheetConfig.name = data.sheetData.name
        this.sheetConfig.validations = data.sheetData.validation
        this.sheetConfig.rows["0"]["cells"] = data.sheetData.cellsObj
        data.sheetData.data.map((d: any, idx: number) => {
            let cloneObj: any = {}
            this.sheetConfig.rows[idx + 1] = {}
            let id: any = ""
            Object.entries(d).map((o, i) => {
              if (o[0] === "_id") {
                id = o[1]
              }
              if (o[0] !== "_id") {
                const testvar = {...this.myvar1}
                testvar.text = o[1]
                testvar.dbKey = o[0]
                testvar.id = id
                testvar.editable = true
                cloneObj[i-1] = testvar
              }
            })
            Object.defineProperty(this.sheetConfig.rows[idx + 1], "cells", {
              value: cloneObj
            })
        })
        console.log(this.sheetConfig)

        this.s = window.x_spreadsheet("#x-spreadsheet-demo", {
          view: {
            height: () => document.documentElement.clientHeight,
            width: () => document.documentElement.clientWidth,
          },
        row: {
          len: 25,
        },
        col: {
          len: data.sheetData.colLen,
        },
        }).loadData(this.sheetConfig)
        .change((data: any) => {
            //console.log(data)
        })
        this.s.on("cell-edited", (cell: any, ri: any, ci: any) => {
          console.log(cell, ri, ci)
        })
        this.s.on("cell-edited-finished", (cell: any, ri: number, ci: number) => {
          if (this.s.datas[0].rows._[ri]["cells"][ci]["id"] !== undefined &&
            this.s.datas[0].rows._[ri]["cells"][ci]["dbKey"] !== undefined &&
            this.s.datas[0].rows._[ri]["cells"][ci]["text"] !== undefined
          ) {
            if (this.s.validate()) {
              const obj: any = {}
              obj[this.s.datas[0].rows._[ri]["cells"][ci]["dbKey"]] = this.s.datas[0].rows._[ri]["cells"][ci]["text"]
              obj["id"] = this.s.datas[0].rows._[ri]["cells"][ci]["id"]
              this.isSaving = true
              this.sheetService.postSheetObj(this.url, obj.id, obj).subscribe(data => {
                if (data) {
                  this.isSaving = false
                }
              })
            }
          }
        })
      }
      //console.log(this.sheetData)
    })
    console.log(this.sheetConfig)
  }

  getDbKeyObj(sheetObj: any) {
    const returnObj: any = {}
    Object.keys(sheetObj?.cellsObj).map((key: any) => {
        returnObj[sheetObj.cellsObj[key]["dbKey"]] = ""
    })
    return returnObj;
  }
  mapSheetDataToObjArr = (cellObj: any, objKeys: any) => {
    const resArr: any = []
    const keysArr: any = []
    Object.keys(objKeys).forEach(key => keysArr.push(key))
    Object.keys(cellObj).forEach((keyParent, idx) => {
        if (idx !== 0) {
            const cloneObj = { ...objKeys }
            Object.keys(cellObj[keyParent]["cells"]).forEach((keyChild, i) => {
                cloneObj[keysArr[i]] = cellObj[keyParent]["cells"][keyChild].text
            })
            resArr.push(cloneObj)
        }
    })
    console.log(resArr)
  }

  onSave() {
    console.log(this.s.validate())
    // const resObj: any = this.getDbKeyObj(this.sheetData)
    // this.mapSheetDataToObjArr(this.s.datas[0].rows._, resObj);
  }

}
