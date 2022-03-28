import { OK } from 'http-status';

import * as mvtk from '@motionpicture/mvtk-reserve-service';
import { Service } from '../service';

export namespace factory {
    export import DeleteFlag = mvtk.services.seat.seatInfoSync.DeleteFlag;
    export import IInvalidPurchaseNumberInfo = mvtk.services.seat.seatInfoSync.IInvalidPurchaseNumberInfo;
    export import IKnyknrNoInfo = mvtk.services.seat.seatInfoSync.IKnyknrNoInfo;
    export import ISeatInfoSyncIn = mvtk.services.seat.seatInfoSync.ISeatInfoSyncIn;
    export import ISeatInfoSyncResult = mvtk.services.seat.seatInfoSync.ISeatInfoSyncResult;
    export import IInvalidTicketDetailInfo = mvtk.services.seat.seatInfoSync.IInvalidTicketDetailInfo;
    export import IInvalidTicketTypeInfo = mvtk.services.seat.seatInfoSync.IInvalidTicketTypeInfo;
    export import InvalidityCategory = mvtk.services.seat.seatInfoSync.InvalidityCategory;
    export import ReservationResult = mvtk.services.seat.seatInfoSync.ReservationResult;
    export import ReserveDeviceType = mvtk.services.seat.seatInfoSync.ReserveDeviceType;
}

/**
 * 着券サービス
 */
export class SeatService extends Service {
    public async seatInfoSync(params: factory.ISeatInfoSyncIn): Promise<factory.ISeatInfoSyncResult> {
        return this.fetch({
            uri: '/seat/seatInfoSync',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => response.json());
    }
}
