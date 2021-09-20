let CredentialsService = function() {
    return new(function() {

        this.get = function() {
            return localStorage.getItem('accessToken');
        };

    });
};

module.exports = [
    CredentialsService
];