public class loginController {
    
    @AuraEnabled
    public static string registerHandler(string payload){
        loginClass payloadObject = (loginClass) JSON.deserialize(payload, loginClass.class);
  
        SObject login = (SObject) Type.forName('LoginObj__c').newInstance();
        login.put('username__c', payloadObject.username);
        login.put('password__c', payloadObject.password);

        insert login;

        return String.valueOf(login.Id);
    }
    
    @AuraEnabled
    public static string loginHandler(string username){
        string luzVerde;
        List<LoginObj__c> aux = [SELECT username__c, password__c FROM LoginObj__c WHERE username__c = :username];
        if(aux.size() > 0){
            luzVerde = aux[0].password__c;
        }
        return luzVerde;
    }

    public class loginClass{
        @AuraEnabled
        public string username;
        @AuraEnabled
        public string password;
    }
}
