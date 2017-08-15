require(['gitbook'], function (gitbook) {

  gitbook.events.bind('start', function (e, cnf) {
    const config = cnf.amazonads;
    adInsertPoint = '.page-inner section';

    // Create ad elements
    div = document.createElement('div');
    div.id="amazon_ad";
    ad = document.createElement('script');
    ad.type = 'text/javascript';
    ad.text = 'amzn_assoc_placement = "adunit0";'
        + ' amzn_assoc_search_bar = "false";'
        + ' amzn_assoc_tracking_id = "' + config.tracking_id + '";' 
        + ' amzn_assoc_ad_mode = "manual";'
        + ' amzn_assoc_ad_type = "smart";'
        + ' amzn_assoc_div_name = "amazon_ad";'
        + ' amzn_assoc_marketplace = "amazon";'
        + ' amzn_assoc_region = "US";'
        + ' amzn_assoc_title = "' + config.title + '";'
        + ' amzn_assoc_asins = "' + config.asins + '";'
        + ' amzn_assoc_linkid = "' + config.linkid + '";';

    adsrc = document.createElement('script');
    adsrc.src = '//z-na.amazon-adsystem.com/widgets/onejs?Markeplace=US';

    // Add the ad elements to the DOM
    var element = document.querySelector(adInsertPoint);
    element.appendChild(div);
    element.appendChild(ad);
    element.appendChild(adsrc);
  });

  // insert ad again when switching pages
  gitbook.events.bind('page.change', function () {
    if (ad) {
      var element = document.querySelector(adInsertPoint);
      element.appendChild(div);
      element.appendChild(ad);
      element.appendChild(adsrc);
    }
  });
});
