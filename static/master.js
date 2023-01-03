window.onload = function() {
  // get the domain name
  let domain = window.location.hostname;

  allowed_domains = ['kazwire.com', 'kazwi.com', 'is-a.win']

  if (allowed_domains.indexOf(domain) == -1) {
    // Create the watermark container element
    var watermark = document.createElement('div');

    watermark.style.position = 'absolute';
    watermark.style.width = '100%';
    watermark.style.bottom = '10px';
    watermark.style.right = '10px';
    watermark.style.opacity = '0.5';

    // Create the image element
    var img = document.createElement('img');
    img.style.float = 'right';
    img.style.padding = '25px';
    img.style.width = '100px';
    img.src = 'https://kazwire.com/logo.png';

    // Add the image to the watermark container
    watermark.appendChild(img);

    // Add the watermark to the body of the page
    document.body.appendChild(watermark);
  }
}