import {getSurroundingIndices, gridHasBombAtIndex} from './util'

const addBombToGrid = (grid) => {
  const index = Math.floor(Math.random() * grid.length)

  if (grid[index] !== null) {
    const newGrid = grid.slice()
    newGrid[index] = null
    return newGrid
  } else {
    return addBombToGrid(grid)
  }
}

const addBombsToGrid = (grid, amount) => {
  if (amount === 0) {
    return grid
  } else {
    const newGrid = addBombToGrid(grid)
    return addBombsToGrid(newGrid, amount - 1)
  }
}

const addSurroundingNumbers = (grid) => {
  const indexIsBomb = (index) => gridHasBombAtIndex(grid, index)

  grid.forEach((field, index) => {
  	if (indexIsBomb(index)) {
	    const surroundingIndices = getSurroundingIndices(grid, index)

	    surroundingIndices.forEach((surroundingIndex) => {
	      if (!indexIsBomb(surroundingIndex)) {
	        grid[surroundingIndex]++
	      }
	    })
	  }
  })
  console.log(grid)
  return grid
}

const createBlankGrid = () => Array(200).fill(0)
const createGrid = () => {
  const blankGrid = createBlankGrid()
  const bombGrid = addBombsToGrid(blankGrid, 15)
  console.log(bombGrid)
  return addSurroundingNumbers(bombGrid)
}

const createNewGrid = () => {
  return createGrid().map((field, i) => {
  	const type = field === null ? 'bomb' : field
	  return {
	    revealed: false,
	    index: i,
	    type,
	    value: i % 10
	  }
  })
}

export default createNewGrid
