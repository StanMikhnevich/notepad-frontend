let CredentialsService = function() {
    return new(function() {

        this.getUser = function() {
            return JSON.parse(localStorage.getItem('user')) ?? undefined;
        };

        this.setUser = function(user) {
            localStorage.setItem('user', JSON.stringify(user));
        };


        this.isUserVerified = function() {
            const user = this.getUser();
            return user.email_verified_at;
        };

        this.verifyUser = function () {
            const user = this.getUser();
            user.email_verified_at = true;
            this.setUser(user);
        };

        this.unverifyUser = function () {
            const user = this.getUser();
            user.email_verified_at = true;
            this.setUser(user);
        };


        this.setAccessToken = function(token) {
            return localStorage.setItem('accessToken', token);
        };

        this.getAccessToken = function() {
            return localStorage.getItem('accessToken');
        };


        this.clear = function() {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
        };

    });
};

module.exports = [
    CredentialsService
];