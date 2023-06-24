export class AuthService {
    isAuthenticated( ): Promise<boolean> {
        throw new Error('Method not implemented.');
        
    }
    loggedin =  false;
IsAuthenticated(){
    const promise = new Promise (
        (resolve: (arg0: boolean) => void, reject: any) => {
            setTimeout(() => {
               resolve(this.loggedin) 
            }, 800);
        }
    )
    return promise;
};


    login(){
        this.loggedin= true;
    }
    logout(){
        this.loggedin = false;
    }

}