import { Component, OnInit } from '@angular/core';
import { XmlCreateService } from '../xml-create.service';
import * as JsonToXML from "js2xmlparser";
var FileSaver = require('file-saver');

@Component({
  selector: 'xml2json',
  templateUrl: './xml2json.component.html',
  styleUrls: ['./xml2json.component.scss']
})
export class Xml2jsonComponent implements OnInit {

  sTableName: any;
  tTableName: any;
  sDBName: any;
  tDBName: any;

  constructor(public xmlCreateService:XmlCreateService) { }

  ngOnInit(): void {
  }

  callApi() {
    const payload = {
        attributes: {
          SOURCE_TABLE_NAME: this.sTableName,
          TARGET_TABLE_NAME: this.tTableName,
          SOURCE_DATABASE_NAME: this.sDBName,
          TARGET_DATABASE_NAME: this.tDBName
      }
    };
    // console.log();
    // let xml = convert.json2xml(payload.toString());
    var blob = new Blob([JsonToXML.parse("TABLE_DETAIL", payload)], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "abc.xml");
    //this.xmlCreateService.getXml(payload).subscribe((res:any) => {
      
      // alert('downloaded !!');
    //});

  }

  

}
