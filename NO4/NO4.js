let username = 'Abdillah7997'
let password = '123'

function Login(username,password) {

    if(username == 'Abdillah7997' && password == '123'){

        function goHome(){

            console.log('Halaman Home');
        }

        return goHome

    } else {


        if(username == 'Abdillah7997'){
            if(password == '123'){
    
                function goHome(){
    
                    console.log('Halaman Home');
                }

                return goHome
    
            } else {
    
                function backLogin(){
    
                    
                    console.log('Login Gagal');

        
                }
        
                return backLogin
    
            }
    
        } else {
    
            function backLogin(){
    
                
                console.log('Login Gagal');

    
            }
    
            return backLogin
            
        }

    }
}



let userName = prompt('Masukan Username')
let passWord = prompt('Masukan Password')

const cobaLogin = Login(userName,passWord)

cobaLogin()

