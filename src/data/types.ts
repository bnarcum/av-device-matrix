/** Shared catalog types for Logitech, Poly, and Neat A/V devices. */

export type VendorId = 'logitech' | 'poly' | 'neat'

export type Category = 'room' | 'peripheral' | 'camera'

export type RoomSize =
  | 'personal'
  | 'huddle'
  | 'small'
  | 'medium'
  | 'large'
  | 'auditorium'
  | 'mobile'

export type DeviceColor = 'carbon' | 'first-light' | 'silver' | 'white'

export type Shape =
  | 'board'
  | 'video-bar'
  | 'codec-kit'
  | 'desk-display'
  | 'desk-phone'
  | 'wireless-phone'
  | 'conference-phone'
  | 'kem'
  | 'headset-on-ear'
  | 'headset-over-ear'
  | 'headset-earbud'
  | 'navigator'
  | 'mic-table'
  | 'mic-ceiling'
  | 'camera-ptz'
  | 'camera-bar'
  | 'camera-puck'

export interface Device {
  id: string
  vendorId: VendorId
  name: string
  category: Category
  family: string
  formFactor: string
  tagline: string
  highlights: string[]
  useCases: string[]
  roomSizes: RoomSize[]
  recommendedPeople?: string
  display?: string
  camera?: string
  audio?: string
  connectivity?: string[]
  software?: string[]
  colors: DeviceColor[]
  surface: string
  shape: Shape
  size: [number, number, number]
}

export const CATEGORY_LABELS: Record<Category, string> = {
  room: 'Room systems',
  peripheral: 'Controllers & audio',
  camera: 'Cameras',
}

export const CATEGORY_ORDER: Category[] = ['room', 'camera', 'peripheral']

export const ROOM_SIZE_LABELS: Record<RoomSize, string> = {
  personal: 'Personal / desk',
  huddle: 'Huddle',
  small: 'Small room',
  medium: 'Medium room',
  large: 'Large room',
  auditorium: 'Auditorium',
  mobile: 'Mobile / on-the-go',
}

export const ROOM_SIZE_ORDER: RoomSize[] = [
  'personal',
  'mobile',
  'huddle',
  'small',
  'medium',
  'large',
  'auditorium',
]

export const VENDOR_LABELS: Record<VendorId, string> = {
  logitech: 'Logitech',
  poly: 'Poly',
  neat: 'Neat',
}

export const VENDOR_ORDER: VendorId[] = ['logitech', 'poly', 'neat']
