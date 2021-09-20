const AuthService = function (
    $rootScope,
    ApiRequest,
    CredentialsService,
) {
    return new (function () {

        this.login = function (query = {}) {
            return ApiRequest.post('/auth/login', query);
        };

        this.logout = function (query = {}) {
            return ApiRequest.post('/auth/logout', query);
        };

        this.register = function (query = {}) {
            return ApiRequest.post('/auth/register', query);
        };

        this.resendVerify = function (query = {}) {
            return ApiRequest.post('/auth/email/resend', query);
        };

    });
}

module.exports = [
    '$rootScope',
    'ApiRequest',
    'CredentialsService',
    AuthService
];