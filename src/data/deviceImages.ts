/** Product photos — devices without an entry use stylized 3D primitives. */
export const DEVICE_IMAGES: Record<string, string> = {}

export function deviceImage(deviceId: string): string | undefined {
  return DEVICE_IMAGES[deviceId]
}
