public class loginController {
    
    public static void registerHandler(string payload){
        loginClass payloadObject = (loginClass) JSON.deserialize(payload, loginClass.class);
  
        SObject login = (SObject) Type.forName('LoginObj__c').newInstance();
        login.put('username__c', payloadObject.username);
        login.put('password__c', payloadObject.password);

        insert login;
    }
    
    public static bool loginHandler(string username){
        bool luzVerde = false;
        List<LoginObj__c> aux = [SELECT username__c FROM LoginObj__c WHERE username__c = :username];
        if(aux.lenght() > 0){
            luzVerde = true;
        }
        return luzVerde;
    }

    public class loginClass{
        @AuraEnabled
        public static string username;
        @AuraEnabled
        public static string password;
    }
}
