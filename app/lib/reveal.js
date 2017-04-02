import {getSurroundingIndices, gridHasBombAtIndex} from './util'

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
  const newGrid = fieldIsBomb ? revealAll(grid) : grid.slice()

  return {
    gameOver: fieldIsBomb,
    grid: revealSurrounding(newGrid, [index])
  }
}

export default reveal
