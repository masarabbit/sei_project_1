
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
    prevPosition: null,
    facingDirection: 'down',
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }

  const cpuOneDefaultTarget = {
    position: 378,
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }

  const cpuOne = {
    class: 'cpuOneClass',
    position: 61,
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
  const wallPositionDisplay = document.querySelector('#wall_position')

 

  
  // * Make a grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const outerCell = document.createElement('div')
      const cell = document.createElement('div')
      const innerCell = document.createElement('div')
      cell.setAttribute('id', i)
      outerCell.classList.add('outer_cell')
      cell.classList.add('cell')
      cell.innerText = i
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
  const cellsWithWalls = [0,1,2,3,4,5,6,7,8,9,29,49,10,11,12,13,14,15,16,17,17,18,19,20,40,60,42,43,45,46,47,51,52,53,55,56,57,39,59,79,99,119,80,100,82,83,85,105,125,88,89,90,109,129,87,127,147,167,187,166,165,169,189,91,93,94,95,120,121,122,123,143,142,141,140,180,181,182,183,203,202,201,200,205,225,245,227,228,229,243,242,241,240,260,280,300,320,340,282,283,284,304,230,231,249,269,289,131,151,171,191,172,173,133,134,135,97,117,137,176,175,177,178,179,195,215,196,197,198,199,237,238,278,279,299,319,339,359,379,399,398,397,396,395,393,360,380,381,382,383,384,386,385,387,388,389,390,391,392,394,328,329,330,331,332,327,326,349,371,334,335,336,355,213,233,253,271,291,292,293,295,275,255,276,322,342,343,346,345,348,347,354,317,337,357,356,267,287,286]
  // const cellsWithWalls = [1,2,4,3,5,6,7,8,10,11,12,13,14,0,15,16,17,18,19,20,40,60,80,100,120,140,160,200,220,240,260,280,300,320,340,360,380,381,382,383,384,385,386,387,388,389,391,392,393,394,395,396,397,398,399,379,35,59,79,39,99,119,139,159,179,219,239,259,279,299,319,339,359,343,323,303,127,147,167,168,169,170,171,172,152,132,45,65,64,63,83,124,123,143,163,74,94,95,96,116,237,236,235,234,254,274,273,271,251,231,230,313,314,315,316,296,336,324,325,305,285,265,245,244,267,287,288,289,329,328,327,347,202,222,261,262,321,185,205,206,207,194,174,154,155,134,195,196,192,189,67,47,48,50,70,90,89,71,72]
  

  function createWalls(array){
    for (let i = 0; i < array.length ; i++) {
      outerCells[array[i]].classList.add('wall')
    }
  }
  createWalls(cellsWithWalls)
  

  function printPosition(){
    playerPositionDisplay.innerHTML = `${player.position} Horizontal:${player.horizontalPosition} Vertical:${player.verticalPosition}`
    cpuOnePositionDisplay.innerHTML = `${cpuOne.position} Horizontal:${cpuOne.verticalPosition} Vertical:${cpuOne.verticalPosition} cpu motion: ${cpuMotion}`
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }

  

  //* Animation

  

  function animateSprite(target,frameNo) {
    
    //// target.innerHTML = `<img src ='/images/${frames}.png' alt = 'bunny animation' >`
    const LIMIT = frameNo
    const frameSize = cells[0].offsetHeight
    const speed = 90
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
    // cpuOneDefaultTarget.setPosition()
    // cpu.target = [cpuOneDefaultTarget.horizontalPosition,cpuOneDefaultTarget.verticalPosition]
    cpu.target = [player.horizontalPosition,player.verticalPosition]
  } 


  function cpuMovementDecision(){

    cpuDetermineTarget(cpuOne)
    cpuMotion = []
    
    // adds option to movement depending on wall position
    if (outerCells[(cpuOne.position + 1)].classList.contains('wall')){
      cpuMotion.push('left')
    }
    if (outerCells[(cpuOne.position - 1)].classList.contains('wall')){
      cpuMotion.push('right')
    }
    if (outerCells[(cpuOne.position - width)].classList.contains('wall')){
      cpuMotion.push('down')
    }
    if (outerCells[(cpuOne.position + width)].classList.contains('wall')){
      cpuMotion.push('up')
    }

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
    //// const horizontalPosition = cpuOne.horizontalPosition
    //// const verticalPosition = cpuOne.verticalPosition
    const motionIndex =  Math.floor(Math.random() * cpuMotion.length)

    cpuMovementDecision()
    // cpuMotion = ['right']
  
    switch (cpuMotion[motionIndex]) {
      case 'right':
        if (cpuOne.horizontalPosition < width - 1 && !outerCells[(cpuOne.position + 1)].classList.contains('wall')) cpuOne.position++ 
        break
      case 'left': 
        if (cpuOne.horizontalPosition > 0 && !outerCells[(cpuOne.position - 1)].classList.contains('wall')) cpuOne.position--
        break
      case 'up': 
        if (cpuOne.verticalPosition > 0 && !outerCells[(cpuOne.position - width)].classList.contains('wall')) cpuOne.position -= width
        break
      case 'down':
        if (cpuOne.verticalPosition < width - 1 && !outerCells[(cpuOne.position + width)].classList.contains('wall')) cpuOne.position += width
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
    //// cells[position].classList.add(player.class)
    innerCells[position].innerHTML = player.sprite
    player.setPosition()
    animateSprite(innerCells[position],3)
  }

  //// Remove Player from the grid
  function removePlayer(position) {
    //// cells[position].classList.remove(player.class)
    innerCells[position].innerHTML = ''
    clearInterval(setAnimation)
  }

  // function removePlayerPrevPosition(prevPosition) {
  //   innerCells[position].innerHTML = ''
  //   clearInterval(setAnimation)
  // }
  
  
  // * Move Player
  function handleMovementWithKey(e) {

    turnPlayer(e.key)
    removePlayer(player.position)
    addPlayer(player.position)

    setTimeout(function(){
      removePlayer(player.position)
      completePlayerMotion(e.key)
      //! consider refactor later
      // const horizontalPosition = player.horizontalPosition
      // const verticalPosition = player.verticalPosition

      switch (e.key) {
        case 'ArrowRight': 
          if (player.horizontalPosition < width - 1 && !outerCells[(player.position + 1)].classList.contains('wall')) player.position++
          break
        case 'ArrowLeft': 
          if (player.horizontalPosition > 0 && !outerCells[(player.position - 1)].classList.contains('wall')) player.position--
          break
        case 'ArrowUp': 
          if (player.verticalPosition > 0 && !outerCells[(player.position - width)].classList.contains('wall')) player.position -= width
          break
        case 'ArrowDown': 
          if (player.verticalPosition < width - 1 && !outerCells[(player.position + width)].classList.contains('wall')) player.position += width
          break
        default:
          console.log('invalid command')
      }

      addPlayer(player.position)
      printPosition()
    
    },360)  

  }
  
  function turnPlayer(keyPressed){
    switch (keyPressed) {
      case 'ArrowRight': 
        player.sprite = '<img src = "assets/moreright.png">'
        break
      case 'ArrowLeft': 
        player.sprite = '<img src = "assets/moreleft.png">'
        break
      case 'ArrowUp': 
        player.sprite = '<img src = "assets/moreup.png">'
        break
      case 'ArrowDown': 
        player.sprite = '<img src = "assets/moredown.png">'
        break
      default:
        console.log('invalid command')
    }
  }

  function completePlayerMotion(keyPressed){
    switch (keyPressed) {
      case 'ArrowRight': 
        player.sprite = '<img src = "assets/rightcomp.png">'
        break
      case 'ArrowLeft': 
        player.sprite = '<img src = "assets/leftcomp.png">'
        break
      case 'ArrowUp': 
        player.sprite = '<img src = "assets/upcomp.png">'
        break
      case 'ArrowDown': 
        player.sprite = '<img src = "assets/downcomp.png">'
        break
      default:
        console.log('invalid command')
    }
  }



  function makeWall(e) {
    e.target.classList.add('wall')
    cellsWithWalls.push(cells.indexOf(e.target))
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }
  
  // function removeWall(e){
  //   e.target.classList.remove('wall')
  //   cellsWithWalls.filter(cell => {
  //     // console.log(e.target)
  //     console.log(cell)
  //     return cell !== cells.indexOf(e.target)
  //   })
    
  //   wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  // }

  

  //* events
  document.addEventListener('keyup', handleMovementWithKey)

  cells.forEach(cell => {
    cell.addEventListener('click', makeWall)
  })

  // cells.forEach(cell => {
  //   cell.addEventListener('dblclick', removeWall)
  // })







}

window.addEventListener('DOMContentLoaded', init)