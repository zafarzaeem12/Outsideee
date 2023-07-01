const BaseUrl = 'https://api.myprojectstaging.com/outsideee/api/'

export const api = {
    // Auth apis start here 
    SocialLogin: `${BaseUrl}social-login`,
    Login: `${BaseUrl}signin`,
    Register: `${BaseUrl}signup`,
    OTP: `${BaseUrl}verification`,
    Resend_OTP : `${BaseUrl}resend-otp`,
    Forget_Password: `${BaseUrl}forget-password`,
    Update_Password: `${BaseUrl}update-password`,
    Change_Password: `${BaseUrl}change-password`,
    Update_Profile: `${BaseUrl}update-profile`,
    Show_Profile: `${BaseUrl}show-profile`,
    // Auth apis end here 

    // Home && Featured api start here
    Local_Events: `${BaseUrl}local-events`,
    Category_Events: `${BaseUrl}category-events`,
    Get_All_Categories: `${BaseUrl}categories`,
    // Home && Featured api end here

    // Rating apis start here
    Post_Review: `${BaseUrl}add-rating`,
    Get_Reviews_By_Event: `${BaseUrl}getreviews`,
    Delete_Review: `${BaseUrl}delete-rating`,
    // Rating apis end here


    // Event apis start here
    Create_Event: `${BaseUrl}add-event`,
    Edit_Event: `${BaseUrl}update-event`,
    Delete_Event: `${BaseUrl}delete-event`,
    Delete_Event_Image: `${BaseUrl}delete-media`,
    Get_Events: `${BaseUrl}all-events`,
    Search_Events: `${BaseUrl}search-event`,
    // Event apis end here

    // Chat apis start here
    Chat_List : `${BaseUrl}get-conversations`,
    Create_Chat : `${BaseUrl}chat`,
    // Chat apis end here
};
