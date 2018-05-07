import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';

@inject(Router, Service)
export class List {
  constructor(router, service) {
        this.service = service;
        this.router = router;
        
    }
    
    info = { page: 1,size:50};

    controlOptions = {
        label: {
            length: 4
        },
        control: {
            length: 4
        }
    };
     

    search(){
        this.error = {};

        if (!this.dateTo || this.dateTo == "Invalid Date")
            this.error.dateTo = "Tanggal Akhir harus diisi";

        if (!this.dateFrom || this.dateFrom == "Invalid Date")
            this.error.dateFrom = "Tanggal Awal harus diisi";


        if (Object.getOwnPropertyNames(this.error).length === 0) {
            this.flag = true;
            this.info.page = 1;
            this.info.total=0;
            this.searching();
        }
    }

    searching() {
     
    var args = {
            page: this.info.page,
            size: this.info.size,
            dateFrom : this.dateFrom ? moment(this.dateFrom).format("YYYY-MM-DD") : "",
            dateTo : this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : ""
        }
        this.service.search(args)
     
            .then(result => {
               this.info.total=result.info.total;    
               this.data=result.data;
               for(var a of this.data){
                   a.LastQty=(a.BeginQty+a.ReceiptQty-a.ExpenditureQty+a.AdjustmentQty+a.OpnameQty).toFixed(2);
                   a.Diff=(0).toFixed(2);
                   a.BeginQty=a.BeginQty.toFixed(2);
                   a.ReceiptQty=a.ReceiptQty.toFixed(2);
                   a.ExpenditureQty=a.ExpenditureQty.toFixed(2);
                   a.AdjustmentQty=a.AdjustmentQty.toFixed(2);
                   a.OpnameQty=a.OpnameQty.toFixed(2);
               }
            });
            
    }

    changePage(e) {
        var page = e.detail;
        this.info.page = page;
        this.searching();
    }
      reset() {
        this.type = "";
        this.dateFrom = "";
        this.dateTo = "";
        
        this.info.page = 1;
    }

    
}