const flag = (grid, index) => {
  const newGrid = grid.slice()
  newGrid[index].flagged = !newGrid[index].flagged
  return newGrid
}

export default flag
