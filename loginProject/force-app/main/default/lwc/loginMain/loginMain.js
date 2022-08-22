import { LightningElement } from 'lwc';
import registerHandler from "@salesforce/apex/loginController.registerHandler";
import loginHandler from "@salesforce/apex/loginController.loginHandler";

export default class LoginMain extends LightningElement {
    handleLogin(){
        loginHandler({ payload: JSON.stringify(playerInfo)}).then( response =>{
            console.log('Item inserted sucessfully' + response);
            //this.fetchToDos();
        }).catch( error => {
            console.log('Error inserting item'+ error);
        });
    }

    handleRegister(){
        savePlayerApex({ payload: JSON.stringify(playerInfo)}).then( response =>{
            console.log('Item inserted sucessfully' + response);
            //this.fetchToDos();
        }).catch( error => {
            console.log('Error inserting item'+ error);
        });
    }
}