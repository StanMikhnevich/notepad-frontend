const sprintf = require('sprintf-js').sprintf;

const NotesService = function (
    $rootScope,
    ApiRequest,
    CredentialsService,
) {
    return new (function () {
        const user = CredentialsService.getUser();
        const prefix = (user === undefined || user.email_verified_at == null) ? '/public' : '';

        this.list = function (note_id, query = {}) {
            return ApiRequest.get('/notes', query);
        };

        this.listAll = function (query = {}) {
            return ApiRequest.get(prefix + '/notes', query);
        };

        this.store = function (values) {
            return ApiRequest.post('/notes', this.apiFormToResource(values));
        };

        this.update = function (note_id, values) {
            return ApiRequest.patch('/notes/' + note_id, this.apiFormToResource(values));
        };

        this.read = function (note_id) {
            return ApiRequest.get(prefix + '/notes/' + note_id);
        };

        this.share = function (note_id, values) {
            return ApiRequest.post('/notes/' + note_id + '/share', this.apiFormToResource(values));
        };

        this.unShare = function (note_id, values) {
            return ApiRequest.post('/notes/' + note_id + '/unshare', this.apiFormToResource(values));
        };

        this.deleteNoteAttachment = function (note_id, values) {
            return ApiRequest.post('/notes/' + note_id + '/deleteNoteAttachment', this.apiFormToResource(values));
        };

        this.destroy = function (note_id) {
            return ApiRequest.delete('/notes/' + note_id);
        };

        this.apiFormToResource = function (formData) {
            return {...formData};
        };

        this.apiResourceToForm = function (apiResource) {
            return {
                name: apiResource.name,
                description: apiResource.description,
                description_html: apiResource.description_html,

                price: parseFloat(apiResource.price),
                price_type: apiResource.price_type,
                price_discount: apiResource.price_discount !== null ? parseFloat(
                    apiResource.price_discount
                ) : null,

                expire_at: apiResource.expire_at,
                total_amount: apiResource.total_amount,
                stock_amount: apiResource.stock_amount,
                unlimited_stock: apiResource.unlimited_stock,
                sold_amount: apiResource.total_amount - apiResource.stock_amount,
                product_category_id: apiResource.product_category_id,

                reservation_enabled: apiResource.reservation_enabled,
                reservation_policy: apiResource.reservation_policy,
            };
        };

    });
}


module.exports = [
    '$rootScope',
    'ApiRequest',
    'CredentialsService',
    NotesService
];