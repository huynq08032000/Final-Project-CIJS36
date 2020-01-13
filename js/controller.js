const controller ={}

controller.register = async function(registerInfo){
    let email =registerInfo.email
    let password = registerInfo.password
    let displayName = registerInfo.firstname + registerInfo.lastname
    view.setText('register-error','')
    view.setText('register-success','')
    view.disable('register-submit-btn')
    try{
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        await firebase.auth().currentUser.updateProfile({
            displayName : displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success','Mời xác nhận email')
    }
    catch(err)
    {
        view.setText('register-error', err.message )
    }
    view.enable('register-submit-btn')
}
controller.logIn = async function(logInInfo) {
    let email =logInInfo.email
    let password = logInInfo.password
    view.setText('log-in-error','')
    view.disable('log-in-submit-btn')
    
    try{
        let result= await firebase.auth().signInWithEmailAndPassword(email, password)
        if(result.user && result.user.emailVerified){
            view.showComponents('')
        }
    }
    catch(err){
        view.setText('log-in-error','')
        view.enable('log-in-submit-btn')
    }
}
