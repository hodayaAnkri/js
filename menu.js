function addMenuItem (text, path, iconName) {
    linkId = text.split(' ').join('_');
    var itemHtml = '<li class="ic-app-header__menu-list-item ">'
    + '<a id="global_nav_' + linkId + '_link" href=' + path + ' class="ic-app-header__menu-list-link">'
    + ' <div class="menu-item-icon-container" aria-hidden="true" role="presentation">'
    + ' <i class="icon-' + iconName + '" style="display: block;"></i>'
    + ' </div>'
    + ' <div class="menu-item__text">' + text + '</div>'
    + '</a>'
    + '</li>';
    $('#menu').append(itemHtml);
   }
   addMenuItem("hodaya","https://canvas.staging.skillz-edu.org?access_token=kmA2CUVAvmb2d1jFnyHKeTIeYdRgPMvCfxA5uEoJcbmmhMmQiqiZmqrwzydRgoPT","bbb");
