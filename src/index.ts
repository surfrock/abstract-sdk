// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import { AuthClient } from './auth/authClient';

import * as authService from './service/auth';
import * as seatService from './service/seat';
import * as transporters from './transporters';

// import * as mvtk from '@motionpicture/mvtk-reserve-service';

// export import mvtk = mvtk;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }
/**
 * サービスモジュール
 */
export namespace service {
    export import auth = authService;
    export import seat = seatService;
}
