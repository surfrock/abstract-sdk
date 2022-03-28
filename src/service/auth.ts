import { OK } from 'http-status';

import * as mvtk from '@motionpicture/mvtk-reserve-service';
import { Service } from '../service';

export namespace factory {
    export import IKnyknrNoInfoIn = mvtk.services.auth.purchaseNumberAuth.IKnyknrNoInfoIn;
    export import INvalidTicket = mvtk.services.auth.purchaseNumberAuth.INvalidTicket;
    export import IPurchaseNumberInfo = mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberInfo;
    export import IValidTicket = mvtk.services.auth.purchaseNumberAuth.IValidTicket;
    export import InformationTypeCode = mvtk.services.auth.purchaseNumberAuth.InformationTypeCode;
    export import PurchaseInvalidityReason = mvtk.services.auth.purchaseNumberAuth.PurchaseInvalidityReason;
    export import IPurchaseNumberAuthIn = mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
    export import IPurchaseNumberAuthResult = mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
}

/**
 * 認証サービス
 */
export class AuthService extends Service {
    /**
     * 購入番号認証
     */
    public async purchaseNumberAuth(params: factory.IPurchaseNumberAuthIn): Promise<factory.IPurchaseNumberAuthResult> {
        return this.fetch({
            uri: '/auth/purchaseNumberAuth',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => response.json());
    }
}
