export const APISettings = {
    token: '',
    Headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }),
    baseURL: `${process.env.MIX_APP_URL}/api`,
}