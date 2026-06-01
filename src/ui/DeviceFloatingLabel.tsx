import type { CSSProperties } from 'react'
import type { VendorId } from '../data/types'
import { vendorConfig } from '../data/vendors'

const SELECTION_ACCENT = '#049FD9'

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/** Inline styles for 3D Html pills — text/border tinted by manufacturer. */
export function deviceLabelStyles(
  vendorId: VendorId,
  selected = false,
): CSSProperties {
  const brand = vendorConfig(vendorId)
  const border = selected
    ? SELECTION_ACCENT
    : vendorId === 'neat'
      ? brand.secondary
      : hexToRgba(brand.primary, 0.55)
  const bgTint = hexToRgba(
    vendorId === 'neat' ? brand.secondary : brand.primary,
    0.14,
  )

  return {
    padding: '4px 10px',
    borderRadius: 999,
    background: `linear-gradient(180deg, ${bgTint} 0%, rgba(5, 8, 15, 0.82) 100%)`,
    border: `1px solid ${border}`,
    fontSize: 11,
    fontWeight: selected ? 600 : 500,
    color: brand.primary,
    whiteSpace: 'nowrap',
    backdropFilter: 'blur(6px)',
    boxShadow: selected
      ? `0 0 12px ${hexToRgba(SELECTION_ACCENT, 0.35)}`
      : `0 2px 8px rgba(0, 0, 0, 0.35)`,
  }
}

interface Props {
  name: string
  vendorId: VendorId
  selected?: boolean
  style?: CSSProperties
}

export function DeviceFloatingLabel({
  name,
  vendorId,
  selected = false,
  style,
}: Props) {
  return (
    <div style={{ ...deviceLabelStyles(vendorId, selected), ...style }}>
      {name}
    </div>
  )
}
