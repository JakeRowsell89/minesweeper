import { checkAllBombsMarked } from './util'

const setFlagInGrid = (grid, index) => {
  const newGrid = grid.slice()
  newGrid[index].flagged = !newGrid[index].flagged
  return grid
}
const flag = (grid, index) => {
  const newGrid = setFlagInGrid(grid, index)
  const allMarked = checkAllBombsMarked(newGrid)
  return {
  	grid: newGrid,
  	win: allMarked,
  	gameOver: allMarked
  }
}

export default flag
