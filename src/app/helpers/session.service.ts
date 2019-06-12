import { Injectable } from '@angular/core';

import { Session } from '../models/session';

@Injectable()
export class SessionService {
  session: Session;
  constructor() {}

  getSession() {
    return this.session;
  }

  setSession(session) {
    this.session = session;
  }

}
