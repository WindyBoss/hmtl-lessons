function acceptInvite(inviteId) {
    // ... HTTP-check-in on server to check the Invitation
    return response; 
} 

function getEmailByInviteId(inviteId) {
    // ... HTTP-check-in on server to check the Email 
    return response; 
}

function checkThePassword(InviteId) {
    // ... HTTP-check-in on server to check the Password 
    return response; 
}

// Functions above help to check the validation of individual parameter

// The function below checks 3 parameters: the invitation link, email and password. Even if 1 won't pass the function wiil not
// give an access to intruder and stops on 1 parameter. 

function signUp(inviteId) {
    const acceptInviteResponse = acceptInvite(inviteId);

    if (!acceptInviteResponse.success) {
        console.log("Invalid invitation");
        return;
    }

    const getEmailResponse = getEmailByInviteId(inviteId);

    if(!getEmailResponse.success){
        console.log("Wrong email");
        return;
    }

    const acceptPassword = checkThePassword(inviteId);

    if(!acceptPassword.success) {
        console.log("Wrong password");
        return;
    }
}