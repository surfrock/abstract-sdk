import { factory as SFR } from '@surfrock/soap-parser';
import { Service } from '../service';
import { HttpStatus } from './httpStatus';

export namespace factory {
    export import purchaseNumberAuth = SFR.service.auth.purchaseNumberAuth;
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
            expectedStatusCodes: [HttpStatus.OK]
        })
            .then(async (response) => response.json());
    }
}
