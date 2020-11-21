

//! if you can't click, you need to disable cover

//TODO add alt to images

function init() {
  // * Variables
  const grid = document.querySelector('.grid')
  const cover = document.querySelector('.cover')
  const width = 20
  const cellCount = width * width
  const outerCells = []
  const cells = []
  const innerCells = []

  //! maybe add this inside an object
  let setAnimation
  
  const player = {
    class: 'player_down',
    staticGif: 'down.gif',
    motionGif: 'down.gif',
    sprite: '<img src = "assets/test_left.png">',
    position: 209,
    display: document.createElement('div'),
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


  //* pageitems
  const scoreDisplay = document.querySelector('.score')
  const scoreDisplayWrapper = document.querySelector('.score_wrapper')
  let score = 0

  
  //TODO
  const playerPositionDisplay = document.querySelector('#player_position')
  const cpuOnePositionDisplay = document.querySelector('#cpu_one_position')
  const wallPositionDisplay = document.querySelector('#wall_position')
  const itemPositionDisplay = document.querySelector('#item_position')
 
  

  //* SETTINGS
  const scoreFromNormalItem = 100
  
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
  displayTargetImage(player)
  
  // * Make walls
  // walls defined by adding class to cells, according to what is mentioned in the array
  const cellsWithWalls = [0,1,2,3,4,5,6,7,8,9,29,49,10,11,12,13,14,15,16,17,17,18,19,20,40,60,42,43,45,46,47,51,52,53,55,56,57,39,59,79,99,119,80,100,82,83,85,105,125,88,89,90,109,129,87,127,147,167,187,166,165,169,189,91,93,94,95,120,121,122,123,143,142,141,140,180,181,182,183,203,202,201,200,205,225,245,227,228,229,243,242,241,240,260,280,300,320,340,282,283,284,304,230,231,249,269,289,131,151,171,191,172,173,133,134,135,97,117,137,176,175,177,178,179,195,215,196,197,198,199,237,238,278,279,299,319,339,359,379,399,398,397,396,395,393,360,380,381,382,383,384,386,385,387,388,389,390,391,392,394,328,329,330,331,332,327,326,349,371,334,335,336,355,213,233,253,271,291,292,293,295,275,255,276,322,342,343,346,345,348,347,354,317,337,357,356,267,287,286]
  // const cellsWithWalls = [1,2,4,3,5,6,7,8,10,11,12,13,14,0,15,16,17,18,19,20,40,60,80,100,120,140,160,200,220,240,260,280,300,320,340,360,380,381,382,383,384,385,386,387,388,389,391,392,393,394,395,396,397,398,399,379,35,59,79,39,99,119,139,159,179,219,239,259,279,299,319,339,359,343,323,303,127,147,167,168,169,170,171,172,152,132,45,65,64,63,83,124,123,143,163,74,94,95,96,116,237,236,235,234,254,274,273,271,251,231,230,313,314,315,316,296,336,324,325,305,285,265,245,244,267,287,288,289,329,328,327,347,202,222,261,262,321,185,205,206,207,194,174,154,155,134,195,196,192,189,67,47,48,50,70,90,89,71,72]
  

  const cellsWithItems = [24,25,23,22,22,21,41,61,62,64,44,63,26,27,28,48,68,67,66,65,69,70,50,30,31,32,33,34,54,35,37,38,36,58,78,77,76,75,74,73,72,71,92,112,111,110,114,115,114,96,116,113,98,118,138,158,157,156,136,155,154,153,152,132,130,150,149,148,128,108,107,106,86,126,146,145,144,124,104,84,103,102,101,81,378,373,373,314,316,315,296,297,298,318,338,358,377,376,375,375,374,353,352,373,351,372,350,370,369,368,366,367,365,364,363,362,361,341,321,301,281,261,262,264,263,303,302,323,324,344,325,305,285,265]

  function populateCells(array,classToAdd){
    for (let i = 0; i < array.length ; i++) {
      outerCells[array[i]].classList.add(classToAdd)
    }
  }
  populateCells(cellsWithWalls,'wall')
  populateCells(cellsWithItems,'item')
  

  function printPosition(){
    playerPositionDisplay.innerHTML = `${player.position} Horizontal:${player.horizontalPosition} Vertical:${player.verticalPosition}`
    cpuOnePositionDisplay.innerHTML = `${cpuOne.position} Horizontal:${cpuOne.verticalPosition} Vertical:${cpuOne.verticalPosition} cpu motion: ${cpuMotion} cpu facing ${cpuOne.facingDirection}`
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }
  
  //* Animation

  //TODO mejirushi

  function displayTargetImage(target){
    target.display.classList.add('effect_animation_fast')
    target.display.innerHTML = `<img src = "assets/${target.staticGif}" ></img>`

    target.display.style.top = `${cells[target.position].getBoundingClientRect().y}px`
    target.display.style.left = `${cells[target.position].getBoundingClientRect().x}px`
    target.display.style.height = `${cells[target.position].getBoundingClientRect().height}px`
    target.display.style.width = `${cells[target.position].getBoundingClientRect().width}px`

    cover.appendChild(target.display)
      
  }

  function changeTargetImageAndMoveToNewPosition(target){
    target.display.innerHTML = `<img src = "assets/${target.motionGif}" ></img>`
    target.display.style.top = `${cells[target.position].getBoundingClientRect().y}px`
    target.display.style.left = `${cells[target.position].getBoundingClientRect().x}px`
    
    setTimeout(function(){
      target.display.innerHTML = `<img src = "assets/${target.staticGif}" ></img>`
    },500)

  }
  

  

  
  //TODO redundant
  // function animateSprite(target,frameNo) {
  
  //   const LIMIT = frameNo
  //   const frameSize = cells[0].offsetHeight
  //   const speed = 90
  //   let i = 0
  //   let move

  //   setAnimation = setInterval(function () {

  //     move = '0px ' + -(i * frameSize) + 'px'
  //     //! using target.style overwrites whatever set by css, hence it needs to be redeclared
  //     target.style.margin = move
  //     target.style.height = '100%'
  //     target.style.width = '100%'
  //     if (i === LIMIT) {
  //       i = frameNo
  //     } else {
  //       i++
  //     }
  //   }, speed)


  // }


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
  //// const motionDownRight = ['down','right']
  //// const motionUpRight = ['up','right']
  //// const motionDownLeft = ['down','left']
  //// const motionUpLeft = ['up','left']
  let cpuMotion = defaultMotion

  function cpuDetermineTarget(cpu){
    cpuOneDefaultTarget.setPosition()
    cpu.target = [cpuOneDefaultTarget.horizontalPosition,cpuOneDefaultTarget.verticalPosition]
    // cpu.target = [player.horizontalPosition,player.verticalPosition]
  } 
  
  function isWallOnRightOf(target){
    return outerCells[(target.position + 1)].classList.contains('wall')
  }

  function isWallOnLeftOf(target){
    return outerCells[(target.position - 1)].classList.contains('wall')
  }
  
  function isWallAbove(target){
    return outerCells[(target.position - width)].classList.contains('wall')
  }

  function isWallBelow(target){
    return outerCells[(target.position + width)].classList.contains('wall')
  }




  function cpuMovementDecision(){

    cpuDetermineTarget(cpuOne)

    //!new logic to be put in here to make it chase or run away from player
    
    //* when facing right and nothing in the way
    if (cpuOne.facingDirection === 'right' && !isWallOnRightOf(cpuOne)){
      cpuMotion = ['right','right']
    }
    
    //* when facing left and nothing in the way
    if (cpuOne.facingDirection === 'left' && !isWallOnLeftOf(cpuOne)){
      cpuMotion = ['left','left']
    }

    //* when facing down and nothing in the way
    if (cpuOne.facingDirection === 'down' && !isWallBelow(cpuOne)){
      cpuMotion = ['down','down']
    }

    //* when facing up and nothing in the way
    if (cpuOne.facingDirection === 'up' && !isWallAbove(cpuOne)){
      cpuMotion = ['up','up']
    }
    

    //* when facing right or left and wall is on facing direction
    if ((cpuOne.facingDirection === 'right' && isWallOnRightOf(cpuOne)) || (cpuOne.facingDirection === 'left' && isWallOnLeftOf(cpuOne))){
      cpuMotion = ['up','down']
    }

    //* when facing down or up and wall is on facing direction
    if ((cpuOne.facingDirection === 'down' && isWallBelow(cpuOne)) || (cpuOne.facingDirection === 'up' && isWallAbove(cpuOne))){
      cpuMotion = ['left','right']
    }

    
    //* when wall at top and right
    if (isWallAbove(cpuOne) && isWallOnRightOf(cpuOne)){
      cpuMotion = ['down','left']
    }
    
    //* when wall at top and left
    if (isWallAbove(cpuOne) && isWallOnLeftOf(cpuOne)){
      cpuMotion = ['right','down']
    }

    //* when wall at bottom and right
    if (isWallBelow(cpuOne) && isWallOnRightOf(cpuOne)){
      cpuMotion = ['up','left']
    }
    
    //* when wall at bottom and left
    if (isWallBelow(cpuOne) && isWallOnLeftOf(cpuOne)){
      cpuMotion = ['up','right']
    }

    //*movement based on target position
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
  
    cpuMovementDecision()
    // cpuMotion = ['right']
    const motionIndex =  Math.floor(Math.random() * cpuMotion.length)

    cpuOne.facingDirection = cpuMotion[motionIndex]
  
    switch (cpuMotion[motionIndex]) {
      case 'right':
        if (cpuOne.horizontalPosition < width - 1 && !isWallOnRightOf(cpuOne)) cpuOne.position++ 
        break
      case 'left': 
        if (cpuOne.horizontalPosition > 0 && !isWallOnLeftOf(cpuOne)) cpuOne.position--
        break
      case 'up': 
        if (cpuOne.verticalPosition > 0 && !isWallAbove(cpuOne)) cpuOne.position -= width
        break
      case 'down':
        if (cpuOne.verticalPosition < width - 1 && !isWallBelow(cpuOne)) cpuOne.position += width
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


  function addPlayer(position) {
    cells[position].classList.add(player.class)
    //// innerCells[position].innerHTML = player.sprite
    player.setPosition()
    //// animateSprite(innerCells[position],3)
  }

  function removePlayer(position) {
    cells[position].classList.remove(player.class)
    //// innerCells[position].innerHTML = ''
    //// clearInterval(setAnimation)
  }

  //// function removePlayerPrevPosition(prevPosition) {
  ////   innerCells[position].innerHTML = ''
  ////   clearInterval(setAnimation)
  //// }



  
  
  function takeItemAndEarnScore(item,scoreId){
    if (outerCells[player.position].classList.contains(item)){
      outerCells[player.position].classList.remove(item)

      //animate items when taken
      const itemPositionY = outerCells[player.position].getBoundingClientRect().y
      const itemPositionX = outerCells[player.position].getBoundingClientRect().x
      const itemHeight = outerCells[player.position].getBoundingClientRect().height
      const itemWidth = outerCells[player.position].getBoundingClientRect().width
      
      const itemTaken = document.createElement('div')
      itemTaken.classList.add('effect_animation')
      itemTaken.innerHTML = `<img src = "assets/${item}.gif" ></img>`
      itemTaken.style.top = `${itemPositionY}px`
      itemTaken.style.left = `${itemPositionX}px`
      itemTaken.style.height = `${itemHeight}px`
      itemTaken.style.width = `${itemWidth}px`
      cover.appendChild(itemTaken)
      
      setTimeout(function(){
        itemTaken.style.top = `${scoreDisplay.getBoundingClientRect().y}px`
        itemTaken.style.left = `${scoreDisplay.getBoundingClientRect().x}px`
        // itemTaken.style.top = '0'
        // itemTaken.style.left = '100%'
      },100)

      setTimeout(function(){
        cover.removeChild(itemTaken)
        score += scoreId
        scoreDisplay.innerHTML = score
        scoreDisplayWrapper.classList.add('animate')
      },1000)

      // animate score board
      setTimeout(function(){
        scoreDisplayWrapper.classList.remove('animate')
      },1200)

    }
  }



  function inbetweenAnimation(){
  
    const inbetween = document.createElement('div')
    inbetween.classList.add('effect_animation_fast')
    inbetween.innerHTML = `<img src = "assets/${player.motionGif}" ></img>`
    inbetween.style.top = `${cells[player.position].getBoundingClientRect().y}px`
    inbetween.style.left = `${cells[player.position].getBoundingClientRect().x}px`
    inbetween.style.height = `${cells[player.position].getBoundingClientRect().height}px`
    inbetween.style.width = `${cells[player.position].getBoundingClientRect().width}px`
    cover.appendChild(inbetween)
      
    setTimeout(function(){
      inbetween.style.top = `${cells[player.position].getBoundingClientRect().y}px`
      inbetween.style.left = `${cells[player.position].getBoundingClientRect().x}px`
    },1)
    setTimeout(function(){
      cover.removeChild(inbetween)
    },110)

  }


  //TODO mejirushi

  // * Move Player
  function handleMovementWithKey(e) {
    removePlayer(player.position)
    turnPlayer(e.key)
    // inbetweenAnimation()
   

    switch (e.key) {
      case 'ArrowRight': 
        if (player.horizontalPosition < width - 1 && !isWallOnRightOf(player)) player.position++
        break
      case 'ArrowLeft': 
        if (player.horizontalPosition > 0 && !isWallOnLeftOf(player)) player.position--
        break
      case 'ArrowUp': 
        if (player.verticalPosition > 0 && !isWallAbove(player)) player.position -= width
        break
      case 'ArrowDown': 
        if (player.verticalPosition < width - 1 && !isWallBelow(player)) player.position += width
        break
      default:
        console.log('invalid command')
    }
    
    takeItemAndEarnScore('item',scoreFromNormalItem) 
    changeTargetImageAndMoveToNewPosition(player)

    setTimeout(
      function(){
        addPlayer(player.position)
        takeItemAndEarnScore('item',scoreFromNormalItem)
        printPosition()
      },110)
    

  }

  function turnPlayer(keyPressed){
    switch (keyPressed) {
      case 'ArrowRight': 
        player.class = 'player_right'
        player.staticGif = 'right.gif'
        player.motionGif = 'right_roll.gif'
        break
      case 'ArrowLeft': 
        player.class = 'player_left'
        player.staticGif = 'left.gif'
        player.motionGif = 'shift_left.gif'
        break
      case 'ArrowUp': 
        player.class = 'player_up'
        player.staticGif = 'up.gif'
        player.motionGif = 'up.gif'
        break
      case 'ArrowDown': 
        player.class = 'player_down'
        player.staticGif = 'down.gif'
        player.motionGif = 'down.gif'
        break
      default:
        console.log('invalid command')
    }
  }

  
  // function turnPlayer(keyPressed){
  //   switch (keyPressed) {
  //     case 'ArrowRight': 
  //       player.sprite = '<img src = "assets/moreright.png">'
  //       break
  //     case 'ArrowLeft': 
  //       player.sprite = '<img src = "assets/moreleft.png">'
  //       break
  //     case 'ArrowUp': 
  //       player.sprite = '<img src = "assets/moreup.png">'
  //       break
  //     case 'ArrowDown': 
  //       player.sprite = '<img src = "assets/moredown.png">'
  //       break
  //     default:
  //       console.log('invalid command')
  //   }
  // }

  // function completePlayerMotion(keyPressed){
  //   switch (keyPressed) {
  //     case 'ArrowRight': 
  //       player.sprite = '<img src = "assets/rightcomp.png">'
  //       break
  //     case 'ArrowLeft': 
  //       player.sprite = '<img src = "assets/leftcomp.png">'
  //       break
  //     case 'ArrowUp': 
  //       player.sprite = '<img src = "assets/upcomp.png">'
  //       break
  //     case 'ArrowDown': 
  //       player.sprite = '<img src = "assets/downcomp.png">'
  //       break
  //     default:
  //       console.log('invalid command')
  //   }
  // }


  //! used to make walls to develop levels
  function makeWall(e) {
    e.target.classList.add('wall')
    cellsWithWalls.push(cells.indexOf(e.target))
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }

  function makeItem(e) {
    e.target.classList.add('item')
    cellsWithItems.push(cells.indexOf(e.target))
    itemPositionDisplay.innerHTML = `${cellsWithItems}`
  }
  
  //! used to make walls to develop levels
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
    // cell.addEventListener('click', makeWall)
    cell.addEventListener('click', makeItem)
  })

  // cells.forEach(cell => {
  //   cell.addEventListener('dblclick', removeWall)
  // })







}

window.addEventListener('DOMContentLoaded', init)

