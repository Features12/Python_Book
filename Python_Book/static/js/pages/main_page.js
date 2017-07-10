;

$(document).ready(function () {

    function getAllCategory() {
        $.ajax({
            url: '/api/category',
            type: 'GET',
            success: function (response) {
                for (var i = 0; i < response.length; i++) {
                    $('.row').append(
                        '<div class="col-md-4 col-md-offset-1 category-item" data-id="' + response[i].id + '">' +
                        '<h4>' + response[i].category_name + '</h4><hr>' +
                        '<h6>' + response[i].short_description + '</h6>' +
                             '</div>'
                );

                }
            },
            error: function (response) {
                alert(response.responseJSON.detail);
            }
        });
    }


    getAllCategory();

    $(document).on('click', '.category-item', function(e){
        var id = $(this).closest('.category-item').first().attr('data-id');
        window.location = '/category/' + id + '/';
    });

});