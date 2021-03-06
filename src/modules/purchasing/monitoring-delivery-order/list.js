import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';

@inject(Router, Service)
export class List {
 

    constructor(router, service) {
        this.service = service;
        this.router = router;
        this.today = new Date();
    }
    attached() {
    }

    activate() {

    }


    search() {
        this.SJ = [];
        this.service.search(this.no ? this.no : "", this.supplierId ? this.supplierId._id : "", this.dateFrom, this.dateTo)
            .then(data => {
                this.data = data;
                // for (var SJ of this.data) {
                //     this.SJ = SJ;
                //     for (var item of SJ.items) {
                //         this.item = item;
                //         for (var fulfillment of item.fulfillments) {
                //             this.fulfillment = fulfillment;
                //         }
                //     }
                // }
            })
    }
    reset() {
        this.no = "undefined";
        this.supplierId = "undefined";
        this.dateFrom = null;
        this.dateTo = null;
    }

    ExportToExcel() {
        this.service.generateExcel(this.no ? this.no : "", this.supplierId ? this.supplierId._id : "", this.dateFrom, this.dateTo);
    }

    dateFromChanged(e) {
        var _startDate = new Date(e.srcElement.value);
        var _endDate = new Date(this.dateTo);


        if (_startDate > _endDate)
            this.dateTo = e.srcElement.value;

    }
}