function Login(username,password){

    if(username == 'Abdillah7997'){
        if(password == '123'){

            function goHome(){

                console.log('Halaman Home');
            }
        }

        return goHome
    } else {

        function backLogin(){

            console.log('Login Gagal');

        }

        return backLogin
    }
}

const cobaLogin = Login('Abdillah7997','123')

cobaLogin()