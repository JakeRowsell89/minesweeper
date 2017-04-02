import {getSurroundingIndices, gridHasBombAtIndex, checkAllBombsMarked} from './util'

const revealAll = (grid) => grid.map(field => {
  field.revealed = true
  return field
})

const revealSurrounding = (grid, indices) => {
  let nextIndices = []
  indices.forEach((index) => {
  	if (!grid[index].revealed) {
  		grid[index].revealed = true

  		if (grid[index].type === 0) {
	  		nextIndices = nextIndices.concat(getSurroundingIndices(grid, index))
	  	}
	  }
  })
  return nextIndices.length ? revealSurrounding(grid, nextIndices) : grid
}

const reveal = (grid, index) => {
  const fieldIsBomb = gridHasBombAtIndex(grid, index)
  const newGridBase = fieldIsBomb ? revealAll(grid) : grid.slice()
  const newGrid = revealSurrounding(newGridBase, [index])

  return {
    gameOver: fieldIsBomb,
    grid: newGrid,
    win: checkAllBombsMarked(newGrid)
  }
}

export default reveal
