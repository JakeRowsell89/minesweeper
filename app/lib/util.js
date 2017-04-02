const gridHasBombAtIndex = (grid, index) => grid[index] === null || grid[index] === 'bomb' || grid[index].type === 'bomb'
const indexNotMatching = (index) => (i) => index !== i
const indexExistsInArray = (array) => (index) => index >= 0 && index < array.length
const getRowInGrid = (grid, width) => (index) => index < 0 ? null : (index - (index % width)) / width
const getSurroundingIndices = (grid, index) => {
  const width = 20
  const height = 10

  const indexNotCurrent = indexNotMatching(index)
  const indexIsOnGrid = indexExistsInArray(grid)
  const isValidIndex = (index) => indexNotCurrent(index) && indexIsOnGrid(index)
  const getRowForIndex = getRowInGrid(grid, width)

  const currentRowIndex = getRowForIndex(index)

  const currentRow = [index - 1, index, index + 1]
  const prevRow = currentRow.map(n => n - width).filter(n => getRowForIndex(n) === currentRowIndex - 1)
  const nextRow = currentRow.map(n => n + width).filter(n => getRowForIndex(n) === currentRowIndex + 1)
  const rawSurrounding = currentRow.filter(n => getRowForIndex(n) === currentRowIndex).concat(prevRow, nextRow)

  return rawSurrounding.filter(isValidIndex)
}

export {
	getSurroundingIndices,
	gridHasBombAtIndex
}
