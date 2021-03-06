module.exports = [
    {
        route: 'production/spinning/winding/winding-quality-sampling',
        name: 'winding-quality-sampling',
        moduleId: './modules/production/spinning/winding/winding-quality-sampling/index',
        nav: false,
        title: 'Quality Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            //permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },

    {
        route: 'production/spinning/winding/winding-quality-sampling/report',
        name: 'winding-quality-sampling-report',
        moduleId: './modules/production/spinning/winding/reports/winding-quality-sampling-report/index',
        nav:false ,
        title: 'Laporan Quality Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            //permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/spinning/winding/winding-production-output',
        name: 'winding-production-output',
        moduleId: './modules/production/spinning/winding/winding-production-output/index',
        nav: false,
        title: 'Output Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            //permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/spinning/winding/reports/daily-spinning-production-report',
        name: 'daily-spinning-production-report',
        moduleId: './modules/production/spinning/winding/reports/daily-spinning-production-report/index',
        nav: false,
        title: 'Monitoring Output Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            //permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/daily-operation',
        name: 'dailys',
        moduleId: './modules/production/finishing-printing/daily-operation/index',
        nav: false,
        title: 'Monitoring Operasional Harian',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/daily-operation-report',
        name: 'report-dailys',
        moduleId: './modules/production/finishing-printing/reports/daily-operation-report/index',
        nav: false,
        title: 'Laporan Monitoring Operasional Harian',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/monitoring-event',
        name: 'monitoring-event',
        moduleId: './modules/production/finishing-printing/monitoring-event/index',
        nav: false,
        title: 'Monitoring Event',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/monitoring-event-report',
        name: 'report-monitoring-events',
        moduleId: './modules/production/finishing-printing/reports/monitoring-event-report/index',
        nav: false,
        title: 'Report Monitoring Event',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }

    },
    {
        route: 'production/finishing-printing/monitoring-specification-machine',
        name: 'monitoring-specification-machine',
        moduleId: './modules/production/finishing-printing/monitoring-specification-machine/index',
        nav: false,
        title: 'Monitoring Spesifikasi Mesin',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/monitoring-specification-machine-report',
        name: 'monitoring-specification-machine-report',
        moduleId: './modules/production/finishing-printing/reports/monitoring-specification-machine-report/index',
        nav: false,
        title: 'Laporan Monitoring Spesifikasi Mesin',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/kanban',
        name: 'kanban',
        moduleId: './modules/production/finishing-printing/kanban/index',
        nav: false,
        title: 'Kanban',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/bad-output-kanban',
        name: 'kanban',
        moduleId: './modules/production/finishing-printing/bad-output-kanban/index',
        nav: false,
        title: 'Kanban Pengganti Bad Output',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/kanban-visualization-area',
        name: 'kanban-visualization-area',
        moduleId: './modules/production/finishing-printing/kanban-visualization-area/index',
        nav: false,
        title: 'Kanban Visualization Area',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/kanban-visualization-machine',
        name: 'kanban-visualization-machine',
        moduleId: './modules/production/finishing-printing/kanban-visualization-machine/index',
        nav: false,
        title: 'Kanban Visualization Machine',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/monitoring-kanban',
        name: 'monitoring-kanban',
        moduleId: './modules/production/finishing-printing/monitoring-kanban/index',
        nav: false,
        title: 'Monitoring Kanban',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/quality-control/defect',
        name: 'report-dailys',
        moduleId: './modules/production/finishing-printing/quality-control/defect/index',
        nav: false,
        title: 'Pencatatan Pemeriksaan Kain',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'finishing-printing/reports/fabric-quality-control-report',
        name: 'fabric-quality-control-report',
        moduleId: './modules/production/finishing-printing/reports/fabric-quality-control-report/index',
        nav: false,
        title: 'Laporan Pemeriksaan Kain',
        auth: true,
        settings: {
            group: "production",
            permission: { "*": 0 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/packing',
        name: 'packing',
        moduleId: './modules/production/finishing-printing/packing/index',
        nav: false,
        title: 'Penyerahan Produksi',
        auth: true,
        settings: {
            group: "production",
            permission: { "*": 0 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/packing-report',
        name: 'packing-report',
        moduleId: './modules/production/finishing-printing/reports/packing-report/index',
        nav: false,
        title: 'Laporan Penyerahan Produksi',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/qcgudang-report',
        name: 'packing-report',
        moduleId: './modules/production/finishing-printing/reports/qcgudang-report/index',
        nav: false,
        title: 'Laporan Penyerahan QC ke Gudang',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/inspection-lot-color',
        name: 'inspection-lot-colors',
        moduleId: './modules/production/finishing-printing/inspection-lot-color/index',
        nav: false,
        title: 'Pencatatan Pemeriksaan Lot Warna',
        auth: true,
        settings: {
            group: "production",
            permission: { "*": 0 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'finishing-printing/reports/inspection-lot-color-report',
        name: 'inspection-lot-color-report',
        moduleId: './modules/production/finishing-printing/reports/inspection-lot-color-report/index',
        nav: false,
        title: 'Laporan Pemeriksaan Lot Warna',
        auth: true,
        settings: {
            group: "production",
            permission: { "*": 0 },
            iconClass: 'fa fa-dashboard'
        }
    },
    // {
    //     route: 'production/finishing-printing/reports/bad-output-report',
    //     name: 'badoutput',
    //     moduleId: './modules/production/finishing-printing/reports/bad-output-report/index',
    //     nav: true,
    //     title: 'Monitoring Good / Bad Output per Mesin',
    //     auth: true,
    //     settings: {
    //         group: "production",
    //         permission: { "C9": 1, "F1": 1, "F2": 1 },
    //         iconClass: 'fa fa-dashboard'
    //     }
    // },
    {
        route: 'production/finishing-printing/reports/monitoring-montly-operation-machine',
        name: 'monitoring-montly-operation-machine',
        moduleId: './modules/production/finishing-printing/reports/monitoring-montly-operation-machine/index',
        nav: false,
        title: 'Monitoring monthly operation machine',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/daily-operation-machine',
        name: 'daily-operation-machine',
        moduleId: './modules/production/finishing-printing/reports/daily-operation-machine/index',
        nav: false,
        title: 'Laporan Output Mesin per Hari',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/machine-queue-report',
        name: 'machine-queue-report',
        moduleId: './modules/production/finishing-printing/reports/machine-queue-report/index',
        nav: false,
        title: 'Laporan Order Belum Diproduksi Mesin',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/finishing-printing/reports/order-status-report',
        name: 'order-status-report-production',
        moduleId: './modules/production/finishing-printing/reports/order-status-report/index',
        nav: false,
        title: 'Laporan Status Order',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {

        route: 'production/finishing-printing/fp-retur-pro-inv-docs',
        name: 'fp-retur-pro-inv-docs',
        moduleId: './modules/production/finishing-printing/fp-retur-pro-inv-docs/index',
        nav: false,
        title: 'Bon Hasil Re-grading',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {

        route: 'production/finishing-printing/reports/fp-regrading-result-doc-report',
        name: 'fp-regrading-result-doc-report',
        moduleId: './modules/production/finishing-printing/reports/fp-regrading-result-doc-report/index',
        nav: false,
        title: 'Laporan Bon Hasil Re-grading',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: "production/finishing-printing/materials-request-note",
        name: "production/finishing-printing/materials-request-note",
        moduleId: "./modules/production/finishing-printing/materials-request-note/index",
        nav: false,
        title: "Surat Permintaan Barang",
        auth: true,
        settings: {
            group: "production",
            permission: { "*": 1 },
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: 'production/finishing-printing/reports/materials-request-note-report',
        name: 'materials-request-note-report',
        moduleId: './modules/production/finishing-printing/reports/materials-request-note-report/index',
        nav: false,
        title: 'Laporan Surat Permintaan Barang',
        auth: true,
        settings: {
            group: "production",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }
]


