import { factory as SFR } from '@surfrock/soap-parser';
import { Service } from '../service';
import { HttpStatus } from './httpStatus';

export namespace factory {
    export import seatInfoSync = SFR.service.seat.seatInfoSync;
    export import seatInfoSyncCancel = SFR.service.seat.seatInfoSyncCancel;
}

/**
 * 着券サービス
 */
export class SeatService extends Service {
    /**
     * 座席指定情報連携
     */
    public async seatInfoSync(params: factory.seatInfoSync.ISeatInfoSyncIn): Promise<factory.seatInfoSync.ISeatInfoSyncResult> {
        return this.fetch({
            uri: '/seat/seatInfoSync',
            method: 'POST',
            body: params,
            expectedStatusCodes: [HttpStatus.OK]
        })
            .then(async (response) => response.json());
    }
    /**
     * 座席開放連携
     */
    public async seatInfoSyncCancel(
        params: factory.seatInfoSyncCancel.ISeatInfoSyncCancelIn
    ): Promise<factory.seatInfoSyncCancel.ISeatInfoSyncCancelResult> {
        return this.fetch({
            uri: '/seat/seatInfoSyncCancel',
            method: 'POST',
            body: params,
            expectedStatusCodes: [HttpStatus.OK]
        })
            .then(async (response) => response.json());
    }
}
