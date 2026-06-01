/** Official product page URLs — verify with `npm run verify:product-urls`. */
export const DEVICE_PRODUCT_URLS: Readonly<Record<string, string>> = {
  'logitech-rally-bar':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/rally-bar.html',
  'logitech-rally-bar-mini':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/rally-bar-mini.html',
  'logitech-rally-plus':
    'https://www.logitech.com/en-us/products/video-conferencing/conference-cameras/rally-plus.html',
  'logitech-meetup':
    'https://www.logitech.com/en-us/products/video-conferencing/conference-cameras/meetup-conferencecam.html',
  'logitech-rally-camera':
    'https://www.logitech.com/en-us/products/video-conferencing/conference-cameras/rally-ultra-hd-ptz-camera.html',
  'logitech-sight':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/sight.html',
  'logitech-scribe':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/scribe.html',
  'logitech-tap-ip':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/tap-ip.html',
  'logitech-tap-usb':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/tap.html',
  'logitech-tap-scheduler':
    'https://www.logitech.com/en-us/products/video-conferencing/room-solutions/tap-scheduler.html',

  'poly-studio-x30':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-x30',
  'poly-studio-x50':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-x50',
  'poly-studio-x52':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-x52',
  'poly-studio-x70':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-x70',
  'poly-studio-x72':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-x72',
  'poly-studio-g62':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-g62',
  'poly-studio-e70':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-e70',
  'poly-studio-p15':
    'https://www.poly.com/us/en/products/video-conferencing/studio-room-solutions/studio-p15',

  'neat-bar': 'https://www.neat.no/neat-bar/',
  'neat-bar-pro': 'https://www.neat.no/neat-bar-pro/',
  'neat-board-50': 'https://www.neat.no/neat-board/',
  'neat-board-65': 'https://www.neat.no/neat-board/',
  'neat-board-pro-75': 'https://www.neat.no/neat-board-pro/',
  'neat-pad': 'https://www.neat.no/neat-pad/',
  'neat-pad-pro': 'https://www.neat.no/neat-pad-pro/',
  'neat-frame': 'https://www.neat.no/neat-frame/',
  'neat-center': 'https://www.neat.no/neat-center/',
}

export function deviceProductUrl(deviceId: string): string | undefined {
  return DEVICE_PRODUCT_URLS[deviceId]
}
