import { OK } from 'http-status';

import { factory as mvtkFactory } from '@motionpicture/mvtk-reserve-service';
import { Service } from '../service';

export namespace factory {
    export import purchaseNumberAuth = mvtkFactory.service.auth.purchaseNumberAuth;
}

/**
 * 認証サービス
 */
export class AuthService extends Service {
    /**
     * 購入番号認証
     */
    public async purchaseNumberAuth(
        params: factory.purchaseNumberAuth.IPurchaseNumberAuthIn
    ): Promise<factory.purchaseNumberAuth.IPurchaseNumberAuthResult> {
        return this.fetch({
            uri: '/auth/purchaseNumberAuth',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => response.json());
    }
}
