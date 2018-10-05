// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import { AuthClient } from './auth/authClient';

import { AuthService } from './service/auth';
import { SeatService } from './service/seat';
import * as transporters from './transporters';

import * as mvtk from '@motionpicture/mvtk-reserve-service';

export import mvtk = mvtk;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }
/**
 * サービスモジュール
 */
export namespace service {
    /**
     * 注文サービス
     */
    // tslint:disable-next-line:no-shadowed-variable
    export class Auth extends AuthService { }
    /**
     * 組織サービス
     */
    export class Seat extends SeatService { }
}
