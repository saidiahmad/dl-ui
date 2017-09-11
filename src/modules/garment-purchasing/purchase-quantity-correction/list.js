import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';

@inject(Router, Service)
export class List {
    context = ["Rincian", "Cetak PDF"];
    columns = [
        { field: "no", title: "Nomor Koreksi Jumlah Pembelian" },
        {
            field: "date", title: "Tanggal Koreksi Jumlah", formatter: function (value, data, index) {
                return moment(value).format("DD MMM YYYY");
            }
        },
        { field: "deliveryOrder.supplier.name", title: "Nama Supplier" },
        { field: "deliveryOrder.no", title: "Nomor Surat Jalan", sortable: false }
    ];

    loader = (info) => {
        var order = {};
        if (info.sort)
            order[info.sort] = info.order;
        var arg = {
            page: parseInt(info.offset / info.limit, 10) + 1,
            size: info.limit,
            keyword: info.search,
            select: ["date", "no", "deliveryOrder.supplier.name", "deliveryOrder.no"],
            order: order
        }

        return this.service.search(arg)
            .then((result) => {
                var data = {}
                data.total = result.info.total;
                data.data = result.data;
                return {
                    total: result.info.total,
                    data: result.data
                }
            });
    }

    constructor(router, service) {
        this.service = service;
        this.router = router;
    }

    contextClickCallback(event) {
        var arg = event.detail;
        var data = arg.data;
        switch (arg.name) {
            case "Rincian":
                this.router.navigateToRoute('view', { id: data._id });
                break;
            case "Cetak PDF":
                this.service.getPdfById(data._id);
                break;
        }
    }

    create() {
        this.router.navigateToRoute('create');
    }
}