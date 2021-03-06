///<reference path="../../../../../typings/lodash/lodash.d.ts" />

export class Account {
    id:number;
    login:string;
    profile:{authorities?:Array<{id:number, name: string}>};
    authenticated = true;
    constructor(account?:{id:number,login:string,profile:any}) {
        if(account) {
            _.assignIn(this, account);
            this.authenticated = false;
        }
    }
}
