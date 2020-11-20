
function init() {
  // * Variables
  const grid = document.querySelector('.grid')
  
  const width = 20
  const cellCount = width * width
  const outerCells = []
  const cells = []
  const innerCells = []
  let setAnimation
  
  const player = {
    class: 'player_down',
    sprite: '<img src = "assets/test_left.png">',
    position: 209,
    facingDirection: 'down',
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }

  const cpuOneDefaultTarget = {
    position: 399,
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }

  const cpuOne = {
    class: 'cpuOneClass',
    position: 0,
    target: [cpuOneDefaultTarget.horizontalPosition,cpuOneDefaultTarget.verticalPosition],
    facingDirection: 'down',
    speed: 200,
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }




  //* backend programme 

  const playerPositionDisplay = document.querySelector('#player_position')
  const cpuOnePositionDisplay = document.querySelector('#cpu_one_position')

  function printPosition(){
    playerPositionDisplay.innerHTML = `${player.position} Horizontal:${player.horizontalPosition} Vertical:${player.verticalPosition}`
    cpuOnePositionDisplay.innerHTML = `${cpuOne.position} Horizontal:${cpuOne.verticalPosition} Vertical:${cpuOne.verticalPosition}`
  }


  
  // * Make a grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const outerCell = document.createElement('div')
      const cell = document.createElement('div')
      const innerCell = document.createElement('div')
      cell.setAttribute('id', i)
      outerCell.classList.add('outer_cell')
      cell.classList.add('cell')
      // cell.innerText = i
      outerCell.appendChild(cell)
      grid.appendChild(outerCell)
      cell.appendChild(innerCell)
      outerCells.push(outerCell)
      cells.push(cell)
      innerCells.push(innerCell)
    }
    addPlayer(player.position)
    addCpu(cpuOne.position,cpuOne.class)
  } 

  //* initialise
  createGrid()
  
  // * Make walls
  // walls defined by adding class to cells, according to what is mentioned in the array
  const cellsWithWalls = [42,43,44,45,46,47,162,163,164,165,166,167]
  

  function createWalls(array){
    for (let i = 0; i < array.length ; i++) {
      outerCells[array[i]].classList.add('wall')
    }
  }
  createWalls(cellsWithWalls)
  
  

  //* Animation

  

  function animateSprite(target,frameNo) {
    
    //// target.innerHTML = `<img src ='/images/${frames}.png' alt = 'bunny animation' >`
    const LIMIT = frameNo
    const frameSize = cells[0].offsetHeight
    const speed = 140
    let i = 0
    let move

    setAnimation = setInterval(function () {

      // move = '0px ' + -((frameNo - i) * frameSize) + 'px'
      move = '0px ' + -(i * frameSize) + 'px'
      //! using target.style overwrites whatever set by css, hence it needs to be redeclared
      target.style.margin = move
      target.style.height = '100%'
      target.style.width = '100%'
      if (i === LIMIT) {
        i = frameNo
      } else {
        i++
      }
    }, speed)


  }


  // * Add cpuOne to grid
  function addCpu(position,classToAdd) {
    cells[position].classList.add(classToAdd)
    cpuOne.setPosition()
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

  function cpuDetermineTarget(cpu){
    cpuOneDefaultTarget.setPosition()
    cpu.target = [cpuOneDefaultTarget.horizontalPosition,cpuOneDefaultTarget.verticalPosition]
    // cpu.target = [player.horizontalPosition,player.verticalPosition]
  } 


  function cpuMovementDecision(){

    cpuDetermineTarget(cpuOne)
    

    cpuMotion = []
    if (cpuOne.horizontalPosition < cpuOne.target[0]){
      cpuMotion.push('right')
    } else {
      cpuMotion.push('left')
    }
    if (cpuOne.verticalPosition < cpuOne.target[1]){
      cpuMotion.push('down')
    } else {
      cpuMotion.push('up')
    }
    console.log(cpuOne.target[0])
  }


  // * Move cpu
  function cpuMovement() {
    removeCpu(cpuOne.position,cpuOne.class)
    
    //! this might be called from object or array if CPUs shared similar function
    //! this may potentially be renamed cpuOneMovement... 
    const horizontalPosition = cpuOne.horizontalPosition
    const verticalPosition = cpuOne.verticalPosition
    const motionIndex =  Math.floor(Math.random() * cpuMotion.length)

    cpuMovementDecision()
  
    switch (cpuMotion[motionIndex]) {
      case 'right':
        if (horizontalPosition < width - 1 && !outerCells[(cpuOne.position + 1)].classList.contains('wall')) cpuOne.position++ 
        break
      case 'left': 
        if (horizontalPosition > 0 && !outerCells[(cpuOne.position - 1)].classList.contains('wall')) cpuOne.position--
        break
      case 'up': 
        if (verticalPosition > 0 && !outerCells[(cpuOne.position - width)].classList.contains('wall')) cpuOne.position -= width
        break
      case 'down':
        if (verticalPosition < width - 1 && !outerCells[(cpuOne.position + width)].classList.contains('wall')) cpuOne.position += width
        break
      default:
        console.log('cpu invalid command')
    }
  
    addCpu(cpuOne.position,cpuOne.class)
    
    //!redfining positions, maybe this could be a function?
    

    //TODO backend
    printPosition()
  }
  
  setInterval(cpuMovement,cpuOne.speed)


  //* player related motions

  //// Add Player to grid
  function addPlayer(position) {
    // cells[position].classList.add(player.class)
    innerCells[position].innerHTML = player.sprite
    player.setPosition()
    animateSprite(innerCells[position],3)
  }

  //// Remove Player from the grid
  function removePlayer(position) {
    // cells[position].classList.remove(player.class)
    innerCells[position].innerHTML = ''
    clearInterval(setAnimation)
  }
  
  
  // * Move Player
  function handleMovementWithKey(e) {
    removePlayer(player.position)
    
    //! consider refactor later
    const horizontalPosition = player.horizontalPosition
    const verticalPosition = player.verticalPosition
    
    //// console.log('playerposition',player.position)
    //// console.log('horizontalPosition',horizontalPosition)
    //// console.log('verticalPosition',verticalPosition)
    turnPlayer(e.key)

    switch (e.key) {
      case 'ArrowRight': 
        //// player can move to the right until grid '9' (hence width - 1)
        if (horizontalPosition < width - 1 && !outerCells[(player.position + 1)].classList.contains('wall')) player.position++
        break
      case 'ArrowLeft': 
        if (horizontalPosition > 0 && !outerCells[(player.position - 1)].classList.contains('wall')) player.position--
        break
      case 'ArrowUp': 
        if (verticalPosition > 0 && !outerCells[(player.position - width)].classList.contains('wall')) player.position -= width
        break
      case 'ArrowDown': 
        if (verticalPosition < width - 1 && !outerCells[(player.position + width)].classList.contains('wall')) player.position += width
        break
      default:
        console.log('invalid command')
    }

    addPlayer(player.position)
    printPosition()
    
  }
  
  function turnPlayer(keyPressed){
    switch (keyPressed) {
      case 'ArrowRight': 
        player.sprite = '<img src = "assets/test_right.png">'
        break
      case 'ArrowLeft': 
        player.sprite = '<img src = "assets/test_left.png">'
        break
      case 'ArrowUp': 
        player.sprite = '<img src = "assets/test_back.png">'
        break
      case 'ArrowDown': 
        player.sprite = '<img src = "assets/test_front.png">'
        break
      default:
        console.log('invalid command')
    }

  }






  

  //* events
  document.addEventListener('keyup', handleMovementWithKey)







}

window.addEventListener('DOMContentLoaded', init)