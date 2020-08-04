export class Fund {
    date: number;
    fund_id: string;
    fund_name: string;
    index: number;
    nb_alerts: number;
    report_status: boolean;
    share_class_id: string;
    share_class_name: string;
    subfund_id: string;
    subfund_name: string;

    constructor(
        date: number = 20200101,
        fund_id: string = 'fund_id',
        fund_name: string = 'fund_name',
        index: number = 0,
        nb_alerts: number = 0,
        report_status: boolean = false,
        share_class_id: string = 'share_class_id',
        share_class_name: string = 'share_class_name',
        subfund_id: string = 'subfund_id',
        subfund_name: string = 'subfund_name'
    ){
        this.date = date;
        this.fund_id = fund_id;
        this.fund_name = fund_name;
        this.index = index;
        this.nb_alerts = nb_alerts;
        this.report_status = report_status;
        this.share_class_id = share_class_id;
        this.share_class_name = share_class_name;
        this.subfund_id = subfund_id;
        this.subfund_name = subfund_name;
    }
}