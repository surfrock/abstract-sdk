import { OK } from 'http-status';

import * as mvtk from '@motionpicture/mvtk-reserve-service';
import { Service } from '../service';

/**
 * 購入管理番号認証In
 */
export import IPurchaseNumberAuthIn = mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
/**
 * 購入管理番号認証Out
 */
export import IPurchaseNumberAuthResult = mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
/**
 * 認証サービス
 */
export class AuthService extends Service {
    /**
     * 購入番号認証
     */
    public async purchaseNumberAuth(params: IPurchaseNumberAuthIn): Promise<IPurchaseNumberAuthResult> {
        return this.fetch({
            uri: '/auth/purchaseNumberAuth',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
