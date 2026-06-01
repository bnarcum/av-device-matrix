// Product photos from official vendor assets (Logitech collaboration datasheets,
// HP/Poly DAM, Neat CDN). Devices without an entry use stylized 3D primitives.
//
// Regenerate URLs after import: python3 scripts/import-product-images.py

const base = `${import.meta.env.BASE_URL ?? '/'}devices/`

function img(hash: string): string {
  return `${base}img-${hash}.webp`
}

export const DEVICE_IMAGES: Record<string, string> = {
  // Logitech
  'logitech-rally-bar': img('1c90cf84a7'),
  'logitech-rally-bar-mini': img('1c90cf84a7'),
  'logitech-rally-plus': img('abf2a6e02e'),
  'logitech-meetup': img('f9c87ca142'),
  'logitech-rally-camera': img('9ae771b7ff'),
  'logitech-sight': img('0236d2e6ab'),
  'logitech-scribe': img('617a472d34'),
  'logitech-tap-ip': img('3794871772'),
  'logitech-tap-usb': img('3794871772'),
  'logitech-tap-scheduler': img('3794871772'),

  // Poly
  'poly-studio-x30': img('9bd5819319'),
  'poly-studio-x50': img('0e4531c4c5'),
  'poly-studio-x52': img('98235e90f1'),
  'poly-studio-x70': img('84668eb029'),
  'poly-studio-x72': img('84668eb029'),
  'poly-studio-g62': img('bc86246618'),
  'poly-studio-e70': img('8cda54d1a5'),
  'poly-studio-p15': img('e1fd87d010'),
  'poly-edge-b10': img('61a8c90ab5'),
  'poly-edge-b20': img('7eb549f644'),
  'poly-edge-b30': img('09a86f89b5'),
  'poly-ccx-400': img('0f54495159'),
  'poly-ccx-505': img('1d5386b5fc'),
  'poly-ccx-600': img('d4dbd3aa96'),
  'poly-ccx-700': img('e2fba1fe7a'),
  'poly-trio-8300': img('0e15fb617d'),
  'poly-trio-8500': img('cb75052c06'),
  'poly-trio-8800': img('cb75052c06'),
  'poly-blackwire-5200': img('c0a62ae7c3'),
  'poly-blackwire-8225': img('e8d70d4507'),
  'poly-voyager-4300': img('da6d23e902'),
  'poly-voyager-5200': img('ba9fa3f6e6'),
  'poly-voyager-focus-2': img('e0546342cc'),
  'poly-savi-7310': img('10c7678707'),
  'poly-encorepro-710': img('09c746c559'),

  // Neat
  'neat-bar': img('04aa1ce950'),
  'neat-bar-pro': img('20c499ca7f'),
  'neat-board-50': img('24178b0429'),
  'neat-board-65': img('c53e48c61a'),
  'neat-board-pro-75': img('c53e48c61a'),
  'neat-pad': img('47944f7e5c'),
  'neat-pad-pro': img('e699edb24c'),
  'neat-frame': img('4c96f58d7b'),
  'neat-center': img('46f6c4a322'),
}

export function deviceImage(deviceId: string): string | undefined {
  return DEVICE_IMAGES[deviceId]
}
