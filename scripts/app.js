
function init() {
  // * Variables
  const grid = document.querySelector('.grid')
  
  const width = 20
  const cellCount = width * width
  const outerCells = []
  const cells = []


  const playerClass = 'playerClass'
  const cpuOneClass = 'cpuOneClass'

  //* POSITIONS
  let playerPosition = 209
  let cpuOnePosition = 0
  const playerFacingDirection = 'down'

  let cpuOneHorizontalPosition = cpuOnePosition % width
  let cpuOneVerticalPosition = Math.floor(cpuOnePosition / width)

  let playerHorizontalPosition = playerPosition % width
  let playerVerticalPosition = Math.floor(playerPosition / width)


  //* backend programme 

  const playerPositionDisplay = document.querySelector('#player_position')
  const cpuOnePositionDisplay = document.querySelector('#cpu_one_position')

  function printPosition(){
    playerPositionDisplay.innerHTML = `${playerPosition} Horizontal:${playerHorizontalPosition} Vertical:${playerVerticalPosition}`
    cpuOnePositionDisplay.innerHTML = `${cpuOnePosition} Horizontal:${cpuOneVerticalPosition} Vertical:${cpuOneVerticalPosition}`
  }


 



  
  // * Make a grid 
  function createGrid(playerPosition) {
    for (let i = 0; i < cellCount; i++) {
      const outerCell = document.createElement('div')
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      // cell.setAttribute('id', `cell-${i}`)
      cell.innerText = i
      outerCell.appendChild(cell)
      grid.appendChild(outerCell)
      outerCells.push(outerCell)
      cells.push(cell)
    }
    addPlayer(playerPosition)
    addCpu(cpuOnePosition,cpuOneClass)
  } 

  //* initialise
  createGrid(playerPosition)
  
  // * Make walls
  // walls defined by adding class to cells, according to what is mentioned in the array
  const cellsWithWalls = [42,43,44,45,46,47,162,163,164,165,166,167]
  

  function createWalls(array){
    for (let i = 0; i < array.length ; i++) {
      outerCells[array[i]].classList.add('wall')
    }
  }
  createWalls(cellsWithWalls)
  



  // * Add cpuOne to grid
  function addCpu(position,classToAdd) {
    cells[position].classList.add(classToAdd)
    //change class to add depending on the direction facing
  }

  // * Remove cpu from the grid
  function removeCpu(position,classToRemove) {
    cells[position].classList.remove(classToRemove)
  }


  
  
  const defaultMotion = ['right','left','up','down']
  // const motionDownRight = ['down','right']
  // const motionUpRight = ['up','right']
  // const motionDownLeft = ['down','left']
  // const motionUpLeft = ['up','left']
  let cpuMotion = defaultMotion


  function cpuMovementDecision(){
    cpuMotion = []
    if (cpuOneHorizontalPosition < playerHorizontalPosition){
      cpuMotion.push('right')
    } else {
      cpuMotion.push('left')
    }
    if (cpuOneVerticalPosition < playerVerticalPosition){
      cpuMotion.push('down')
    } else {
      cpuMotion.push('up')
    }
  }


  // * Move cpu
  function cpuMovement() {
    removeCpu(cpuOnePosition,cpuOneClass)
    
    //! this might be called from object or array if CPUs shared similar function
    //! this may potentially be renamed cpuOneMovement... 
    const horizontalPosition = cpuOneHorizontalPosition
    const verticalPosition = cpuOneVerticalPosition
    const motionIndex =  Math.floor(Math.random() * cpuMotion.length)

    cpuMovementDecision()
    console.log(cpuMotion)
    switch (cpuMotion[motionIndex]) {
      case 'right':
        if (horizontalPosition < width - 1 && !outerCells[(cpuOnePosition + 1)].classList.contains('wall')) cpuOnePosition++
        break
      case 'left': 
        if (horizontalPosition > 0 && !outerCells[(cpuOnePosition - 1)].classList.contains('wall')) cpuOnePosition--
        break
      case 'up': 
        if (verticalPosition > 0 && !outerCells[(cpuOnePosition - width)].classList.contains('wall')) cpuOnePosition -= width
        break
      case 'down':
        if (verticalPosition < width - 1 && !outerCells[(cpuOnePosition + width)].classList.contains('wall')) cpuOnePosition += width
        break
      default:
        console.log('INVALID KEY')
    }
  
    addCpu(cpuOnePosition,cpuOneClass)
    
    //!redfining positions, maybe this could be a function?
    cpuOneHorizontalPosition = cpuOnePosition % width
    cpuOneVerticalPosition = Math.floor(cpuOnePosition / width)
    

    //TODO backend
    printPosition()
  }
  
  setInterval(cpuMovement,200)


  //* player related motions

  // * Add Player to grid
  function addPlayer(position) {
    cells[position].classList.add(playerClass)
    //change class to add depending on the direction facing
  }

  // * Remove Player from the grid
  function removePlayer(position) {
    cells[position].classList.remove(playerClass)
  }
  
  
  // * Move Player
  function handleMovementWithKey(e) {
    removePlayer(playerPosition)
    
    //! consider refactor later
    const horizontalPosition = playerHorizontalPosition
    const verticalPosition = playerVerticalPosition
    
    console.log('playerposition',playerPosition)
    console.log('horizontalPosition',horizontalPosition)
    console.log('verticalPosition',verticalPosition)

    switch (e.key) {
      case 'ArrowRight': //arrow right
        // player can move to the right until gird '9' (hence width - 1)
        if (horizontalPosition < width - 1 && !outerCells[(playerPosition + 1)].classList.contains('wall')) playerPosition++
        break
      case 'ArrowLeft': //arrow left
        if (horizontalPosition > 0 && !outerCells[(playerPosition - 1)].classList.contains('wall')) playerPosition--
        break
      case 'ArrowUp': //arrow up
        if (verticalPosition > 0 && !outerCells[(playerPosition - width)].classList.contains('wall')) playerPosition -= width
        break
      case 'ArrowDown': //arrow down
        if (verticalPosition < width - 1 && !outerCells[(playerPosition + width)].classList.contains('wall')) playerPosition += width
        break
      default:
        console.log('INVALID KEY')
    }

    addPlayer(playerPosition)
    printPosition()

    playerHorizontalPosition = playerPosition % width
    playerVerticalPosition = Math.floor(playerPosition / width)
  }
  


  

  //* events
  document.addEventListener('keyup', handleMovementWithKey)







}

window.addEventListener('DOMContentLoaded', init)