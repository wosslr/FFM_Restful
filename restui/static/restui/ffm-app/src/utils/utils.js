/**
 * Created by I300934 on 7/11/2017.
 */
export const isExpired = (oExpirationTime) => {
    let now = new Date();
    let utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    return oExpirationTime < utc;
}

export const utcStrToLocalDate = (sUTC) => {
    return new Date(sUTC + ' UTC')
}