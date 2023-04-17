export const getSize = (gridRef: any) => {
  if (gridRef.current) {
    const { width } = gridRef.current.getBoundingClientRect()
    if (width < 600) {
      return 'small'
    } else if (width < 800) {
      return 'medium'
    } else {
      return 'large'
    }
  }
  return 'small'
}
