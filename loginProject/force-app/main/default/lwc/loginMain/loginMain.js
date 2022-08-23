import { LightningElement , track} from 'lwc';
import registerHandler from "@salesforce/apex/loginController.registerHandler";
import loginHandler from "@salesforce/apex/loginController.loginHandler";

export default class LoginMain extends LightningElement {
    @track username
    @track password


    encCryptNow(a){
        const CryptoJS = require('crypto-js')
        const passphrase = 'momo'
        return CryptoJS.AES.encrypt(a, passphrase).toString()
    }

    decCryptNow(a){
        const CryptoJS = require('crypto-js')
        const passphrase = 'momo'
        const bytes = CryptoJS.AES.decrypt(a, passphrase)
        const originalText = bytes.toString(CryptoJS.enc.Utf8)
        return originalText
    }

    passHandler(event){
        this.password = event.target.value;
    }

    userHandler(event){
        this.username = event.target.value;
    }


    handleLogin(){
        loginHandler({ username: this.username}).then( response =>{
            if(response !== null){
                console.log('Logeado Correctamente '+ response);
            }else{
                console.log('Registrese antes de logearse ');
            }
            //this.fetchToDos();
        }).catch( error => {
            console.log('Error al logear'+ error);
        });
    }

    handleRegister(){
        //this.password = encCryptNow(this.password)
        //console.log(this.password)
        const backPack = {
            username : this.username,
            password : this.password
        }

        registerHandler({ payload: JSON.stringify(backPack)}).then( response =>{
            console.log('Registrado Correctamente' + response);
            //this.fetchToDos();
        }).catch( error => {
            console.log('Error al registrarse'+ error);
        });
    }
}