import { OK } from 'http-status';

import * as mvtk from '@motionpicture/mvtk-reserve-service';
import { Service } from '../service';

/**
 * 座席指定情報連携In
 */
export import ISeatInfoSyncIn = mvtk.services.seat.seatInfoSync.ISeatInfoSyncIn;
/**
 * 座席指定情報連携Out
 */
export import ISeatInfoSyncResult = mvtk.services.seat.seatInfoSync.ISeatInfoSyncResult;
/**
 * 着券サービス
 */
export class SeatService extends Service {
    /**
     * プロフィール検索
     */
    public async seatInfoSync(params: ISeatInfoSyncIn): Promise<ISeatInfoSyncResult> {
        return this.fetch({
            uri: '/seat/seatInfoSync',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
