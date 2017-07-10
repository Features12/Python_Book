;

$(document).ready(function () {

    function getSubProperty() {
        $.ajax({
            url: '/api/category/' + objectId, // id
            type: 'GET',
            success: function (response) {
                for (var i = 0; i < response.category_properties.length; i++) {
                    $('#table-body').append(
                        '<tr id="' + response.category_properties[i].id + '">' +
                        '<td class="property">' + response.category_properties[i].property_name + '</td>' +
                        '<td class="short_descriptions">' + response.category_properties[i].short_description + '</td>' +
                        '<td><button class="show" data-id="' + response.category_properties[i].id + '"> Показать </button></td>' +
                        '</tr>'
                    );
                }
            },
            error: function (response) {
                alert(response.responseJSON.detail);
            }
        });
    }

    getSubProperty();


    function getModalShow(idModal) {
        $.ajax({
            url: '/api/category/' + objectId,
            type: 'GET',
            success: function (response) {
                var property = false;
                for (var i = 0; i < response.category_properties.length; i++) {
                    if (idModal == response.category_properties[i].id) {
                        property = response.category_properties[i];
                        break;
                    }
                }
                if (property) {
                    $('#myModal').find(".modal-title").html(property.property_name);
                    $('#myModal').find(".modal-body").html(property.full_description);
                    $('#myModal').attr('data-id', property.id);
                    $('#myModal').modal('show');
                }
            },
            error: function (response) {
                alert(response.responseJSON.detail);
            }
        })
    }

    $(document).on('click', '.show', function () {
        // this - javascript
        // $(this) - jquery
        var $this = $(this);
        idModal = $this.attr('data-id');
        getModalShow(idModal);
    });


});